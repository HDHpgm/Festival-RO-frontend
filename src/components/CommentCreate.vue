
<template> <!-- 댓글을 작성하는 폼을 그려주고 댓글을 달 수 있는 페이지. 최상위인 Comment vue에 포함되있음 -->
  <div>
    <!-- -->
    <b-input-group :prepend="name" class="mt-3">
      <b-form-textarea
        id="textarea"
        v-model="context"
        :placeholder="'댓글을 달아주세요!'"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-input-group-append>
        <b-button variant="info" @click="createComment">작성하기</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>
<script>
/* eslint-disable handle-callback-err */
export default {
  created () {

  },
  beforeUpdate () {
    if (sessionStorage.getItem('token') != null) { // 토큰이 널이 아니라는것은 로그인했다는 소리
    // 로그인한 유저의 정보를 가져와 저장한다.
      this.$http.get('http://localhost:3000/api/auth/user',
        {headers: {token: sessionStorage.getItem('token')}})
        .then((res) => {
          this.name = res.data.user.name
          this.userId = res.data.user.user_id
        })
    }
    let fm = new FormData()
    fm.append('content_id', this.contentId) // 글의 번호를 보내주기 위해 추가
    console.log(this.contentId)
    // 글의 번호를 담아서 post로 backend에 요청해서 글 번호에 맞는 댓글들만 find 하게끔
    this.$http.post('http://localhost:3000/api/board/comment', fm)
      .then((res) => {
      // 응답을 받아서 검색해온 댓글들을 comments에 저장
        console.log(res.data.comments)
        this.comments = res.data.comments
      })
      .catch((err) => {

      })
  },
  props: {
    contentId: Number
  },
  data () {
    return {
      name: '',
      context: '',
      comment_id: 1,
      userId: '',
      comments: []
    }
  },
  methods: {
    createComment () {
      console.log(this.comments)
      this.comment_id = this.comments[0] === undefined ? this.comment_id : this.comments[this.comments.length - 1].comment_id + 1
      console.log('새로운 아이디', this.comment_id)
      let fm = new FormData()
      fm.append('comment_id', this.comment_id) // 새로운 댓글번호 추가
      fm.append('content_id', this.contentId) // 글의 번호를 보내주기 위해 추가
      fm.append('user_id', this.userId) // 댓글을 쓴 유저 id 추가
      fm.append('user_name', this.name) // 댓글을 쓴 유저 id 추가
      fm.append('context', this.context) // 댓글 내용 추가
      // 글의 번호를 담아서 post로 backend에 요청해서 글 번호에 맞는 댓글들만 find 하게끔
      this.$http.post('http://localhost:3000/api/board/commentpush', fm)
        .then((res) => {
          alert(res.data.message)
          this.context = ''
        })
        .catch((err) => {

        })
    }
  }
}
</script>

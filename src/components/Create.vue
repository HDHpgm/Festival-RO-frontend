<template> <!-- 글쓰기를 할 수 있는 페이지 / 만약 상세보기 페이지에서 수정버튼을 눌렀다면 파라미터 받음 -->
   <div class="bg">
       <b-input v-model="title" placeholder="제목을 입력하세요"></b-input>
       <b-form-textarea
            v-model="context"
            placeholder="내용을 입력하세요"
            rows="3"
            max-rows="6"
            ></b-form-textarea>
            <!-- 파라미터 받은것을 비교해서 업데이트인지 그냥 업로드인지 구별 -->
        <b-button @click="updateMode ? update() : upload()">저장</b-button>
        <b-button @click="cancel">취소</b-button>
   </div>
</template>

<script>
/* eslint-disable handle-callback-err */
/* eslint-disable camelcase */
export default({
  data () { // 등록할 게시글의 정보들이 들어갈 공간
    return {
      title: '',
      context: '',
      userId: '',
      userName: '',
      updateAt: null,
      updateObject: null,
      // eslint-disable-next-line no-unneeded-ternary
      updateMode: this.$route.params.contentId > 0 ? true : false,
      // eslint 주석 달아줘야 오류 안생김 -> vue 프로젝트 생성시에 eslint를 설치해서 나는 오류
      data: [],
      content_id: 1
    }
  },
  created () { // 글쓰기를 하면 새로운 글 번호를 발급해야하기 때문에 계산을 위해 전체글들을 불러옴
    this.$http.get('http://localhost:3000/api/board')
      .then((res) => {
        this.data = res.data.contents.sort((a, b) => { // 글 목록 역순으로 최신것부터
          return b.content_id - a.content_id
        })
      })

    // 업데이트에 해당한다면 보고있던 글의 정보를 가져와야해서 미리 데이터를 불러옴
    if (this.$route.params.contentId > 0) { // 파라미터로 넘어온 값에 글번호가 포함되있으면 업데이트로 판단
      const contentId = Number(this.$route.params.contentId)
      let fm = new FormData()
      fm.append('content_id', contentId)
      // 글 번호를 보내 해당하는 정보를 가져와 글쓰기 부분에 내용들을 추가해 그대로 수정할수 있게 한다.
      this.$http.post('http://localhost:3000/api/board/update', fm)
        .then((res) => {
          this.updateObject = res.data.content
          this.title = this.updateObject.title
          this.context = this.updateObject.context
        })
        .catch((err) => {

        })
    }
    if (sessionStorage.getItem('token') != null) { // 토큰이 널이 아니라는것은 로그인했다는 소리
    // 현재 로그인한 유저의 정보를 가져와 저장한다.
      this.$http.get('http://localhost:3000/api/auth/user',
        {headers: {token: sessionStorage.getItem('token')}})
        .then((res) => {
          this.userName = res.data.user.name
          this.userId = res.data.user.user_id
        })
    }
  },
  methods: {
    cancel () { // 글쓰기에서 취소 누르면 뒤로 돌아감
      this.$router.push('/board')
    },

    upload () { // 저장버튼 눌렀을 때 실행되는 함수
      const content_id = this.data[0] === undefined ? this.content_id : this.data[0].content_id + 1 // 글 번호 최신으로 계산
      let fm = new FormData()
      fm.append('content_id', content_id)
      fm.append('user_id', this.userId)
      fm.append('title', this.title)
      fm.append('user_name', this.userName)
      fm.append('context', this.context)
      // 글을 쓴 유저와 글에대한 정보를 담아서 post로 백엔드에 요청. 백엔드에서는 save
      this.$http.post('http://localhost:3000/api/board/create', fm)
        .then((res) => {
          if (res.data.result === 1) {
            alert(res.data.message)
            this.$router.push('/board')
          }
        })
        .catch(err => {

        })
    },
    update () { // 만약 글 업데이트일때 저장버튼누르면 실행. 해당 글의 번호와 정보들을 보내 백엔드에서 저장하게끔 한다.
      const contentId = Number(this.$route.params.contentId)
      let fm = new FormData()
      fm.append('updateObject_title', this.title)
      fm.append('updateObject_context', this.context)
      fm.append('content_id', contentId)
      this.$http.post('http://localhost:3000/api/board/updateOne', fm)
        .then((res) => {
          alert(res.data.message)
          this.$router.push('/board')
          this.$router.go()
        })
        .catch((err) => {

        })

      this.$router.push('/board')
    },
    beforeCreate () {
      // vue에서는 body와 html 태그에 접근이 어려워 JavaScript를 이용해 접근했습니다. 페이지가 완전히 생성되기 전에 배경색에 접근해 색을 지정해줍니다.
      // 각 페이지 마다 설정해 페이지마다 다른 색상을 가져올 수 있도록 했습니다.
      document.querySelector('body').style.backgroundColor = '#1f1f1f'
    }
  }
})
</script>

<style>
.bg {
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: white;
    width: 95%;
    text-align: center;
}
</style>

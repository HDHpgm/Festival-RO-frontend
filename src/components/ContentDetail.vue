
<template> <!-- 게시글의 상세내용을 보여주는 페이지 -->
  <div class="bg">
    <b-card class="card_body">
      <div class="content-detail-content-info">
        <div class="content-detail-content-info-left">
          <div class="content-detail-content-info-left-number">
            {{contentId}} <!-- 글번호 -->
          </div>
          <div class="content-detail-content-info-left-subject">
            {{title}} <!-- 글 제목 -->
          </div>
        </div>

        <div class="content-detail-content-info-right">
          <div class="content-detail-content-info-right-user">
            글쓴이: {{user_name}}  <!-- 글쓴이 -->
          </div>
          <div class="content-detail-content-info-right-created">
            등록일: {{created_at}}  <!-- 등록일 -->
          </div>
        </div>

      </div>

      <div class="content-detail-content">
        {{context}}  <!-- 글 내용 -->
      </div>

      <div class="content-detail-button"> <!-- 수정,삭제 버튼 -->
        <b-button variant="primary" @click="updateData">수정</b-button>
        <b-button variant="success" @click="deleteData">삭제</b-button>
      </div>

      <div class="content-detail-comment">
        <Comment :contentId="this.contentId"></Comment>  <!-- 댓글 부분 -->
      </div>

    </b-card>
  </div>
</template>

<script>
/* eslint-disable handle-callback-err */
import Comment from './Comment.vue'
export default {
  components: {
    Comment
  },
  created () { // 페이지 만들어질때 Board 에서 전달받은 게시글번호를 백엔드로 넘겨 해당 글 정보 요청
    const contentId = Number(this.$route.params.contentId)
    console.log(contentId)
    let fm = new FormData()
    fm.append('content_id', contentId)
    // 해당 글 번호를 넘겨서 응답으로 DB에 있는 정보를 가져와서 데이터에 넣어줌
    this.$http.post('http://localhost:3000/api/board/detail/', fm)
      .then((res) => {
        console.log(res.data)
        this.contentId = res.data.content.content_id
        this.title = res.data.content.title
        this.context = res.data.content.context
        this.user_name = res.data.content.user_name
        this.created_at = res.data.content.created_at
      })
      .catch((err) => {

      })
  },
  data () {
    return {
      contentId: '',
      title: '',
      context: '',
      user_name: '',
      created_at: ''
    }
  },
  methods: {
    deleteData () { // 삭제 버튼을 눌렀을 시에 실행되는 함수.
    // post요청으로 글번호를 넘겨줘 백엔드에서 deleteOne으로 삭제한 후 응답받음
      let fm = new FormData()
      fm.append('content_id', this.contentId)
      this.$http.post('http://localhost:3000/api/board/delete', fm)
        .then((res) => {
          alert(res.data.message)
          this.$router.push('/board')
          this.$router.go()
        })
        .catch((err) => {

        })
    },
    updateData () { // 수정버튼을 눌렀다면 create vue에 해당글 정보를 주어 업데이트 페이지로 전환
      this.$router.push(`/board/create/${this.contentId}`)
    }
  }
}
</script>

<style>
.content-detail-content-info {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
}
.content-detail-content-info-left {
  width: 720px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.content-detail-content-info-right {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.content-detail-content {
  border: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;
  min-height: 720px;
}
.content-detail-button {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
.content-detail-comment {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 2rem;
}
.card_body {
  text-align: center;
}
.bg {
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: white;
    width: 95%;
    text-align: center;
}

</style>

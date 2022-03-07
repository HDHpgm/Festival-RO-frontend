<template> <!-- 댓글 목록을 보여주는 댓글창의 최상위 컴포넌트. 이 컴포넌트 안에 CommentItem vue와 CommentCreate vue가 자식으로 포함됨 -->
    <div>
      <!-- v-for문으로 반복문을 돌려서 댓글을 하나씩 CommentItem.vue 로 넘겨줌 -->
        <div :key="item.comment_id" v-for="item in comments">
          <!-- 댓글 보여주는 창을 자식으로 포함시킴 -->
            <CommentItem :commentObj="item" />
        </div>
        <!-- 댓글 다는 창을 자식으로 포함시킴 -->
        <CommentCreate :contentId="contentId" />
    </div>
</template>

<script>
/* eslint-disable handle-callback-err */
import CommentItem from './CommentItem.vue'
import CommentCreate from './CommentCreate.vue'
export default {
  components: { // 컴포넌트에 자식 vue 컴포넌트 추가
    CommentItem,
    CommentCreate
  },
  props: { // ContentDetail vue에서 해당 글의 번호를 props로 보내줘서 받음
    contentId: Number
  },
  data () {
    return {
      // 불러올 댓글들이 저장될 곳
      comments: []
    }
  },

  beforeUpdate () { // DB에 있는 댓글 목록을 가져오기 위해 axios($http에 axios등록해놓음) 로 post요청
    let fm = new FormData() // 폼데이터에 담아서 보내기 위함
    fm.append('content_id', this.contentId) // 글의 번호를 보내주기 위해 폼데이터에 추가

    // 현재 보고있던 글의 번호를 담아서 post로 backend에 요청해서 글 번호에 맞는 댓글들만 find 하게끔
    this.$http.post('http://localhost:3000/api/board/comment', fm)
      .then((res) => {
      // 응답을 받아서 검색해온 댓글들을 comments에 저장
        this.comments = res.data.comments
      })
      .catch((err) => {

      })
  }
}
</script>

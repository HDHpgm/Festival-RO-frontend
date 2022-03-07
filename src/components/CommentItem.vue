<template> <!-- Commnet.vue에서 받은 댓글 하나하나를 각각 가져와서 뿌림 -->
    <div>
        <div class="comment-item">
            <div class="comment-item-name">
              <!-- 상위인 Comment에서 props로 받은 댓글을 표시 -->
                <div>{{commentObj.user_name}}</div>
            </div>
            <div class="comment-item-context">{{commentObj.context}}</div>
            <div>

            </div>
        </div>
    </div>
</template>
<script>
import CommentCreate from './CommentCreate.vue'
export default {
  components: {
    CommentCreate
  },
  props: { // Comment vue에서 props로 보내준 댓글 오브젝트 받음
    commentObj: Object
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.comment-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
}
.comment-item-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.comment-item-context {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50em;
  border: 0.5px solid black;
}
.comment-item-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.btn {
  margin-bottom: 1em;
}
</style>

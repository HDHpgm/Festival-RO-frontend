<template> <!-- 게시판 목록을 보여주는 vue 컴포넌트 -->

<div class="myungboard" style="margin-top:50px">
  <div>
    <div style="float:right;margin-top:-40px;margin-right:30px;"> <!-- 로그인이 완료되었을때만 보이는 영역입니다. -->
      <b-avatar v-if="isHidden" class="mr-2"></b-avatar>
      <span v-if="isHidden" class="mr-auto">{{name}}님, ID:{{email}}</span> &nbsp;
      <b-button style="float:right" v-if="isHidden" @click="logout" variant="outline-success" size="sm">LogOut</b-button>
    </div>
  </div>
  <div class="bg">
    <!-- 부트스트랩 b-table로 각 게시물을 표시해줌 각 게시물 클릭시엔 rowClick 함수 실행해 ContentDetail vue로 이동(게시글 상세페이지) -->
    <b-table striped hover :per-page="perPage" :current-page="currentPage" :items="data" :fields="fields" @row-clicked="rowClick"></b-table>
    <!-- 부트스트랩 페이지네이션을 적용해서 게시글이 많아지면 뒤로 넘겨 페이지를 선택할수 있게 해놓았다. -->
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
    ></b-pagination>
    <!-- 글쓰기 버튼 클릭 시 write함수 실행해 Create vue로 이동(게시글 작성 페이지) -->
    <b-button variant="primary" @click="write">글 쓰기</b-button>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      // fields 는 불러온 게시글의 속성 이름을 바꿔서 표시해줄수 있는 데이터이다. b-table에 적용
      fields: [
        {
          key: 'content_id',
          label: '글번호'
        },
        {
          key: 'title',
          label: '제목'
        },
        {
          key: 'created_at',
          label: '작성일'
        },
        {
          key: 'user_name',
          label: '글쓴이'
        }
      ],
      data: [], // 데이터베이스에서 불러온 게시글의 모음이 저장될 곳
      isHidden: ''

    }
  },
  methods: {
    // 게시글을 클릭했을때 실행되는 함수. 상세페이지로 이동
    rowClick (item, index, e) {
      this.$router.push(`/board/detail/${item.content_id}`)
    },
    // 글쓰기버튼을 클릭했을때 실행되는 함수. 글쓰기페이지로 이동
    write () {
      this.$router.push('/board/create')
    },

    // 페이지에서 특정 컴포넌트에 사용될 메소드를 모았습니다.
    logout () { // 로그아웃 시에 호출
      sessionStorage.clear()
      this.isHidden = 'false'
      this.$router.push('/')
      this.$router.go()
    }
  },
  computed: {
    // computed 속성으로 현재 데이터베이스에서 불러온 게시글의 길이를
    // 실시간으로 계산해 리턴한다음 b-pagination에 적용
    rows () {
      return this.data.length
    }
  },
  mounted () {
    // 현재 Board.vue(게시판 목록) 페이지가 마운트될때 axios get 요청으로 백엔드인 node에 전달
    // DB에 저장된 게시글들을 모두 불러온다.
    this.$http.get('http://localhost:3000/api/board')
      .then((res) => {
        this.data = res.data.contents.sort((a, b) => { // 글 목록을 최신순으로 봐야해서 역순으로 정렬해서 data에 넣어줌
          return b.content_id - a.content_id
        })
      })

    if (sessionStorage.getItem('token') != null) { // 토큰 존재 시 로그인했다는 뜻
      this.$http.get('http://localhost:3000/api/auth/user',
        {headers: {token: sessionStorage.getItem('token')}})
        .then((res) => {
          this.name = res.data.user.name
          this.email = res.data.user.email
          this.isHidden = res.data.user.isHidden
        })
    }
  },
  beforeCreate () {
  // vue에서는 body와 html 태그에 접근이 어려워 JavaScript를 이용해 접근. 페이지가 완전히 생성되기 전에 배경색에 접근해 색을 지정.
  // 각 페이지 마다 설정해 페이지마다 다른 색상을 가져올 수 있도록
    document.querySelector('body').style.backgroundColor = '#1f1f1f'
  }
}
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

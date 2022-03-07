<template> <!-- 계속 상단에 보여질 nav bar 입니다. -->

  <div class="myung"> <!-- 전체를 한번에 관리하기 위한 div 입니다. -->

          <b-navbar toggleable="lg" type="dark" variant="dark">

                <b-navbar-brand> <!-- SideBar 를 열기위한 list 모양의 icon 입니다. -->
                  <b-button variant="dark" size="lg" v-b-toggle.sidebar-menu>
                    <b-icon icon="list"></b-icon>
                  </b-button>
                </b-navbar-brand>

                <b-navbar-brand to="/" @click="refresh('/')"> <!-- start 페이지로 이동하게끔 설정한 집모양 아이콘 버튼입니다. -->
                  <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true" style="margin-right: 5px"></b-icon>
                  <font face="Viner Hand ITC">Festival-RO</font>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav> <!-- 선택 영역 입니다. -->
                      <b-nav-item @click="refresh('/info')">Page</b-nav-item>
                      <b-nav-item @click="refresh('/introduce')">On-line</b-nav-item>
                      <b-nav-item @click="refresh('/festival')">Off-line</b-nav-item>
                    </b-navbar-nav>

                    <!-- 가장 오른쪽에 표현될 검색, 로그인 등의 버튼 입니다. -->
                    <b-navbar-nav class="ml-auto">
                          <b-navbar-nav> <!-- 로그인 버튼 입니다. -->
                            <b-button @click="gologin" style="margin-right: 10px" variant="outline-primary" size="sm">Sign In | Sign Up</b-button>
                          </b-navbar-nav>
                    </b-navbar-nav>
                </b-collapse>
          </b-navbar>
  </div>

</template>

<script>
/* eslint-disable eqeqeq */
export default {
  name: 'NavBarComponent',
  data () { // 검색창에 입력하거나 입력되는 데이터를 담는 text 입니다.
    return {
      text: ''
    }
  },
  created () {
  },
  methods: {
    refresh (root) { // 각각의 버튼 클릭시 refresh 함수가 실행되며 router와 변수로 받은 root를 이용해 페이지를 이동합니다.
      this.$router.push(root)
      this.$router.go()
    },

    gologin () {
      if (sessionStorage.getItem('token') === null) {
        this.$router.push('/login')
        this.$router.go()
      } else {
        alert('이미 로그인 되어 있습니다.')
        this.$router.go()
      }
    }
  }
}

</script>

<style>
/* css 입니다. */

 .navbar{
    padding-left: 16px;
    padding-right: 16px;
 }
 .ml-auto{
       margin-left: auto!important;
 }
 .form-inline{
   display: inline-flex
 }
 .form-inline > .mr-sm-2{
   float: left;
   margin-right: 10px;
 }
 .my-2 .my-sm-0{
   float: left;
 }
</style>

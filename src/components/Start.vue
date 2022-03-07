<template>
    <div class="startmyung"> <!-- body와 html 태그를 제외하고 전체 영역 color 조정을 위해 생성한 div 영역 입니다.  주로 color와 font를 다룹니다.-->

      <div class="cont s--inactive"> <!-- 시작 인덱스화면에서 사진이 나오는데 그 사진을 담는 div 입니다. -->

            <div style="float:right;margin-top:-40px"> <!-- 로그인이 완료되었을때만 보이는 영역입니다. -->
                <b-avatar v-if="isHidden" class="mr-2"></b-avatar>
                <span v-if="isHidden" class="mr-auto">{{name}}님, ID:{{email}}</span> &nbsp;
                <b-button style="float:right" v-if="isHidden" @click="logout" variant="outline-success" size="sm">LogOut</b-button>
            </div>

        <div class="cont__inner"> <!--기본적으로 보이는 영역입니다. 사진 5개를 각각의 div로 나누어 다루고있습니다.-->

            <!-- 첫번쨰 사진 영역입니다. 작은 사진으로 보이다가 누르면 커지기 때문에 각각의 설정을 div로 나누어 다뤘습니다. -->
                <div class="el">
                  <div class="el__overflow">
                    <div class="el__inner"> <!-- 사진이 펼쳐지기 전의 div 입니다. -->
                      <div class="el__bg"></div>
                      <div class="el__preview-cont">
                        <h1 class="el__heading">Travel</h1>
                      </div>
                      <div class="el__content"> <!-- 사진이 펼쳐진 후 div 입니다. -->
                        <div class="el__text">Travel</div>
                        <div class="el__close-btn"></div>
                      </div>
                    </div>
                  </div>
                  <div class="el__index"> <!-- 사진 순서 입니다. -->
                    <div class="el__index-back">1</div>
                    <div class="el__index-front">
                      <div class="el__index-overlay" data-index="1">1</div>
                    </div>
                  </div>
                </div>
            <!-- 첫번째 사진영역 끝 입니다. -->

            <!-- 두번째 사진영역 입니다. -->
              <div class="el">
                <div class="el__overflow">
                  <div class="el__inner"> <!-- 사진이 펼쳐지기 전의 div 입니다. -->
                    <div class="el__bg"></div>
                    <div class="el__preview-cont">
                      <h2 class="el__heading">Festival</h2>
                    </div>
                    <div class="el__content"> <!-- 사진이 펼쳐진 후 div 입니다. -->
                      <div class="el__text">Festival</div>
                      <div class="el__close-btn"></div>
                    </div>
                  </div>
                </div>
                <div class="el__index"> <!-- 사진 순서 입니다. -->
                  <div class="el__index-back">2</div>
                  <div class="el__index-front">
                    <div class="el__index-overlay" data-index="2">2</div>
                  </div>
                </div>
              </div>
            <!-- 두번째 사진영역 끝 입니다. -->

            <!-- 세번째 사진영역 입니다. -->
              <div class="el">
                <div class="el__overflow">
                  <div class="el__inner"> <!-- 사진이 펼쳐지기 전의 div 입니다. -->
                    <div class="el__bg"></div>
                    <div class="el__preview-cont">
                      <h2 class="el__heading">Night View</h2>
                    </div>
                    <div class="el__content"> <!-- 사진이 펼쳐진 후 div 입니다. -->
                      <div class="el__text">Night View</div>
                      <div class="el__close-btn"></div>
                    </div>
                  </div>
                </div>
                <div class="el__index"> <!-- 사진 순서 입니다. -->
                  <div class="el__index-back">3</div>
                  <div class="el__index-front">
                    <div class="el__index-overlay" data-index="3">3</div>
                  </div>
                </div>
              </div>
            <!-- 세번째 사진영역 끝 입니다. -->

            <!-- 네번째 사진영역 입니다. -->
              <div class="el">
                <div class="el__overflow">
                  <div class="el__inner"> <!-- 사진이 펼쳐지기 전의 div 입니다. -->
                    <div class="el__bg"></div>
                    <div class="el__preview-cont">
                      <h2 class="el__heading">Music</h2>
                    </div>
                    <div class="el__content"> <!-- 사진이 펼쳐진 후 div 입니다. -->
                      <div class="el__text">Music</div>
                      <div class="el__close-btn"></div>
                    </div>
                  </div>
                </div>
                <div class="el__index"> <!-- 사진 순서 입니다. -->
                  <div class="el__index-back">4</div>
                  <div class="el__index-front">
                    <div class="el__index-overlay" data-index="4">4</div>
                  </div>
                </div>
              </div>
            <!-- 네번째 사진영역 끝 입니다. -->

            <!-- 다섯번째 사진영역 입니다. -->
              <div class="el">
                <div class="el__overflow">
                  <div class="el__inner"> <!-- 사진이 펼쳐지기 전의 div 입니다. -->
                    <div class="el__bg"></div>
                    <div class="el__preview-cont">
                      <h2 class="el__heading">Concert</h2>
                    </div>
                    <div class="el__content"> <!-- 사진이 펼쳐진 후 div 입니다. -->
                      <div class="el__text">Concert</div>
                      <div class="el__close-btn"></div>
                    </div>
                  </div>
                </div>
                <div class="el__index"> <!-- 사진 순서 입니다. -->
                  <div class="el__index-back">5</div>
                  <div class="el__index-front">
                    <div class="el__index-overlay" data-index="5">5</div>
                  </div>
                </div>
              </div>
            <!-- 다섯번째 사진영역 끝 입니다. -->

        </div> <!-- 사진을 보여주는 cont_inner 영역의 끝 입니다. -->
      </div> <!-- 내용이 나오는 전체 영역을 담은 div 끝 입니다. -->
    </div> <!-- body와 html 제외 색깔 전용 div 끝 입니다. -->
</template>

<script>
import('../resource/StartPage/start_script.js') // 기능 구현용 JavaScript 입니다.
export default{
  data () { // html에서 사용될 데이터들 입니다.
    return {
      name: '',
      email: '',
      isHidden: '',
      color: '#1f1f1f'
    }
  },
  beforeCreate () {
    // vue에서는 body와 html 태그에 접근이 어려워 JavaScript를 이용해 접근했습니다. 페이지가 완전히 생성되기 전에 배경색에 접근해 색을 지정해줍니다.
    // 각 페이지 마다 설정해 페이지마다 다른 색상을 가져올 수 있도록 했습니다.
    document.querySelector('body').style.backgroundColor = '#1f1f1f'
  },
  created () {
    // 페이지가 생성되었을때 내용입니다.
    // 사용자 로그인되지않아 토큰이 없을 때 로그인전용 div를 보여주지 않습니다.
    if (sessionStorage.getItem('token') === null) {
      this.isHidden = false
    }
  },
  mounted () {
    // 페이지에 mount가 되었을때 내용입니다.
    // 서버에 접속했을때 토큰을 이용해 데이터를 받습니다.
    // 각각의 데이터에 유저 정보를 입력합니다.
    // isHidden 값을 변경해 로그인 전용 div를 보여줍니다.
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
  methods: {
    // 페이지에서 특정 컴포넌트에 사용될 메소드를 모았습니다.
    logout () { // 로그아웃 시에 호출
      sessionStorage.clear()
      this.isHidden = 'false'
      this.$router.go()
    }
  }
}
</script>

<style>
/* css 파일 적재 입니다. */
    @import "../resource/StartPage/start_style1.css";
    @import "../resource/StartPage/start_style2.css";
.mr-2, .mr-auto {
  color:burlywood;
}
</style>

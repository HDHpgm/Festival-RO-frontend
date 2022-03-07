
<template>

    <div class="loginmyung"> <!-- body와 html 태그를 제외하고 전체 영역 color 조정을 위해 생성한 div 영역 입니다.  주로 color와 font를 다룹니다.-->

          <div class="login-wrap">

                <div class="login-html"> <!-- 로그인  관련 form이 들어갈 전체 영역입니다. -->

                      <div class="container"> <!-- 중간 control을 위해 만든 container 영역 시작 입니다. -->

                          <!--로그인과 회원가입을 정할 수 있도록 했습니다.-->
                          <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
                          <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>

                              <div class="login-form"> <!-- 실제 로그인/회원가입 입력 form과 button이 나올 작은 div 영역 입니다.-->

                                      <div class="sign-in-htm"> <!-- sign in을 골랐을때 나올 영역 시작 입니다. -->
                                            <b-form @submit="onSignIn">
                                              <div class="group">
                                                  <label for="pass" class="label">Email Address</label>
                                                  <b-form-input id="pass" type="text" class="input" required v-model="form.email"></b-form-input>
                                              </div>
                                              <div class="group">
                                                  <label for="pass" class="label">Password</label>
                                                  <b-form-input id="pass" type="password" class="input" required v-model="form.password"></b-form-input>
                                              </div>
                                              <div class="group">
                                                  <input type="submit" class="button" value="Sign In">
                                              </div>
                                              <div class="hr"></div>
                                          </b-form>
                                      </div> <!-- sign in을 골랐을때 나올 영역 끝 입니다. -->

                                      <div class="sign-up-htm"> <!-- sign up을 골랐을때 나올 영역 시작 입니다. -->
                                          <b-form @submit="onSignUp">
                                              <div class="group">
                                                  <label for="user" class="label">Username</label>
                                                  <b-form-input id="user" type="text" class="input" required v-model="form.name"></b-form-input>
                                              </div>
                                              <div class="group">
                                                  <label for="pass" class="label">Password</label>
                                                  <b-form-input id="pass" type="password" class="input" required v-model="form.password"></b-form-input>
                                              </div>
                                              <div class="group">
                                                  <label for="pass" class="label">Repeat Password</label>
                                                  <b-form-input id="pass" type="password" class="input" required v-model="form.passwordConfirm"></b-form-input>
                                              </div>
                                              <div class="group">
                                                  <label for="pass" class="label">Email Address</label>
                                                  <b-form-input id="pass" type="text" class="input" required v-model="form.email"></b-form-input>
                                              </div>
                                              <div class="group">
                                                  <input type="submit" class="button" value="Sign Up">
                                              </div>
                                              <div class="hr"></div>
                                          </b-form>
                                      </div> <!-- sign up을 골랐을때 나올 영역 끝 입니다. -->

                              </div> <!-- 실제 로그인/회원가입 입력 form과 button이 나올 작은 div 영역 끝 입니다. -->

                      </div> <!-- 중간 control을 위해 만든 container 영역 끝 입니다. -->

                </div> <!-- 로그인  관련 form이 들어갈 전체 영역 끝 입니다. -->
          </div>
    </div> <!-- body와 html 태그를 제외하고 전체 영역 color 조정을 위해 생성한 div 영역 끝 입니다. -->

</template>

<script>
/* eslint-disable eqeqeq */
import('../resource/LoginPage/login_script1_min.js') // 이미지 동작 (로그인, 회원가입 선택시 회전기능) 을 위한 JavaScript 입니다.

export default{
  data () { // html에서 사용될 데이터들 입니다.
    return {
      form: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
      },
      error: '',
      title: ''
    }
  },

  beforeCreate () {
    // vue에서는 body와 html 태그에 접근이 어려워 JavaScript를 이용해 접근했습니다. 페이지가 완전히 생성되기 전에 배경색에 접근해 색을 지정해줍니다.
    // 각 페이지 마다 설정해 페이지마다 다른 색상을 가져올 수 있도록 했습니다.
    document.querySelector('body').style.backgroundColor = '#f1f1f1'
  },

  methods: {
    onSignUp (event) { // SignIN 버튼 클릭시 실행될 메소드
      event.preventDefault()
      let fm = new FormData()
      fm.append('email', this.form.email)
      fm.append('name', this.form.name)
      fm.append('password', this.form.password)
      fm.append('passwordConfirm', this.form.passwordConfirm)
      // FormData를 이용해 폼에 입력한 정보를 저장
      // $http를 axios로 사용할수 있게 설정해둠
      // post 요청으로 formdata를 담아 backend인 node에 회원가입 요청
      this.$http.post('http://localhost:3000/api/auth/SignUp', fm)
        .then((response) => {
          if (response.data.result === 1) { // 정상적으로 처리가 됐다면
            // 회원가입이 완료됐다는 메시지 띄워줌
            this.title = response.data.message
            alert(this.title)
            this.$router.go()
          }
        })
        .catch(error => { // 에러가 전송됐다면(이미 존재하는 메일일 때) 메세지 띄워줌
          this.error = error.response.data.message
          alert(this.error)
        })
    },

    onSignIn (event) { // 로그인시 실행할 메소드.
      event.preventDefault()
      let fm = new FormData()
      fm.append('email', this.form.email)
      fm.append('password', this.form.password)
      // FormData를 이용해 데이터를 저장
      // post 요청으로 formdata를 담아 backend인 node에 로그인 요청
      this.$http.post('http://localhost:3000/api/auth/SignIn', fm)
        .then((response) => {
          if (response.status === 200) { // 성공이라면
          // 백엔드 측에서 토큰을 발급해 보내주는 것을 세션에 저장(로그인 유지 위함)
            sessionStorage.setItem('token', response.data.token)
            alert('로그인 완료되었습니다.')
            this.$router.push('/')
            this.$router.go('/')
          }
        })
        .catch(error => { // 에러 시에
          console.log(error)
          alert('로그인 실패 / 이메일과 비밀번호를 확인하세요')
        })
    }

  }
}

</script>

<style>
    @import "../resource/LoginPage/login_style1.css";
    /* css 입니다. */
</style>

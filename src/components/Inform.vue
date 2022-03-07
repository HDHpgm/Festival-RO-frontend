<template>
    <div class="informmyung"> <!-- body와 html 태그를 제외하고 전체 영역 color 조정을 위해 생성한 div 영역 입니다.  주로 color와 font를 다룹니다.-->

                        <div class="main-wrapper"> <!-- 다음에 오는 main container를 담아서 margin, padding 등의 css 조절을 했습니다 -->

                                <div class="sl-main-container"> <!-- 설명과 swipe를 모두 담는 컨테이너 입니다. -->

                                        <div class="sl-header-wrapper"> <!-- 간단한 소개와 스와이프 기능 버튼이 있는 영역입니다. -->
                                            <h4>Let You Know</h4>
                                            <h3>What Here Has</h3>
                                            <p>Going further, there are several lists on this site. This site provides information about festivals and events and helps you exchange relevant information.</p>
                                            <!-- 스와이프 기능에 사용될 왼쪽 오른쪽 모양의 버튼 입니다. -->
                                            <div class="sl-nav">
                                                <div class="swiper-button-next">
                                                    <div id="nextBtn" data-name="Layer 1">
                                                    </div>
                                                </div>
                                                <div class="swiper-button-prev">
                                                    <div id="prevBtn" data-name="Layer 1">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- 소개와 버튼 끝 -->

                                        <div class="sl-wrapper"> <!-- 스와이프 기능이 있는 div 입니다.-->
                                            <div class="swiper-container">
                                                <div class="swiper-wrapper">

                                                        <!----------------------------------------------------------------------------------------------------------------------->
                                                        <div class="swiper-slide sl--slide">
                                                        <!-- swipe 기능 중 첫번째 사진이 들어가는 영역 입니다 이미지는 class:img 에 css을 이용해 넣었습니다.-->
                                                            <div class="slide-cover"></div>
                                                                <div class="sl-card-wrapper">
                                                                    <div class="sl-gradient"></div>
                                                                    <div class="sl-img-1 sl-bkg-img"></div>
                                                                    <div class="sl--content-wrapper sl--content-wrapper-inactive">
                                                                        <div class="sl--content-container sl--card-hide">
                                                                        <p class="sl--sub-text">Festival ro's Index</p>
                                                                        <h2>Festival Page</h2>
                                                                        <p class="sl--card-content">This page collects, sorts and presents information about the festival. In the process, you can view the festivals using list and grid formats.</p><br><br><br>
                                                                        <p class="sl--card-content">이 페이지에서는 축제에 관한 정보들을 보여줍니다. 축제는 리스트 형식과 그리드 형식으로 나눠 볼 수 있습니다.</p>
                                                                    </div>

                                                                    <div class="sl--card-nav-container">
                                                                    <!-- swipe 사진 하단에 보면 설명 자세히 보기 버튼이 있습니다. 버튼에 대한 설정 영역 입니다. -->
                                                                        <div class="sl--content-btn content-reveal-btn">
                                                                            <div>
                                                                                <svg class="card-nav-gfx sl--show-card-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.63 113.63">
                                                                                    <path d="M105.56 48.75H64.88V8.06a8.06 8.06 0 0 0-16.12 0v40.69H8.06a8.06 8.06 0 0 0 0 16.13h40.69v40.69a8.06 8.06 0 0 0 16.13 0V64.88h40.69a8.06 8.06 0 0 0 0-16.12z"/>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- 하단 버튼 영역 끝 -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!----------------------------------------------------------------------------------------------------------------------->

                                                        <!-- swipe 내에 두번째 사진에 관한 영역 입니다. -->
                                                        <div class="swiper-slide">
                                                            <div class="slide-cover"></div>
                                                            <div class="sl-card-wrapper">
                                                                <div class="sl-gradient"></div>
                                                                <div class="sl-img-2 sl-bkg-img"></div>
                                                                <div class="sl--content-wrapper sl--content-wrapper-inactive">
                                                                    <div class="sl--content-container sl--card-hide">
                                                                        <p class="sl--sub-text">Festival ro's Index</p>
                                                                        <h2>Sign In / Sign Up</h2>
                                                                        <p class="sl--card-content">This page can register members' information. Members can use sign-up to log in and write their own posts or save data.</p><br><br><br>
                                                                        <p class="sl--card-content">이 페이지에서는 로그인과 회원가입을 이용해서 사용자는 자신의 계정을 등록하고 사이트를 이용할 수 있습니다.</p>
                                                                    </div>

                                                                    <!-- 하단 자세히보기 영역 입니다. -->
                                                                    <div class="sl--card-nav-container">
                                                                        <div class="sl--content-btn content-reveal-btn">
                                                                            <svg class="card-nav-gfx sl--show-card-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.63 113.63">
                                                                                <path d="M105.56 48.75H64.88V8.06a8.06 8.06 0 0 0-16.12 0v40.69H8.06a8.06 8.06 0 0 0 0 16.13h40.69v40.69a8.06 8.06 0 0 0 16.13 0V64.88h40.69a8.06 8.06 0 0 0 0-16.12z"/>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <!-- 자세히보기 영역 끝 -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!----------------------------------------------------------------------------------------------------------------------->
                                                        <!-- swipe 내에 세번째 사진에 관한 영역 입니다. -->
                                                        <div class="swiper-slide">
                                                            <div class="slide-cover"></div>
                                                            <div class="sl-card-wrapper">
                                                                <div class="sl-gradient"></div>
                                                                <div class="sl-img-3 sl-bkg-img"></div>

                                                                <div class="sl--content-wrapper sl--content-wrapper-inactive">
                                                                    <div class="sl--content-container sl--card-hide">
                                                                        <p class="sl--sub-text">Festival ro's Index</p>
                                                                        <h2>Real Time Board</h2>
                                                                        <p class="sl--card-content">On this page, users can use their registered accounts to leave reviews about festivals and travel, and to exchange related thoughts with other registered users in real time.</p><br><br><br>
                                                                        <p class="sl--card-content">이 페이지는 사용자가 등록한 계정을 이용해 축제와 여행에 대한 생각을 등록하고 실시간으로 의견을 공유할 수 있습니다.</p>
                                                                    </div>

                                                                    <!-- 하단 자세히보기 영역 입니다. -->
                                                                    <div class="sl--card-nav-container">
                                                                        <div class="sl--content-btn content-reveal-btn">
                                                                                <svg class="card-nav-gfx sl--show-card-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.63 113.63">
                                                                                    <path d="M105.56 48.75H64.88V8.06a8.06 8.06 0 0 0-16.12 0v40.69H8.06a8.06 8.06 0 0 0 0 16.13h40.69v40.69a8.06 8.06 0 0 0 16.13 0V64.88h40.69a8.06 8.06 0 0 0 0-16.12z"/>
                                                                                </svg>
                                                                        </div>
                                                                    </div>
                                                                    <!-- 자세히보기 영역 끝 -->
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!----------------------------------------------------------------------------------------------------------------------->

                                                </div>
                                            </div>
                                        </div> <!-- swipe 기능이 있는 div 끝 -->

                                </div> <!-- 설명과 swipe를 모두 담는 컨테이너 끝 -->
                        </div> <!-- main container를 담아서 margin, padding 등의 css 조절하는 div 끝 -->
    </div>
    <!-- body와 html 태그를 제외하고 전체 영역 color 조정을 위해 생성한 div 영역 끝 -->

</template>

<script>
    import('../resource/InformPage/info_script1.js')
    import('../resource/InformPage/info_script2.js')
    import('../resource/InformPage/info_script3.js')
    import('../resource/InformPage/info_script4.js')

export default {
  beforeCreate () {
    // vue에서는 body와 html 태그에 접근이 어려워 JavaScript를 이용해 접근했습니다. 페이지가 완전히 생성되기 전에 배경색에 접근해 색을 지정해줍니다.
    // 각 페이지 마다 설정해 페이지마다 다른 색상을 가져올 수 있도록 했습니다.
    document.querySelector('body').style.backgroundColor = '#f5f5f5'
  }

}
</script>

<style scoped>
@import "../resource/InformPage/info_style1.css";
@import "../resource/InformPage/info_style2.css";
@import "../resource/InformPage/info_style3.css";
@import "../resource/InformPage/info_style4.css";
#nextBtn {
    fill: #04b7ac;
}
#prevBtn {
    fill: #04b7ac;
}

</style>

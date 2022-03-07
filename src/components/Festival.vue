
<template>

  <div class="festivalmyung"> <!-- body와 html 태그를 제외하고 전체 영역 color 조정을 위해 생성한 div 영역 입니다.  주로 color와 font를 다룹니다.-->

        <div class="wrap"> <!-- 전체 영역을 감싸는 div 입니다. -->
          <!-- 상단의 소개글 입니다 -->
          <h1 class="pen-title">Festival List View and Grid View Swich</h1>
          <p class="pen-description">Switch between list and grid view for festival.</p>
          <p class="pen-description">이미지 클릭시 축제에 관한 세부사항을 볼 수 있습니다.</p>

              <section class="content"> <!-- div와 달리 고유의 영역을 사용하는 section을 이용합니다 / 이동효과에서 데이터를 보존하는 article 영역을 잘 사용하기 위해서 입니다. -->

                    <!-- 축제목록을 어떤 형식으로 정렬할지 선택하는 radio 버튼들 입니다. -->
                    <input type="radio" name="view-filter" id="list-view" class="list-view-radio view-radio" checked><label for="list-view"><i class="fa fa-list-ul"></i> List View</label>
                    <input type="radio" name="view-filter" id="grid-view" class="grid-view-radio view-radio"><label for="grid-view"><i class="fa fa-th"></i> Grid View</label>

                    <div class="content-container"> <!-- 소개할 각각의 축제들을 article 영역으로 감싸고 div로 크게 감쌌습니다 -->

                            <!-- 정렬 모양 변경시 형태가 깨지는걸 방지하기 위해 article을 사용했습니다. -->
                            <article class="block-item">
                              <b-img src="https://file.mk.co.kr/meet/neds/2017/08/image_readtop_2017_525423_15018947012982409.jpg" @click="MovePage('흠뻑쇼')"></b-img>
                              <div class="entry-content">
                                <p><h1 class="entry-title">Psy Drenched Show Festival</h1><p>
                                <p>싸이 흠뻑쇼 콘서트<br>축제에 관한 기타 설명 - details 항목<br>축제장소, 가는길 설명<br>입장표 필요여부 및 가격에 대한 설명<br>예매기간 및 축제기간 설명</p>
                              </div>
                            </article>

                            <article class="block-item">
                              <b-img src="https://www.busan.go.kr/comm/getImage?srvcId=BBSTY3&upperNo=1388714&fileTy=ATTACH&fileNo=1"></b-img>
                              <div class="entry-content">
                                <p><h1 class="entry-title">Busan Rock Festival 2019</h1><p>
                                <p>부산 락 페스티벌<br>축제에 관한 기타 설명 - details 항목<br>축제장소, 가는길 설명<br>입장표 필요여부 및 가격에 대한 설명<br>예매기간 및 축제기간 설명</p>
                              </div>
                            </article>

                            <article class="block-item">
                              <b-img src="https://korean.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=20070&fileTy=MEDIA&fileNo=1&thumbTy=L"></b-img>
                              <div class="entry-content">
                                <p><h1 class="entry-title">Fireworks Festival</h1><p>
                                <p>세계 불꽃 축제<br>축제에 관한 기타 설명 - details 항목<br>축제장소, 가는길 설명<br>입장표 필요여부 및 가격에 대한 설명<br>예매기간 및 축제기간 설명</p>
                              </div>
                            </article>

                            <article class="block-item">
                              <b-img src="https://mblogthumb-phinf.pstatic.net/MjAxNzA0MzBfODgg/MDAxNDkzNTUyMzAwNzAx.4WtjRya057PipHJad91S_7_aDUg8xDrgMotECuVnYM8g.ttY0IJpid1cP3SorqYCN3pwl5Rs11DjKnCXNwyDZw9Mg.JPEG.cute_bbotty/%EC%B2%AD%EA%B3%84%EC%B2%9C%EC%97%B0%EB%93%B1%EC%B6%95%EC%A0%9C_001.jpg?type=w800"></b-img>
                              <div class="entry-content">
                                <p><h1 class="entry-title">Lotus Lantern Festival</h1><p>
                                <p>청계천 연등 축제<br>축제에 관한 기타 설명 - details 항목<br>축제장소, 가는길 설명<br>입장표 필요여부 및 가격에 대한 설명<br>예매기간 및 축제기간 설명</p>
                              </div>
                            </article>

                            <article class="block-item">
                              <b-img src="https://img0.yna.co.kr/photo/yna/YH/2019/08/11/PYH2019081103750001300_P4.jpg"></b-img>
                              <div class="entry-content">
                                <p><h1 class="entry-title">Water Bomb</h1><p>
                                <p>여름 워터밤 축제<br>축제에 관한 기타 설명 - details 항목<br>축제장소, 가는길 설명<br>입장표 필요여부 및 가격에 대한 설명<br>예매기간 및 축제기간 설명</p>
                              </div>
                            </article>

                            <article class="block-item">
                              <b-img src="https://www.busan.go.kr/comm/getImage?srvcId=BBSTY3&upperNo=1388714&fileTy=ATTACH&fileNo=1"></b-img>
                              <div class="entry-content">
                                <p><h1 class="entry-title">Busan Rock Festival 2019</h1><p>
                                <p>부산 락 페스티벌<br>축제에 관한 기타 설명 - details 항목<br>축제장소, 가는길 설명<br>입장표 필요여부 및 가격에 대한 설명<br>예매기간 및 축제기간 설명</p>
                              </div>
                            </article>

                            <article class="block-item">
                              <b-img src="https://korean.visitseoul.net/comm/getImage?srvcId=MEDIA&parentSn=20070&fileTy=MEDIA&fileNo=1&thumbTy=L"></b-img>
                              <div class="entry-content">
                                <p><h1 class="entry-title">Fireworks Festival</h1><p>
                                <p>세계 불꽃 축제<br>축제에 관한 기타 설명 - details 항목<br>축제장소, 가는길 설명<br>입장표 필요여부 및 가격에 대한 설명<br>예매기간 및 축제기간 설명</p>
                              </div>
                            </article>

                            <article class="block-item">
                              <b-img src="https://file.mk.co.kr/meet/neds/2017/08/image_readtop_2017_525423_15018947012982409.jpg"></b-img>
                              <div class="entry-content">
                                <p><h1 class="entry-title">Psy Drenched Show Festival</h1><p>
                                <p>싸이 흠뻑쇼 콘서트<br>축제에 관한 기타 설명 - details 항목<br>축제장소, 가는길 설명<br>입장표 필요여부 및 가격에 대한 설명<br>예매기간 및 축제기간 설명</p>
                              </div>
                            </article>

                            <article class="block-item">
                              <b-img src="https://mblogthumb-phinf.pstatic.net/MjAxNzA0MzBfODgg/MDAxNDkzNTUyMzAwNzAx.4WtjRya057PipHJad91S_7_aDUg8xDrgMotECuVnYM8g.ttY0IJpid1cP3SorqYCN3pwl5Rs11DjKnCXNwyDZw9Mg.JPEG.cute_bbotty/%EC%B2%AD%EA%B3%84%EC%B2%9C%EC%97%B0%EB%93%B1%EC%B6%95%EC%A0%9C_001.jpg?type=w800"></b-img>
                              <div class="entry-content">
                                <p><h1 class="entry-title">Lotus Lantern Festival</h1><p>
                                <p>청계천 연등 축제<br>축제에 관한 기타 설명 - details 항목<br>축제장소, 가는길 설명<br>입장표 필요여부 및 가격에 대한 설명<br>예매기간 및 축제기간 설명</p>
                              </div>
                            </article>

                            <article class="block-item">
                              <b-img src="https://img0.yna.co.kr/photo/yna/YH/2019/08/11/PYH2019081103750001300_P4.jpg"></b-img>
                              <div class="entry-content">
                                <p><h1 class="entry-title">Water Bomb</h1><p>
                                <p>여름 워터밤 축제<br>축제에 관한 기타 설명 - details 항목<br>축제장소, 가는길 설명<br>입장표 필요여부 및 가격에 대한 설명<br>예매기간 및 축제기간 설명</p>
                              </div>
                            </article>
                            <!-- 축제 article 끝 -->

                  </div> <!-- article을 감싼 div 끝 -->

            </section> <!-- section 끝 -->

        </div> <!-- section을 감싸 관리하는 div 끝 -->

  </div> <!-- body와 html 태그를 제외하고 전체 영역 color 조정을 위해 생성한 div 영역 끝 -->

</template>

<script>

export default{

  beforeCreate () {
  // vue에서는 body와 html 태그에 접근이 어려워 JavaScript를 이용해 접근했습니다. 페이지가 완전히 생성되기 전에 배경색에 접근해 색을 지정해줍니다.
  // 각 페이지 마다 설정해 페이지마다 다른 색상을 가져올 수 있도록 했습니다.
    document.querySelector('body').style.backgroundColor = '#1f1f1f'
  },

  methods: { // 이미지 클릭시 router 를 이용해 지정 페이지로 이동합니다.
    MovePage (talk) {
      alert(talk)
      this.$router.push('./picture')
    }
  }
}
</script>
<style scoped>
    @import "../resource/FestivalPage/festival_style1.css";
    /* css 파일 입니다. */
</style>

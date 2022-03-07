<template> <!-- 상단의 NavBar에서 버튼 클릭시 왼쪽에 표시될 SideBar 입니다. -->

  <div>

    <b-sidebar id="sidebar-menu" aria-labelledby="sidebar-menu-title" no-header shadow
    bg-variant="dark"
    text-variant="light"> <!-- SideBar에 대한 기본 설정입니다. -->

      <template #default="{ hide }"> <!-- 평소에 안보이게 설정 합니다. -->

        <div class="p-3"> <!-- 슬라이드바 내부에 보일 컴포넌트들 입니다. -->
              <div class="d-flex align-items-center flex-column">
                  <b-avatar style="background-color: skyblue" variant="skyblue" text="PR" class="mr-3 mt-3 mb-3" size="5rem"></b-avatar>
                  <h4 id="sidebar-no-header-title">Project Festival-RO</h4>
                  <div class="divider-menu"></div>
              </div>
              <nav class="mb-3">
                  <b-nav vertical>
                    <b-nav-item to='/' @click="hide"><b-icon icon="bar-chart-fill"></b-icon>  MainBoard</b-nav-item><p />
                    <b-nav-item to="./Board" @click="hide"><b-icon icon="clipboard"></b-icon>  Community</b-nav-item><p />
                  </b-nav>
              </nav>
              <b-button style="width:100%" variant="primary" block @click="hide">Close</b-button>
        </div>

      </template>

    </b-sidebar>

  </div>

</template>

<script>
export default {
  name: 'SideBarComponent'
}
</script>

<style>
/* css 입니다. */
.divider-menu {
  border: 1px solid #fff;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
}

.nav-item > .nav-link{
  color:#FFF
}

.nav-item > .nav-link:hover{
  color: #ccc;
}
</style>

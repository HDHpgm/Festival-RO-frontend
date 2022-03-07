<template>
  <div id="App">
      <nav-bar />
      <side-bar />
      <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBarComponent.vue'
import SideBar from './components/SideBarComponent.vue'
// import Chat from './components/chat.vue'
export default {
  components: {
    NavBar,
    SideBar
    // Chat
  }
}
</script>

<style>

</style>

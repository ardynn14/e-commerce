<template>
  <div id="app">
    <Navbar @logout="logoutUser()" :status="status"></Navbar>
    <div class="main-background">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  data(){
    return {
      status:{
        loginUser: false,
        loginAdmin: false
      }
    }
  },
  methods: {
    logoutUser(){
      this.loginUser = false;
      this.loginAdmin = false;
    }
  },
  created(){
    if(localStorage.getItem('token')){
      if(localStorage.getItem('role') === 'user'){
        this.status.loginUser = true;
      }else if(localStorage.getItem('role') === 'admin'){
        this.status.loginAdmin = true;
      }
    }
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
.main-background {
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)),
    url("./assets/bghome.jpg");
  background-attachment: fixed;
  background-position: center;
  background-position-y: -0%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  min-height: 100vh;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

/* .main-content{
  background-color: whitesmoke;
  opacity: 0.2;
} */
</style>

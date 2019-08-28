<template>
  <nav>
    <div class="nav-content container">
      <div>
        <router-link to="/">
          <img src="../assets/logo.png" alt="Batik Nusantara logo" />
        </router-link>
      </div>
      <!-- <div class="d-flex justify-content-center align-items-center">
        <form class="d-flex justify-content-center align-items-center">
          <i class="fas fa-search mr-2" style="color: grey;font-size: 22px;"></i>
          <input
            class="form-control"
            v-model="searchKeyWord"
            type="search"
            name="search"
            placeholder="Search..."
            autocomplete="off"
          />
        </form>
      </div> -->
      <div
        v-if="!status.loginUser && !status.loginAdmin"
        class="d-flex justify-content-center align-items-center"
      >
        <ul class="nav-link">
          <li class="mr-3">
            <router-link to="/products">
              <i class="fas fa-tshirt"></i> Produk Kami
            </router-link>
          </li>
          <li class="mr-3">
            <router-link to="/info">
              <i class="fas fa-info-circle"></i> Jenis Batik
            </router-link>
          </li>
          <li class="mr-3">
            <router-link to="/sign-in">
              <i class="fas fa-sign-in-alt"></i> Masuk
            </router-link>
          </li>
          <li>
            <router-link to="/sign-up">
              <i class="fas fa-user-plus"></i> Daftar
            </router-link>
          </li>
        </ul>
      </div>
      <div
        v-if="status.loginUser && !status.loginAdmin"
        class="d-flex justify-content-center align-items-center"
      >
        <ul class="nav-link">
          <li class="mr-3">
            <router-link to="/products">
              <i class="fas fa-tshirt"></i> Produk Kami
            </router-link>
          </li>
          <li class="mr-3">
            <router-link to="/info">
              <i class="fas fa-info-circle"></i> Jenis Batik
            </router-link>
          </li>
          <li class="mr-3">
            <router-link to="/cart">
              <i class="fas fa-shopping-cart"></i> Keranjang
            </router-link>
          </li>
          <li>
            <a href="#" @click.prevent="logout()">
              <i class="fas fa-sign-out-alt"></i> Keluar
            </a>
          </li>
        </ul>
      </div>
      <div
        v-if="!status.loginUser && status.loginAdmin"
        class="d-flex justify-content-center align-items-center"
      >
        <ul class="nav-link">
          <li class="mr-3">
            <router-link to="/products">
              <i class="fas fa-tshirt"></i> Daftar Produk
            </router-link>
          </li>
          <li class="mr-3">
            <router-link to="/add-product">
              <i class="fas fa-plus-square"></i> Tambah produk
            </router-link>
          </li>
          <li class="mr-3">
            <a href>
              <i class="fas fa-exchange-alt"></i> Transaksi
            </a>
          </li>
          <li class="mr-3">
            <a href="#" @click.prevent="logout()">
              <i class="fas fa-sign-out-alt"></i> Keluar
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  props: ["status"],
  components: {},
  data() {
    return {
      searchKeyWord: ""
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$emit('logout');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
nav {
  z-index: 9;
  position: fixed;
  width: 100%;
  background-color: black;
}
.nav-link {
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.nav-link a {
  text-decoration: none;
  color: grey;
  font-size: 18px;
  /* margin-left: 40px; */
  transition: 1s all;
}
.nav-link a:hover {
  color: whitesmoke;
  transition: 1s all;
}
.nav-content {
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
input {
  background-color: rgba(0, 0, 0, 0);
  color: whitesmoke;
  border: 3px solid whitesmoke;
  outline: none;
  height: 30px;
  transition: height 0.5s;
  -webkit-transition: height 0.5s;
}
input:focus {
  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0);
  height: 50px;
  font-size: 16px;
}
::placeholder {
  color: whitesmoke;
}
</style>

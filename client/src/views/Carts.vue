<template>
  <div class="cartPage container d-flex flex-column align-items-center">
    <div>
      <h2 class="mt-5">Keranjang Kamu</h2>
    </div>
    <div class="cartList p-5 d-flex flex-column align-items-center">
      <productCartlist
        @sukseshapus="getNewCartData()"
        v-for="product in cartItem"
        :key="product._id"
        :item="product"
      ></productCartlist>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import productCartlist from "../components/productCartlist";
export default {
  data() {
    return {
      cartItem: []
    };
  },
  components: {
    productCartlist
  },
  methods: {
    getNewCartData() {
      let token = localStorage.getItem("token");
      axios({
        url: `http://localhost:3000/cart`,
        method: "GET",
        headers: {
          token
        }
      })
        .then(({ data }) => {
          this.cartItem = data.cartList;
          console.log(this.cartItem);
        })
        .catch(console.log);
    }
  },
  created() {
    let token = localStorage.getItem("token");
    axios({
      url: `http://localhost:3000/cart`,
      method: "GET",
      headers: {
        token
      }
    })
      .then(({ data }) => {
        this.cartItem = data.cartList;
        console.log(this.cartItem);
      })
      .catch(console.log);
  }
};
</script>

<style scoped>
.cartPage {
  background: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
}
h2 {
  font-size: 50px;
  color: whitesmoke;
  font-family: "Lancelot", cursive;
}
.cartList {
  width: 100%;
}
</style>
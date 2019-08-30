<template>
  <div class="productPage container d-flex flex-column align-items-center">
    <div>
      <h2 class="mt-5">Produk Kami</h2>
    </div>
    <div class="p-5 row d-flex justify-content-around">
      <productCard
        @deleteProduct="getNewData()"
        v-for="product in productList"
        :key="product.id"
        :info="product"
      ></productCard>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import productCard from "../components/productCart";
export default {
  name: "products",
  components: {
    productCard
  },
  data() {
    return {
      productList: []
    };
  },
  methods: {
    getNewData() {
      axios({
        url: "35.240.170.239/products",
        method: "GET"
      })
        .then(({ data }) => {
          // console.log(data);
          this.productList = data;
          console.log(this.productList);
        })
        .catch(console.log);
    }
  },
  created() {
    axios({
      url: "35.240.170.239/products",
      method: "GET"
    })
      .then(({ data }) => {
        // console.log(data);
        this.productList = data;
        console.log(this.productList);
      })
      .catch(console.log);
  }
};
</script>

<style scoped>
.productPage {
  background: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
}
h2 {
  font-size: 50px;
  color: whitesmoke;
  font-family: "Lancelot", cursive;
}
</style>
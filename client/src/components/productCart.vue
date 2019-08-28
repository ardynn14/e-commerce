<template>
  <div class="card mb-5" style="width:400px">
    <img class="card-img-top" :src="info.url" :alt="info.name" />
    <div class="card-body">
      <h4 class="card-title">{{info.name}}</h4>
      <p class="card-text">{{info.description}}</p>
      <p
        class="card-text"
      >Price: {{info.price.toLocaleString('en-ID', {style: 'currency', currency: 'IDR'})}} / m² | Stock: {{info.stock}} m²</p>
      <div
        v-if="status.loginUser"
        @click.prevent="addCart(info._id)"
        class="d-flex justify-content-center align-items-center"
      >
        <button class="btn">
          <i class="fas fa-cart-plus"></i>
        </button>
      </div>
      <div v-if="status.loginAdmin" class="d-flex justify-content-around align-items-center">
        <router-link :to="`/edit/${info._id}`" class="btn">
          <button class="btn">
            <i class="fas fa-edit"></i>
          </button>
        </router-link>
        <button class="btn" @click.prevent="deleteProduct(info._id)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["info"],
  data() {
    return {
      status: {
        loginAdmin: false,
        loginUser: false
      }
    };
  },
  methods: {
    addCart(id) {
      let token = localStorage.getItem("token");
      axios({
        url: `http://localhost:3000/cart`,
        method: "POST",
        headers: {
          token
        },
        data: {
          id
        }
      })
        .then(({ data }) => {
          console.log(`data`);
          console.log(
            `sukses menambahkan item ke keranjang kamu, ayo tambah lagi`
          );
        })
        .catch(console.log);
    },
    deleteProduct(id) {
      let token = localStorage.getItem("token");
      axios({
        url: `http://localhost:3000/products/${id}`,
        method: "delete",
        headers: {
          token
        }
      })
        .then(({ data }) => {
          console.log(data);
          this.$emit("deleteProduct");
        })
        .catch(console.log);
    }
  },
  created() {
    if (localStorage.getItem("role") === "user") {
      this.status.loginUser = true;
    } else if (localStorage.getItem("role") === "admin") {
      this.status.loginAdmin = true;
    }
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 20rem;
}
button {
  border: 2px solid black;
  transition: 0.5s all;
}
button:hover {
  color: whitesmoke;
  border: 2px solid black;
  background-color: black;
  transition: 0.5s all;
}
</style>
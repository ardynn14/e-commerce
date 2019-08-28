<template>
  <div class="sign-page">
    <div class="sign-box p-4">
      <h2>Tambah Produk</h2>
      <form class="sign-in-form" @submit.prevent="addProduct()">
        <div class="form-input">
          <label class="form-label">Nama Produk</label>
          <input
            class="form-control input-focus"
            v-model="productname"
            type="text"
            placeholder="masukan nama produk"
            autocomplete="off"
          />
        </div>
        <div class="form-input">
          <label class="form-label">Deskripsi</label>
          <input
            class="form-control input-focus"
            v-model="productdescription"
            type="text"
            placeholder="masukan deskripsi produk"
            autocomplete="off"
          />
        </div>
        <div class="form-input">
          <label class="form-label">Harga</label>
          <input
            class="form-control input-focus"
            v-model="productprice"
            type="number"
            placeholder="masukan harga produk"
            autocomplete="off"
          />
        </div>
        <div class="form-input">
          <label class="form-label">Stock</label>
          <input
            class="form-control input-focus"
            v-model="productstock"
            type="number"
            placeholder="masukan kuantitas produk"
            autocomplete="off"
          />
        </div>
        <div class="form-input">
          <label class="form-label">Foto</label>
          <input
            class="form-control"
            v-on:change="handlefileupload($event)"
            type="file"
            placeholder="masukan foto produk"
            autocomplete="off"
          />
        </div>
        <div class="d-flex justify-content-center mt-4">
          <button type="submit" class="btn sign-in-btn">Simpan Produk</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  name: "SignUp",
  data() {
    return {
      productname: "",
      productdescription: "",
      productprice: "",
      productstock: "",
      productpicture: ""
    };
  },
  components: {},
  methods: {
    handlefileupload() {
      let file = event.target.files || event.dataTransfer.files;
      this.productpicture = file[0];
    },
    addProduct() {
      // console.log(this.productpicture);
      const token = localStorage.getItem("token");
      let data = new FormData();
      data.append("name", this.productname);
      data.append("stock", this.productstock);
      data.append("price", this.productprice);
      data.append("description", this.productdescription);
      data.append("file", this.productpicture);
      axios({
        //    http://localhost:3000/products
        url: `http://localhost:3000/products`,
        method: "post",
        headers: {
          token
        },
        data
      })
        .then(({ data }) => {
          console.log(data);
          this.productname = "";
          this.productstock = "";
          this.productprice = "";
          this.productdescription = "";
          this.productpicture = "";
        })
        .catch(console.log);
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 50px;
  color: whitesmoke;
  font-family: "Lancelot", cursive;
}
.sign-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign-box {
  width: 500px;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form-label {
  color: whitesmoke;
  font-size: 22px;
}
button {
  width: 250px;
  font-weight: bold;
  border: 2px solid whitesmoke;
  color: whitesmoke;
  transition: 0.3s all;
}
button:hover {
  border: 2px solid whitesmoke;
  background-color: whitesmoke;
  color: black;
  transition: 0.3s all;
}
input{
  background-color: rgba(0, 0, 0, 0);
  color: whitesmoke;
  border: 3px solid whitesmoke;
  height: 100%;
  outline: none;
}
.input-focus {
  background-color: rgba(0, 0, 0, 0);
  color: whitesmoke;
  border: 3px solid whitesmoke;
  outline: none;
  height: 30px;
  transition: height 0.5s;
  -webkit-transition: height 0.5s;
}
.input-focus:focus {
  color: whitesmoke;
  background-color: rgba(0, 0, 0, 0);
  height: 50px;
  font-size: 16px;
}
::placeholder {
  color: whitesmoke;
}
</style>

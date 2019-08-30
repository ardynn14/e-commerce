<template>
  <div class="item-list d-flex flex-row mb-5">
    <img :src="item.url" :alt="item.name" />
    <div class="item-info d-flex flex-column justify-content-between p-3">
      <div class="d-flex flex-column">
        <h3>{{ item.name }}</h3>
        <p>Price : {{item.price.toLocaleString('en-ID', {style: 'currency', currency: 'IDR'})}} / m²</p>
        <p>Stock : {{item.stock}} m</p>
      </div>
      <div>
        <p>Buy Quantity :</p>
        <form>
          <input v-model="quantity" type="number" name="quantity" min="1" :max="item.stock" />
        </form>
        <p class="mt-2">Total Price :</p>
        <h5>{{(item.price*quantity).toLocaleString('en-ID', {style: 'currency', currency: 'IDR'})}}</h5>
      </div>
    </div>
    <div class="pr-4 pb-4 d-flex flex-column justify-content-end">
      <button @click.prevent="deleteItem(item._id)" class="btn">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["item"],
  data() {
    return {
      quantity: 1
    };
  },
  methods: {
    deleteItem(id) {
      let token = localStorage.getItem("token");
      axios({
        url: `35.240.170.239/cart/${id}`,
        method: `delete`,
        headers: {
          token
        }
      })
        .then(({ data }) => {
          this.$emit("sukseshapus", id);
          console.log(data);
        })
        .catch(console.log);
    }
  }
};
</script>

<style scoped>
.item-list {
  width: 80%;
  /* width: 100%; */
  background-color: whitesmoke;
}
img {
  width: 300px;
  height: 300px;
}
.item-info {
  width: 100%;
  background-color: whitesmoke;
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
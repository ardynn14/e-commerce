<template>
  <div class="sign-page">
    <div class="sign-box p-4">
      <h2>Sign In</h2>
      <form class="sign-in-form" @submit.prevent="login()">
        <div class="form-input">
          <label class="form-label">Email</label>
          <input
            class="form-control"
            v-model="email"
            type="email"
            name="email"
            placeholder="Input your email"
            autocomplete="off"
          />
        </div>
        <div class="form-input">
          <label class="form-label">Password</label>
          <input
            class="form-control"
            v-model="password"
            type="password"
            name="email"
            placeholder="Input your password"
            autocomplete="off"
          />
        </div>
        <div class="d-flex justify-content-center mt-4">
          <button type="submit" class="btn sign-in-btn">Log In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {},
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.password
      };
      axios({
        url: `http://localhost:3000/users/sign-in`,
        method: "POST",
        data
      })
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("role", data.role);
          // console.log(data);
          this.$emit('login', data.role);
          this.$router.push('/products')
        })
        .catch(err => {
          console.log(err);
        });
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
  height: 400px;
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
<template>
  <div class="sign-page">
    <div class="sign-box p-4">
      <h2>Sign Up</h2>
      <form class="sign-in-form" @submit.prevent="signUp()">
        <div class="form-input">
          <label class="form-label">Username</label>
          <input
            class="form-control"
            v-model="username"
            type="text"
            placeholder="Input your username"
            autocomplete="off"
          />
        </div>
        <div class="form-input">
          <label class="form-label">Email</label>
          <input
            class="form-control"
            v-model="email"
            type="email"
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
            placeholder="Input your password"
            autocomplete="off"
          />
        </div>
        <div class="d-flex justify-content-center mt-4">
          <button type="submit" class="btn sign-in-btn">Daftar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from '../router';
export default {
  name: "SignUp",
  data ()  {
    return {
      email: "",
      password: "",
      username: ""
    };
  },
  components: {},
  methods: {
    signUp ()  {
      let data = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      // let {username , } = this
      console.log(`masuk siniiiiiiiiTRETRFDGDGFDGDGFDGDGFDG`);
      console.log(data);
      axios({
        url: `http://localhost:3000/users/sign-up`,
        method: "POST",
        data
      })
        .then(({ data }) => {
          this.username = "";
          this.email = "";
          this.password = "";
          router.push('/sign-in')
        })
        .catch(err => {
          console.log(err , ' ERROR');
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

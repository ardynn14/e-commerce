<template>
  <div class="home">
    <hr />
    <h1>Cintailah</h1>
    <h1>Karya</h1>
    <h1>Anak Bangsa</h1>
    <hr />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home", 
  components: {}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lancelot&display=swap");
.home {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-family: "Lancelot", cursive;
  font-size: 100px;
  color: whitesmoke;
  transition: 1s all;
}
hr {
  width: 100%;
  border: 3px solid whitesmoke;
}
h1:hover {
  font-size: 120px;
  transition: 1s all;
}
</style>

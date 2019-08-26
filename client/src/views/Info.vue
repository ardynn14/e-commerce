<template>
  <div class="main-content container mb-5">
    <h2 class="mt-5">Jenis-jenis Batik Nusantara</h2>
    <div class="batikinfo">
      <img class="card-image mt-5" src="../assets/batikkeraton.jpg" alt="batik keraton" />
      <div class="card-body p-5">
        <h4 class="card-title">Batik Keraton</h4>
        <hr class="hrinfobatik mt-0" />
        <p
          class="card-text"
        >Batik Keraton merupakan batik yang awalnya dibuat oleh para putri dan pengrajin batik yang ada di lingkungan Keraton. Motif batik Keraton ini sangat kental dengan nuansa elegan, sakral dan sarat akan filosofi kehidupan. Karenanya, dulu batik Keraton hanya boleh digunakan oleh sebagian orang saja.</p>
      </div>
    </div>
    <div class="batikinfo">
      <div class="card-body p-5">
        <h4 class="card-title">Batik Bali</h4>
        <hr class="hrinfobatik mt-0" />
        <p
          class="card-text"
        >Ragam batik khas Pulau Dewata ini juga tak kalah populer. Motif batik Bali banyak terinspirasi dari berbagai hewan seperti kura-kura, burung bangau, dan rusa. Warna-warna yang digunakan pada batik Bali juga dominan warna cerah, seperti biru, kuning, dan ungu.</p>
      </div>
      <img class="card-image" src="../assets/batikbali.jpg" alt="batik keraton" />
    </div>
    <div class="batikinfo">
      <img class="card-image" src="../assets/batikmegamendung.jpg" alt="batik keraton" />
      <div class="card-body p-5">
        <h4 class="card-title">Batik Megamendung</h4>
        <hr class="hrinfobatik mt-0" />
        <p
          class="card-text"
        >Batik Megamendung merupakan motif kain batik khas daerah Cirebon. Motif batik Megamendung sangat khas dengan bentuk awan besar berwarna cerah dan mencolok. Beberapa warna yang umum digunakan pada batik Megamendung adalah biru, merah tua, ungu, dan hijau tua.</p>
      </div>
    </div>
    <div class="batikinfo">
      <div class="card-body p-5">
        <h4 class="card-title">Batik Betawi</h4>
        <hr class="hrinfobatik mt-0" />
        <p
          class="card-text"
        >Jakarta juga punya batik. Batik Betawi kerap ditampilkan dalam pameran kebudayaan Betawi ataupun digunakan pada acara-acara bergengsi seperti perhelatan Abang None Jakarta. Pilihan warna-warna cerah yang mencolok dipadukan dengan motif unik khas Betawi seperti ondel-ondel, pucuk rebung, nusa kelapa, dan gambang kromong menjadi ciri khas batik Betawi.</p>
      </div>
      <img class="card-image" src="../assets/batikbetawi.jpg" alt="batik keraton" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  components: {}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lancelot&display=swap");
h2 {
  font-size: 50px;
  color: whitesmoke;
  font-family: "Lancelot", cursive;
}
.hrinfobatik {
  border: 0.5px solid whitesmoke;
}
.batikinfo {
  max-width: 100%;
  max-height: 400px;
  display: flex;
  flex-direction: row;
}
.card-image {
  width: 50%;
}
.card-body {
  width: 50%;
  /* background-color: black !important; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-title {
  font-family: "Lancelot", cursive;
  color: whitesmoke;
}
.card-text {
  font-family: "Lancelot", cursive;
  font-size: 22px;
  color: whitesmoke;
}
.main-content {
  padding: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  /* background:transparent */
}
</style>

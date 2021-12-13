<template>
  <div class="container mx-auto">
  div
    <div v-for="pengaduan in pengaduans" :key="pengaduan.id">
      <p>{{ pengaduan.judul_laporan }}</p>
    </div>
  </div>
</template>

<script>
// import { onMounted } from "vue";
export default {
  name: "Home",
  data() {
    return {
      pengaduans: []
    }
  },

  mounted() {
    fetch("http://localhost:8050/api/pengaduan")
    .then(res => res.json())
    .then(data => this.pengaduans = data)
    .catch(err => console.log(err.message))
  }
};
</script>

<template>
  <form @submit.prevent="submit">
    <input
      v-model="data.tgl_pengaduan"
      class="
        bg-gray-200
        appearance-none
        border-2 border-gray-200
        rounded
        w-100
        py-2
        px-4
        text-gray-700
        leading-tight
        focus:outline-none focus:bg-white focus:border-purple-500
        mb-4
      "
      id="inline-name"
      type="date"
    />
    <textarea
      v-model="data.isi_laporan"
      class="
        bg-gray-200
        appearance-none
        border-2 border-gray-200
        rounded
        w-full
        py-2
        px-4
        text-gray-700
        leading-tight
        focus:outline-none focus:bg-white focus:border-purple-500
        mb-4
      "
      name=""
      id=""
      cols="30"
      rows="10"
    ></textarea>
    <button
      class="
        shadow
        bg-purple-500
        hover:bg-purple-400
        focus:shadow-outline focus:outline-none
        text-white
        font-bold
        py-2
        px-4
        rounded
      "
      type="submit"
    >
      Submit Laporan
    </button>
  </form>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "BuatLaporan",

  setup() {
    const data = reactive({
      tgl_pengaduan: "",
      isi_laporan: "",
      foto: "",
      status: "",
      user_id: "",
    });

    const router = useRouter();

    const submit = async () => {
      await fetch("http://localhost:8050/api/pengaduan/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });

      await router.push("/");
    };

    return {
      data,
      submit,
    };
  },
};
</script>
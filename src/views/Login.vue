<template>
  <form @submit.prevent="submit" class="w-full max-w-sm">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-email"
        >
          Email
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          v-model="data.email"
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
          "
          id="inline-email"
          type="email"
          placeholder="email@email.com"
        />
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-password"
        >
          Password
        </label>
      </div>
      <div class="md:w-2/3">
        <input
          v-model="data.password"
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
          "
          id="inline-password"
          type="password"
          placeholder="******************"
        />
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3"></div>
      <div class="md:w-2/3">
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
          Login
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    const data = reactive({
      email: "",
      password: "",
    });

    const router = useRouter();

    const submit = async () => {
      await fetch("http://localhost:8050/api/login", {
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
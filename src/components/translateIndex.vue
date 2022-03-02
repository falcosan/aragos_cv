<template>
  <div
    class="flex space-x-2.5 justify-end md:justify-center px-3 py-2 rounded-b-md"
  >
    <span
      :class="`w-16 p-1 border border-gray-50 text-center shadow rounded-md cursor-pointer bg-gray-50 ${
        language === 'en' ? 'bg-opacity-100' : 'bg-opacity-50'
      }`"
      @click="setLang('en')"
      >En</span
    >
    <span
      :class="`w-16 p-1 border border-gray-50 text-center shadow rounded-md cursor-pointer bg-gray-50 ${
        language === 'es' ? 'bg-opacity-100' : 'bg-opacity-50'
      }`"
      @click="setLang('es')"
      >Es</span
    >
  </div>
</template>
<script>
import { inject } from "vue";
export default {
  emits: ["setLang"],
  setup(_, { emit }) {
    const language = inject("language");
    const setLang = (lang) => {
      emit("setLang", lang);
      localStorage.setItem("lang", lang);
    };
    return {
      language,
      setLang,
    };
  },
};
</script>

<template>
  <div class="flex space-x-2.5 justify-end md:justify-center p-5 rounded-b-md">
    <span
      :class="`w-16 p-2 border text-center text-xs shadow rounded-md cursor-pointer bg-gray-50 ${
        language === 'en' ? 'bg-opacity-100' : 'bg-opacity-50'
      }`"
      @click="setLang('en')"
      >ENG</span
    >
    <span
      :class="`w-16 p-2 border text-center text-xs shadow rounded-md cursor-pointer bg-gray-50 ${
        language === 'es' ? 'bg-opacity-100' : 'bg-opacity-50'
      }`"
      @click="setLang('es')"
      >ESP</span
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

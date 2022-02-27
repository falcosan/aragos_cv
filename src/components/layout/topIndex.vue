<template>
  <section
    class="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-between"
  >
    <component
      v-for="component in blok.body"
      :key="component._uid"
      :is="component.component"
      :blok="component"
      :class="[
        {
          'w-72 sm:w-7/12 md:w-56 mx-auto md:mx-0 border-2 rounded-xl transition transform hover:shadow-xl hover:scale-110 border-slate-700':
            component.component === 'media',
        },
      ]"
    />
  </section>
</template>
<script>
import media from "../mediaIndex.vue";
import paragraph from "../paragraphIndex.vue";
export default {
  components: { media, paragraph },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
[id*="hello"] {
  animation: bounce 1s infinite;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>

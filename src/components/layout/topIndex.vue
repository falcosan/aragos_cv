<template>
  <section
    v-if="blok.body.length > 0"
    class="top flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between"
  >
    <component
      v-for="component in blok.body"
      :key="component._uid"
      :is="component.component"
      :blok="component"
      :class="[
        {
          'w-72 h-72 md:h-56 md:w-56 mx-auto md:mx-0 border-2 rounded-xl transition transform select-none hover:shadow-xl hover:scale-110 border-slate-700':
            unicSet(component.component, 'media'),
        },
        {
          'max-w-prose': unicSet(component.component, 'paragraph'),
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
  inject: ["unicSet"],
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.top .markdown > h1 {
  @apply animate-wiggle;
}
</style>

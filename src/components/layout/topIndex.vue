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
          'w-72 sm:w-7/12 md:w-56 mx-auto md:mx-0 border-2 border-slate-700 rounded-xl transition transform hover:shadow-xl hover:scale-110':
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

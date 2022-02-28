<template>
  <section
    v-if="blok.body.length > 0"
    class="h-32 rounded-t-md"
    :style="`background-color: ${blok.color.color}`"
  >
    <component
      v-for="component in blok.body"
      :key="component._uid"
      :is="component.component"
      :blok="component"
      :class="[
        {
          'h-full': unicSet(component.component, 'media'),
        },
      ]"
    />
  </section>
</template>
<script>
import paragraph from "../paragraphIndex.vue";
import media from "../mediaIndex.vue";
export default {
  components: { paragraph, media },
  inject: ["unicSet"],
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

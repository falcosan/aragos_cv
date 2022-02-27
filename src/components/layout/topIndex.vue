<template>
  <div class="flex justify-between">
    <component
      v-for="component in blok.body"
      :key="component._uid"
      :is="component.component"
      :blok="component"
    />
  </div>
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

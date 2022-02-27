<template>
  <section>
    <component
      v-for="component in blok.body"
      :key="component._uid"
      :is="component.component"
      :blok="component"
    />
  </section>
</template>
<script>
import list from "../listIndex.vue";
export default {
  components: { list },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

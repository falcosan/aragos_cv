<template>
  <section class="flex flex-col space-y-5">
    <component
      v-for="component in blok.body"
      class="w-full"
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

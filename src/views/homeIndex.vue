<template>
  <template v-for="story in stories" :key="story.id">
    <component
      v-for="component in story.content.body"
      :key="component._uid"
      :is="component.component"
      :blok="component"
    />
  </template>
</template>
<script>
import top from "../components/layout/topIndex.vue";
import center from "../components/layout/centerIndex.vue";
import bottom from "../components/layout/bottomIndex.vue";
import { inject } from "vue";
export default {
  components: { top, center, bottom },
  setup() {
    const stories = inject("stories");
    return {
      stories,
    };
  },
};
</script>

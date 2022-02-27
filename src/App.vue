<template>
  <RouterView />
</template>
<script>
import { useStoryblokApi } from "@storyblok/vue";
import { ref, computed } from "vue";
export default {
  provide() {
    return {
      stories: computed(() => this.stories),
    };
  },
  setup() {
    const storyblok = useStoryblokApi();
    const stories = ref([]);
    storyblok.get("cdn/stories").then(({ data }) => {
      stories.value = data.stories;
    });
    return {
      stories,
    };
  },
};
</script>

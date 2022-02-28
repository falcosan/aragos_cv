<template>
  <main class="min-h-full bg-lime-200">
    <RouterView />
  </main>
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

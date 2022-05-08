<template>
  <RouterView />
</template>
<script>
import { ref, computed } from "vue";
import { StoryblokToken } from "./api/storyblok";
import { useStoryblokApi } from "@storyblok/vue";
export default {
  provide() {
    return {
      stories: computed(() => this.stories[this.language]),
      language: computed({
        get: () => this.language,
        set: (val) => (this.language = val),
      }),
    };
  },
  setup() {
    const StoryblokApi = useStoryblokApi();
    const stories = ref({});
    const language = ref(localStorage.getItem("lang") || "en");
    fetch(
      `https://api.storyblok.com/v1/cdn/spaces/me/?token=${StoryblokToken}`
    ).then(async (res) => {
      const { space } = await res.json();
      stories.value = space.language_codes.reduce(
        (acc, val) => {
          acc[val] = [];
          return acc;
        },
        { en: [] }
      );
      StoryblokApi.get("cdn/stories", {
        language: language.value,
      }).then(({ data }) => {
        stories.value[language.value] = data.stories;
        Object.keys(stories.value).forEach((currentLang) => {
          if (stories.value[currentLang].length === 0) {
            StoryblokApi.get("cdn/stories", {
              language: currentLang,
            }).then(({ data }) => {
              stories.value[currentLang] = data.stories;
            });
          }
        });
      });
    });
    return {
      stories,
      language,
    };
  },
};
</script>

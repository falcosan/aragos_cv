<template>
  <template v-for="story in setStories" :key="story.id">
    <main class="relative z-10">
      <translate @setLang="(lang) => (language = lang)" />
      <component
        v-for="component in story.content.body"
        :key="component._uid"
        :is="component.component"
        class="p-5 md:p-10"
        :blok="component"
      />
    </main>
    <div
      class="fixed inset-0 w-full h-full pointer-events-none"
      :style="`background-color: ${story.content.color.color}`"
    >
      <div
        v-if="story.content.background.filename"
        class="w-full h-full"
        :style="`background: url(${story.content.background.filename}) center center / cover no-repeat`"
      />
    </div>
  </template>
</template>
<script>
import top from "../components/layout/topIndex.vue";
import center from "../components/layout/centerIndex.vue";
import bottom from "../components/layout/bottomIndex.vue";
import translate from "../components/translateIndex.vue";
import { useStoryblokApi } from "@storyblok/vue";
import { ref, reactive, computed } from "vue";
export default {
  components: { top, center, bottom, translate },
  provide() {
    return {
      language: computed(() => this.language),
    };
  },
  setup() {
    const storyblok = useStoryblokApi();
    const stories = reactive({
      en: [],
      es: [],
    });
    const language = ref(localStorage.getItem("lang") || "en");
    const token = import.meta.env.DEV
      ? import.meta.env.VITE_STORYBLOK_PREVIEW
      : import.meta.env.VITE_STORYBLOK_PUBLIC;
    storyblok
      .get("cdn/stories", {
        language: language.value,
      })
      .then(({ data }) => {
        stories[language.value] = data.stories;
        fetch(
          `https://api.storyblok.com/v1/cdn/spaces/me/?token=${token}`
        ).then(async (res) => {
          const { space } = await res.json();
          const otherLang = ["en", ...space.language_codes].find(
            (lang) => lang !== language.value
          );
          storyblok
            .get("cdn/stories", {
              language: otherLang,
            })
            .then(({ data }) => {
              stories[otherLang] = data.stories;
            });
        });
      });
    const setStories = computed(() => stories[language.value]);
    return {
      language,
      setStories,
    };
  },
};
</script>

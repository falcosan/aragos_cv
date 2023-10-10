<template>
  <template v-for="story in stories" :key="story.id">
    <main class="relative z-10">
      <translate @setLang="(l) => (language = l)" />
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
import { inject } from "vue";
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { top, center, bottom, translate },
  setup() {
    const stories = inject("stories");
    const language = inject("language");
    return {
      stories,
      language,
    };
  },
};
</script>

<template>
  <div
    :class="[
      { 'max-w-prose mx-auto': blok.center },
      { 'rounded-md shadow-md bg-gray-50': blok.card },
    ]"
  >
    <Markdown
      class="prose prose-ul:p-0"
      :class="{ 'p-5': blok.card }"
      :source="source"
      breaks
      emoji
      html
      linkify
    />
  </div>
</template>
<script>
import { computed } from "vue";
import Markdown from "vue3-markdown-it";
export default {
  components: {
    Markdown,
  },
  props: {
    blok: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const source = computed(() => props.blok.replace(/` `/g, "</br>"));
    return {
      source,
    };
  },
};
</script>

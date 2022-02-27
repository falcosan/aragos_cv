<template>
  <Markdown class="prose" :source="blok.text" breaks emoji html linkify />
</template>
<script>
import Markdown from "vue3-markdown-it";
export default {
  components: {
    Markdown,
  },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

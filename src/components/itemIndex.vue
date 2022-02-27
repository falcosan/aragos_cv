<template>
  <Icon
    v-if="blok.drop_text"
    class="mr-2.5 transition"
    :class="[
      { 'transform rotate-90': showDropText },
      { 'cursor-pointer': blok.drop_text },
    ]"
    icon="bx:chevron-right"
    width="30"
    @click="toggleDropText(blok)"
  />
  <div class="w-full" :class="{ 'flex flex-col': blok.drop_text }">
    <Markdown
      :class="{ 'cursor-pointer': blok.drop_text }"
      :source="blok.text"
      @click="toggleDropText(blok)"
    />
    <Markdown v-if="blok.drop_text && showDropText" :source="blok.drop_text" />
  </div>
</template>
<script>
import { ref } from "vue";
import Markdown from "vue3-markdown-it";
import { Icon } from "@iconify/vue";
export default {
  components: { Markdown, Icon },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const showDropText = ref(false);
    const toggleDropText = (item) => {
      if (item.drop_text) showDropText.value = !showDropText.value;
    };
    return {
      showDropText,
      toggleDropText,
    };
  },
};
</script>

<template>
  <div
    class="prose prose-p:m-0 my-5 mx-auto rounded-md shadow-md bg-gray-50"
    :class="{ 'max-w-prose mx-auto': blok.center }"
  >
    <span v-if="blok.title" class="block text-xl p-5" v-text="blok.title" />
    <ul class="grid gap-y-5 p-5">
      <li
        v-for="(item, index) in blok.body"
        :key="index"
        :class="{ 'flex items-start': item.drop_text }"
      >
        <Icon
          v-if="item.drop_text"
          class="mr-2.5 transition"
          :class="{ 'transform rotate-90': showDropText }"
          icon="bx:chevron-right"
          width="30"
          @click="toggleDropText(item)"
        />
        <div class="w-full" :class="{ 'flex flex-col': item.drop_text }">
          <Markdown
            :class="{ 'cursor-pointer': item.drop_text }"
            :source="item.text"
            @click="toggleDropText(item)"
          />
          <Markdown
            v-if="item.drop_text && showDropText"
            :source="item.drop_text"
          />
        </div>
      </li>
    </ul>
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

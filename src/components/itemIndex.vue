<template>
  <li class="flex items-start">
    <Icon
      v-if="removeBackticks(blok.drop_text)"
      class="flex-none mr-3 mt-1 transition"
      :class="[
        { 'transform rotate-90': showDropText },
        {
          'cursor-pointer': removeBackticks(blok.drop_text),
        },
      ]"
      icon="bx:chevron-right"
      width="20"
      @click="toggleDropText(blok)"
    />
    <div
      :class="`pr-3 md:pr-5 ${
        removeBackticks(blok.drop_text) ? 'flex items-start' : 'list-none'
      }`"
    >
      <div
        class="w-full"
        :class="{
          'flex flex-col': removeBackticks(blok.drop_text),
        }"
      >
        <paragraph
          :class="{
            'cursor-pointer': removeBackticks(blok.drop_text),
          }"
          :blok="blok.text"
          @click="toggleDropText(blok)"
        />
        <paragraph
          v-if="removeBackticks(blok.drop_text) && showDropText"
          class="mt-3"
          :blok="blok.drop_text"
        />
      </div>
    </div>
  </li>
</template>
<script>
import { ref, inject } from "vue";
import { Icon } from "@iconify/vue";
import paragraph from "./paragraphIndex.vue";
export default {
  components: { Icon, paragraph },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const removeBackticks = inject("removeBackticks");
    const showDropText = ref(false);
    const toggleDropText = (item) => {
      if (removeBackticks(item.drop_text)) {
        showDropText.value = !showDropText.value;
      }
    };
    return {
      showDropText,
      toggleDropText,
      removeBackticks,
    };
  },
};
</script>

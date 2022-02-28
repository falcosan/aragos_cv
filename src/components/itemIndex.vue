<template>
  <li>
    <div
      :class="`${
        removeBackticks(blok.drop_text) ? 'flex flex-col' : 'list-none'
      }`"
    >
      <div
        class="w-full"
        :class="{
          'flex items-center': removeBackticks(blok.drop_text),
        }"
      >
        <Icon
          v-if="removeBackticks(blok.drop_text)"
          class="mr-3 transition"
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
        <paragraph
          :class="{
            'cursor-pointer': removeBackticks(blok.drop_text),
          }"
          :blok="blok"
          @click="toggleDropText(blok)"
        />
      </div>
      <paragraph
        v-if="removeBackticks(blok.drop_text) && showDropText"
        class="mt-3 pl-6 pr-2"
        :blok="blok"
        source="drop_text"
      />
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

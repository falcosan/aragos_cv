<template>
  <li>
    <div
      :class="[removeBackticks(blok.drop_text) ? 'flex flex-col' : 'list-none']"
    >
      <div
        :class="[
          'w-full p-5',
          {
            'flex items-center rounded-t transition cursor-pointer':
              removeBackticks(blok.drop_text),
          },
          {
            [showDropText
              ? 'relative z-10 hover:shadow-gray-300 hover:shadow-md bg-gray-200'
              : 'hover:bg-gray-100 rounded-b']: removeBackticks(blok.drop_text),
          },
        ]"
        @click="toggleDropText(blok)"
      >
        <Icon
          v-if="removeBackticks(blok.drop_text)"
          :class="[
            'flex-none mr-5 transition',
            { 'transform rotate-90': showDropText },
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
        />
      </div>
      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
      >
        <paragraph
          v-if="removeBackticks(blok.drop_text) && showDropText"
          class="p-5 rounded-b bg-gray-200"
          :blok="blok"
          source="drop_text"
        />
      </transition>
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

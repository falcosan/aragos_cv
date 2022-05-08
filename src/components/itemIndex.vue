<template>
  <li>
    <div
      :class="[removeBackticks(blok.drop_text) ? 'flex flex-col' : 'list-none']"
    >
      <div
        :class="[
          'relative w-full z-10 p-5',
          {
            'flex flex-col-reverse md:flex-row rounded-t transition cursor-pointer':
              removeBackticks(blok.drop_text),
          },
          {
            [showDropText
              ? 'shadow shadow-slate-300 bg-slate-200'
              : 'hover:bg-slate-100 rounded-b']: removeBackticks(
              blok.drop_text
            ),
          },
        ]"
        @click="toggleDropText(blok)"
      >
        <Icon
          v-if="removeBackticks(blok.drop_text)"
          :class="[
            'flex-none self-center mr-0 mt-5 md:mt-0 md:mr-5 transform transition',
            showDropText ? '-rotate-90 md:rotate-90' : 'rotate-90 md:rotate-0',
          ]"
          icon="bx:chevron-right"
          width="20"
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
        enter-from-class="transform opacity-0 -translate-y-1/2"
        enter-to-class="opacity-100"
        leave-active-class="duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0 -translate-y-1/2"
      >
        <paragraph
          v-if="removeBackticks(blok.drop_text) && showDropText"
          class="p-5 rounded-b shadow-inner bg-slate-200"
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

<template>
  <li>
    <div
      :class="[removeBackticks(blok.drop_text) ? 'flex flex-col' : 'list-none']"
    >
      <div
        :class="[
          'relative w-full z-10 px-5',
          {
            'flex flex-col-reverse py-5 md:flex-row rounded-t transition cursor-pointer ':
              removeBackticks(blok.drop_text),
          },
          {
            [showDropText ? 'appear' : 'disappear rounded-b']: removeBackticks(
              blok.drop_text
            ),
          },
        ]"
        @[ev.mouseEnter]="hover = true"
        @[ev.mouseLeave]="hover = false"
        @click="toggleDropText(blok)"
      >
        <Icon
          v-if="removeBackticks(blok.drop_text)"
          :class="[
            'flex-none self-center mr-0 mt-5 md:mt-0 md:mr-5 transform transition',
            showDropText ? '-rotate-90 md:rotate-90' : 'rotate-90 md:rotate-0',
            {
              'text-white':
                (hover || showDropText) && color && themeColor(color),
            },
          ]"
          icon="bx:chevron-right"
          width="20"
        />
        <paragraph
          :class="{
            'cursor-pointer': removeBackticks(blok.drop_text),
          }"
          :style="`color: ${blok.color.color}`"
          :blok="blok"
          :color="hover || showDropText ? color : ''"
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
          class="inner-appear p-5 rounded-b shadow-inner"
          :style="`color: ${blok.color.color}`"
          :blok="blok"
          :color="color"
          source="drop_text"
        />
      </transition>
    </div>
  </li>
</template>
<script>
import { ref, inject, computed } from "vue";
import { Icon } from "@iconify/vue";
import paragraph from "./paragraphIndex.vue";
export default {
  components: { Icon, paragraph },
  inject: ["themeColor"],
  props: {
    blok: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const removeBackticks = inject("removeBackticks");
    const hover = ref(false);
    const showDropText = ref(false);
    const toggleDropText = (item) => {
      if (removeBackticks(item.drop_text)) {
        showDropText.value = !showDropText.value;
      }
    };
    const ev = computed(() => ({
      mouseEnter: removeBackticks(props.blok.drop_text) ? "mouseenter" : null,
      mouseLeave: removeBackticks(props.blok.drop_text) ? "mouseleave" : null,
    }));
    return {
      ev,
      hover,
      showDropText,
      toggleDropText,
      removeBackticks,
      outerColor: props.color,
    };
  },
};
</script>
<style>
.appear {
  background-color: v-bind(outerColor);
  box-shadow: 0px 2px 3px 0px v-bind(outerColor);
}
.appear:hover {
  background-color: v-bind(outerColor + "CC");
}
.disappear:hover {
  background-color: v-bind(outerColor);
}
.inner-appear {
  background-color: v-bind(outerColor + "A5");
}
</style>

<template>
  <div
    :class="[
      'overflow-hidden rounded-md shadow-md',
      { 'bg-gray-50': !blok.list_color.color },
      { 'max-w-prose mx-auto': blok.center },
    ]"
  >
    <span
      v-if="blok.title"
      :class="[
        'block p-5 font-semibold text-xl',
        {
          'text-white':
            blok.content_color.color && themeColor(blok.content_color.color),
        },
      ]"
      :style="`background-color: ${blok.content_color.color}`"
      v-text="blok.title"
    />
    <ul class="p-5">
      <item
        v-for="(item, index) in blok.body"
        :blok="item"
        :color="blok.content_color.color"
        :key="index"
        :class="[
          {
            'hr mb-5':
              index !== blok.body.length - 1 &&
              !removeBackticks(item.drop_text),
          },
          {
            'pb-5':
              (index === 0 || index !== blok.body.length - 1) &&
              blok.body.length > 1 &&
              !removeBackticks(item.drop_text),
          },
          {
            'mb-5':
              index !== blok.body.length - 1 && removeBackticks(item.drop_text),
          },
        ]"
      />
    </ul>
  </div>
</template>
<script>
import item from "./itemIndex.vue";
export default {
  components: { item },
  inject: ["removeBackticks", "themeColor"],
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

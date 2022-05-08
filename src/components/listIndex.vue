<template>
  <div
    class="rounded-md shadow-md bg-gray-50"
    :class="{ 'max-w-prose mx-auto': blok.center }"
  >
    <span
      v-if="blok.title"
      class="block p-5 font-semibold text-xl"
      v-text="blok.title"
    />
    <ul class="p-5">
      <item
        v-for="(item, index) in blok.body"
        :blok="item"
        :key="index"
        :class="[
          {
            'border-b mb-5':
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
  inject: ["removeBackticks"],
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

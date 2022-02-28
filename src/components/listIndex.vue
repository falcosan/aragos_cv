<template>
  <div
    class="rounded-md shadow-md bg-gray-50"
    :class="{ 'max-w-prose mx-auto': blok.center }"
  >
    <span v-if="blok.title" class="block text-xl p-5" v-text="blok.title" />
    <ul
      :class="`${
        blok.body.some(
          (item) => item.drop_text && removeBackticks(item.drop_text)
        )
          ? 'px-3 py-5 md:px-5'
          : 'p-5'
      }`"
    >
      <item
        v-for="(item, index) in blok.body"
        :blok="item"
        :key="index"
        :class="[
          { 'pb-5': index === 0 },
          { 'pt-5': index === blok.body.length - 1 },
          { 'border-b': index !== blok.body.length - 1 },
          { 'py-5': index !== blok.body.length - 1 && index !== 0 },
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

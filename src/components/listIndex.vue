<template>
  <div
    class="rounded-md shadow-md bg-gray-50"
    :class="{ 'max-w-prose mx-auto': blok.center }"
  >
    <span v-if="blok.title" class="block text-xl p-5" v-text="blok.title" />
    <ul
      :class="`grid gap-y-5 ${
        blok.body.some(
          (item) =>
            item.drop_text && !item.drop_text.replace(/\s/g, '') === '``'
        )
          ? 'px-3 py-5 md:px-5'
          : 'p-5'
      }`"
    >
      <item v-for="(item, index) in blok.body" :blok="item" :key="index" />
    </ul>
  </div>
</template>
<script>
import item from "./itemIndex.vue";
export default {
  components: { item },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

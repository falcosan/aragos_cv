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
        :class="`p-0 m-0 ${item.drop_text ? 'flex items-start' : 'list-none'}`"
      >
        <item :blok="item" />
      </li>
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

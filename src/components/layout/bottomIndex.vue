<template>
  <section
    v-if="blok.body.length > 0"
    class="bottom max-w-prose flex flex-wrap justify-end mx-auto rounded-t-md"
    :style="`background-color: ${blok.color.color}`"
  >
    <div class="flex flex-wrap items-center self-baseline">
      <component
        v-for="component in blok.body"
        :key="component._uid"
        :is="component.component"
        :blok="component"
        class="mx-2.5"
        :class="[
          {
            'h-full': unicSet(component.component, 'media'),
          },
        ]"
      />
    </div>
  </section>
</template>
<script>
import paragraph from "../paragraphIndex.vue";
import media from "../mediaIndex.vue";
import link from "../linkIndex.vue";
export default {
  components: { paragraph, media, link },
  inject: ["unicSet"],
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const filterComponent = (componentName, exclude = false) => {
      return props.blok.body.filter((comp) => {
        if (exclude) return comp.component !== componentName;
        else return comp.component === componentName;
      });
    };
    return {
      filterComponent,
    };
  },
};
</script>

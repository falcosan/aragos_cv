<template>
  <img
    class="object-cover object-center"
    :src="blok.media.filename"
    :srcset="`${blok.media.filename}/m/500x, ${blok.media.filename}/m/750x`"
    sizes="(max-width: 600px) 480px,
            800px"
    draggable="false"
  />
</template>
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>

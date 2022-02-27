import { StoryblokVue, apiPlugin } from "@storyblok/vue";

const StoryblokConfig = {
  accessToken: import.meta.env.VITE_STORYBLOK_PREVIEW,
  bridge: import.meta.env.DEV,
  use: [apiPlugin],
};

export { StoryblokVue, StoryblokConfig };

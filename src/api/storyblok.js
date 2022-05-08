import { StoryblokVue, apiPlugin } from "@storyblok/vue";
const StoryblokToken = import.meta.env.DEV
  ? import.meta.env.VITE_STORYBLOK_PREVIEW
  : import.meta.env.VITE_STORYBLOK_PUBLIC;
const StoryblokConfig = {
  accessToken: StoryblokToken,
  bridge: import.meta.env.DEV,
  use: [apiPlugin],
};
export { StoryblokVue, StoryblokConfig, StoryblokToken };

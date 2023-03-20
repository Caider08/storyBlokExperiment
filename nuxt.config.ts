// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [ "@/assets/main.css"], 
     modules: [
        [
            "@storyblok/nuxt", {
            accessToken: "ZSItjTvrnsQ960vM8HIJ8Att",
            apiOptions: {
                region: "us",
            }
        }
    ]
     ]
});

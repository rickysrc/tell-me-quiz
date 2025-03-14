import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import staticAdapter from "@astrojs/vercel/static";

export default defineConfig({
  integrations: [tailwind(), react()],
  output: "static",
  adapter: staticAdapter(),
});

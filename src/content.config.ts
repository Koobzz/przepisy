import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
});

export const collections = {
  recipes,
};

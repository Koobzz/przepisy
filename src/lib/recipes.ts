import type { CollectionEntry } from "astro:content";
import { sitePath } from "./urls";

export type Recipe = CollectionEntry<"recipes">;

export function recipeSlug(recipe: Recipe) {
  return String(recipe.data.slug || recipe.slug);
}

export function recipeUrl(recipe: Recipe) {
  return sitePath(`przepisy/${recipeSlug(recipe)}/`);
}

export function recipeImage(recipe: Recipe) {
  const image = String(recipe.data.image || "/images/placeholder.jpg");
  return sitePath(image);
}

export function sortedRecipes(recipes: Recipe[]) {
  return [...recipes].sort((a, b) =>
    String(a.data.title).localeCompare(String(b.data.title), "pl")
  );
}

export function recipeTags(recipe: Recipe) {
  return Array.isArray(recipe.data.tags) ? recipe.data.tags.map(String) : [];
}

export function allTags(recipes: Recipe[]) {
  const counts = new Map<string, number>();

  for (const recipe of recipes) {
    for (const tag of recipeTags(recipe)) {
      counts.set(tag, (counts.get(tag) || 0) + 1);
    }
  }

  return [...counts.entries()].sort(([a], [b]) => a.localeCompare(b, "pl"));
}

export function recipesWithTag(recipes: Recipe[], tag: string) {
  return sortedRecipes(recipes).filter((recipe) => recipeTags(recipe).includes(tag));
}

# Przepisy

Statyczna strona z przepisami zbudowana w Astro. Każdy przepis jest osobnym plikiem Markdown, a wyszukiwanie działa lokalnie dzięki Pagefind.

## Dodawanie przepisu

1. Utwórz plik `.md` w katalogu `src/content/recipes/`.
2. Dodaj wymagane pola front matter: `title`, `slug`, `tags`, `image`.
3. W treści przepisu użyj zwykłych sekcji Markdown, np. `## Składniki` i `## Przygotowanie`.

Szablon:

```markdown
---
title: "Nazwa przepisu"
slug: "nazwa-przepisu"
tags: ["obiad", "łatwe"]
image: "/images/nazwa-przepisu.jpg"
servings: "4 porcje"
prepTime: "15 minut"
cookTime: "30 minut"
---

## Składniki

- składnik 1
- składnik 2

## Przygotowanie

1. Krok pierwszy.
2. Krok drugi.

## Notatki

Opcjonalne notatki.
```

## Dodawanie obrazu

Wgraj jeden obraz przepisu do `public/images/`, a następnie wpisz jego ścieżkę w polu `image`, np.:

```yaml
image: "/images/nazwa-przepisu.jpg"
```

Jeżeli obraz nie zostanie podany, strona użyje `public/images/placeholder.jpg`.

## Tagi

Tagi edytuje się w polu `tags` w pliku przepisu:

```yaml
tags: ["obiad", "ziemniaki", "łatwe"]
```

Strona `/tagi/` pokazuje wszystkie tagi alfabetycznie z liczbą przepisów.

## Uruchamianie lokalnie

```bash
npm exec node -- -v
npm install
npm run dev
```

Projekt używa Node 22. Plik `.nvmrc` wskazuje wymaganą wersję, a `package.json` instaluje lokalny runtime Node 22 dla skryptów npm.

Budowanie strony i indeksu wyszukiwania:

```bash
npm run build
```

Podgląd gotowej strony:

```bash
npm run preview
```

## Wdrożenie

Repozytorium ma workflow GitHub Actions w `.github/workflows/deploy.yml`. Po wypchnięciu zmian na gałąź `main` workflow buduje stronę i publikuje katalog `dist` na GitHub Pages.

W ustawieniach repozytorium włącz GitHub Pages i ustaw źródło na `GitHub Actions`.

Jeżeli adres repozytorium lub nazwa użytkownika się zmieni, zaktualizuj `site` i `base` w `astro.config.mjs`.

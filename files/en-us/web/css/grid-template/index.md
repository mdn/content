---
title: grid-template
slug: Web/CSS/grid-template
page-type: css-shorthand-property
browser-compat: css.properties.grid-template
---

{{CSSRef}}

The **`grid-template`** [CSS](/en-US/docs/Web/CSS) property is a [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) for defining {{glossary("grid column", "grid columns")}}, {{glossary("grid_row", "grid rows")}}, and {{glossary("grid areas", "grid areas")}}.

{{EmbedInteractiveExample("pages/css/grid-template.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`grid-template-areas`](/en-US/docs/Web/CSS/grid-template-areas)
- [`grid-template-columns`](/en-US/docs/Web/CSS/grid-template-columns)
- [`grid-template-rows`](/en-US/docs/Web/CSS/grid-template-rows)

## Syntax

```css
/* Keyword value */
grid-template: none;

/* grid-template-rows / grid-template-columns values */
grid-template: 100px 1fr / 50px 1fr;
grid-template: auto 1fr / auto 1fr auto;
grid-template: [linename] 100px / [columnname1] 30% [columnname2] 70%;
grid-template: fit-content(100px) / fit-content(40%);

/* grid-template-areas grid-template-rows / grid-template-column values */
grid-template:
  "a a a"
  "b b b";
grid-template:
  "a a a" 20%
  "b b b" auto;
grid-template:
  [header-top] "a a a" [header-bottom]
  [main-top] "b b b" 1fr [main-bottom]
  / auto 1fr auto;

/* Global values */
grid-template: inherit;
grid-template: initial;
grid-template: revert;
grid-template: revert-layer;
grid-template: unset;
```

### Values

- `none`
  - : Is a keyword that sets all three longhand properties to `none`, meaning there is no explicit grid. There are no named grid areas. Rows and columns will be implicitly generated; their size will be determined by the {{cssxref("grid-auto-rows")}} and {{cssxref("grid-auto-columns")}} properties.
- `<'grid-template-rows'> / <'grid-template-columns'>`
  - : Sets {{cssxref("grid-template-rows")}} and {{cssxref("grid-template-columns")}} to the specified values, and sets {{cssxref("grid-template-areas")}} to `none`.
- `[ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`

  - : Sets {{cssxref("grid-template-areas")}} to the strings listed, {{cssxref("grid-template-rows")}} to the track sizes following each string (filling in `auto` for any missing sizes), and splicing in the named lines defined before/after each size, and {{cssxref("grid-template-columns")}} to the track listing specified after the slash (or `none`, if not specified).

    > **Note:** The {{cssxref("repeat", "repeat()")}} function isn't allowed in these track listings, as the tracks are intended to visually line up one-to-one with the rows/columns in the "ASCII art".

> **Note:** The {{cssxref("grid")}} shorthand accepts the same syntax, but also resets the implicit grid properties to their initial values. Use `grid` (as opposed to `grid-template`) to prevent these values from cascading in separately.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Defining a grid template

#### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 200px;
  grid-template:
    [header-left] "head head" 30px [header-right]
    [main-left] "nav  main" 1fr [main-right]
    [footer-left] "nav  foot" 30px [footer-right]
    / 120px 1fr;
}

header {
  background-color: lime;
  grid-area: head;
}

nav {
  background-color: lightblue;
  grid-area: nav;
}

main {
  background-color: yellow;
  grid-area: main;
}

footer {
  background-color: red;
  grid-area: foot;
}
```

#### HTML

```html
<div id="page">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main area</main>
  <footer>Footer</footer>
</div>
```

#### Result

{{EmbedLiveSample("Defining_a_grid_template", "100%", "200px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- [Line-based placement with CSS grid](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid template areas: grid definition shorthands](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#grid_definition_shorthands)
- Video: [Grid template shorthand](https://gridbyexample.com/video/grid-template-shorthand/)

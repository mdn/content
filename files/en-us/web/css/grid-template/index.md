---
title: grid-template
slug: Web/CSS/grid-template
page-type: css-shorthand-property
browser-compat: css.properties.grid-template
---

{{CSSRef}}

The **`grid-template`** CSS property is a [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) for defining {{glossary("grid column", "grid columns")}}, {{glossary("grid_row", "grid rows")}}, and {{glossary("grid areas", "grid areas")}}.

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
<section id="page">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main area</main>
  <footer>Footer</footer>
</section>
```

#### Result

{{EmbedLiveSample("Defining_a_grid_template", "100%", "200px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Grid Layout Guide: _[Grid template areas - Grid definition shorthands](/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#grid_definition_shorthands)_
- Video tutorial: _[Grid Template shorthand](https://gridbyexample.com/video/grid-template-shorthand/)_

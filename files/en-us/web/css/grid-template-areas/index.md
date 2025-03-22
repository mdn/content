---
title: grid-template-areas
slug: Web/CSS/grid-template-areas
page-type: css-property
browser-compat: css.properties.grid-template-areas
---

{{CSSRef}}

The **`grid-template-areas`** [CSS](/en-US/docs/Web/CSS) property specifies named {{glossary("grid areas")}}, establishing the cells in the grid and assigning them names.

{{InteractiveExample("CSS Demo: grid-template-areas")}}

```css interactive-example-choice
grid-template-areas:
  "a a a"
  "b c c"
  "b c c";
```

```css interactive-example-choice
grid-template-areas:
  "b b a"
  "b b c"
  "b b c";
```

```css interactive-example-choice
grid-template-areas:
  "a a ."
  "a a ."
  ". b c";
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One (a)</div>
      <div>Two (b)</div>
      <div>Three (c)</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-gap: 10px;
  width: 200px;
}

#example-element :nth-child(1) {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  grid-area: a;
}

#example-element :nth-child(2) {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
  grid-area: b;
}

#example-element :nth-child(3) {
  background-color: rgba(94, 255, 0, 0.2);
  border: 3px solid green;
  grid-area: c;
}
```

Those areas are not associated with any particular grid item, but can be referenced from the grid-placement properties {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, and their shorthands {{cssxref("grid-row")}}, {{cssxref("grid-column")}}, and {{cssxref("grid-area")}}.

## Syntax

```css
/* Keyword value */
grid-template-areas: none;

/* <string> values */
grid-template-areas: "a b";
grid-template-areas:
  "a b ."
  "a c d";

/* Global values */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: revert;
grid-template-areas: revert-layer;
grid-template-areas: unset;
```

### Values

- `none`
  - : The grid container doesn't define any named grid areas.
- `{{cssxref("&lt;string&gt;")}}+`

  - : A row is created for every separate string listed, and a column is created for each cell in the string. Multiple cell tokens with the same name within and between rows create a single named grid area that spans the corresponding grid cells. Unless those cells form a rectangle, the declaration is invalid.

    All the remaining unnamed areas in a grid can be referred using _null cell tokens_. A null cell token is a sequence of one or more `.` (U+002E FULL STOP) characters, e.g. `.`, `...`, or `.....` etc. A null cell token can be used to create empty spaces in the grid.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Specifying named grid areas

#### HTML

```html
<div id="page">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main area</main>
  <footer>Footer</footer>
</div>
```

#### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas:
    "head head"
    "nav  main"
    ".  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```

In the above code, a null token (`.`) was used to create an unnamed area in the grid container, which we used to create an empty space at the bottom left corner of the grid.

#### Result

{{EmbedLiveSample("Specifying_named_grid_areas", "100%", "285px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template")}}
- [Grid template areas](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- Video: [Grid template areas](https://gridbyexample.com/video/grid-template-areas/)

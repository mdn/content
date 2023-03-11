---
title: grid
slug: Web/CSS/grid
page-type: css-shorthand-property
browser-compat: css.properties.grid
---

{{CSSRef}}

The **`grid`** CSS property is a [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) that sets all of the explicit and implicit grid properties in a single declaration.

Using `grid` you specify one axis using {{cssxref("grid-template-rows")}} or {{cssxref("grid-template-columns")}}, you then specify how content should auto-repeat in the other axis using the implicit grid properties: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}, and {{cssxref("grid-auto-flow")}}.

{{EmbedInteractiveExample("pages/css/grid.html")}}

> **Note:** The sub-properties you don't specify are set to their initial value, as normal for shorthands. Also, the gutter properties are NOT reset by this shorthand.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`grid-auto-columns`](/en-US/docs/Web/CSS/grid-auto-columns)
- [`grid-auto-flow`](/en-US/docs/Web/CSS/grid-auto-flow)
- [`grid-auto-rows`](/en-US/docs/Web/CSS/grid-auto-rows)
- [`grid-template-areas`](/en-US/docs/Web/CSS/grid-template-areas)
- [`grid-template-columns`](/en-US/docs/Web/CSS/grid-template-columns)
- [`grid-template-rows`](/en-US/docs/Web/CSS/grid-template-rows)

## Syntax

```css
/* <'grid-template'> values */
grid: none;
grid: "a" 100px "b" 1fr;
grid: [linename1] "a" 100px [linename2];
grid: "a" 200px "b" min-content;
grid: "a" minmax(100px, max-content) "b" 20%;
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

/* <'grid-template-rows'> /
   [ auto-flow && dense? ] <'grid-auto-columns'>? values */
grid: 200px / auto-flow;
grid: 30% / auto-flow dense;
grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* [ auto-flow && dense? ] <'grid-auto-rows'>? /
   <'grid-template-columns'> values */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* Global values */
grid: inherit;
grid: initial;
grid: revert;
grid: revert-layer;
grid: unset;
```

### Values

- `<'grid-template'>`
  - : Defines the {{cssxref("grid-template")}} including {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} and {{cssxref("grid-template-areas")}}.
- `<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`

  - : Sets up an auto-flow by setting the row tracks explicitly via the {{cssxref("grid-template-rows")}} property (and the {{cssxref("grid-template-columns")}} property to `none`) and specifying how to auto-repeat the column tracks via {{cssxref("grid-auto-columns")}} (and setting {{cssxref("grid-auto-rows")}} to `auto`). {{cssxref("grid-auto-flow")}} is also set to `column` accordingly, with `dense` if it's specified.

    All other `grid` sub-properties are reset to their initial values.

- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`

  - : Sets up an auto-flow by setting the column tracks explicitly via the {{cssxref("grid-template-columns")}} property (and the {{cssxref("grid-template-rows")}} property to `none`) and specifying how to auto-repeat the row tracks via {{cssxref("grid-auto-rows")}} (and setting {{cssxref("grid-auto-columns")}} to `auto`). {{cssxref("grid-auto-flow")}} is also set to `row` accordingly, with `dense` if it's specified.

    All other `grid` sub-properties are reset to their initial values.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating a grid layout

#### HTML

```html
<div id="container">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
```

#### Result

{{EmbedLiveSample("Creating_a_grid_layout", "100%", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Grid Layout Guide: _[Grid template areas - Grid definition shorthands](/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#grid_definition_shorthands)_

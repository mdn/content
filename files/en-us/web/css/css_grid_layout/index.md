---
title: CSS grid layout
slug: Web/CSS/CSS_grid_layout
page-type: css-module
spec-urls: https://drafts.csswg.org/css-grid/
---

{{CSSRef}}

The **CSS grid layout** module excels at dividing a page into major regions or defining the relationship in terms of size, position, and layering between parts of a control built from HTML primitives.

Like tables, grid layout enables an author to align elements into columns and rows. However, many more layouts are either possible or easier with CSS grid than they were with tables. For example, a grid container's child elements could position themselves so they actually overlap and layer, similar to CSS positioned elements.

## Grid layout in action

The example shows a three-column track grid with new rows created at a minimum of 100 pixels and a maximum of auto. Items have been placed onto the grid using line-based placement.

```html hidden
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}
.wrapper > div {
  border: 2px solid rgb(233 171 88);
  border-radius: 5px;
  background-color: rgb(233 171 88 / 50%);
  padding: 1em;
  color: #d9480f;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 2 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
```

{{EmbedLiveSample("Grid_layout_in_action", "100%", "460")}}

This sample animation uses {{cssxref("display")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}}, and {{cssxref("gap")}} to create the grid, and {{cssxref("grid-column")}} and {{cssxref("grid-row")}} to position items within in the grid. To view and edit the HTML and CSS used, click the 'Play' at the top right of the example.

## Reference

### Properties

- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}} shorthand
- {{CSSxRef("grid")}} shorthand
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column")}} shorthand
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row")}} shorthand
- {{CSSxRef("grid-area")}} shorthand

### Functions

- {{CSSxRef("repeat", "repeat()")}}
- {{CSSxRef("minmax", "minmax()")}}
- {{CSSxRef("fit-content_function", "fit-content()")}}

### Data types and values

- {{CSSxRef("&lt;flex&gt;")}} (`fr` unit)

### Terms and glossary definitions

- {{glossary("Grid")}}
- {{glossary("Grid areas")}}
- {{glossary("Grid axis")}}
- {{glossary("Grid cell")}}
- {{glossary("Grid column")}}
- {{glossary("Grid container")}}
- {{glossary("Grid lines")}}
- {{glossary("Grid row")}}
- {{glossary("Grid tracks")}}
- {{glossary("Gutters")}}

## Guides

- [Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)

  - : An overview of the various features provided in the CSS grid layout module.

- [Relationship of grid layout with other layout methods](/en-US/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)

  - : How grid layout fits together with other CSS features including flexbox, absolutely positioned elements, and `display: contents`.

- [Grid layout using line-based placement](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)

  - : Grid lines and how to position items against those lines, including the `grid-area` properties, negative line numbers, spanning multiple cells, and creating grid gutters.

- [Grid template areas](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)

  - : Placing grid items using named template areas.

- [Grid layout using named grid lines](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)

  - : Combining names and track sizes; placing grid items by defining named grid lined and template areas.

- [Auto-placement in grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)

  - : How grid positions items that don't have any placement properties declared.

- [Aligning items in CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)

  - : Aligning, justifying, and centering grid items along the two axes of a grid layout.

- [Grids, logical values, and writing modes](/en-US/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)

  - : A look at the interaction between CSS grid layout, box alignment and writing modes, along with CSS logical and physical properties and values.

- [Grid layout and accessibility](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)

  - : A look at how CSS grid layout can both help and harm accessibility.

- [Realizing common layouts using grids](/en-US/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

  - : A few different layouts demonstrating different techniques you can use when designing with CSS grid layouts, including using {{cssxref("grid-template-areas")}}, a 12-column flexible grid system, and a product listing using auto-placement.

- [Subgrid](/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid)

  - : What subgrid does with use cases and design patterns that subgrid solves.

- [Masonry layout](/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout)

  - : Details what masonry layout is and it is used.

- [Box alignment in CSS grid layout](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)

  - : How box alignment works in the context of grid layout.

## Related features

[CSS display](/en-US/docs/Web/CSS/CSS_display) module

- {{CSSxRef("display")}}
- {{CSSxRef("order")}}

[CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("place-self")}}
- {{cssxref("row-gap")}}

[CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module

- {{cssxref("aspect-ratio")}}
- {{cssxref("box-sizing")}}
- {{cssxref("height")}}
- {{cssxref("max-height")}}
- {{cssxref("max-width")}}
- {{cssxref("min-height")}}
- {{cssxref("min-width")}}
- {{cssxref("width")}}
- {{cssxref("ratio")}} data type
- {{cssxref("min-content")}} value
- {{cssxref("max-content")}} value
- {{cssxref("fit-content")}} value
- {{cssxref("fit-content_function", "fit-content()")}} function

## Specifications

{{Specifications}}

## See also

- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS display](/en-US/docs/Web/CSS/CSS_display) module
- [Grid by example](https://gridbyexample.com/)
- [CSS grid reference](https://tympanus.net/codrops/css_reference/grid/) via Codrops
- [Firefox DevTools: grid inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS grid playground](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS grid garden](https://cssgridgarden.com/) - A game for learning CSS grid

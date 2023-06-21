---
title: CSS grid layout
slug: Web/CSS/CSS_grid_layout
page-type: css-module
spec-urls: https://drafts.csswg.org/css-grid/
---

{{CSSRef}}

The **CSS grid layout** module excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.

Like tables, grid layout enables an author to align elements into columns and rows. However, many more layouts are either possible or easier with CSS grid than they were with tables. For example, a grid container's child elements could position themselves so they actually overlap and layer, similar to CSS positioned elements.

## Basic example

The example below shows a three-column track grid with new rows created at a minimum of 100 pixels and a maximum of auto. Items have been placed onto the grid using line-based placement.

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
  background-color: rgba(233 171 88 / 0.5);
  padding: 1em;
  color: #d9480f;
}
```

### HTML

```html
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
```

### CSS

```css
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

{{EmbedLiveSample("Basic_example", "100%", "460")}}

## Reference

### Properties

- {{CSSxRef("display")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}}
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid")}}
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-row")}}
- {{CSSxRef("grid-column")}}
- {{CSSxRef("grid-area")}}
- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}
- {{CSSxRef("masonry-auto-flow")}} {{Experimental_Inline}}
- {{CSSxRef("align-tracks")}} {{Experimental_Inline}}
- {{CSSxRef("justify-tracks")}} {{Experimental_Inline}}

### Functions

- {{CSSxRef("repeat", "repeat()")}}
- {{CSSxRef("minmax", "minmax()")}}
- {{CSSxRef("fit-content_function", "fit-content()")}}

### Data types

- {{CSSxRef("&lt;flex&gt;")}}

## Guides

- [Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Relationship of grid layout with other layout methods](/en-US/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Grid template areas](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Grid layout using line-based placement](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid layout using named grid lines](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Auto-placement in grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box alignment in grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logical values, and writing modes](/en-US/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [Grid layout and accessibility](/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Realizing common layouts using grids](/en-US/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)
- [Subgrid](/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid)
- [Masonry layout](/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout) {{Experimental_Inline}}

## Specifications

{{Specifications}}

## See also

- Glossary terms:
  - [Grid](/en-US/docs/Glossary/Grid)
  - [Grid lines](/en-US/docs/Glossary/Grid_Lines)
  - [Grid tracks](/en-US/docs/Glossary/Grid_Tracks)
  - [Grid cell](/en-US/docs/Glossary/Grid_Cell)
  - [Grid area](/en-US/docs/Glossary/Grid_Areas)
  - [Gutters](/en-US/docs/Glossary/Gutters)
  - [Grid axis](/en-US/docs/Glossary/Grid_Axis)
  - [Grid row](/en-US/docs/Glossary/Grid_Row)
  - [Grid column](/en-US/docs/Glossary/Grid_Column)
- [Grid by Example](https://gridbyexample.com/) - A collection of usage examples and video tutorials
- [CSS Grid Reference - Codrops](https://tympanus.net/codrops/css_reference/grid/)
- [CSS Grid Inspector - Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS Grid Playground](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS Grid Garden](https://cssgridgarden.com) - A game for learning CSS grid

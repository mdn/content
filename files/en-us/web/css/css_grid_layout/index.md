---
title: CSS Grid Layout
slug: Web/CSS/CSS_Grid_Layout
tags:
  - CSS
  - Grid Layout
  - Grids
  - Guide
  - Layout
  - Overview
  - Reference
---
{{CSSRef}}

**CSS Grid Layout** excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.

Like tables, grid layout enables an author to align elements into columns and rows. However, many more layouts are either possible or easier with CSS grid than they were with tables. For example, a grid container's child elements could position themselves so they actually overlap and layer, similar to CSS positioned elements.

## Basic example

The example below shows a three-column track grid with new rows created at a minimum of 100 pixels and a maximum of auto. Items have been placed onto the grid using line-based placement.

```css hidden
* {box-sizing: border-box;}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233,171,88);
  border-radius: 5px;
  background-color: rgba(233,171,88,.5);
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

### CSS properties

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
- {{CSSxRef("masonry-auto-flow")}}{{Experimental_Inline}}
- {{CSSxRef("align-tracks")}}{{Experimental_Inline}}
- {{CSSxRef("justify-tracks")}}{{Experimental_Inline}}

### CSS functions

- {{CSSxRef("repeat()", "repeat()")}}
- {{CSSxRef("minmax()", "minmax()")}}
- {{CSSxRef("fit-content()", "fit-content()")}}

### CSS data types

- {{CSSxRef("&lt;flex&gt;")}}

### Glossary entries

- [Grid](/en-US/docs/Glossary/Grid)
- [Grid Lines](/en-US/docs/Glossary/Grid_Lines)
- [Grid Tracks](/en-US/docs/Glossary/Grid_Tracks)
- [Grid Cell](/en-US/docs/Glossary/Grid_Cell)
- [Grid Area](/en-US/docs/Glossary/Grid_Areas)
- [Gutters](/en-US/docs/Glossary/Gutters)
- [Grid Axis](/en-US/docs/Glossary/Grid_Axis)
- [Grid row](/en-US/docs/Glossary/Grid_Rows)
- [Grid column](/en-US/docs/Glossary/Grid_Column)

## Guides

- [Basic concepts of Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Relationship of Grid Layout to other layout methods](/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Layout using line-based placement](/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Grid template areas](/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Layout using named grid lines](/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Auto-placement in CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Box alignment in CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [CSS Grid, Logical Values and Writing Modes](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)
- [CSS Grid Layout and accessibility](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid and progressive enhancement](/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Realizing common layouts using CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)
- [Subgrid](/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
- [Masonry Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout){{Experimental_Inline}}

## External resources

- [CSS Grid and IE11](https://tomrothe.de/posts/css_grid_and_ie11.html) ([polyfill](https://github.com/motine/css_grid_annotator))
- [Examples from Jen Simmons](https://labs.jensimmons.com/)
- [Grid by Example - a collection of usage examples and video tutorials](https://gridbyexample.com/)
- [Codrops Grid Reference](https://tympanus.net/codrops/css_reference/grid/)
- [Firefox DevTools CSS Grid Inspector](/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)
- [CSS Grid Playground](https://mozilladevelopers.github.io/playground/css-grid)
- [Grid Garden](https://cssgridgarden.com) - A game for learning CSS grid

## Specifications

| Specification                        | Status                           | Comment                                                                                      |
| ------------------------------------ | -------------------------------- | -------------------------------------------------------------------------------------------- |
| {{SpecName("CSS Grid 3")}} | {{Spec2("CSS Grid 3")}} | Adds [masonry](/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout).                          |
| {{SpecName("CSS Grid 2")}} | {{Spec2("CSS Grid 2")}} | Added [subgrids](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#subgrid). |
| {{SpecName("CSS3 Grid")}}     | {{Spec2("CSS3 Grid")}}     | Initial definition.                                                                          |

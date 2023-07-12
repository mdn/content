---
title: Gutters
slug: Glossary/Gutters
page-type: glossary-definition
---

{{GlossarySidebar}}

**Gutters** or _alleys_ are spacing between content tracks. These can be created in [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout) using the {{cssxref("column-gap")}}, {{cssxref("row-gap")}}, or {{cssxref("gap")}} properties.

## Example

In the example below we have a three-column and two-row track grid, with 20-pixel gaps between column tracks and `20px`-gaps between row tracks.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #fff8f8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1.2fr);
  grid-auto-rows: 45%;
  column-gap: 20px;
  row-gap: 20px;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{EmbedLiveSample('Example', '300', '280')}}

In terms of grid sizing, gaps act as if they were a regular grid track however nothing can be placed into the gap. The gap acts as if the grid line at that location has gained extra size, so any grid item placed after that line begins at the end of the gap.

The `row-gap` and `column-gap` properties are not the only things that can cause tracks to space out. Margins, padding, or the use of the space distribution properties in [Box Alignment](/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout) can all contribute to the visible gap – therefore the `row-gap` and `column-gap` properties should not be seen as equal to the "gutter size" unless you know that your design has not introduced any additional space with one of these methods.

## See also

### Property reference

- {{cssxref("column-gap")}}
- {{cssxref("row-gap")}}
- {{cssxref("gap")}}

### Further reading

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- [Definition of gutters in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#gutters)

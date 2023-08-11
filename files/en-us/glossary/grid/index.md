---
title: Grid
slug: Glossary/Grid
page-type: glossary-definition
---

{{GlossarySidebar}}

A _CSS grid_ is defined using the `grid` value of the {{cssxref("display")}} property; you can define columns and rows on your grid using the {{cssxref("grid-template-rows")}} and {{cssxref("grid-template-columns")}} properties.

The grid that you define using these properties is described as an _explicit grid_.

If you place content outside of this explicit grid, or if you are relying on auto-placement and the grid algorithm needs to create additional row or column {{glossary("grid tracks", "tracks")}} to hold {{glossary("grid item", "grid items")}}, then extra tracks will be created in the implicit grid. The _implicit grid_ is the grid created automatically due to content being added outside of the tracks defined.

In the example below I have created an _explicit grid_ of three columns and two rows. The _third_ row on the grid is an _implicit grid_ row track, formed due to their being more than the six items which fill the explicit tracks.

## Example

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
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

{{ EmbedLiveSample('Example', '500', '330') }}

## See also

- [Basic concepts of grid layout](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- Property reference:

  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}

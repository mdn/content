---
title: row-gap
slug: Web/CSS/row-gap
page-type: css-property
browser-compat: css.properties.row-gap
---

{{CSSRef}}

The **`row-gap`** [CSS](/en-US/docs/Web/CSS) property sets the size of the gap ({{glossary("gutters","gutter")}}) between an element's rows.

{{EmbedInteractiveExample("pages/css/row-gap.html")}}

## Syntax

```css
/* <length> values */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* <percentage> value */
row-gap: 10%;

/* Global values */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

Note that `grid-row-gap` is an alias for this property.

### Values

- `<length-percentage>`
  - : Is the width of the gutter separating the rows. {{CSSxRef("&lt;percentage&gt;")}} values are relative to the dimension of the element.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Flex layout

#### HTML

```html
<div id="flexbox">
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
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  row-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### Result

{{EmbedLiveSample('Flex_layout', "auto", "120px")}}

### Grid layout

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Result

{{EmbedLiveSample('Grid_layout', 'auto', 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{CSSxRef("column-gap")}}, {{CSSxRef("gap")}}
- Grid Layout Guide: _[Basic concepts of grid layout - Gutters](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#gutters)_

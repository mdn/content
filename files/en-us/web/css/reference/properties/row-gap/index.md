---
title: "`row-gap` CSS property"
short-title: row-gap
slug: Web/CSS/Reference/Properties/row-gap
page-type: css-property
browser-compat: css.properties.row-gap
sidebar: cssref
---

The **`row-gap`** [CSS](/en-US/docs/Web/CSS) property sets the size of the gap ({{glossary("gutters","gutter")}}) between an element's rows.

{{InteractiveExample("CSS Demo: row-gap")}}

```css interactive-example-choice
row-gap: 0;
```

```css interactive-example-choice
row-gap: 1ch;
```

```css interactive-example-choice
row-gap: 1em;
```

```css interactive-example-choice
row-gap: 20px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntax

```css
/* keyword value */
row-gap: normal;

/* <length-percentage> value */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;
row-gap: 10%;
row-gap: calc(10% - 6px);

/* Global values */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

### Values

- `normal`
  - : For multi-column layout, resolves to `1em`; otherwise `0`. This is the default value.
- {{CSSxRef("&lt;length&gt;")}}
  - : The size of the gap between rows, as a non-negative {{CSSxRef("&lt;length&gt;")}} value.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : The size of the gap between rows, defined as a non-negative {{CSSxRef("&lt;percentage&gt;")}} value.

## Description

The `row-gap` property sets the size of the gap between an element's rows.
This gap may contain a visible separator as a gap decoration. If there is a rule between rows, it will appear in the middle of the gap, but has no impact on the gap size. These decorative lines can be added to the otherwise "empty space" by using the {{cssxref("row-rule")}} property or {{cssxref("rule")}} shorthand.

Defined in [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps), the property can be used in multi-column, flexible box, and grid layouts. It replaced the `grid-row-gap` property, which was limited to [CSS grid layouts](/en-US/docs/Web/CSS/Guides/Grid_layout). Now `grid-row-gap` is an alias for `row-gap`.

The property specifies a fixed-length gutter between items in a container, separating boxes in the container's block axis. Negative values are invalid. The default value `normal` resolves to `1em` on multi-column containers, and `0` everywhere else.

Percentages resolve against the are calculated against the [content box](/en-US/docs/Web/CSS/Guides/Box_model/Introduction#content_area) size of the container element's block axis when this size is definite, against `0` otherwise, except in grid layout, for which cyclic percentage sizes resolve against zero for determining {{glossary("intrinsic size")}} contributions but resolve against the element's content box when laying out the contents.

In grid layouts, the effect of the gap is as though the grid lines between grid rows acquired the thickness of the property's value: the grid track between two rows is the space between the gutters that represent them. When it comes to track sizing, each gutter is treated as an extra, empty, fixed-size track of the specified size, which is spanned by any grid items that spans across more than one row. While treated as empty for sizing, the gap created may contain a {{cssxref("row-rule")}}.

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
  grid-template-columns: 150px 1fr;
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

- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}
- [Basic concepts of grid layout: gutters](/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module

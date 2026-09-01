---
title: "`row-gap` CSS property"
short-title: row-gap
slug: Web/CSS/Reference/Properties/row-gap
page-type: css-property
browser-compat: css.properties.row-gap
sidebar: cssref
---

The **`row-gap`** [CSS](/en-US/docs/Web/CSS) property sets the size of the gap ({{glossary("gutters","gutter")}}) between an element's rows in multi-column, flexible box, and grid layouts.

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

/* <line-width> values */
row-gap: thin;
row-gap: medium;
row-gap: thick;

/* Global values */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

### Values

This property is specified as a single value from the following list:

- `normal`
  - : For multi-column layout, resolves to `1em`; otherwise `0`. This is the default value.
- {{cssxref("&lt;line-width&gt;")}}
  - : Sets the width to one of the keywords `thin`, `medium`, or `thick`, or a positive {{cssxref("length")}} value.
- {{CSSxRef("length-percentage")}}
  - : A non-negative {{CSSxRef("&lt;length&gt;")}} or {{CSSxRef("&lt;percentage&gt;")}} value. Percentages are relative to the block-size of the content box or `0`.

## Description

The `row-gap` property sets the size of the gap between an element's rows.
This gap may contain a visible separator as a gap decoration. If there is a rule between rows, it will appear in the middle of the gap, but has no impact on the gap size. These decorative lines can be added to the otherwise "empty space" by using the {{cssxref("row-rule")}} property or {{cssxref("rule")}} shorthand.

Defined in [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps), the property can be used in multi-column, flexible box, and grid layouts. The `row-gap`, along with the {{cssxref("column-gap")}} property, can also be set using the {{cssxref("gap")}} shorthand property, in that order. The `row-gap` property replaced the `grid-row-gap` property, which was limited to [CSS grid layouts](/en-US/docs/Web/CSS/Guides/Grid_layout). Now `grid-row-gap` is an alias for `row-gap`.

The property specifies a fixed-length gutter between items in a container, separating boxes in the container's block axis. Negative values are invalid. The default value `normal` resolves to `1em` on multi-column containers, and `0` everywhere else.

Percentages resolve against the [content box](/en-US/docs/Web/CSS/Guides/Box_model/Introduction#content_area) size of the container element's block axis when this size is definite, against `0` otherwise, except in grid layout, for which cyclic percentage sizes resolve against zero for determining {{glossary("intrinsic size")}} contributions but resolve against the element's content box when laying out the contents.

In grid layouts, the effect of the gap is as though the grid lines between grid rows acquired the thickness of the property's value: the grid track between two rows is the space between the gutters that represent them. When it comes to track sizing, each gutter is treated as an extra, empty, fixed-size track of the specified size, which is spanned by any grid items that spans across more than one row. While treated as empty for sizing, the gap created may contain a {{cssxref("row-rule")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Flex layout

This example demonstrates using the `row-gap` property to create horizontal space between adjacent rows of flex items. It also demonstrates how the `row-gap` size is not effected by the size of the row rule.

#### HTML

We include six items in a container element:

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

We set the {{cssxref("display")}} property to `flex`, limit the {{cssxref("width")}} to `300px`, and set {{cssxref("flex-flow")}} to `row wrap` to create a flex container with rows of flex items that flow onto new lines as needed.

The `column-gap` value is set as `20px` on the flex container to create a `20px` gap between the adjacent flex rows. We also add a {{cssxref("row-rule")}}, which will draw a 30px-wide, dashed, semi-opaque magenta line in the middle of the gap. We define the flex items to be lime, with most being semi-opaque, so the rule, drawn behind the flex items.

```css
#flexbox {
  display: flex;
  flex-flow: row wrap;
  width: 300px;
  row-rule: 30px dashed #ff00ff33;

  row-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: #00ff0033;
  flex: 1 1 100px;
  height: 50px;
}
#flexbox > div:nth-of-type(3n-1) {
  background-color: lime;
}
```

#### Result

{{EmbedLiveSample('Flex_layout', "auto", "400")}}

To set vertical space between flex items, specify a non-zero value for the {{cssxref("column-gap")}} property, optionally setting both the `row-gap` and `column-gap` using the `gap` shorthand.

### Grid layout

This example demonstrates using the `row-gap` property with a `<percentage>` value in a grid layout.

#### HTML

We include five items in a container element:

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

We set the {{cssxref("display")}} property to `grid`, the {{cssxref("height")}} to `240px`, the {{cssxref("width")}} to `350px` and {{cssxref("grid-template-rows")}} to `repeat(3, 1fr)`, to create a 400px-wide grid container with three columns and as many rows as needed. Each row is `100px` tall, as defined by the {{cssxref("grid-template-rows")}} property. Every odd grid item is `lime` with the even grid items being semi-opaque.

The `row-gap` is set to `5%`, which, given a container height of `240px`, will create a gap that is `12px` across, leaving `216px` for three rows of grid items, meaning the rows are each `72px` tall.

```css
#grid {
  display: grid;
  height: 240px;
  width: 350px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 150px 1fr;
  row-gap: 5%;
}

#grid > div {
  outline: 1px solid green;
  background-color: lime;
}
```

#### Result

{{EmbedLiveSample('Grid_layout', 'auto', 280)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("column-gap")}}
- {{CSSxRef("row-rule")}}
- {{CSSxRef("rule")}}
- {{CSSxRef("gap")}}
- [Basic concepts of grid layout: gutters](/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module

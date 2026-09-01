---
title: "`column-gap` CSS property"
short-title: column-gap
slug: Web/CSS/Reference/Properties/column-gap
page-type: css-property
browser-compat: css.properties.column-gap
sidebar: cssref
---

The **`column-gap`** [CSS](/en-US/docs/Web/CSS) property sets the size of the gap ({{glossary("Gutters","gutter")}}) between an element's columns in multi-column, flexible box, and grid layouts.

{{InteractiveExample("CSS Demo: column-gap")}}

```css interactive-example-choice
column-gap: 0;
```

```css interactive-example-choice
column-gap: 10%;
```

```css interactive-example-choice
column-gap: 1em;
```

```css interactive-example-choice
column-gap: 20px;
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
/* Keyword value */
column-gap: normal;

/* <length-percentage> value */
column-gap: 3px;
column-gap: 2.5em;
column-gap: 3%;
column-gap: calc(3% - 6px);

/* <line-width> keyword value */
column-gap: thin;
column-gap: medium;
column-gap: thick;

/* Global values */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: revert-layer;
column-gap: unset;
```

### Values

This property is specified as a single value from the following list:

- `normal`
  - : For multi-column layout, resolves to `1em`; otherwise `0`. This is the default value.
- `<line-width>`
  - : A {{cssxref("&lt;line-width&gt;")}}: one of the keywords `thin`, `medium`, or `thick`, or a positive {{cssxref("length")}} value.
- {{CSSxRef("length-percentage")}}
  - : A non-negative {{CSSxRef("&lt;length&gt;")}} or {{CSSxRef("&lt;percentage&gt;")}} value. Percentages are relative to the inline-size of the content box.

## Description

The `column-gap` property sets the size of the gap between an element's columns. The property specifies a fixed-length gutter between items in a container, separating boxes in the container's inline axis. Negative values are invalid. The default value `normal` resolves to `1em` on multi-column containers, and `0` everywhere else.

Percentages are calculated against the [content box](/en-US/docs/Web/CSS/Guides/Box_model/Introduction#content_area) size of the container element's inline axis when this size is definite, against `0` otherwise, except in grid layout, for which cyclic percentage sizes resolve against zero for determining {{glossary("intrinsic size")}} contributions but resolve against the element's content box when laying out the contents.

The column gap may contain a visible separator as a [gap decoration](/en-US/docs/Web/CSS/Guides/Gaps). If there is a rule between the columns, set with the {{cssxref("column-rule")}} or {{cssxref("rule")}} shorthand properties, it will appear in the middle of the gap, but has no effect on the size of the gaps between the column.

The `column-gap`, along with the {{cssxref("row-gap")}} property, can also be set using the {{cssxref("gap")}} shorthand property which sets both the `row-gap` and `column-gap` in one declaration, in that order.

A legacy `grid-column-gap` is an alias for `column-gap`. It was initially defined in [grid layout](/en-US/docs/Web/CSS/Guides/Grid_layout) for creating gaps between grid columns.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Flex layout

This example demonstrates using the `column-gap` property to create horizontal space between adjacent flex items.

#### HTML

We include six items in a container element:

```html
<div class="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

We set the {{cssxref("display")}} property to `flex` and {{cssxref("flex-flow")}} to `row wrap` to create a flex container with rows of flex items, allowing flex items to flow onto new lines if needed. The flex items are each set to be either `200px` or `300px`.

The `column-gap` value is set as `20px` on the flex container to create a `20px` gap between the adjacent flex items in each row. We also add a {{cssxref("column-rule")}}, which will draw a thin, solid, magenta line in the middle of the gap.

```css
.flexbox {
  display: flex;
  flex-flow: row wrap;
  height: 100px;
  column-rule: 1px solid magenta;

  column-gap: 20px;
}

.flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 200px;
}
div:nth-of-type(3n) {
  flex: 300px;
}
```

#### Result

{{EmbedLiveSample("Flex_layout", "auto", "220px")}}

To set vertical space between flex rows, specify a non-zero value for the {{cssxref("row-gap")}} property, optionally setting both the `column-gap` and `row-gap` using the `gap` shorthand.

### Grid layout

This example demonstrates using the `column-gap` property with a `<percentage>` value in a grid layout. It also demonstrates how the `column-gap` size is not effected by the size of the column rule.

#### HTML

We include seven items in a container element:

```html
<div id="grid">
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

We set the {{cssxref("display")}} property to `grid`, the {{cssxref("width")}} to `400px` and {{cssxref("grid-template-columns")}} to `repeat(3, 1fr)`, to create a 400px-wide grid container with three columns and as many rows as needed. Each row is `100px` tall, as defined by the {{cssxref("grid-template-rows")}} property. Every odd grid item is `lime` with the even grid items being semi-opaque.

The `column-gap` is set to `5%`, which will create a gap that is `20px` wide. We've also set a very wide, semi-opaque `column-rule` to demonstrate how the rule is painted behind the content, with the width of the rule having no impact on the size of the gap.

```css
#grid {
  display: grid;
  width: 400px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  column-rule: 30px solid #ff00ff33;

  column-gap: 5%;
}

#grid > div {
  outline: 1px solid green;
  background-color: lime;
}
#grid > div:nth-of-type(even) {
  background-color: #00ff0033;
}
```

#### Result

{{EmbedLiveSample("Grid_layout", "auto", "220px")}}

The column rule is wider than the column gap, and is only visible when the items drawn on top are semi-transparent.s

### Multi-column layout

This example demonstrates using the `column-gap` property with a `<line-width>` keyword value in a multi-col layout.

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a thin column gap created with the CSS
  `column-gap` property. The `normal` default value for the `column-gap`
  property in multi-col layout is 1em.
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  column-gap: thin;
}
```

```css hidden
@layer no-support {
  @supports not (column-gap: thick) {
    body::before {
      content: "Your browser doesn't support the <line-width> keyword values";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Result

{{EmbedLiveSample("Multi-column_layout", "auto", "120px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("row-gap")}}
- {{CSSxRef("gap")}}
- {{CSSxRef("column-rule")}}
- {{CSSxRef("rule")}}
- [Basic concepts of grid layout: gutters](/en-US/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters)
- [Styling Columns](/en-US/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
- [CSS gaps](/en-US/docs/Web/CSS/Guides/Gaps) module

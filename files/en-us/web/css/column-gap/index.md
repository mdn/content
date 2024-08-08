---
title: column-gap
slug: Web/CSS/column-gap
page-type: css-property
browser-compat: css.properties.column-gap
---

{{CSSRef}}

The **`column-gap`** [CSS](/en-US/docs/Web/CSS) property sets the size of the gap ({{glossary("Gutters","gutter")}}) between an element's columns.

Initially a part of [Multi-column Layout](/en-US/docs/Web/CSS/CSS_multicol_layout), the definition of `column-gap` has been broadened to include multiple layout methods. Now specified in [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment), it may be used in multi-column, flexible box, and grid layouts.

Early versions of the specification called this property `grid-column-gap`, and to maintain compatibility with legacy websites, browsers will still accept `grid-column-gap` as an alias for `column-gap`.

{{EmbedInteractiveExample("pages/css/column-gap.html")}}

## Syntax

```css
/* Keyword value */
column-gap: normal;

/* <length> values */
column-gap: 3px;
column-gap: 2.5em;

/* <percentage> value */
column-gap: 3%;

/* Global values */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: revert-layer;
column-gap: unset;
```

The `column-gap` property is specified as one of the values listed below.

### Values

- `normal`
  - : The browser's default spacing is used between columns. For multi-column layout this is specified as `1em`. For all other layout types it is 0.
- {{CSSxRef("&lt;length&gt;")}}
  - : The size of the gap between columns, defined as a {{CSSxRef("&lt;length&gt;")}}. The {{CSSxRef("&lt;length&gt;")}} property's value must be non-negative.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : The size of the gap between columns, defined as a {{CSSxRef("&lt;percentage&gt;")}}. The {{CSSxRef("&lt;percentage&gt;")}} property's value must be non-negative.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Flex layout

In this example, a flex container contains six flex items of two different widths (`200px` and `300px`), creating flex items that are not laid out as a grid. The `column-gap` property is used to add horizontal space between the adjacent flex items.

#### HTML

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

To create a flex container, we set its {{cssxref("display")}} property value to `flex`. We then use the {{cssxref("flex-flow")}} shorthand property to set the {{cssxref("flex-direction")}} to row (the default) and {{cssxref("flex-wrap")}} to `wrap`, allowing the flex items to flow onto new lines if needed. By default, flex items stretch to be as tall as their container. By setting a {{cssxref("height")}}, even the empty flex items will be `100px` tall.

To better demonstrate the `column-gap` property, the flex items in this example have two different width values. The width of the flex items is set within the `<div>` flex items. We use the {{cssxref("flex-basis")}} component of the {{cssxref("flex")}} shorthand property to make all the flex items `200px` wide. We then target every third flex item by using the {{cssxref(":nth-of-type", ":nth-of-type(3n)")}} selector, widening them to `300px`.

The `column-gap` value is set as `20px` on the flex container to create a `20px` gap between the adjacent flex items in each row.

```css
.flexbox {
  display: flex;
  flex-flow: row wrap;
  height: 100px;
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

> [!NOTE]
> While there is horizontal space between adjacent flex items in each flex row, there is no space between the rows. To set vertical space between flex rows, you can specify a non-zero value for the {{cssxref("row-gap")}} property. The {{cssxref("gap")}} shorthand property is also available to set both the `row-gap` and `column-gap` in one declaration, in that order.

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
  height: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  column-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Result

{{EmbedLiveSample("Grid_layout", "auto", "220px")}}

### Multi-column layout

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column gap created with the CSS
  `column-gap` property. Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  column-gap: 40px;
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
- [Basic concepts of grid layout: gutters](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [Styling Columns](/en-US/docs/Web/CSS/CSS_multicol_layout/Styling_columns)

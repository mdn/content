---
title: column-gap
slug: Web/CSS/column-gap
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Grid
  - CSS Multi-column Layout
  - CSS Property
  - Reference
  - column-gap
  - recipe:css-property
browser-compat: css.properties.column-gap
---
{{CSSRef}}

The **`column-gap`** [CSS](/en-US/docs/Web/CSS) property sets the size of the gap ({{glossary("Gutters","gutter")}}) between an element's columns.

{{EmbedInteractiveExample("pages/css/column-gap.html")}}

Initially a part of [Multi-column Layout](/en-US/docs/Web/CSS/CSS_Columns), the definition of `column-gap` has been broadened to include multiple layout methods. Now specified in [Box Alignment](/en-US/docs/Web/CSS/CSS_Box_Alignment), it may be used in Multi-column, Flexible Box, and Grid layouts.

Note that `grid-column-gap` is an alias for this property.

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

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  height: 100px;
  column-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: auto;
}
```

#### Result

{{EmbedLiveSample("Flex_layout", "auto", "120px")}}

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

{{EmbedLiveSample("Grid_layout", "auto", "120px")}}

### Multi-column layout

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column
  gap created with the CSS `column-gap` property.
  Don't you think that's fun and exciting? I sure do!
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

- Related CSS properties: {{CSSxRef("row-gap")}}, {{CSSxRef("gap")}}
- Grid Layout Guide: _[Basic concepts of grid layout - Gutters](/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#gutters)_
- Multi-column Layout Guide: _[Styling Columns](/en-US/docs/Web/CSS/CSS_Columns/Styling_Columns)_

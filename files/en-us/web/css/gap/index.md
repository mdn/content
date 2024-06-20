---
title: gap
slug: Web/CSS/gap
page-type: css-shorthand-property
browser-compat: css.properties.gap
---

{{CSSRef}}

The **`gap`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets the gaps (also called {{glossary("gutters")}}) between rows and columns. This property applies to [multi-column](/en-US/docs/Web/CSS/CSS_multicol_layout), [flex](/en-US/docs/Web/CSS/CSS_flexible_box_layout), and [grid](/en-US/docs/Web/CSS/CSS_grid_layout) containers.

{{EmbedInteractiveExample("pages/css/gap.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("column-gap")}}
- {{cssxref("row-gap")}}

## Syntax

```css
/* One <length> value */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* One <percentage> value */
gap: 16%;
gap: 100%;

/* Two <length> values */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* One or two <percentage> values */
gap: 16% 100%;
gap: 21px 82%;

/* calc() values */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* Global values */
gap: inherit;
gap: initial;
gap: revert;
gap: revert-layer;
gap: unset;
```

### Values

This property is specified as a value for `<'row-gap'>`, followed optionally by a value for `<'column-gap'>`. If `<'column-gap'>` is omitted, it is set to the same value as `<'row-gap'>`. Both `<'row-gap'>` and `<'column-gap'>` can each be specified as a `<length>` or a `<percentage>`.

- {{CSSxRef("&lt;length&gt;")}}
  - : Specifies the width of the gutter separating columns, {{glossary("flex item","flex items")}}, flex lines, and {{glossary("grid lines")}}.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Specifies the width of the gutter separating columns, flex items, flex lines, and grid lines relative to the dimension of the element.

## Description

This property defines gaps between columns in [CSS multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout), between flex items and flex lines in [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout), and between rows and columns in [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout).

The generated gaps create empty spaces that have the width or height of the gap's specified size.

In grid layout, the first value defines the gutter between rows, and the second value defines the gutter between columns. In both grid and flex layouts, if only one value is included, that value is used for both dimensions.

With flex containers, whether the first value is the gap between flex items or between flex line depends on the direction. Flex items are laid out in either rows or columns depending on the value of the {{cssxref("flex-direction")}} property. For rows (`row` (the default) or `row-reverse`), the first value defines the gap between flex lines, and the second value defines the gap between items within each line. For columns (`column` or `column-reverse`), the first value defines the gap between flex items within a flex line, and the second value defines the gaps between each flex line.

In multi-column containers, the first value defines the gap between columns. A dividing line can be added to the otherwise "empty space" by using the {{cssxref("column-rule-style")}} property or {{cssxref("column-rule")}} shorthand.

If the value is specified as a percentage, the property resolves the value relative to the size of the element's content box. When this size is definite, the behavior is well-defined and consistent across layout modes. As these three layout modes (multi-column, flex, and grid) treat cyclic percentage sizes differently, `gap` does so as well. In grid layout, cyclic percentage sizes resolve against zero for determining {{glossary("intrinsic size")}} contributions, but resolve against the element's content box when laying out the contents.

The visible space between elements may differ from the specified `gap` value because margins, padding, and distributed alignment may increase the separation between elements beyond what is specified by `gap`.

Early versions of the specification called this property `grid-gap`, and to maintain compatibility with legacy websites, browsers still accept `grid-gap` as an alias for `gap`.

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
  gap: 20px 5px;
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

{{EmbedLiveSample("Flex_layout", "auto", 250)}}

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
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Result

{{EmbedLiveSample("Grid_layout", "auto", 250)}}

### Multi-column layout

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column gap created with the CSS
  <code>gap</code> property. Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
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
- {{CSSxRef("column-gap")}}
- [Basic concepts of grid layout: gutters](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)
- [CSS box alignment](/en-US/docs/Web/CSS/CSS_box_alignment) module
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
- [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout) module
- [CSS multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout) module

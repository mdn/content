---
title: <flex>
slug: Web/CSS/flex_value
page-type: css-type
browser-compat: css.types.flex
---

{{CSSRef}}

The **`<flex>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) denotes a flexible length within a grid container. It is used in {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} and other related properties.

## Syntax

The `<flex>` data type is specified as a {{cssxref("&lt;number&gt;")}} followed by the unit `fr`. The `fr` unit represents a fraction of the leftover space in the grid container. As with all CSS dimensions, there is no space between the unit and the number.

## Examples

### Examples of correct values for the fr data type

```plain
1fr    /* Using an integer value */
2.5fr  /* Using a float value */
```

### Example of use in a tracklisting for CSS Grid layout

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 2.5fr 1.5fr;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_Grid_Layout)

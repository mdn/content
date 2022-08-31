---
title: color-contrast()
slug: Web/CSS/color_value/color-contrast
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Reference
  - Web
  - color-contrast
  - Experimental
browser-compat: css.types.color.color-contrast
---
{{CSSRef}}{{SeeCompatTable}}

The **`color-contrast()`** functional notation takes a {{cssxref("color_value","color")}} value and compares it to a list of other {{cssxref("color_value","color")}} values, selecting the one with the highest contrast from the list.

## Syntax

```css
color-contrast(wheat vs tan, sienna, #d2691e)
color-contrast(#008080 vs olive, var(--myColor), #d2691e)
```

### Values

- Functional notation: `color-contrast( <color> vs <color>#{2,} )`

  - : `<color>` is any valid {{cssxref("color_value","color")}}.

    `<color>#{2,}` is a comma-separated list of color values to compare with the first value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

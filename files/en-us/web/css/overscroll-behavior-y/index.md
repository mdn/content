---
title: overscroll-behavior-y
slug: Web/CSS/overscroll-behavior-y
tags:
  - CSS
  - CSS Box Model
  - CSS Property
  - Reference
  - overscroll-behavior-y
  - recipe:css-property
browser-compat: css.properties.overscroll-behavior-y
---
{{CSSRef}}

The **`overscroll-behavior-y`** CSS property sets the browser's behavior when the vertical boundary of a scrolling area is reached.

See {{cssxref("overscroll-behavior")}} for a full explanation.

```css
/* Keyword values */
overscroll-behavior-y: auto; /* default */
overscroll-behavior-y: contain;
overscroll-behavior-y: none;

/* Global values */
overscroll-behavior-y: inherit;
overscroll-behavior-y: initial;
overscroll-behavior-y: revert;
overscroll-behavior-y: revert-layer;
overscroll-behavior-y: unset;
```

## Syntax

The `overscroll-behavior-y` property is specified as a keyword chosen from the list of values below.

### Values

- `auto`
  - : The default scroll overflow behavior occurs as normal.
- `contain`
  - : Default scroll overflow behavior is observed inside the element this value is set on (e.g. "bounce" effects or refreshes), but no scroll chaining occurs to neighboring scrolling areas, e.g. underlying elements will not scroll.
- `none`
  - : No scroll chaining occurs to neighboring scrolling areas, and default scroll overflow behavior is prevented.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Preventing an underlying element from scrolling vertically

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

See {{cssxref("overscroll-behavior")}} for a full example and explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior/#demo)
- The mapped logical properties: {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}

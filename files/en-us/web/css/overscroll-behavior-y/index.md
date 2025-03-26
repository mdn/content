---
title: overscroll-behavior-y
slug: Web/CSS/overscroll-behavior-y
page-type: css-property
browser-compat: css.properties.overscroll-behavior-y
---

{{CSSRef}}

The **`overscroll-behavior-y`** [CSS](/en-US/docs/Web/CSS) property sets the browser's behavior when the vertical boundary of a scrolling area is reached.

See {{cssxref("overscroll-behavior")}} for a full explanation.

## Syntax

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

The `overscroll-behavior-y` property is specified as a keyword chosen from the list of values below.

### Values

- `auto`
  - : The default scroll overflow behavior occurs as normal.
- `contain`
  - : Default scroll overflow behavior (e.g., "bounce" effects) is observed inside the element where this value is set. However, no {{Glossary("Scroll_chaining", "scroll chaining")}} occurs on neighboring scrolling areas; the underlying elements will not scroll. The `contain` value disables native browser navigation, including the vertical pull-to-refresh gesture and horizontal swipe navigation.
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

- {{cssxref("overscroll-behavior")}}
- {{cssxref("overscroll-behavior-x")}}
- {{cssxref("overscroll-behavior-inline")}}
- {{cssxref("overscroll-behavior-block")}}
- [CSS overscroll behavior](/en-US/docs/Web/CSS/CSS_overscroll_behavior) module

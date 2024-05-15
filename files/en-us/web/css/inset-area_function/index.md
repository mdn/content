---
title: inset-area()
slug: Web/CSS/inset-area_function
page-type: css-function
browser-compat: css.types.inset-area
---

{{CSSRef}}

The **`inset-area()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) can be used as a value for the {{cssxref("position-try-options")}} property. It accepts an {{cssxref("inset-area")}} property value as a parameter, and returns a custom **position try option** based on that `inset-area`. In effect, it is a shortcut for creating a custom {{cssxref("@position-try")}} option that contains only that `inset-area` property value.

For detailed information on anchor positioning, see the [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page.

## Syntax

```css
position-try-options: inset-area(bottom);
position-try-options: inset-area(block-end), inset-area(block-end inline-end);
```

### Parameters

The `inset-area()` function's syntax is as follows:

```text
inset-area(inset-area-value)
```

The parameters are:

- `inset-area-value`
  - : The {{cssxref("inset-area")}} property that you want to base the position try option on.

### Return value

A position try option.

### Formal syntax

{{csssyntax}}

## Examples

See {{cssxref("position-try-options")}} for examples of `inset-area()` usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("inset-area")}}, {{cssxref("position-try-options")}}
- The {{cssxref("@position-try")}} at-rule
- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)

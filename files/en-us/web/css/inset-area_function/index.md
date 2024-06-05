---
title: inset-area()
slug: Web/CSS/inset-area_function
page-type: css-function
browser-compat: css.properties.position-try-options.inset-area
---

{{CSSRef}}

The **`inset-area()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) can be used as a value for the {{cssxref("position-try-options")}} property. It accepts an {{cssxref("inset-area")}} property value as a parameter, and returns a custom **position try option** based on that `inset-area`. In effect, it is a shortcut for creating a custom {{cssxref("@position-try")}} option that contains only that `inset-area` property value.

For detailed information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page and the [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide.

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

- {{cssxref("inset-area")}}
- {{cssxref("position-try-options")}}
- {{cssxref("@position-try")}} at-rule
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)

---
title: inset-area()
slug: Web/CSS/inset-area_function
page-type: css-function
status:
  - experimental
browser-compat: css.properties.position-try-fallbacks.inset-area
---

{{CSSRef}}{{seecompattable}}

The **`inset-area()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) can be used as a value for the {{cssxref("position-try-fallbacks")}} property. It accepts an {{cssxref("inset-area")}} property value as a parameter, and returns a custom **position try fallback option** based on that `inset-area`. In effect, it is a shortcut for creating a custom {{cssxref("@position-try")}} position option that contains only that `inset-area` property value.

For detailed information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page, [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using), and [Handling overflow: try fallbacks and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding).

## Syntax

```css
position-try-fallbacks: inset-area(bottom);
position-try-fallbacks: inset-area(block-end), inset-area(block-end inline-end);
```

### Parameters

The `inset-area()` function's syntax is as follows:

```text
inset-area(<inset-area-value>)
```

The parameters are:

- `<inset-area-value>`
  - : The {{cssxref("inset-area")}} property value that you want to base the position try option on.

### Return value

A position try option.

### Formal syntax

{{csssyntax}}

## Examples

See {{cssxref("position-try-fallbacks")}} for examples of `inset-area()` usage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("inset-area")}}
- {{cssxref("position-try")}}
- {{cssxref("position-try-fallbacks")}}
- {{cssxref("@position-try")}} at-rule
- The [`<inset-area>`](/en-US/docs/Web/CSS/inset-area_value) value
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide
- [Handling overflow: try fallbacks and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) guide

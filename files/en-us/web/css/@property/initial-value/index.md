---
title: initial-value
slug: Web/CSS/@property/initial-value
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.property.initial-value
---

{{CSSRef}}

The **`initial-value`** descriptor of the {{cssxref("@property")}} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule) specifies the initial value for the registered [CSS custom property](/en-US/docs/Web/CSS/--*).
It is a required descriptor unless the {{cssxref("@property/syntax", "syntax")}} descriptor value is the universal syntax (`*`).
If required but missing or invalid, the entire `@property` rule is invalid and ignored.

## Syntax

```css
/* Set initial color value */
initial-value: rebeccapurple;

/* Set initial length value */
initial-value: 2rem;
```

### Values

A value that matches the type specified in the {{cssxref("@property/syntax", "syntax")}} descriptor.
For example, if `syntax` is `<color>`, then the `initial-value` must be a valid {{cssxref("color")}} value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting an initial value for a custom property

This example shows how to define a custom property `--my-color` with an initial color value of `#c0ffee`. This initial value will be used when the property is not inherited (`inherits: false`) and no other value is set on the element.

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Using [JavaScript](/en-US/docs/Web/JavaScript) {{domxref('CSS.registerProperty_static', 'CSS.registerProperty()')}}:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other {{cssxref("@property")}} descriptors: {{cssxref("@property/inherits","inherits")}} and {{cssxref("@property/syntax", "syntax")}}
- [CSS Properties and Values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/en-US/docs/Web/API/Houdini_APIs)

---
title: inherits
slug: Web/CSS/@property/inherits
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.property.inherits
---

{{CSSRef}}

The **`inherits`** [CSS](/en-US/docs/Web/CSS) descriptor of the {{cssxref("@property")}} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule) controls whether or not the registered [CSS custom property](/en-US/docs/Web/CSS/--*) inherits by default.
It is a required descriptor; if missing or invalid, the entire `@property` rule is invalid and ignored.

## Syntax

```css
/* Custom property does not inherit values */
inherits: false;

/* Custom property inherits values */
inherits: true;
```

### Values

- `true`
  - : The property inherits by default.
- `false`
  - : The property does not inherit by default.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inheritance behavior of a custom property

This example shows how to define a custom property `--my-color` that does not inherit its value from its parent elements:

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

- Other {{cssxref("@property")}} descriptors: {{cssxref("@property/initial-value", "initial-value")}} and {{cssxref("@property/syntax","syntax")}}
- [CSS Properties and Values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/en-US/docs/Web/API/Houdini_APIs)

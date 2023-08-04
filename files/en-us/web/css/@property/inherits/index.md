---
title: inherits
slug: Web/CSS/@property/inherits
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.property.inherits
---

{{CSSRef}}

The **`inherits`** [CSS](/en-US/docs/Web/CSS) descriptor is required when using the {{cssxref("@property")}} [at-rule](/en-US/docs/Web/CSS/At-rule) and controls whether the custom property registration specified by `@property` inherits by default.

## Syntax

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}

@property --property-name {
  syntax: "<color>";
  inherits: true;
  initial-value: #c0ffee;
}
```

## Values

- `true`
  - : The property inherits by default.
- `false`
  - : The property does not inherit by default.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

Add type checking to `--my-color` {{cssxref('--*', 'custom property')}}, as a color, a default value, and not allow it to inherit its value:

Using [CSS](/en-US/docs/Web/CSS) {{cssxref('@property')}} [at-rule](/en-US/docs/Web/CSS/At-rule):

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Using [JavaScript](/en-US/docs/Web/JavaScript) {{domxref('CSS.registerProperty')}}:

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

- [CSS Properties and Values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/en-US/docs/Web/Guide/Houdini)

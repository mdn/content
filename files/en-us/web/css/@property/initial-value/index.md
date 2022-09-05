---
title: initial-value
slug: Web/CSS/@property/initial-value
tags:
  - CSS
  - Reference
  - Web
  - Property
  - Houdini
  - Experimental
browser-compat: css.at-rules.property.initial-value
---
{{CSSRef}}{{SeeCompatTable}}

The **`initial-value`** [CSS](/en-US/docs/Web/CSS) descriptor is required when using the {{cssxref("@property")}} [at-rule](/en-US/docs/Web/CSS/At-rule) unless the syntax accepts any valid token stream. It sets the initial-value for the property.

The value chosen as the `initial-value` must parse correctly according to the syntax definition. Therefore, if syntax is `<color>` then the initial-value must be a valid {{cssxref("color")}} value.

## Syntax

```css
@property --property-name {
  syntax: '<color>';
  inherits: false;
  initial-value: #c0ffee;
}

@property --property-name {
  syntax: '<color>';
  inherits: true;
  initial-value: #c0ffee;
}
```

## Values

A string with a value which is a correct value for the chosen `syntax`.

## Formal definition

{{cssinfo}}

## Formal syntax

```
<string>
```

## Examples

Add type checking to `--my-color` {{cssxref('--*', 'custom property')}}, as a color, the initial-value being a valid color:

Using [CSS](/en-US/docs/Web/CSS) {{cssxref('@property')}} [at-rule](/en-US/docs/Web/CSS/At-rule):

```css
@property --my-color {
  syntax: '<color>';
  inherits: false;
  initial-value: #c0ffee;
}
```

Using [JavaScript](/en-US/docs/Web/JavaScript) {{domxref('CSS.registerProperty')}}:

```js
window.CSS.registerProperty({
  name: '--my-color',
  syntax: '<color>',
  inherits: false,
  initialValue: '#c0ffee',
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

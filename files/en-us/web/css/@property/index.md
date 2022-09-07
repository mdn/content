---
title: '@property'
slug: Web/CSS/@property
tags:
  - At-rule
  - CSS
  - Reference
  - Web
  - Property
  - Houdini
  - Experimental
browser-compat: css.at-rules.property
---
{{CSSRef}}{{SeeCompatTable}}

The **`@property`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) is part of the [CSS Houdini](/en-US/docs/Web/Guide/Houdini) umbrella of APIs, it allows developers to explicitly define their {{cssxref('--*', 'CSS custom properties')}}, allowing for property type checking, setting default values, and define whether a property can inherit values or not.

The `@property` rule represents a custom property registration directly in a stylesheet without having to run any JS. Valid `@property` rules result in a registered custom property, as if {{domxref('CSS.registerProperty')}} had been called with equivalent parameters.

## Syntax

```css
@property --property-name {
  syntax: '<color>';
  inherits: false;
  initial-value: #c0ffee;
}
```

### Descriptors

- {{cssxref("@property/syntax","syntax")}} {{Experimental_Inline}}
  - : Describes the allowable syntax for the property.
- {{cssxref("@property/inherits","inherits")}} {{Experimental_Inline}}
  - : Controls whether the custom property registration specified by `@property` inherits by default.
- {{cssxref("@property/initial-value","initial-value")}} {{Experimental_Inline}}
  - : Sets the initial value for the property.

A valid `@property` rule represents a custom property registration, with the property name being the serialization of the in the rule's prelude.

`@property` rules require a {{cssxref("@property/syntax","syntax")}} and {{cssxref("@property/inherits","inherits")}} descriptor; if either are missing, the entire rule is invalid and must be ignored. The {{cssxref("@property/initial-value","initial-value")}} descriptor is optional only if the syntax is the <a href="https://drafts.css-houdini.org/css-properties-values-api/#universal-syntax-definition">universal syntax definition</a>, otherwise the descriptor is required; if it's missing, the entire rule is invalid and must be ignored.

Unknown descriptors are invalid and ignored, but do not invalidate the `@property` rule.

## Examples

Add type checking to `--my-color` {{cssxref('--*', 'custom property')}}, as a color, a default value, and not allow it to inherit its value:

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

## Formal syntax

```
@property <custom-property-name> {
  <declaration-list>
}
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

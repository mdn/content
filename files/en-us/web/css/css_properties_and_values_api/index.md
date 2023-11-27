---
title: CSS properties and values API
slug: Web/CSS/CSS_properties_and_values_API
page-type: css-module
spec-urls: https://www.w3.org/TR/css-properties-values-api-1/
---

{{CSSRef}}

The **CSS properties and values API** module is is part of the [CSS Houdini](/en-US/docs/Web/Guide/Houdini) umbrella of APIs and allows authors to define custom properties for cascading variables.
This API expands on [CSS custom properties for cascading variables](Web/CSS/CSS_cascading_variables) which allows authors to define custom properties in CSS using [two dash syntax (`--`)](/en-US/docs/Web/CSS/--*).

The additional functionality provided by the Properties and Values API is the introduction of control over inheritance, the ability to set initial values, and data type constraints.
Authors can define CSS properties using the [`@property`](/en-US/docs/Web/CSS/@property) at-rule in CSS and the {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}} interface in JavaScript.

## Properties and Values API in action

Registered properties have an associated data type that the browser can use in different contexts, which makes them a great choice for animations and transitions.
Using custom properties defined in CSS using the [two dash syntax (`--`)](/en-US/docs/Web/CSS/--*) works more like a string substitution, so a CSS [transition](/en-US/docs/Web/CSS/transition) won't work as expected.
When you hover over the box below, the background color changes over two seconds with proper interpolation between the different colors.

```js
CSS.registerProperty({
  name: "--stop-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "cornflowerblue",
});
```

```css hidden
.box {
  padding: 1rem;
  width: 80%;
  height: 4rem;
  font-family: sans-serif;
  color: white;
  border-radius: 0.5rem;
}
```

```css
.box {
  --stop-color: cornflowerblue;
  background: linear-gradient(to right, var(--stop-color), lavenderblush);
  transition: --stop-color 2s;
}

.box:hover {
  --stop-color: aquamarine;
}
```

```html hidden
<div class="box"><p>Linear gradient with transition</p></div>
```

{{EmbedLiveSample("",600,120)}}

## Reference

### At-rules

- {{cssxref("@property")}}
  - [syntax](/en-US/docs/Web/CSS/@property#descriptors) descriptor
  - [inherits](/en-US/docs/Web/CSS/@property#descriptors) descriptor
  - [initial-value](/en-US/docs/Web/CSS/@property#descriptors) descriptor
  - [`+` and `#`](/en-US/docs/Web/CSS/@property#syntax_strings) multipliers
  - [`|`](/en-US/docs/Web/CSS/@property#syntax_strings) combinator

### Functions

- {{cssxref("var")}}

### Interfaces and APIs

- {{domxref('CSSPropertyRule')}}
- {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}}

## Guides

- [Using the CSS properties and values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API/guide)
  - : Explains how to register custom properties in CSS and JavaScript, with hints on handling undefined and invalid values, fallbacks, and inheritance.

## Related concepts

- {{cssxref("var")}}
- [CSSRule](/en-US/docs/Web/API/CSSRule)
- [CSSStyleValue](/en-US/docs/Web/API/CSSStyleValue)
- [CSS scoping](/en-US/docs/Web/CSS/CSS_scoping)
- [Using shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- [Worklet](/en-US/docs/Web/API/Worklet)

## Specifications

{{Specifications}}

## See also

- [CSS cascade and inheritance](/en-US/docs/Web/CSS/CSS_cascade)
- [CSS Houdini](/en-US/docs/Web/Guide/Houdini)
- [CSS `env()`](Web/CSS/env)
- [CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API)

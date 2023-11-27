---
title: CSS properties and values API
slug: Web/CSS/CSS_properties_and_values_API
page-type: css-module
spec-urls: https://www.w3.org/TR/css-properties-values-api-1/
---

{{CSSRef}}

The **CSS properties and values API** module is is part of the [CSS Houdini](/en-US/docs/Web/Guide/Houdini) umbrella of APIs and allows authors to define custom properties for cascading variables.
This API expands on [CSS custom properties for cascading variables](Web/CSS/CSS_cascading_variables) which allows authors to define custom properties in CSS using [two dash syntax (`--`)](/en-US/docs/Web/CSS/--*).

Custom properties let you reuse values across a project to simplify complex or repetitive stylesheets.
The CSS properties and values API adds metadata to custom properties using [`@property`](/en-US/docs/Web/CSS/@property) in CSS and {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}} in JavaScript.
Adding metadata to custom properties gives an expected data type that the browser can use depending on the context, an initial value, and let you control inheritance.
This API is a good match for rules with animations and transitions because the browser can interpolate between custom values of this type, whereas properties that use [two dash syntax (`--`)](/en-US/docs/Web/CSS/--*) behave more like a string substitution.

## Properties and Values API in action

To see how custom properties and values can be used via API, hover over the box below.

```js hidden
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
  width: 90%;
  height: 4rem;
  font-family: sans-serif;
  font-size: large;
  color: white;
  border-radius: 0.5rem;
}

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

The box has a [backround](/en-US/docs/Web/CSS/background) consisting of a [linear gradient](/en-US/docs/Web/CSS/gradient/linear-gradient) from `--stop-color` (the custom property) to [`lavenderblush`](/en-US/docs/Web/CSS/named-color).
The value of `--stop-color` is set to `cornflowerblue` at first, but when you hover over the box, `--stop-color` [transitions](/en-US/docs/Web/CSS/transition) to `aquamarine` over two seconds (`linear-gradient(to right, aquamarine, lavenderblush)`).

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

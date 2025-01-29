---
title: CSS properties and values API
slug: Web/CSS/CSS_properties_and_values_API
page-type: css-module
spec-urls: https://www.w3.org/TR/css-properties-values-api-1/
---

{{CSSRef}}

The **CSS properties and values API** module defines a method for registering new CSS properties, defining the property's data type, inheritance behavior, and, optionally, an initial value.
This API expands on [CSS custom properties for cascading variables](/en-US/docs/Web/CSS/CSS_cascading_variables) module, which allows authors to define custom properties in CSS using [two dash syntax (`--`)](/en-US/docs/Web/CSS/--*).
The CSS properties and values API is part of the [CSS Houdini](/en-US/docs/Web/CSS/CSS_Houdini) umbrella of APIs.

Custom properties let you reuse values across a project to simplify complex or repetitive stylesheets.
Basic custom properties are defined in the [CSS custom properties for cascading variables](/en-US/docs/Web/CSS/CSS_cascading_variables) module.
The CSS properties and values API expands on that module, enabling adding metadata to custom properties using CSS with the [`@property`](/en-US/docs/Web/CSS/@property) at-rule or, alternatively, using JavaScript's {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}} method.

Whether registered with CSS or JavaScript, setting metadata on custom properties provides for an expected data type that the browser can use depending on the context, defines an initial value, and lets you control inheritance.

CSS properties and values API custom property registration is more robust than the more basic CSS cascading variable custom property declaration, especially when it comes to transitioning and animating values as browsers can interpolate between custom values of this type, whereas properties that use [two dash syntax (`--`)](/en-US/docs/Web/CSS/--*) behave more like a string substitution.

## Properties and values API in action

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

{{EmbedLiveSample("Properties and values API in action",600,120)}}

The box has a [background](/en-US/docs/Web/CSS/background) consisting of a [linear gradient](/en-US/docs/Web/CSS/gradient/linear-gradient) from `--stop-color` (the custom property) to [`lavenderblush`](/en-US/docs/Web/CSS/named-color).
The value of `--stop-color` is set to `cornflowerblue` at first, but when you hover over the box, `--stop-color` [transitions](/en-US/docs/Web/CSS/transition) to `aquamarine` over two seconds (`linear-gradient(to right, aquamarine, lavenderblush)`).

## Reference

### At-rules

- {{cssxref("@property")}}
  - [syntax](/en-US/docs/Web/CSS/@property#descriptors) descriptor
    - [`+` and `#`](/en-US/docs/Web/CSS/@property#descriptors) multipliers
    - [`|`](/en-US/docs/Web/CSS/@property#descriptors) combinator
  - [inherits](/en-US/docs/Web/CSS/@property#descriptors) descriptor
  - [initial-value](/en-US/docs/Web/CSS/@property#descriptors) descriptor

### Interfaces and APIs

- {{domxref('CSSPropertyRule')}}
- {{domxref('CSS/registerProperty_static', 'CSS.registerProperty()')}}

## Guides

- [Using the CSS properties and values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API/guide)

  - : Explains how to register custom properties in CSS and JavaScript, with hints on handling undefined and invalid values, fallbacks, and inheritance.

- [Houdini APIs](/en-US/docs/Web/API/Houdini_APIs)
  - : Explains what CSS Houdini is and its advantages, along with a list of available APIs and their statuses.

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

- [CSS cascading and inheritance](/en-US/docs/Web/CSS/CSS_cascade)
- [CSS scoping](/en-US/docs/Web/CSS/CSS_scoping) module
- [Using shadow DOM](/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API) module
- [Worklet](/en-US/docs/Web/API/Worklet) interface
- [CSS `env()`](/en-US/docs/Web/CSS/env)
- [CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API)

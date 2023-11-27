---
title: CSS custom properties for cascading variables
slug: Web/CSS/CSS_cascading_variables
page-type: css-module
spec-urls: https://drafts.csswg.org/css-variables/
---

{{CSSRef}}

The **CSS custom properties for cascading variables** module adds support for cascading variables in CSS properties and lets you create custom properties to define these variables.

Custom properties are defined using [two dashes (`--`)](/en-US/docs/Web/CSS/--*) and are subject to the [cascade](/en-US/docs/Web/CSS/Cascade), so they inherit their value from their parent.
The purpose of custom properties is to help manage complex CSS stylesheets by allowing you to define a property's value in one place and reuse that value in multiple declarations across a project.
A benefit of custom properties is improved readability and semantics.
For example, `--dark-grey-text` and `--dark-footer` are easier to understand than hexadecimal colors such as `#00ff00`, and the context of their use is much more apparent.

## Custom properties in action

To see how custom properties can be used, move the input slider left to right.
When the value of the slider changes between 0 and 360, this updates the `--hue` property and color of the boxes inside the grid.
The `--hue` custom property is used in a slightly different way in each box, and changing the value of `--hue` in one place affects multiple different elements where it's referenced.

```html hidden
<div class="container">
  <div id="color-1">--hue</div>
  <div id="color-2">--hue + 10</div>
  <div id="color-3">--hue + 20</div>
  <div id="color-4">--hue + 30</div>
  <div id="color-5">--hue + 40</div>
  <div id="color-6">--hue + 50</div>
  <div id="color-7">--hue + 60</div>
  <div id="color-8">--hue + 70</div>
</div>
<input type="range" min="0" max="360" value="0" step="0.1" id="hue" />
```

```js hidden
const hue = document.querySelector("#hue");

const updateHue = () => {
  document.documentElement.style.setProperty("--hue", hue.value);
};

hue.addEventListener("input", updateHue);
```

```css hidden
.container {
  display: grid;
  font-family: sans-serif;
  color: white;
  gap: 0.5rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 1rem;
}
.container div {
  border-radius: 0.5rem;
  padding: 1rem;
}

input {
  width: 100%;
  margin: 0;
}
```

```css
:root {
  --hue: 0;
}

#color-1 {
  background-color: hsl(var(--hue) 50% 50%);
}
#color-2 {
  background-color: hsl(calc(var(--hue) + 10) 50% 50%);
}
#color-3 {
  background-color: hsl(calc(var(--hue) + 20) 50% 50%);
}
#color-4 {
  background-color: hsl(calc(var(--hue) + 30) 50% 50%);
}
/* Continued up to color-8 ... */
```

```css hidden
#color-5 {
  background-color: hsl(calc(var(--hue) + 40) 50% 50%);
}
#color-6 {
  background-color: hsl(calc(var(--hue) + 50) 50% 50%);
}
#color-7 {
  background-color: hsl(calc(var(--hue) + 60) 50% 50%);
}
#color-8 {
  background-color: hsl(calc(var(--hue) + 70) 50% 50%);
}
```

{{EmbedLiveSample("",600,160)}}

## Reference

### Properties

- {{cssxref("--*")}} syntax for defining custom properties in CSS.

### Functions

- {{cssxref("var")}} for referencing a custom property's value.

## Guides

- [Using CSS custom properties (variables)](/en-US/docs/Web/CSS/Using_CSS_custom_properties)
  - : Explains how to use custom properties in CSS and JavaScript, with hints on handling undefined and invalid values, fallbacks, and inheritance.

## Related concepts

- The [CSS Properties and Values API](/en-US/docs/Web/CSS/CSS_properties_and_values_API) provides additional interfaces for defining custom properties that allow you to set an initial value fir the property, define data type constraints and provide control over inheritance.
  This specification provides:

  - [CSS @property](/en-US/docs/Web/CSS/@property) at-rule for defining custom properties in CSS.
  - [CSS.registerProperty()](/en-US/docs/Web/API/CSS/registerProperty_static) method for defining custom properties in JavaScript.

## Specifications

{{Specifications}}

## See also

- [CSS cascade and inheritance](/en-US/docs/Web/CSS/CSS_cascade)
- [CSS `env()`](Web/CSS/env)

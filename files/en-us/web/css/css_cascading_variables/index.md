---
title: CSS custom properties for cascading variables
slug: Web/CSS/CSS_cascading_variables
page-type: css-module
spec-urls: https://drafts.csswg.org/css-variables/
---

{{CSSRef}}

The **CSS custom properties for cascading variables** module adds support for cascading variables in CSS properties and lets you create custom properties to define these variables.

When working with CSS, you often end up reusing common project-specific values such as widths that work well with your layout, or a set of colors for your color scheme.
One way of managing repetition in stylesheets is to define a value once and use it many times in other places.
Custom properties let you reuse values and simplify complex or repetitive rules which is easier to read and maintain.
For example, `--dark-grey-text` and `--dark-footer` are easier to understand than hexadecimal colors such as `#00ff00`, and the context of how you use them is more obvious, too.

## Custom properties in action

To see how custom properties can be used, move the input slider left to right.

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

Each color swatch increments the {{cssxref("hue")}} value by 10 degrees, changing the {{cssxref("background-color")}} using the {{cssxref("color_value/hsl", "hsl()")}} {{cssxref("&lt;color&gt;")}} function (`hsl(var(--hue) 50% 50%);`). When the slider's value changes between 0 and 360, this updates a `--hue` [custom property](/en-US/docs/Web/CSS/--*) and the color of the boxes inside the grid.

## Reference

### Properties

- {{cssxref("--*")}} syntax for defining custom properties in CSS.

### Functions

- {{cssxref("var")}} for referencing a custom property's value.

## Guides

- [Using CSS custom properties (variables)](/en-US/docs/Web/CSS/Using_CSS_custom_properties)
  - : Explains how to use custom properties in CSS and JavaScript, with hints on handling undefined and invalid values, fallbacks, and inheritance.

## Related concepts

- [CSS Properties and Values API](/en-US/docs/Web/CSS/CSS_properties_and_values_API) module
  - [CSS @property](/en-US/docs/Web/CSS/@property) at-rule
  - [CSS.registerProperty()](/en-US/docs/Web/API/CSS/registerProperty_static) method

## Specifications

{{Specifications}}

## See also

- [CSS cascade and inheritance](/en-US/docs/Web/CSS/CSS_cascade)
- [CSS `env()`](Web/CSS/env)
- [getPropertyValue()](/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue)

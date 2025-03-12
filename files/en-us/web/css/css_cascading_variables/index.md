---
title: CSS custom properties for cascading variables
slug: Web/CSS/CSS_cascading_variables
page-type: css-module
spec-urls: https://drafts.csswg.org/css-variables/
---

{{CSSRef}}

The **CSS custom properties for cascading variables** module adds support for cascading variables in CSS properties and lets you create custom properties to define these variables along with the mechanisms to use custom properties as the values for other CSS properties.

When working with CSS, you often end up reusing common project-specific values such as widths that work well with your layout, or a set of colors for your color scheme.
One way of managing repetition in stylesheets is to define a value once and use it many times in other places.
Custom properties let you create and define custom variables that can be reused, simplifying complex or repetitive rules and making them easier to read and maintain.
For example, `--dark-grey-text` and `--dark-background` are easier to understand than hexadecimal colors such as `#323831`, and the context of how you use them is more obvious, too.

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

{{EmbedLiveSample("Custom properties in action",600,160)}}

In these color swatches, the {{cssxref("background-color")}} is set using the {{cssxref("color_value/hsl", "hsl()")}} {{cssxref("&lt;color&gt;")}} function as `hsl(var(--hue) 50% 50%)`.
Each color swatch increments the {{cssxref("hue")}} value by 10 degrees like `calc(var(--hue) + 10)`, `calc(var(--hue) + 20)` etc.
As the slider's value changes from 0 up to 360, the value of the `--hue` [custom property](/en-US/docs/Web/CSS/--*) is updated using {{cssxref("calc")}}, and the background color of each box inside the grid is updated, also.

## Reference

### Properties

- {{cssxref("--*")}}

### Functions

- {{cssxref("var")}}

## Guides

- [Using CSS custom properties (variables)](/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)

  - : Explains how to use custom properties in CSS and JavaScript, with hints on handling undefined and invalid values, fallbacks, and inheritance.

- [Invalid custom properties](/en-US/docs/Web/CSS/CSS_syntax/Error_handling#invalid_custom_properties)
  - : Explains how browsers handle property values when a custom property's value is an invalid data type for that property.

## Related concepts

- [CSS Properties and Values API](/en-US/docs/Web/CSS/CSS_properties_and_values_API) module
  - [`@property`](/en-US/docs/Web/CSS/@property) at-rule
  - [`CSS.registerProperty()`](/en-US/docs/Web/API/CSS/registerProperty_static) method

## Specifications

{{Specifications}}

## See also

- [CSS cascading and inheritance](/en-US/docs/Web/CSS/CSS_cascade) module
- [CSS `env()`](/en-US/docs/Web/CSS/env) function
- [CSS `calc()`](/en-US/docs/Web/CSS/calc) function
- [`getPropertyValue()`](/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue) method

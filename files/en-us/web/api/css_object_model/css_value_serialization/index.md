---
title: CSS value serialization
slug: Web/API/CSS_Object_Model/CSS_value_serialization
page-type: guide
spec-urls:
  - https://drafts.csswg.org/cssom/#serialize-a-css-value
  - https://drafts.csswg.org/css-color-4/#serialization
---

{{APIRef("CSSOM")}}

When working with CSS through JavaScript APIs, property values are **serialized** into standardized string representations based on the value's [data type](/en-US/docs/Web/CSS/CSS_values_and_units/CSS_data_types). For example, you might set a color using the `hsl(240 100% 50%)` syntax, but when accessed through JavaScript, the value may be returned in the equivalent `"rgb(0, 0, 255)"` syntax.

## When and how values are serialized

Serialization ensures that CSS values are exposed to JavaScript in a consistent format across browsers. Without this, equivalent values could be returned in different syntaxes (for example, `#f00` vs. `rgb(255, 0, 0)`, or `1em` vs. `16px`), breaking code that relies on string comparisons.

Serialization happens whenever CSS values are read as strings through JavaScript APIs, such as:

- {{domxref("CSSStyleDeclaration.getPropertyValue()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}
- Accessing properties directly on {{domxref("CSSStyleDeclaration")}} objects (e.g., `element.style.backgroundColor`)

Note that different APIs retrieve the value at different stages of [value processing](/en-US/docs/Web/CSS/CSS_cascade/Value_processing), which have slightly different serialization behaviors.

Each CSS value type has an associated serialization format defined by the CSS specifications. Some common rules include:

- Keywords (like `auto`, `block`, `none`) serialize to all lowercase.
- [`<color>`](/en-US/docs/Web/CSS/color_value):
  - For sRGB colors: Unless declared using `color()`, serialized as `rgb(R, G, B)` or `rgba(R, G, B, A)`, where all arguments are numbers, and the `rgb` form is selected if the alpha is exactly `1`. The keyword `transparent` serializes as `rgba(0, 0, 0, 0)`.
  - For `lab()`, `lch()`, `oklab()`, `oklch()`, and `color()` colors: the function form is preserved, with numeric arguments.
- [`<length>`](/en-US/docs/Web/CSS/length): resolved to `px`.
- [`<angle>`](/en-US/docs/Web/CSS/angle): resolved to `deg`.
- [`<percentage>`](/en-US/docs/Web/CSS/percentage): preserved as a percentage.
- [`<time>`](/en-US/docs/Web/CSS/time): resolved to `s`.
- [`<frequency>`](/en-US/docs/Web/CSS/frequency): resolved to `Hz`.
- [`<resolution>`](/en-US/docs/Web/CSS/resolution): resolved to `dppx`.
- [`<url>`](/en-US/docs/Web/CSS/url): serialized with `url("...")`, with the URL resolved to an absolute URL.

For shorthand properties, its constituent longhand properties are serialized and combined according to the rules for that shorthand.

## Examples

### Color value serialization

Colors are among the most common types affected by serialization. Regardless of whether you define a color using `hsl()`, `hwb()`, a keyword, or a modern color space, JavaScript usually returns it in [legacy `rgb()` or `rgba()` format](/en-US/docs/Web/CSS/color_value/rgb#syntax).

The following examples demonstrate how different color formats are serialized when accessed through JavaScript.

```html
<div class="example hsl">HSL Color</div>
<div class="example hwb">HWB Color</div>
<div class="example named">Named Color</div>
<div class="example alpha">Transparent Color</div>
<pre id="output"></pre>
```

```css
.example {
  padding: 10px;
  margin: 5px;
  color: white;
}

.hsl {
  background-color: hsl(240 100% 50%);
}

.lab {
  background-color: lab(100% 0 0);
}

.named {
  background-color: blue;
}

.alpha {
  background-color: hsl(120 50% 50% / 0.3);
}
```

```js
const examples = document.querySelectorAll(".example");
const output = document.getElementById("output");

examples.forEach((element) => {
  const style = getComputedStyle(element);
  output.textContent += `${element.className}: ${style.getPropertyValue("background-color")}\n`;
});
```

{{EmbedLiveSample("Color serialization examples", 600, 200)}}

### Length value serialization

Lengths are another common case. Relative units (like `em`, `%`) are often resolved to absolute pixels when serialized through JavaScript APIs.

```js
element.style.marginLeft = "2em";
console.log(getComputedStyle(element).marginLeft);
// "32px" (depending on font size)
```

This normalization allows scripts to compare or calculate lengths consistently.

## Specifications

{{Specifications}}

## See also

- [`CSSStyleDeclaration.getPropertyValue()`](/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue)
- [`Window.getComputedStyle()`](/en-US/docs/Web/API/Window/getComputedStyle)
- [CSS colors](/en-US/docs/Web/CSS/CSS_colors)
- [CSS \<color>](/en-US/docs/Web/CSS/color_value)

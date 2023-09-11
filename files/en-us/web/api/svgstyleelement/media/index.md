---
title: "SVGStyleElement: media property"
short-title: media
slug: Web/API/SVGStyleElement/media
page-type: web-api-instance-property
browser-compat: api.SVGStyleElement.media
---

{{APIRef("SVG")}}

The **`SVGStyleElement.media`** property is a media query string corresponding to the [`media`](/en-US/docs/Web/SVG/Element/style#media) attribute of the given SVG style element.

The query must be matched for the style to apply.

## Value

A string defining a valid media query list with one or more comma separated values.
For example `"screen, print"`, or `"all"` (the default).

The value is initialized with the string specified in the corresponding style's [`media`](/en-US/docs/Web/SVG/Element/style#media) attribute.

## Examples

This example demonstrates programmatically getting and setting the media property on a style that was defined in an SVG definition.

### HTML

The HTML contains an SVG definition for a [`<circle>`](/en-US/docs/Web/SVG/Element/circle) with a [`<style>`](/en-US/docs/Web/SVG/Element/style) element that is conditional on the media query `"all and (min-width: 600px)"`.
We also define a `button` that will be used to display the current style and change the style.

```html
<button></button>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="60" cy="60" r="50" />
</svg>
```

### JavaScript

The code below gets the `style` element (an `SVGStyleElement`) using its id.

```js
const svg = document.querySelector("svg");
// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

We then add a function to set the button text to show the current value of the style's `media` property along with the current window width.
This function is called to set the initial button text, and also when the window is resized or the button is pressed.
The button event handler also sets the value of the style's `media` property.

```js
const button = document.querySelector("button");

function setButtonText() {
  button.textContent = `Media: ${style.media} (Width: ${window.innerWidth})`;
}
setButtonText();

addEventListener("resize", () => {
  setButtonText();
});

button.addEventListener("click", () => {
  style.media = "all and (min-width: 700px)";
  setButtonText();
});
```

### Result

The result is shown below.
The button text shows the value of the media attribute originally applied to the SVG style along with the width of the current frame (since the code is run in a frame).
Shrink the width of the frame to the media query width shown in the button to watch the style being applied.
Press the button to toggle the value of the `media` property on the style (which will be reflected on the button).

{{EmbedLiveSample("Examples")}}

> **Note:** The `media` property may be set to any string, but will be ignored if the string is not a valid media query.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLStyleElement.media")}}

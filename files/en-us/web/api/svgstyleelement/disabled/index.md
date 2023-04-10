---
title: "SVGStyleElement: disabled property"
short-title: disabled
slug: Web/API/SVGStyleElement/disabled
page-type: web-api-instance-property
browser-compat: api.SVGStyleElement.disabled
---

{{APIRef("SVG")}}

The **`SVGStyleElement.disabled`** property can be used to get and set whether the stylesheet is disabled (`true`) or not (`false`).

Note that there is no corresponding `disabled` attribute on the [SVG `<style>` element](/en-US/docs/Web/SVG/Element/style).

## Value

Returns `true` if the stylesheet is disabled, or there is no associated stylesheet; otherwise `false`.
The value is `false` by default (if there is an associated stylesheet).

The property can be used to enable or disable an associated stylesheet.
Setting the property to `true` when there is no associated stylesheet has no effect.

## Examples

### Disabling a style defined in the SVG

This example demonstrates programmatically setting the disabled property on a style that was defined in the HTML SVG definition.

#### HTML

The HTML contains an SVG definition for a [`<circle>`](/en-US/docs/Web/SVG/Element/circle) with a [`<style>`](/en-US/docs/Web/SVG/Element/style) element, along with a button that will be used to disable the style.

```html
<button>Enable</button>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <style id="circle_style_id">
    circle {
      fill: gold;
      stroke: green;
      stroke-width: 3px;
    }
  </style>
  <circle cx="50" cy="50" r="25" />
</svg>
```

#### JavaScript

The code below gets the `style` element (an `SVGStyleElement`) using its id, and then sets it as disabled.
The style already exists because it is defined in the SVG, so this should succeed.

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
style.disabled = true;
```

We then add an event handler for the button that toggles the disabled state and button text.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";
});
```

#### Result

The result is shown below.
Press the button to toggle the `disabled` property on the style used for the circle.

{{EmbedLiveSample("Disabling a style defined in the SVG")}}

### Disabling a programmatically defined style

This example is very similar to the one above, except that the style is defined programmatically.

Note that you can have multiple styles applied both in SVG source and programmatically.
This example is primarily provided to demonstrate how to create the style externally, and show at what point the style can be disabled.

#### HTML

The HTML is similar to the previous case, but the SVG definition does not include any default styling.

```html
<button>Enable</button>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="50" cy="50" r="25" />
</svg>
```

#### JavaScript

First we create the new SVG style node.
This is done by first creating a style element in the SVG namespace using [`Document.createElementNS()`](/en-US/docs/Web/API/Document/createElementNS), creating and appending a text node with the style definition, and then appending the node to the SVG defined above.

> **Note:** You must use [`Document.createElementNS()`](/en-US/docs/Web/API/Document/createElementNS) and not [`Document.createElement()`](/en-US/docs/Web/API/Document/createElement) to create the style, or by default you'll create the equivalent HTML style element.

```js
const svg = document.querySelector("svg");

// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
svg.appendChild(style);
style.appendChild(node);
```

Then we disable the style.
Note that this is the earliest point at which setting the property to `true` will succeed.
Before this point the SVG did not have a style associated, and so the value defaults to `false`.

```js
//Disable the style
style.disabled = true;
```

Last of all we add an event handler for the button that toggles the disabled state and button text (this is the same as in the previous example).

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";
});
```

#### Result

The result is shown below.
Press the button to toggle the `disabled` state on the style used for the circle.

{{EmbedLiveSample("Disabling a programmatically defined style")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLStyleElement.disabled")}}

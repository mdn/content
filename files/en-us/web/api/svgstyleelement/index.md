---
title: SVGStyleElement
slug: Web/API/SVGStyleElement
page-type: web-api-interface
browser-compat: api.SVGStyleElement
---

{{APIRef("SVG")}}

The **`SVGStyleElement`** interface corresponds to the SVG {{SVGElement("style")}} element.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent interface, {{domxref("SVGElement")}}._

- {{domxref("SVGStyleElement.type")}} {{deprecated_inline}}

  - : A string corresponding to the {{SVGAttr("type")}} attribute of the given element.

- {{domxref("SVGStyleElement.media")}}

  - : A string corresponding to the {{SVGAttr("media")}} attribute of the given element.

- {{domxref("SVGStyleElement.title")}}

  - : A string corresponding to the [`title`](/en-US/docs/Web/SVG/Reference/Element/style#title) attribute of the given element.

- {{domxref("SVGStyleElement.sheet")}} {{ReadOnlyInline}}

  - : Returns the {{domxref("CSSStyleSheet")}} object associated with the given element, or `null` if there is none.

- {{domxref("SVGStyleElement.disabled")}}
  - : A boolean value indicating whether or not the associated stylesheet is disabled.

## Instance methods

_This interface doesn't implement any specific methods, but inherits methods from its parent interface, {{domxref("SVGElement")}}._

## Examples

### Dynamically adding an SVG style element

To dynamically create an SVG style element (`SVGStyleElement`), you need to use [`Document.createElementNS()`](/en-US/docs/Web/API/Document/createElementNS), specifying a `style` element in the SVG namespace.

> **Note:** [`Document.createElement()`](/en-US/docs/Web/API/Document/createElement) can't be used to create SVG style elements (it returns an [`HTMLStyleElement`](/en-US/docs/Web/API/HTMLStyleElement)).

Given the following SVG element:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle cx="50" cy="50" r="25" />
</svg>
```

You can create an SVG style element as shown:

```js
// Get the SVG element object by tag name
const svg = document.querySelector("svg");

// Create the `style` element in the SVG namespace
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
const node = document.createTextNode("circle { fill: red; }");
style.appendChild(node);

// Append the style element to the SVG element
svg.appendChild(style);
```

### Accessing an existing SVG style

You can access an SVG style element that was defined in HTML (or an SVG file) using the normal HTML methods for getting tags, ids, and so on.
These include: {{domxref("Document.getElementsByTagName()")}}, {{domxref("Document.getElementById()")}}, {{domxref("Document.querySelector()")}}, {{domxref("Document.querySelectorAll()")}}, and so on.

For example, consider the HTML below that defines an SVG file with a style element.

```html
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

To fetch the first `style` element in the first `svg` element, you might use {{domxref("Document.querySelector()")}} as shown below.

```js
const svg = document.querySelector("svg");
const style = svg.querySelector("style");
```

Alternatively, you can could use {{domxref("Document.getElementById()")}}, specifying the tag id:

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
```

Or just get the element from document by id (in this case using `document.querySelector()`):

```js
const style = document.querySelector("#circle_style_id");
```

## Getting and setting properties

This example demonstrates how to get and set the properties of a style element, which in this case was specified in an SVG definition.

### HTML

The HTML contains an SVG definition for a [`<circle>`](/en-US/docs/Web/SVG/Reference/Element/circle) with a [`<style>`](/en-US/docs/Web/SVG/Reference/Element/style) element, along with an HTML [`<button>`](/en-US/docs/Web/HTML/Reference/Elements/button) element that will be used to enable and disable the style, and an HTML [`<textarea>`](/en-US/docs/Web/HTML/Reference/Elements/button) element for logging the property values.

```html
<button>Disable</button>
<textarea id="log" rows="6" cols="90"></textarea>
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <style id="circle_style_id" media="all and (min-width: 600px)">
    circle {
      fill: gold;
      stroke: green;
      stroke-width: 3px;
    }
  </style>
  <circle cx="60" cy="60" r="50" />
</svg>
```

Note that above we have set the `media` attribute on the `style` tag.
We have not set `type` as it is deprecated, or `disabled` because there is no such attribute (only the property on the element).

### JavaScript

The code below gets the `style` element (an `SVGStyleElement`) using its id.

```js
const svg = document.querySelector("svg");
const style = svg.getElementById("circle_style_id");
```

We then add a function to log the style properties.
This is called after initialization, whenever the frame resizes, and if the button is pressed.

```js
// Get logging text area
const log = document.getElementById("log");

function setLogText() {
  // Log current values of properties
  log.value = `style.media: ${style.media} (frame width: ${window.innerWidth})\n`; // 'all' by default
  log.value += `style.title: ${style.title}\n`; // no default value
  log.value += `style.disabled: ${style.disabled}\n`; // 'false' by default
  log.value += `style.type: ${style.type}\n`; // deprecated (do not use)
  log.value += `style.sheet.rules[0].cssText: ${style.sheet.rules[0].cssText}\n`;
}

// Log initial property values
setLogText();

// Log when the frame resizes
addEventListener("resize", () => {
  setLogText();
});
```

Last of all we set an event handler for the button.
When the button is clicked the {{domxref("SVGStyleElement.disabled","disabled")}} property is toggled.
This also updates the log and the button text.

```js
const button = document.querySelector("button");

button.addEventListener("click", () => {
  style.disabled = !style.disabled;
  button.textContent = style.disabled ? "Enable" : "Disable";

  // Log after button presses
  setLogText();
});
```

### Result

The result is shown below.
Toggle the button to enable and disable the SVG style element.
If the SVG style is not disabled, you can also resize the window width to see the effect of the `media` property on the style when the frame holding the live example is 600px wide.

{{EmbedLiveSample("Getting and setting properties","200","250")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLStyleElement")}}

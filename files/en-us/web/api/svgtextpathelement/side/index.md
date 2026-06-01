---
title: "SVGTextPathElement: side property"
short-title: side
slug: Web/API/SVGTextPathElement/side
page-type: web-api-instance-property
browser-compat: api.SVGTextPathElement.side
---

{{APIRef("SVG")}}

The **`side`** read-only property of the {{domxref("SVGTextPathElement")}} interface reflects the {{SVGAttr("side")}} attribute of the given {{SVGElement("textPath")}} element.
Possible values are defined by the [`TEXTPATH_SIDETYPE_*` constants](/en-US/docs/Web/API/SVGTextPathElement#static_properties) constants defined on this interface.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Examples

Also see the [Example](/en-US/docs/Web/API/SVGTextPathElement#basic_usage) in `SVGTextPathElement`, which allows you to toggle the `side` attribute.

### Accessing the `side` property

This example demonstrates how you can read the `side` property.

#### HTML

First we define HTML and CSS for an SVG path that draws text on the right on supporting browsers.

```css hidden
html,
body,
svg {
  height: 400px;
  width: auto; /* Keeps the aspect ratio */
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- to hide the path, it is usually wrapped in a <defs> element -->
  <!-- <defs> -->
  <path
    id="MyPath"
    fill="none"
    stroke="red"
    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 " />

  <text>
    <textPath href="#MyPath" side="right">This text follows a path.</textPath>
  </text>
</svg>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 50px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

The code below logs the `baseVal` of the `side` property and uses the `TEXTPATH_SIDETYPE_RIGHT` static property to indicate whether text is drawn on the left or right of the path.
If the `side` property isn't defined the code will throw, and we assume that text is drawn to the left.

```js
const textPath = document.querySelector("textPath");

// Log right or left based on value
try {
  const side =
    textPath.side.baseVal == SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT
      ? "right"
      : "left";
  log(`side: ${side}`);
} catch {
  log(`side: left`);
}
```

#### Result

Browsers that support the `side` attribute on paths will draw the text on the right hand side of the path below and log which side the text has been drawn on.

{{EmbedLiveSample('Accessing the `side` property', 200, 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTextPathElement.side")}}
- [`SVGTextPathElement` method types](/en-US/docs/Web/API/SVGTextPathElement#static_properties)

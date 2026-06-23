---
title: "SVGTextPathElement: side property"
short-title: side
slug: Web/API/SVGTextPathElement/side
page-type: web-api-instance-property
browser-compat: api.SVGTextPathElement.side
---

{{APIRef("SVG")}}

The **`side`** read-only property of the {{domxref("SVGTextPathElement")}} interface represents the side of the path that the text is placed on (relative to the path direction).

The `side.baseVal` property reflects the {{SVGAttr("side")}} content attribute of the given {{SVGElement("textPath")}} element, as an enumerated value.
While `side` is read-only, you can use `side.baseVal` to modify the value of the corresponding attribute.

In SVG 2 `side.animVal` also reflects the non-animated value of the attribute.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

These static properties indicate the values that can be returned from `side.baseVal` (and `side.animVal`):

- [`SVGTextPathElement.TEXTPATH_SIDETYPE_LEFT`](/en-US/docs/Web/API/SVGTextPathElement#textpath_sidetype_unknown) (1)
  - : The text is rendered on the left side of the path (the default).
    This corresponds to a value of `"left"` on the SVG `side` attribute.
- [`SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT`](/en-US/docs/Web/API/SVGTextPathElement#textpath_sidetype_right) (2)
  - : The text is rendered on the right side of the path.
    This corresponds to a value of `"right"` on the SVG `side` attribute.
- [`SVGTextPathElement.TEXTPATH_SIDETYPE_UNKNOWN`](/en-US/docs/Web/API/SVGTextPathElement#textpath_sidetype_left) (0)
  - : The side type is unknown or invalid.
    This value cannot be set.

Note that `baseVal` cannot be set to `0` (`TEXTPATH_SIDETYPE_UNKNOWN`) or any other value than those listed above.
`animVal` is read-only and with throw if you attempt to write to it.

## Examples

Also see the [Example](/en-US/docs/Web/API/SVGTextPathElement#basic_usage) in `SVGTextPathElement`, which allows you to toggle the `side` attribute.

### Accessing the `side` property

This example demonstrates how you can set and get the `side` property, and in particular its `baseVal`.

#### HTML

First we define HTML and CSS for an SVG path that draws text on the right on supporting browsers using the SVG `side` attribute.

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

We also add a button for toggling the value of the `side.baseVal` property.
Note that there is also logging code, that is hidden as it is not relevant.

```html
<button id="toggle-side">Toggle Side</button>
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

The code below first gets the `side.baseVal` property and compares it to the enumerated static property values to determine (and log) which side of the path the text is drawn on.
If the `side` property isn't defined the code will throw, and we note that the `side` property isn't supported.

```js
const textPath = document.querySelector("textPath");
const button = document.querySelector("#toggle-side");

// Helper function to read and log the current side
function logCurrentSide() {
  try {
    let side;

    if (textPath.side.baseVal === SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT) {
      side = "right";
    } else if (
      textPath.side.baseVal === SVGTextPathElement.TEXTPATH_SIDETYPE_LEFT
    ) {
      side = "left";
    } else if (
      textPath.side.baseVal === SVGTextPathElement.TEXTPATH_SIDETYPE_UNKNOWN
    ) {
      side = "unknown";
    } else {
      side = "unexpected value";
    }
    log(`Current side: ${side}`);
  } catch {
    log(`side property is not supported in this browser`);
  }
}

// Log the initial state on load
logCurrentSide();
```

The code below shows how you can set `side.baseVal` with the enumerated static values.
The event handler first checks the current value of `side.baseVal` and then toggles the value to the static property that matches the other side.

```js
// Toggle the side when the button is clicked
button.addEventListener("click", () => {
  try {
    if (textPath.side.baseVal === SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT) {
      // Change to left
      textPath.side.baseVal = SVGTextPathElement.TEXTPATH_SIDETYPE_LEFT;
    } else {
      // Change to right
      textPath.side.baseVal = SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT;
    }

    // Log the updated state
    logCurrentSide();
  } catch (e) {
    log("Setting the side property is not supported in this browser.");
  }
});
```

#### Result

Toggle the button to move the text from one side to the other.

{{EmbedLiveSample('Accessing the `side` property', 200, 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTextPathElement.side")}}
- [`SVGTextPathElement` method types](/en-US/docs/Web/API/SVGTextPathElement#static_properties)

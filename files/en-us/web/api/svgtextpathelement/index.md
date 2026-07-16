---
title: SVGTextPathElement
slug: Web/API/SVGTextPathElement
page-type: web-api-interface
browser-compat: api.SVGTextPathElement
---

{{APIRef("SVG")}}

The **`SVGTextPathElement`** interface corresponds to the {{SVGElement("textPath")}} element.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from its parent interface, {{domxref("SVGTextContentElement")}}._

- {{domxref("SVGTextPathElement.href")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} attribute of the given element.
- {{domxref("SVGTextPathElement.side")}} {{ReadOnlyInline}} {{experimental_inline}} {{non-standard_inline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("side")}} attribute of the given element.
    Allowed values are specified by the [`TEXTPATH_SIDETYPE_*`](#textpath_sidetype_unknown) constants defined on this interface.
- {{domxref("SVGTextPathElement.startOffset")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the X component of the {{SVGAttr("startOffset")}} attribute of the given element.
- {{domxref("SVGTextPathElement.method")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("method")}} attribute of the given element.
    Allowed values are specified by the [`TEXTPATH_METHODTYPE_*`](#textpath_methodtype_unknown) constants defined on this interface.
- {{domxref("SVGTextPathElement.spacing")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("spacing")}} attribute of the given element.
    Allowed values are specified by the [`TEXTPATH_SPACINGTYPE_*`](#textpath_spacingtype_unknown) constants defined on this interface.

## Instance methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGTextContentElement")}}._

## Static properties

- `TEXTPATH_METHODTYPE_UNKNOWN` (0)
  - : The type is not one of predefined types.
    It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `TEXTPATH_METHODTYPE_ALIGN` (1)
  - : Corresponds to the value `align`.
- `TEXTPATH_METHODTYPE_STRETCH` (2)
  - : Corresponds to the value `stretch`.
- `TEXTPATH_SPACINGTYPE_UNKNOWN` (0)
  - : The type is not one of predefined types.
    It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `TEXTPATH_SPACINGTYPE_AUTO` (1)
  - : Corresponds to the value `auto`.
- `TEXTPATH_SPACINGTYPE_EXACT` (2)
  - : Corresponds to the value `exact`.
- `TEXTPATH_SIDETYPE_UNKNOWN` (0)
  - : The type is not one of the predefined types.
    It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `TEXTPATH_SIDETYPE_LEFT` (1)
  - : Corresponds to the value `left`.
- `TEXTPATH_SIDETYPE_RIGHT` (2)
  - : Corresponds to the value `right`.

## Examples

### Basic usage

This example shows how you can set and get the properties of an `SVGTextPathElement`.

#### HTML

First we define the SVG and associated CSS to draw a path with text drawn along it (this is a near-copy of the SVG in the [`path`](/en-US/docs/Web/SVG/Reference/Attribute/path#path-data) attribute topic).

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
    d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />

  <text>
    <textPath href="#MyPath">Quick brown fox jumps over the lazy dog.</textPath>
  </text>
</svg>
```

We also add a button for toggling the `side` property in order to change what side of the path the text is drawn on.
Note that there is also hidden logging code that is not relevant to the example.

```html
<button id="toggleBtn">Toggle side</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 120px;
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

The code below toggles the `side.baseVal` property on the `textPath`, causing the text to swap sides.

First we define a function to log each of the properties of the path element, and call it to log the initial state on load.
The `side.baseVale` property is logged first, and demonstrates how the enumerated constants may be read and interpreted (this is done in a `try...catch` block, because `side` is not supported in all browsers).
The other properties of the text path are also logged, but as raw values of their associated `baseVal` property.

```js
const textPath = document.querySelector("textPath");

function logPathBaseVal() {
  // Log the baseVal for each property
  log("LOG:");

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
    log(` Current side: ${side}`);
  } catch {
    log(`side property is not supported in this browser`);
  }

  log(` href: ${textPath.href.baseVal}`);
  log(` method: ${textPath.method.baseVal}`);
  log(` spacing: ${textPath.spacing.baseVal}`);
  log(` startOffset: ${textPath.startOffset.baseVal}`);
}

// Log the initial state on load
logPathBaseVal();
```

The toggle button event handler code is shown below This reads the current value of the `side.baseVal` property, and toggles the value to match the other side.
It then logs the current state.

```js
// Toggle the side when the button is clicked
toggleBtn.addEventListener("click", () => {
  try {
    if (textPath.side.baseVal === SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT) {
      // Change to left
      textPath.side.baseVal = SVGTextPathElement.TEXTPATH_SIDETYPE_LEFT;
    } else {
      // Change to right
      textPath.side.baseVal = SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT;
    }

    // Log the updated state
    logPathBaseVal();
  } catch (e) {
    log("Setting the side property is not supported in this browser.");
  }
});
```

#### Result

Press the button to toggle the states.

{{EmbedLiveSample('Basic usage', 200, 600)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("textPath")}}

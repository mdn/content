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
- {{domxref("SVGTextPathElement.side")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("side")}} attribute of the given element.
    Possible values are defined by the `TEXTPATH_SIDETYPE_*` constants defined on this interface.
- {{domxref("SVGTextPathElement.startOffset")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the X component of the {{SVGAttr("startOffset")}} attribute of the given element.
- {{domxref("SVGTextPathElement.method")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("method")}} attribute of the given element.
    Possible values are defined by the `TEXTPATH_METHODTYPE_*` constants defined on this interface.
- {{domxref("SVGTextPathElement.spacing")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("spacing")}} attribute of the given element.
    Possible values are defined by the `TEXTPATH_SPACINGTYPE_*` constants defined on this interface.

## Instance methods

_This interface does not provide any specific methods, but implements those of its parent, {{domxref("SVGTextContentElement")}}._

## Static properties

- `TEXTPATH_METHODTYPE_UNKNOWN` (0)
  - : The type is not one of predefined types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `TEXTPATH_METHODTYPE_ALIGN` (1)
  - : Corresponds to the value `align`.
- `TEXTPATH_METHODTYPE_STRETCH` (2)
  - : Corresponds to the value `stretch`.
- `TEXTPATH_SPACINGTYPE_UNKNOWN` (0)
  - : The type is not one of predefined types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `TEXTPATH_SPACINGTYPE_AUTO` (1)
  - : Corresponds to the value `auto`.
- `TEXTPATH_SPACINGTYPE_EXACT` (2)
  - : Corresponds to the value `exact`.
- `TEXTPATH_SIDETYPE_UNKNOWN` (0)
  - : The type is not one of predefined types. It is invalid to attempt to define a new value of this type or to attempt to switch an existing value to this type.
- `TEXTPATH_SIDETYPE_LEFT` (1)
  - : Corresponds to the value `left`.
- `TEXTPATH_SIDETYPE_RIGHT` (2)
  - : Corresponds to the value `right`.

## Examples

### Basic usage

This example shows how you can read the properties of an `SVGTextPathElement`.

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

We also add a button for cycling through the possible values of the `side` attribute, allowing us to control which side of the path the text is drawn on.
Note that there is also hidden logging code that is not relevant to the example.

```html
<button id="cycleBtn">Cycle side [none]</button>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
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

The code below cycles the `side` attribute on the `textPath` between `none` (by removing it), `"left"`, and `"right"`.
If the state is `none` or `"left"` the text is drawn on the left of the path, and otherwise it is drawn on the right.
The code also updates the button text with the current state, and logs the `baseVal` for each of the properties (the `animVal` will have the same value, as we are not animating the attribute).

```js
const textPath = document.querySelector("textPath");
const button = document.getElementById("cycleBtn");

// States indicating the side of the path
const states = ["none", "left", "right"];

button.addEventListener("click", () => {
  // Get the current state from attribute: side
  let currentSide;
  if (!textPath.hasAttribute("side")) {
    currentSide = "none";
  } else {
    currentSide = textPath.getAttribute("side");
  }

  // Advance to the next state
  let currentIndex = states.indexOf(currentSide);
  let nextIndex = (currentIndex + 1) % states.length;
  let nextState = states[nextIndex];

  // Apply the state changes to the SVG
  if (nextState === "none") {
    textPath.removeAttribute("side");
  } else {
    textPath.setAttribute("side", nextState);
  }

  // Update the button text to reflect the new state
  button.textContent = `Cycle side [${nextState}]`;

  // Log the SVG properties
  console.log(textPath.method.baseVal);
  logPathBaseVal(nextState);
});
```

The code to log the `baseVal` of each of the properties is shown below.
For just the `side` property we show how you can compare the returned value to one of the constants.

```js
function logPathBaseVal(currentSide) {
  // Select the textPath element
  const textPathElement = document.querySelector("textPath");

  // Log the baseVal for each property
  log(`LOG: ${currentSide}`);
  log(` href: ${textPathElement.href.baseVal}`);
  log(` method: ${textPathElement.method.baseVal}`);
  log(` spacing: ${textPathElement.spacing.baseVal}`);
  log(` startOffset: ${textPathElement.startOffset.baseVal}`);
  const side =
    textPath.side.baseVal == SVGTextPathElement.TEXTPATH_SIDETYPE_RIGHT
      ? "right"
      : "left";
  log(` side: ${side}`);
}
```

#### Result

Press the button to cycle through the states.
On browsers that support the `side` attribute, the text will be drawn on the right of the path when the button displays `Cycle side [right]`.
Note that by default (and on browsers that don't support attribute) the text is drawn on the left.

{{EmbedLiveSample('Basic usage', 200, 600)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("textPath")}}

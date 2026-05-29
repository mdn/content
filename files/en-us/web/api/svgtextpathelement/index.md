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
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("side")}} attribute of the given {{domxref("Element.textPath","textPath")}} element.
- {{domxref("SVGTextPathElement.startOffset")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedLength")}} corresponding to the X component of the {{SVGAttr("startOffset")}} attribute of the given element.
- {{domxref("SVGTextPathElement.method")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("method")}} attribute of the given element. It takes one of the `TEXTPATH_METHODTYPE_*` constants defined on this interface.
- {{domxref("SVGTextPathElement.spacing")}} {{ReadOnlyInline}}
  - : An {{domxref("SVGAnimatedEnumeration")}} corresponding to the {{SVGAttr("spacing")}} attribute of the given element. It takes one of the `TEXTPATH_SPACINGTYPE_*` constants defined on this interface.

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

THIS IS FROM /en-US/docs/Web/SVG/Reference/Attribute/path#path-data

```css hidden
html,
body,
svg {
  height: 100%;
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
  <!-- </defs> -->

  <text>
    <textPath href="#MyPath">Quick brown fox jumps over the lazy dog.</textPath>
  </text>
</svg>
```

```html
<pre id="log"></pre>
```

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// 1. Select the textPath element
const textPathElement = document.querySelector("textPath");
log(
  `side .baseVal/animVal: ${textPathElement.side.baseVal}/${textPathElement.side.animVal}`,
);
log(
  `method .baseVal/animVal: ${textPathElement.method.baseVal}/${textPathElement.method.animVal}`,
);
log(
  `spacing .baseVal/animVal: ${textPathElement.spacing.baseVal}/${textPathElement.spacing.animVal}`,
);
log(
  `startOffset .baseVal/animVal: ${textPathElement.startOffset.baseVal}/${textPathElement.startOffset.animVal}`,
);
log(
  `href .baseVal/animVal: ${textPathElement.href.baseVal}/${textPathElement.href.animVal}`,
);
/*
// 2. Access properties specific to SVGTextPathElement
const hrefValue = textPathElement.href.baseVal; // Gets the reference path (e.g., "#MyPath")
const startOffset = textPathElement.startOffset.baseVal; // Gets the start offset value
const method = textPathElement.method.baseVal; // Gets the alignment method (e.g., align or stretch)
const spacing = textPathElement.spacing.baseVal; // Gets the spacing method (e.g., exact or auto)

// 3. Log the values to see them in action
console.log("Associated Path Href:", hrefValue); 
console.log("Start Offset:", startOffset);
*/
```

{{EmbedLiveSample('Basic usage', 200, 700)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("textPath")}}

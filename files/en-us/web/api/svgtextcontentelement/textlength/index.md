---
title: "SVGTextContentElement: textLength property"
short-title: textLength
slug: Web/API/SVGTextContentElement/textLength
page-type: web-api-instance-property
browser-compat: api.SVGTextContentElement.textLength
---

{{APIRef("SVG")}}

The **`textLength`** read-only property of the {{domxref("SVGTextContentElement")}} interface reflects the {{SVGAttr("textLength")}} attribute of the given element.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Examples

### Accessing the `textLength` Property

```html
<svg width="200" height="100">
  <text id="myText" x="10" y="50" textLength="100" lengthAdjust="spacing">
    Hello, SVG!
  </text>
</svg>
```

```js
const textElement = document.getElementById("myText");

// Access the textLength property
const animatedLength = textElement.textLength;

// The base value of the textLength attribute
console.log(animatedLength.baseVal.value); // Output: 100
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("textLength")}}
- {{domxref("SVGAnimatedLength")}}

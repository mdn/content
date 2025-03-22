---
title: "SVGTextContentElement: lengthAdjust property"
short-title: lengthAdjust
slug: Web/API/SVGTextContentElement/lengthAdjust
page-type: web-api-instance-property
browser-compat: api.SVGTextContentElement.lengthAdjust
---

{{APIRef("SVG")}}

The **`lengthAdjust`** read-only property of the {{domxref("SVGTextContentElement")}} interface reflects the {{SVGAttr("lengthAdjust")}} attribute of the given element. It takes one of the `LENGTHADJUST_*` constants defined on this interface.

## Value

An {{domxref("SVGAnimatedEnumeration")}}.

## Examples

### Accessing the `lengthAdjust` Property

```html
<svg width="200" height="100">
  <text id="myText" x="10" y="50" textLength="100" lengthAdjust="spacing">
    Hello, SVG!
  </text>
</svg>
```

```js
const textElement = document.getElementById("myText");

// Access the `lengthAdjust` property
const lengthAdjust = textElement.lengthAdjust;

// Log the base value of the `lengthAdjust` attribute
console.log(lengthAdjust.baseVal); // Output: 1 (e.g. LENGTHADJUST_SPACING)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("lengthAdjust")}}
- {{domxref("SVGAnimatedEnumeration")}}

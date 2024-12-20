---
title: "SVGSVGElement: height property"
short-title: height
slug: Web/API/SVGSVGElement/height
page-type: web-api-instance-property
browser-compat: api.SVGSVGElement.height
---

{{APIRef("SVG")}}

The **`height`** read-only property of the {{domxref("SVGSVGElement")}} interface describes the vertical size of element as an {{domxref("SVGAnimatedLength")}}. It reflects the {{SVGElement("svg")}} element's {{SVGAttr("height")}} attribute.

Several features impact the vertical dimension of an `<svg>` element, with some impacting the {{domxref("DOMRect.height")}} height but not this property when the `height` attribute is present. An SVG's size is primarily defined by CSS box model properties, overriding the `height` attribute, which the `height` property reflects. For non-nested SVGs, the vertical size may be the height component of the {{SVGAttr("viewBox")}} attribute, if set.

In an HTML document, if both the {{SVGAttr("viewBox")}} and `height` attributes are omitted, the `height` property reflects that actual height. If no {{cssxref("height")}} or logical properties define the height, the `<svg>` element will be rendered with a height of `200px`. In this case, the `height` will be `200` or less, as the `height` is the size of the viewport's content-box size (the height minus any border and padding). The value would be `200`, not `200px`, as the `height` property is a number providing a relative value in user coordinate system units, not browser pixels.

The `height` property of a nested `<svg>` is determined by it's `height` attribute, if defined, with percentage values being relative to the height of the containing SVG. If omitted, the `height` is the same as the `<svg>` in which it is contained.

As noted above, CSS {{cssxref("height")}} property takes precedence over the `<svg>` element's `height` attribute, so the value may not reflect the element's appearance. The CSS `height` property doesn't apply to nested SVG elements.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const svg = document.querySelector("svg");
const verticalSize = svg.height;
console.dir(verticalSize.baseVal.value); // the `height` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGSVGElement.viewBox")}}
- {{domxref("SVGSVGElement.width")}}
- {{domxref("SVGAnimatedLength.baseVal")}}

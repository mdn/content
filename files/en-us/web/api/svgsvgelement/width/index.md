---
title: "SVGSVGElement: width property"
short-title: width
slug: Web/API/SVGSVGElement/width
page-type: web-api-instance-property
browser-compat: api.SVGSVGElement.width
---

{{APIRef("SVG")}}

The **`width`** read-only property of the {{domxref("SVGSVGElement")}} interface describes the horizontal size of element as an {{domxref("SVGAnimatedLength")}}. It reflects the {{SVGElement("svg")}} element's {{SVGAttr("width")}} attribute.

An SVG's size is primarily defined by CSS box model properties, while the `width` property reflects the `width` attribute, if present, otherwise, the width component of the {{SVGAttr("viewBox")}} attribute, if set. The `width` property is a number providing a relative value in user coordinate system, not browser pixels. Several features impact the inline dimension of an `<svg>` element, with some impacting the {{domxref("DOMRect.width")}} width but not this property when the `width` attribute is present. In an HTML document, if both the {{SVGAttr("viewBox")}} and `width` attributes are omitted, the `width` property reflects that actual width. If no {{cssxref("width")}} or logical properties defined the width, the `<svg>` element will be rendered with a width of `300px`. In this case, the `width` will be `300` or less, as the `width` is the size of the viewport's content-box size (the width minus any border and padding).

The `width` property of a nested `<svg>` is determined by it's `width` attribute, if defined, with percentage values being relative to the containing SVG. Otherwise, the `width` is the same as the `<svg>` in which it is contained. The CSS `width` property doesn't apply to nested SVG elements.

As noted above, CSS {{cssxref("width")}} property takes precedence over the `<svg>` element's `width` attribute, so the value may not reflect the element's appearance.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const svg = document.querySelector("svg");
const inlineSize = svg.width;
console.dir(inlineSize.baseVal.value); // the `width` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGSVGElement.viewBox")}}
- {{domxref("SVGAnimatedLength.baseVal")}}

---
title: "SVGFEConvolveMatrixElement: edgeMode property"
short-title: edgeMode
slug: Web/API/SVGFEConvolveMatrixElement/edgeMode
page-type: web-api-instance-property
browser-compat: api.SVGFEConvolveMatrixElement.edgeMode
---

{{APIRef("SVG")}}

The **`edgeMode`** read-only property of the {{domxref("SVGFEConvolveMatrixElement")}} interface reflects the {{SVGAttr("edgeMode")}} attribute of the given {{SVGElement("feConvolveMatrix")}} element. The `SVG_EDGEMODE_*` constants defined on this interface are represented by the numbers 1 through 3, where the default `duplicate` is `1`, `wrap` is `2`, and `none` is `3`.

## Value

An {{domxref("SVGAnimatedEnumeration")}} object.

## Examples

In this example, we retrieve the `<feConvolveMatrix>` filter element's `edgeMode` attribute value using the `edgeMode` property of the `SVGFEConvolveMatrixElement` interface.

If our SVG contains the following filter:

```html
<feConvolveMatrix kernelMatrix="3 0 0 0 0 0 0 0 -4" id="el" edgeMode="wrap" />
```

We can access the number associated with the enumerated keyword value of the `edgeMode` attribute of the `feConvolveMatrix` element.

```js
const el = document.getElementById("el");
console.log(el.edgeMode.baseVal); // output: 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedEnumeration")}}

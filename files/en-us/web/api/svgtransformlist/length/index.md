---
title: "SVGTransformList: length property"
short-title: length
slug: Web/API/SVGTransformList/length
page-type: web-api-instance-property
browser-compat: api.SVGTransformList.length
---

{{APIRef("SVG")}}

The **`length`** read-only property of the {{domxref("SVGTransformList")}} interface represents the number of items in the list.

## Value

An `integer`; the number of {{domxref("SVGTransform")}} objects in the list as an unsigned long.

## Examples

### Accessing the `length` Property

```html
<svg width="200" height="200" id="mySvg">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// Access the transform list of the <rect> element
const transformList = rectElement.transform.baseVal;

// Apply a translate transformation to the <rect> element
const translateTransform = svgElement.createSVGTransform();
translateTransform.setTranslate(50, 50);
transformList.appendItem(translateTransform);

console.log(`Number of transformations: ${transformList.length}`); // Output: 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransform")}}
- {{domxref("SVGTransformList.numberOfItems")}} (alias property)

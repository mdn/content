---
title: "SVGTransformList: getItem() method"
short-title: getItem()
slug: Web/API/SVGTransformList/getItem
page-type: web-api-instance-method
browser-compat: api.SVGTransformList.getItem
---

{{APIRef("SVG")}}

The `getItem()` method of the {{domxref("SVGTransformList")}} interface returns the specified item from the list.

The returned item is the item itself and not a copy. Any changes made to the item are immediately reflected in the list.

The first item is indexed at `0`.

## Syntax

```js-nolint
getItem(index)
```

### Parameters

- `index`
  - : An `integer`; the index of the specified item as an unsigned long.

### Return value

An {{domxref("SVGTransform")}} object; the specified item from the list.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("SVGTransformList")}} corresponds to a read-only attribute or when the object itself is read-only.

## Examples

### Accessing an Item from the Transform List

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

// Get the first item from the transform list
const firstTransform = transformList.getItem(0);

// Log the transformation type
console.log(`Transformation Type: ${firstTransform.type}`); // Output: 2 (for SVG_TRANSFORM_TRANSLATE)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransform")}}

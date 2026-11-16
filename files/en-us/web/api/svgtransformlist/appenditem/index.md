---
title: "SVGTransformList: appendItem() method"
short-title: appendItem()
slug: Web/API/SVGTransformList/appendItem
page-type: web-api-instance-method
browser-compat: api.SVGTransformList.appendItem
---

{{APIRef("SVG")}}

The `appendItem()` method of the {{domxref("SVGTransformList")}} interface inserts a new item at the end of the list.

The inserted item is the item itself and not a copy.

- If `newItem` is already in a list, it is removed from its previous list before it is inserted into this list.

## Syntax

```js-nolint
appendItem(newItem)
```

### Parameters

- `newItem`
  - : An {{domxref("SVGTransform")}} item that is appended to the list.

### Return value

An {{domxref("SVGTransform")}} object; the appended item from the list.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("SVGTransformList")}} corresponds to a read-only attribute or when the object itself is read-only.

## Examples

### Appending a New Transformation

```html
<svg width="200" height="200">
  <rect width="100" height="100" fill="red" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// Access the transform list of the <rect> element
const transformList = rectElement.transform.baseVal;

// Create a new translation transformation
const svgTransform = svgElement.createSVGTransform();
svgTransform.setTranslate(50, 50);

// Append the new transformation to the list
const appendedTransform = transformList.appendItem(svgTransform);

console.dir(appendedTransform); // Output: SVGTransform { type: 2, matrix: SVGMatrix, angle: 0 }
console.log(`Total number of transformations: ${transformList.numberOfItems}`); // Output: 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransform")}}
- {{domxref("SVGTransformList.numberOfItems")}}

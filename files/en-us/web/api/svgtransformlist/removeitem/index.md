---
title: "SVGTransformList: removeItem() method"
short-title: removeItem()
slug: Web/API/SVGTransformList/removeItem
page-type: web-api-instance-method
browser-compat: api.SVGTransformList.removeItem
---

{{APIRef("SVG")}}

The `removeItem()` method of the {{domxref("SVGTransformList")}} interface removes an existing item from the list.

## Syntax

```js-nolint
removeItem(index)
```

### Parameters

- `index`
  - : An `integer`; the index of the item to be removed as an unsigned long.

### Return value

An {{domxref("SVGTransform")}} object; the removed item from the list.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `NoModificationAllowedError` {{domxref("DOMException")}}

  - : Thrown if {{domxref("SVGTransformList")}} corresponds to a read-only attribute or when the object itself is read-only.

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the index number is greater than or equal to {{domxref("SVGTransformList.numberOfItems", "numberOfItems")}}.

## Examples

### Removing a Transformation from the List

```html
<svg width="200" height="200" id="mySvg">
  <rect
    width="100"
    height="100"
    fill="blue"
    transform="translate(50,50) rotate(45)" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// Access the transform list of the <rect> element
const transformList = rectElement.transform.baseVal;

const removedTransform = transformList.removeItem(0);
console.dir(removedTransform); // Output: SVGTransform { type: 2, matrix: SVGMatrix, angle: 0 }

// The updated list length
console.log(`Updated number of transformations: ${transformList.length}`); // Output: 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransform")}}
- {{domxref("SVGTransformList.numberOfItems")}}

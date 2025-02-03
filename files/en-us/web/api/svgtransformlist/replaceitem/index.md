---
title: "SVGTransformList: replaceItem() method"
short-title: replaceItem()
slug: Web/API/SVGTransformList/replaceItem
page-type: web-api-instance-method
browser-compat: api.SVGTransformList.replaceItem
---

{{APIRef("SVG")}}

The `replaceItem()` method of the {{domxref("SVGTransformList")}} interface replaces an existing item in the list with a new item.

The inserted item is the item itself and not a copy.

- If `newItem` is already in a list, it is removed from its previous list before it is inserted into this list.

- If the item is already in this list, note that the `index` of the item to replace is before the removal of the item.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameters

- `newItem`
  - : A {{domxref("SVGTransform")}} item that is inserted into the list.
- `index`
  - : An `integer`; the index where the new item should replace the existing one, as an unsigned long.

### Return value

An {{domxref("SVGTransform")}} object; the inserted item from the list.

### Exceptions

This method may raise a {{domxref("DOMException")}} of one of the following types:

- `NoModificationAllowedError` {{domxref("DOMException")}}

  - : Thrown if {{domxref("SVGTransformList")}} corresponds to a read-only attribute or when the object itself is read-only.

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the index number is greater than or equal to {{domxref("SVGTransformList.numberOfItems", "numberOfItems")}}.

## Examples

### Replacing a Transformation in the List

```html
<svg width="200" height="200" id="mySvg">
  <rect width="100" height="100" fill="blue" transform="translate(50,50)" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// Access the transform list of the <rect> element
const transformList = rectElement.transform.baseVal;

// Create a new rotation transformation
const rotateTransform = svgElement.createSVGTransform();
rotateTransform.setRotate(45, 50, 50);

transformList.replaceItem(rotateTransform, 0);

// Log the details of the new transformation
console.log(`New Transformation Type: ${transformList.getItem(0).type}`); // Output: 4 (e.g. SVG_TRANSFORM_ROTATE)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransform")}}
- {{domxref("SVGTransformList.numberOfItems")}}

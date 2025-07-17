---
title: "SVGTransformList: insertItemBefore() method"
short-title: insertItemBefore()
slug: Web/API/SVGTransformList/insertItemBefore
page-type: web-api-instance-method
browser-compat: api.SVGTransformList.insertItemBefore
---

{{APIRef("SVG")}}

The `insertItemBefore()` method of the {{domxref("SVGTransformList")}} interface inserts a new item into the list at the specified position.

The first item is indexed at `0`. The inserted item is the item itself and not a copy.

- If `newItem` is already in a list, it is removed from its previous list before it is inserted into this list.

- If the item is already in this list, note that the `index` of the item to insert before is before the removal of the item.

- If the `index` is equal to `0`, then the new item is inserted at the front of the list.

- If the `index` is greater than or equal to {{domxref("SVGTransformList.numberOfItems", "numberOfItems")}}, then the new item is appended to the end of the list.

## Syntax

```js-nolint
insertItemBefore(newItem, index)
```

### Parameters

- `newItem`
  - : An {{domxref("SVGTransform")}} item that is inserted into the list.
- `index`
  - : An `integer`; the index where the new item should be inserted as an unsigned long.

### Return value

An {{domxref("SVGTransform")}} object; the inserted item from the list.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("SVGTransformList")}} corresponds to a read-only attribute or when the object itself is read-only.

## Examples

### Inserting a Transformation into the List

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

// Create a new translate transformation
const translateTransform = svgElement.createSVGTransform();
translateTransform.setTranslate(50, 50);

// Insert the translation transformation at the beginning of the list
transformList.insertItemBefore(translateTransform, 0);

// The transformation list length and type
console.log(`Number of transformations: ${transformList.length}`); // Output: 1
console.log(`Transformation Type: ${transformList.getItem(0).type}`); // Output: 2 (e.g. SVG_TRANSFORM_TRANSLATE)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransform")}}

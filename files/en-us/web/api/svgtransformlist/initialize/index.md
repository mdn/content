---
title: "SVGTransformList: initialize() method"
short-title: initialize()
slug: Web/API/SVGTransformList/initialize
page-type: web-api-instance-method
browser-compat: api.SVGTransformList.initialize
---

{{APIRef("SVG")}}

The `initialize()` method of the {{domxref("SVGTransformList")}} interface clears all existing current items from the list and re-initializes the list to hold the single item specified by the parameter.

If the inserted item is already in a list, it is removed from its previous list before it is inserted into this list. The inserted item is the item itself and not a copy.

## Syntax

```js-nolint
initialize(newItem)
```

### Parameters

- `newItem`
  - : An {{domxref("SVGTransform")}} item that is inserted into the list.

### Return value

An {{domxref("SVGTransform")}} object; the item inserted into the list.

### Exceptions

- `NoModificationAllowedError` {{domxref("DOMException")}}
  - : Thrown if {{domxref("SVGTransformList")}} corresponds to a read-only attribute or when the object itself is read-only.

## Examples

### Re-initializing the Transform List with a New Transformation

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

// Apply an initial translate transformation to the <rect> element
const translateTransform = svgElement.createSVGTransform();
translateTransform.setTranslate(50, 50);
transformList.appendItem(translateTransform);

// Number of transformations before initialization
console.log(
  `Number of transformations before initialization: ${transformList.length}`,
); // Output: 1

// Create a new scale transformation
const scaleTransform = svgElement.createSVGTransform();
scaleTransform.setScale(2, 2);

// Initialize the list with the new scale transform
transformList.initialize(scaleTransform);

// Number of transformations after initialization
console.log(
  `Number of transformations after initialization: ${transformList.length}`,
); // Output: 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGTransform")}}

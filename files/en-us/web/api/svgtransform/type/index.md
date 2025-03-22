---
title: "SVGTransform: type property"
short-title: type
slug: Web/API/SVGTransform/type
page-type: web-api-instance-property
browser-compat: api.SVGTransform.type
---

{{APIRef("SVG")}}

The **`type`** read-only property of the {{domxref("SVGTransform")}} interface represents the `type` of transformation applied, specified by one of the `SVG_TRANSFORM_*` constants defined on this interface.

## Value

An `integer`; the type of value as an unsigned short.

## Examples

### Determining the type of a transform

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect id="rect" x="50" y="50" width="100" height="100" fill="blue" />
</svg>
```

```js
const rect = document.getElementById("rect");
const transformList = rect.transform.baseVal;

// Create and add a translation transform
const translateTransform = rect.ownerSVGElement.createSVGTransform();
translateTransform.setTranslate(20, 30);
transformList.appendItem(translateTransform);

// Check the type of the added transform
console.log(transformList.getItem(0).type); // Output: 2 (SVG_TRANSFORM_TRANSLATE)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "HTMLCanvasElement: getElementTransform() method"
short-title: getElementTransform()
slug: Web/API/HTMLCanvasElement/getElementTransform
page-type: web-api-instance-method
browser-compat: api.HTMLCanvasElement.getElementTransform
---

{{APIRef("Canvas API")}}

The **`getElementTransform()`** method of the {{domxref("HTMLCanvasElement")}} interface returns the {{domxref("DOMMatrix")}} representing the transform currently applied to a [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) element's underlying DOM presence.

> [!NOTE]
> The `getElementTransform()` method returns an identity `DOMMatrix` if no canvas element transform has been set for the element (for example, if it hasn't yet been drawn with {{domxref("CanvasRenderingContext2D.drawElementImage","drawElementImage()")}} or had {{domxref("HTMLCanvasElement.updateElementGeometry","updateElementGeometry()")}} called).

## Syntax

```js-nolint
getElementTransform(element)
```

### Parameters

- `element`
  - : A reference to a [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) element.

### Return value

A {{domxref("DOMMatrix")}} object.

## Examples

### Retrieving a rendered element's transform matrix

In the following snippet, we add a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event listener to a `<canvas>` element. Inside, we draw an element onto a 2D canvas context using `drawElementImage()`. Finally, we get the element's transform matrix using `getElementTransform()` and log it to the console.

```js
canvas.addEventListener("paint", () => {
  ctx.drawElementImage(form, 100, 100);
  const transform = canvas.getElementTransform(form);
  console.log(transform);
});
```

The logged `DOMMatrix` will be as follows:

```js
{
  "a": 1,
  "b": 0,
  "c": 0,
  "d": 1,
  "e": 100,
  "f": 100,
  "m11": 1,
  "m12": 0,
  "m13": 0,
  "m14": 0,
  "m21": 0,
  "m22": 1,
  "m23": 0,
  "m24": 0,
  "m31": 0,
  "m32": 0,
  "m33": 1,
  "m34": 0,
  "m41": 100,
  "m42": 100,
  "m43": 0,
  "m44": 1,
  "is2D": true,
  "isIdentity": false
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)

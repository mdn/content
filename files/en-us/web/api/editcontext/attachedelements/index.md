---
title: "EditContext: attachedElements() method"
short-title: attachedElements()
slug: Web/API/EditContext/attachedElements
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.EditContext.attachedElements
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

The **`attachedElements()`** method of the {{domxref("EditContext")}} interface returns an {{jsxref("Array")}} that contains only one item. This item is the element that's associated with the `EditContext` object.

## Syntax

```js-nolint
attachedElements()
```

### Return value

An {{jsxref("Array")}} containing one {{domxref("HTMLElement")}} object.

There can only be one element associated to an `EditContext` instance, so the returned array will always contain one element. If the API is extended in the future to support multiple associated elements, the return value will be an array containing multiple elements.

## Examples

### Getting the element associated with an `EditContext` instance

This example shows how to use the `attachedElements` method to get the element that's associated with an `EditContext` instance.

```html
<canvas id="editor-canvas"></canvas>
```

```js
const canvas = document.getElementById("editor-canvas");
const editContext = new EditContext();
canvas.editContext = editContext;

const attachedElements = editContext.attachedElements();
console.log(attachedElements[0] === canvas); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{DOMxRef("EditContext")}} interface it belongs to.

---
title: "Document: pointerLockElement property"
short-title: pointerLockElement
slug: Web/API/Document/pointerLockElement
page-type: web-api-instance-property
browser-compat: api.Document.pointerLockElement
---

{{APIRef("DOM")}}

The read-only **`pointerLockElement`** property
of the {{domxref("Document")}} interface provides the
element set as the target for mouse events while the pointer is locked. It is
`null` if lock is pending, pointer is unlocked, or the target is in another
document.

## Value

An {{domxref("Element")}} or `null`.

## Examples

Determine if a canvas element is currently pointer locked.

```js
if (document.pointerLockElement === canvasElement) {
  console.log("The pointer lock status is now locked");
  // Do something useful in response
} else {
  console.log("The pointer lock status is now unlocked");
  // Do something useful in response
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/en-US/docs/Web/API/Pointer_Lock_API)

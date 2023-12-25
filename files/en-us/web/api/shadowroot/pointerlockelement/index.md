---
title: "ShadowRoot: pointerLockElement property"
short-title: pointerLockElement
slug: Web/API/ShadowRoot/pointerLockElement
page-type: web-api-instance-property
browser-compat: api.ShadowRoot.pointerLockElement
---

{{APIRef("Pointer Lock API")}}

The **`pointerLockElement`** read-only property of the {{domxref("ShadowRoot")}} interface provides the element set as the target for mouse events while the pointer is locked.
It is `null` if lock is pending, pointer is unlocked, or the target is in another tree.

## Value

An {{domxref("Element")}} or `null`.

## Examples

```js
let customElem = document.querySelector("my-shadow-dom-element");
let shadow = customElem.shadowRoot;
let pleElem = shadow.pointerLockElement;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/en-US/docs/Web/API/Pointer_Lock_API)

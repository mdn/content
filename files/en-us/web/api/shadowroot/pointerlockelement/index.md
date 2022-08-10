---
title: ShadowRoot.pointerLockElement
slug: Web/API/ShadowRoot/pointerLockElement
page-type: web-api-instance-property
tags:
  - API
  - DOM
  - ShadowRoot
  - Property
  - Reference
  - mouse lock
browser-compat: api.ShadowRoot.pointerLockElement
---
{{APIRef("DOM")}}

The read-only **`pointerLockElement`** property
of the {{domxref("ShadowRoot")}} interface provides the
element set as the target for mouse events while the pointer is locked. It is
`null` if lock is pending, pointer is unlocked, or the target is in another
tree.

## Value

An {{domxref("Element")}} or `null`.

## Examples

```js
let customElem = document.querySelector('my-shadow-dom-element');
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

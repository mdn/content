---
title: Element.requestPointerLock()
slug: Web/API/Element/requestPointerLock
tags:
  - API
  - DOM
  - Experimental
  - Method
  - NeedsExample
  - PointerEvent
  - Reference
  - mouse lock
browser-compat: api.Element.requestPointerLock
---
{{ APIRef("DOM") }}{{ SeeCompatTable }}

The **`Element.requestPointerLock()`** method lets you
asynchronously ask for the pointer to be locked on the given element.

To track the success or failure of the request, it is necessary to listen for the
{{event("pointerlockchange")}} and {{event("pointerlockerror")}} events at the
{{domxref("Document")}} level.

## Syntax

```js
instanceOfElement.requestPointerLock();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Document.exitPointerLock()") }}
- [Pointer Lock](/en-US/docs/Web/API/Pointer_Lock_API)

---
title: Document.exitPointerLock()
slug: Web/API/Document/exitPointerLock
tags:
  - API
  - Experimental
  - Method
  - Reference
  - mouse lock
browser-compat: api.Document.exitPointerLock
---
{{APIRef("DOM")}} {{SeeCompatTable}}

The **`exitPointerLock()`** method asynchronously releases a
pointer lock previously requested through {{domxref("Element.requestPointerLock")}}.

To track the success or failure of the request, it is necessary to listen for the
{{event("pointerlockchange")}} and {{event("pointerlockerror")}} events.

## Syntax

```js
document.exitPointerLock();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/en-US/docs/Web/API/Pointer_Lock_API)

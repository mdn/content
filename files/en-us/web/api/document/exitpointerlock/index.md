---
title: Document.exitPointerLock()
slug: Web/API/Document/exitPointerLock
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - mouse lock
browser-compat: api.Document.exitPointerLock
---
{{APIRef("DOM")}}

The **`exitPointerLock()`** method asynchronously releases a
pointer lock previously requested through {{domxref("Element.requestPointerLock")}}.

To track the success or failure of the request, it is necessary to listen for the
{{domxref("Document/pointerlockchange_event", "pointerlockchange")}} and {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} events.

## Syntax

```js
exitPointerLock()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/en-US/docs/Web/API/Pointer_Lock_API)

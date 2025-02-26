---
title: "Document: exitPointerLock() method"
short-title: exitPointerLock()
slug: Web/API/Document/exitPointerLock
page-type: web-api-instance-method
browser-compat: api.Document.exitPointerLock
---

{{APIRef("Pointer Lock API")}}

The **`exitPointerLock()`** method of the {{domxref("Document")}} interface asynchronously releases a pointer lock previously requested through {{domxref("Element.requestPointerLock")}}.

> [!NOTE]
> While the **`exitPointerLock()`** method is called on the document, the **`requestPointerLock()`** method is called on an element.

To track the success or failure of the request, it is necessary to listen for the {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} and {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} events.

## Syntax

```js-nolint
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

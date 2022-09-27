---
title: Element.requestPointerLock()
slug: Web/API/Element/requestPointerLock
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - NeedsExample
  - PointerEvent
  - Reference
  - mouse lock
browser-compat: api.Element.requestPointerLock
---

{{ APIRef("DOM") }}

The **`Element.requestPointerLock()`** method lets you
asynchronously ask for the pointer to be locked on the given element.

To track the success or failure of the request, it is necessary to listen for the
{{domxref("Document/pointerlockchange_event", "pointerlockchange")}} and {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} events at the
{{domxref("Document")}} level.

## Syntax

```js-nolint
requestPointerLock()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Security

[Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Document.exitPointerLock()") }}
- [Pointer Lock](/en-US/docs/Web/API/Pointer_Lock_API)

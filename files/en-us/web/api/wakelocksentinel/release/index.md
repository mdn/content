---
title: WakeLockSentinel.release()
slug: Web/API/WakeLockSentinel/release
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Screen Wake Lock API
  - Wake Lock
  - WakeLockSentinel
  - screen
  - Experimental
browser-compat: api.WakeLockSentinel.release
---
{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`release()`** method of the
{{domxref("WakeLockSentinel")}} interface releases the
{{domxref("WakeLockSentinel")}}, returning a {{jsxref("Promise")}} that is resolved
once the sentinel has been successfully released.

## Syntax

```js
release()
```

### Parameters

None.

### Return value

Returns a {{jsxref("Promise")}} that resolves with `undefined`

### Exceptions

No exceptions are thrown. You should always listen for the {{domxref("WakeLockSentinel/release_event", "release")}}
event to check if a wake lock has been released.

## Examples

In this example, when a user clicks a button the {{domxref("WakeLockSentinel")}} is
released.

```js
wakeLockOffButton.addEventListener('click', () => {
  WakeLockSentinel.release();
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("WakeLockSentinel")}}
- {{DOMxRef("WakeLock.request", "navigator.wakeLock.request()")}}

---
title: WakeLockSentinel.release()
slug: Web/API/WakeLockSentinel/release
tags:
  - API
  - Method
  - Reference
  - Screen Wake Lock API
  - Wake Lock
  - WakeLockSentinel
  - screen
browser-compat: api.WakeLockSentinel.release
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("Screen Wake Lock API")}}

The **`release()`** method of the
{{domxref("WakeLockSentinel")}} interface releases the
{{domxref("WakeLockSentinel")}}, returning a {{jsxref("Promise")}} that is resolved
once the sentinel has been successfully released.

## Syntax

```js
WakeLockSentinel.release().then(...);
```

### Parameters

None.

### Return value

Returns a {{jsxref("Promise")}} that resolves with `undefined`

### Exceptions

No exceptions are thrown. You should always listen for the {{domxref('onrelease')}}
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

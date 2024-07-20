---
title: "WakeLockSentinel: release() method"
short-title: release()
slug: Web/API/WakeLockSentinel/release
page-type: web-api-instance-method
browser-compat: api.WakeLockSentinel.release
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

The **`release()`** method of the {{domxref("WakeLockSentinel")}} interface releases the {{domxref("WakeLockSentinel")}}, returning a {{jsxref("Promise")}} that is resolved once the sentinel has been successfully released.

## Syntax

```js-nolint
release()
```

### Parameters

None.

### Return value

Returns a {{jsxref("Promise")}} that resolves with `undefined`.

### Exceptions

No exceptions are thrown.
You should always listen for the {{domxref("WakeLockSentinel/release_event", "release")}} event to check if a wake lock has been released.

## Examples

In this example, when a user clicks a button the {{domxref("WakeLockSentinel")}} is released.

```js
wakeLockOffButton.addEventListener("click", () => {
  WakeLockSentinel.release();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Stay awake with the Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)

---
title: "WakeLockSentinel: released property"
short-title: released
slug: Web/API/WakeLockSentinel/released
page-type: web-api-instance-property
browser-compat: api.WakeLockSentinel.released
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

The **`released`** read-only property of the {{domxref("WakeLockSentinel")}} interface returns a boolean that indicates whether a {{domxref("WakeLockSentinel")}} has been released.

The `WakeLockSentinel` is released when the associated platform screen wake lock is revoked; afterwards `released` will always return `true`.
If a subsequent screen wake lock is required, the application will need to request a new screen wake lock (the current `WakeLockSentinel` cannot be reused).

## Value

A boolean value that is `false` until the {{domxref("WakeLockSentinel")}} has been released (either through a call to {{domxref("WakeLockSentinel.release()")}} or because the lock has been released automatically) and the {{domxref("WakeLockSentinel/release_event", "release")}} event has been emitted, after which it becomes `true` and no longer changes.

## Examples

This example shows how the value of the `released` property changes within a {{domxref("WakeLockSentinel")}}'s life cycle.

```js
const sentinel = await navigator.wakeLock.request("screen");
console.log(sentinel.released); // Logs "false"

sentinel.onrelease = () => {
  console.log(sentinel.released); // Logs "true"
};

await sentinel.release();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Stay awake with the Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)

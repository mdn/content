---
title: WakeLock
slug: Web/API/WakeLock
page-type: web-api-interface
browser-compat: api.WakeLock
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

The **`WakeLock`** interface of the [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API) can be used to request a lock that prevents device screens from dimming or locking when an application needs to keep running.

This interface, and hence the system wake lock, is exposed through the {{domxref("Navigator.wakeLock")}} property.

## Instance methods

- {{domxref("WakeLock.request", "request()")}}
  - : Returns a {{jsxref("Promise")}} that fulfills with a {{domxref("WakeLockSentinel")}} object if the screen wake lock is granted.

## Examples

The following code `awaits` the request for a {{domxref("WakeLockSentinel")}} object, and continues if the request is granted.

The {{domxref("WakeLock.request", "WakeLock.request()")}} method is wrapped in a `try...catch` statement to catch [cases when the promise might be rejected](/en-US/docs/Web/API/WakeLock/request#exceptions) rejected, such as due to low device power.

```js
try {
  const wakeLock = await navigator.wakeLock.request("screen");
} catch (err) {
  // the wake lock request fails - usually system related, such being low on battery
  console.log(`${err.name}, ${err.message}`);
}
```

Note that the screen wake lock may be revoked by the device after it has been granted.
The returned {{domxref("WakeLockSentinel")}} can be used to check the status of the lock, and/or to manually cancel a held screen wake lock.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Stay awake with the Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)

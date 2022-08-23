---
title: WakeLock
slug: Web/API/WakeLock
page-type: web-api-interface
tags:
  - Interface
  - Reference
  - Screen Wake Lock API
  - Wake Lock
  - screen
  - Experimental
browser-compat: api.WakeLock
---
{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`WakeLock`** interface of the [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API) prevents device screens from dimming or locking when an application needs to keep running.

The system wake lock is exposed through the global {{domxref('Navigator.wakeLock')}} property.

## Methods

- {{domxref("WakeLock.request", "request()")}} {{Experimental_Inline}}
  - : Requests a {{domxref("WakeLockSentinel")}} object, which returns a {{jsxref("Promise")}} that resolves with a {{domxref("WakeLockSentinel")}} object.

## Examples

The following asynchronous function requests a {{domxref("WakeLockSentinel")}} object. The {{domxref("WakeLock.request", "WakeLock.request()")}} method is wrapped in a `try...catch` statement to account for if the browser refuses the request for any reason.

```js
try {
  const wakeLock = await navigator.wakeLock.request('screen');
} catch (err) {
  // the wake lock request fails - usually system related, such being low on battery
  console.log(`${err.name}, ${err.message}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

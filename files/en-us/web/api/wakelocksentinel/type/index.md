---
title: "WakeLockSentinel: type property"
short-title: type
slug: Web/API/WakeLockSentinel/type
page-type: web-api-instance-property
browser-compat: api.WakeLockSentinel.type
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

The **`type`** read-only property of the {{domxref("WakeLockSentinel")}} interface returns a string representation of the currently acquired {{domxref("WakeLockSentinel")}} type.

## Value

A string representation of the currently acquired wake lock type.
Currently, the value is always `screen`, which represents a screen wake lock.
It prevents devices from dimming or locking the screen.

## Examples

This example shows an asynchronous function that acquires a {{domxref("WakeLockSentinel")}}, then logs the type to the console.

```js
const requestWakeLock = async () => {
  wakeLock = await navigator.wakeLock.request("screen");
  console.log(wakeLock.type); // logs 'screen'
};

requestWakeLock();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Stay awake with the Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)

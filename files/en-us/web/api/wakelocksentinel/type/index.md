---
title: WakeLockSentinel.type
slug: Web/API/WakeLockSentinel/type
page-type: web-api-instance-property
tags:
  - Property
  - Read-only
  - Screen Wake Lock API
  - Wake Lock
  - WakeLockSentinel
  - screen
  - Experimental
browser-compat: api.WakeLockSentinel.type
---
{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The read-only **`type`** property of the
{{domxref("WakeLockSentinel")}} interface returns a string
representation of the currently acquired {{domxref("WakeLockSentinel")}} type.

### Value

A string representation of the currently acquired wake lock type.
The type 'screen'` is a screen wake lock. It prevents devices from dimming or locking the screen.

## Examples

This example shows an asynchronous function that acquires a
{{domxref("WakeLockSentinel")}}, then logs the type to the console.

```js
const requestWakeLock = async () => {
  wakeLock = await navigator.wakeLock.request('screen');
  console.log(wakeLock.type); // logs 'screen'
};

requestWakeLock();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

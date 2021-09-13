---
title: WakeLockSentinel.type
slug: Web/API/WakeLockSentinel/type
tags:
  - Property
  - Read-only
  - Screen Wake Lock API
  - Wake Lock
  - WakeLockSentinel
  - screen
browser-compat: api.WakeLockSentinel.type
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("Screen Wake Lock API")}}

The read-only **`type`** property of the
{{domxref("WakeLockSentinel")}} interface returns a {{jsxref("String")}}
representation of the currently acquired {{domxref("WakeLockSentinel")}} type.

## Syntax

```js
var type = sentinel.type;
```

### Value

A {{jsxref("String")}} representation of the currently acquired wake lock type.

- _type_ {{ReadOnlyInline}}

  - : Return values are:

    - `'screen'`: A screen wake lock. Prevents devices from dimming
      or locking the screen.

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

---
title: WakeLockSentinel.released
slug: Web/API/WakeLockSentinel/released
tags:
  - Property
  - Read-only
  - Screen Wake Lock API
  - WakeLockSentinel
browser-compat: api.WakeLockSentinel.released
---
{{draft}}{{DefaultAPISidebar("Screen Wake Lock API")}}

The read-only **`released`** property of the
{{domxref("WakeLockSentinel")}} interface returns a boolean that indicates whether
a {{domxref("WakeLockSentinel")}} has been released yet.

## Syntax

```js
var released = sentinel.released;
```

### Value

A boolean value, that is `false` until the
{{domxref("WakeLockSentinel")}} has been released (either through a call to
{{domxref("WakeLockSentinel.release()")}} or because the lock has been released
automatically) and the {{domxref("WakeLockSentinel.onrelease")}} event has been
emitted, after which it becomes `true` and no longer changes.

## Examples

This example shows how **`released`**'s value changes within a
{{domxref("WakeLockSentinel")}}'s life cycle.

```js
const sentinel = await navigator.wakeLock.request('screen');
console.log(sentinel.released);  // Logs "false"

sentinel.onrelease = () => {
  console.log(sentinel.released);  // Logs "true"
};

await sentinel.release();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

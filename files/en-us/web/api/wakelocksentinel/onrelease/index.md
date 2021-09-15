---
title: WakeLockSentinel.onrelease
slug: Web/API/WakeLockSentinel/onrelease
tags:
  - Event Handler
  - Property
  - Screen Wake Lock API
  - Wake Lock
  - WakeLockSentinel
  - screen
  - screen wake lock
browser-compat: api.WakeLockSentinel.onrelease
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("Screen Wake Lock API")}}

The **`onrelease`** property of the
{{domxref("WakeLockSentinel")}} is fired when the sentinel object's handle has been
released.

A {{domxref("WakeLockSentinel")}} can be released manually via the release() method, or
automatically via the platform wake lock. This can happen if the document becomes
inactive or looses visibility, if the device is low on power or the user turns on a
power save mode.

This interface inherits from the {{domxref("Event")}} interface.

{{InheritanceDiagram(700, 60, 20)}}

## Syntax

```js
wakeLockSentinel.onrelease = function(event) {...}
```

## Examples

This example updates the UI should the wake lock be released.

```js
wakeLock.addEventListener('release', () => {

  // if wake lock is released alter the UI accordingly

  statusElement.textContent = 'Wake Lock has been released';
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: 'WakeLockSentinel: release event'
slug: Web/API/WakeLockSentinel/release_event
tags:
  - Event Handler
  - Property
  - Screen Wake Lock API
  - Wake Lock
  - WakeLockSentinel
  - screen
  - screen wake lock
browser-compat: api.WakeLockSentinel.release_event
---
{{securecontext_header}}{{DefaultAPISidebar("Screen Wake Lock API")}}

The **`release`** event of the {{domxref("WakeLockSentinel")}} interface is fired when the sentinel object's handle has been released.

A {{domxref("WakeLockSentinel")}} can be released manually via the `release()` method, or
automatically via the platform wake lock. This can happen if the document becomes
inactive or looses visibility, if the device is low on power or the user turns on a
power save mode.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event-handler property.

```js
addEventListener('release', (event) => { });

onrelease = event => { });
```

## Event type

A generic {{domxref("Event")}}.

## Examples

This example updates the UI if the wake lock is released.

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

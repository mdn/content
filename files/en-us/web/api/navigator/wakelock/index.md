---
title: Navigator.wakeLock
slug: Web/API/Navigator/wakeLock
tags:
  - API
  - Reference
  - Screen Wake Lock API
browser-compat: api.Navigator.wakeLock
---
{{ApiRef("Screen Wake Lock API")}}{{SeeCompatTable}}{{securecontext_header}}

The **`wakeLock`** read-only property
returns a {{DOMxRef("WakeLock")}} interface which allows a document to acquire a
screen wake lock. While a screen wake lock is active, the user agent will try to
prevent the device from dimming the screen, turning it off completely, or showing a
screensaver.

## Syntax

```js
const wakeLock = navigator.wakeLock;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("WakeLock.request","WakeLock.request()")}}
- [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API)
- [Blog post - Stay awake with the
  Screen Wake Lock API](https://web.dev/wakelock/)

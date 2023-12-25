---
title: "Navigator: wakeLock property"
short-title: wakeLock
slug: Web/API/Navigator/wakeLock
page-type: web-api-instance-property
browser-compat: api.Navigator.wakeLock
---

{{ApiRef("Screen Wake Lock API")}}{{securecontext_header}}

The **`wakeLock`** read-only property of the {{domxref("Navigator")}} interface
returns a {{DOMxRef("WakeLock")}} interface which allows a document to acquire a
screen wake lock. While a screen wake lock is active, the user agent will try to
prevent the device from dimming the screen, turning it off completely, or showing a
screensaver.

## Syntax

```js-nolint
navigator.wakeLock
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("WakeLock.request()")}}
- {{DOMxRef("Screen Wake Lock API", "", "", "nocode")}}
- [Stay awake with the Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)

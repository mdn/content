---
title: "Navigator: wakeLock property"
short-title: wakeLock
slug: Web/API/Navigator/wakeLock
page-type: web-api-instance-property
browser-compat: api.Navigator.wakeLock
---

{{ApiRef("Screen Wake Lock API")}}{{securecontext_header}}

The **`wakeLock`** read-only property of the {{domxref("Navigator")}} interface returns a {{DOMxRef("WakeLock")}} interface that allows a document to acquire a screen wake lock.
While a screen wake lock is active, the user agent will try to prevent the device from dimming the screen, turning it off completely, or showing a screensaver.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("WakeLock.request()")}}
- [Screen Wake Lock API](/en-US/docs/Web/API/Screen_Wake_Lock_API)
- [Stay awake with the Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)

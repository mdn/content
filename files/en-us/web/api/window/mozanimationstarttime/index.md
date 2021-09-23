---
title: Window.mozAnimationStartTime
slug: Web/API/Window/mozAnimationStartTime
tags:
  - API
  - HTML DOM
  - Deprecated
  - Property
  - Reference
  - Window
browser-compat: api.Window.mozAnimationStartTime
---
{{APIRef("Mozilla Extensions")}}{{Non-standard_Header}}{{deprecated_header}}

Returns the time, in milliseconds since the epoch, at which animations started now should be considered to have started. This value should be used instead of, for example, [`Date.now()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now), because this value will be the same for all animations started in this window during this refresh interval, allowing them to remain in sync with one another.

This also allows JavaScript-based animations to remain synchronized with CSS transitions and SMIL animations triggered during the same refresh interval.

## Syntax

    time = window.mozAnimationStartTime;

### Parameters

- _`time`_ is the time in milliseconds since the epoch at which animations for the current window should be considered to have started.

## Browser compatibility

{{Compat}}

## See also

- {{domxref("window.requestAnimationFrame")}}

---
title: "Window: stop() method"
short-title: stop()
slug: Web/API/Window/stop
page-type: web-api-instance-method
browser-compat: api.Window.stop
---

{{APIRef}}

The **`window.stop()`** stops further resource loading in the current
browsing context, equivalent to the stop button in the browser.

Because of how scripts are executed, this method cannot interrupt its parent
document's loading, but it will stop its images, new windows, and other still-loading
objects.

## Syntax

```js-nolint
stop()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
window.stop();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

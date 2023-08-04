---
title: "Window: cancelIdleCallback() method"
short-title: cancelIdleCallback()
slug: Web/API/Window/cancelIdleCallback
page-type: web-api-instance-method
browser-compat: api.Window.cancelIdleCallback
---

{{APIRef}}

## Summary

The **`window.cancelIdleCallback()`** method cancels a callback
previously scheduled with {{domxref("window.requestIdleCallback()")}}.

## Syntax

```js-nolint
cancelIdleCallback(handle)
```

### Parameters

- `handle`
  - : The ID value returned by {{domxref("window.requestIdleCallback()")}} when the
    callback was established.

### Return value

None ({{jsxref("undefined")}}).

## Examples

See our [complete example](/en-US/docs/Web/API/Background_Tasks_API#example)
in the article [Cooperative Scheduling of Background Tasks API](/en-US/docs/Web/API/Background_Tasks_API).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

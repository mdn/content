---
title: WindowEventHandlers.onunhandledrejection
slug: Web/API/WindowEventHandlers/onunhandledrejection
tags:
  - API
  - Event Handler
  - HTML DOM
  - Promises
  - Property
  - Reference
  - WindowEventHandlers
  - events
  - onunhandledrejection
browser-compat: api.WindowEventHandlers.onunhandledrejection
---
{{APIRef}}

The **`onunhandledrejection`** property of the
{{domxref("WindowEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{domxref("Window.unhandledrejection_event", "unhandledrejection")}} events. These events are raised for unhandled
{{jsxref("Promise")}} rejections.

## Value

An [event handler](/en-US/docs/Web/Events/Event_handlers) or function to call when `unhandledrejection` events are received by the window. The event handler receives as an input parameter as a {{domxref("PromiseRejectionEvent")}}.

## Examples

This example logs unhandled rejections' `reason` values to the console.

```js
window.onunhandledrejection = function(e) {
  console.log(e.reason);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

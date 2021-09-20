---
title: WindowEventHandlers.onrejectionhandled
slug: Web/API/WindowEventHandlers/onrejectionhandled
tags:
  - API
  - Event Handler
  - HTML DOM
  - JavaScript
  - Promises
  - Property
  - Reference
  - WindowEventHandlers
  - events
  - onrejectionhandled
browser-compat: api.WindowEventHandlers.onrejectionhandled
---
{{APIRef}}

The **`onrejectionhandled`** property of the
{{domxref("WindowEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("rejectionhandled")}} events. These events are raised when
{{jsxref("Promise")}}s are rejected.

## Syntax

```js
window.addEventListener("rejectionhandled", function(event) { ... });
window.onrejectionhandled = function(event) { ...};
```

## Example

```js
window.onrejectionhandled = function(e) {
  console.log(e.reason);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

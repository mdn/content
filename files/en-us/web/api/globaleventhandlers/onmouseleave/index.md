---
title: GlobalEventHandlers.onmouseleave
slug: Web/API/GlobalEventHandlers/onmouseleave
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onmouseleave
---
{{ ApiRef("HTML DOM") }}

The **`onmouseleave`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("mouseleave")}} events.

The `mouseleave` event is fired when a pointing device (usually a mouse) is
moved off the element that has the listener attached.

## Syntax

```js
element.onmouseleave = handlerFunction;
var handlerFunction = element.onmouseleave;
```

`handlerFunction` is either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("mouseleave")}}
- [DOM event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)

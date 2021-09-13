---
title: GlobalEventHandlers.onmouseenter
slug: Web/API/GlobalEventHandlers/onmouseenter
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onmouseenter
---
{{ ApiRef("HTML DOM") }}

The **`onmouseenter`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("mouseenter")}} events.

The `mouseenter` event is fired when a pointing device (usually a mouse) is
moved over the element that has the listener attached.

## Syntax

```js
element.onmouseenter = handlerFunction;
var handlerFunction = element.onmouseenter;
```

`handlerFunction` is either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("mouseenter")}}
- [DOM event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)

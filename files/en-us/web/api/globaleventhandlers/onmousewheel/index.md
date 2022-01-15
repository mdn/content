---
title: GlobalEventHandlers.onmousewheel
slug: Web/API/GlobalEventHandlers/onmousewheel
tags:
  - Deprecated
browser-compat: api.GlobalEventHandlers.onmousewheel
---
{{ ApiRef("HTML DOM") }}{{Deprecated_Header}}{{ Non-standard_header() }}

The **onmousewheel** property sets and returns the [event handler](/en-US/docs/Web/Guide/Events/Event_handlers) for the
{{event("mousewheel")}} event.

Instead of using this event, use the standard {{event("wheel")}} event.

## Syntax

```js
element.onmousewheel = handlerFunction;
var handlerFunction = element.onmousewheel;
```

`handlerFunction` should be either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Notes

See the [DOM event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)
page for information on working with `on...` handlers.

The `mousewheel` event is fired asynchronously when a mouse wheel or similar
device is operated. It's represented by the [`WheelEvent`](/en-US/docs/Web/API/WheelEvent "The WheelEvent interface represents events that occur due to the user turning a mouse wheel.")
interface.

See the {{event("mousewheel")}} event documentation for more information about the
event.

## Browser compatibility

{{Compat}}

---
title: GlobalEventHandlers.onpause
slug: Web/API/GlobalEventHandlers/onpause
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onpause
---
{{ ApiRef("HTML DOM") }}

The **`onpause`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("pause")}} events.

The `pause` event is fired when media playback has been paused.

## Syntax

```js
element.onpause = handlerFunction;
var handlerFunction = element.onpause;
```

`handlerFunction` should be either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("pause")}}
- [DOM event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)

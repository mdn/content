---
title: GlobalEventHandlers.onended
slug: Web/API/GlobalEventHandlers/onended
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onended
---
{{ ApiRef("HTML DOM") }}

The **`onended`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("ended")}} events.

The `ended` event is fired when playback has stopped because the end of the
media was reached.

## Syntax

```js
element.onended = handlerFunction;
var handlerFunction = element.onended;
```

`handlerFunction` is either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("ended")}}
- [DOM event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)

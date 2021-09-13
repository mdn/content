---
title: GlobalEventHandlers.onplaying
slug: Web/API/GlobalEventHandlers/onplaying
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onplaying
---
{{ApiRef("HTML DOM")}}

The **`onplaying`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("playing")}} events.

The `playing` event is fired when playback is ready to start after having
been paused or delayed due to lack of media data.

## Syntax

```js
element.onplaying = handlerFunction;
var handlerFunction = element.onplaying;
```

`handlerFunction` is either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement/playing_event", "playing")}}
- [DOM event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)

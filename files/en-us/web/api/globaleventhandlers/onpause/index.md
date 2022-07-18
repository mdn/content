---
title: GlobalEventHandlers.onpause
slug: Web/API/GlobalEventHandlers/onpause
page-type: web-api-instance-property
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
processing {{domxref("HTMLMediaElement/pause_event", "pause")}} events.

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

- {{domxref("HTMLMediaElement/pause_event", "pause")}}
- [DOM event handlers](/en-US/docs/Web/Events/Event_handlers)

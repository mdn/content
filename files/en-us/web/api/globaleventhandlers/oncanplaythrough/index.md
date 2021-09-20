---
title: GlobalEventHandlers.oncanplaythrough
slug: Web/API/GlobalEventHandlers/oncanplaythrough
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.oncanplaythrough
---
{{ ApiRef("HTML DOM") }}

The **`oncanplaythrough`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("canplaythrough")}} events.

The `canplaythrough` event is fired when the user agent can play the media
and estimates that enough data has been loaded to play the media up to its end without
having to stop for further buffering of content.

## Syntax

```js
element.oncanplaythrough = handlerFunction;
var handlerFunction = element.oncanplaythrough;
```

`handlerFunction` is either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("canplaythrough")}}
- [DOM event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)

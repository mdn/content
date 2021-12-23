---
title: GlobalEventHandlers.oncanplay
slug: Web/API/GlobalEventHandlers/oncanplay
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.oncanplay
---
{{ ApiRef("HTML DOM") }}

The **`oncanplay`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("canplay")}} events.

The `canplay` event is fired when the user agent can play the media, but
estimates that not enough data has been loaded to play the media up to its end without
having to stop for further buffering of content.

## Syntax

```js
element.oncanplay = handlerFunction;
var handlerFunction = element.oncanplay;
```

`handlerFunction` is either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [DOM event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)

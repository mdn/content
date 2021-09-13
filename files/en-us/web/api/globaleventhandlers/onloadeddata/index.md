---
title: GlobalEventHandlers.onloadeddata
slug: Web/API/GlobalEventHandlers/onloadeddata
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onloadeddata
---
{{ ApiRef("HTML DOM") }}

The **`onloadeddata`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("loadeddata")}} events.

The `loadeddata` event is fired when the first frame of the media has
finished loading.

## Syntax

```js
element.onloadeddata = handlerFunction;
var handlerFunction = element.onloadeddata;
```

`handlerFunction` is either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("loadeddata")}}
- [DOM event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)

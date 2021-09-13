---
title: GlobalEventHandlers.ondurationchange
slug: Web/API/GlobalEventHandlers/ondurationchange
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.ondurationchange
---
{{ ApiRef("HTML DOM") }}

The **`ondurationchange`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("durationchange")}} events.

The `durationchange` event is fired when the `duration` attribute
has been updated.

## Syntax

```js
element.ondurationchange = handlerFunction;
var handlerFunction = element.ondurationchange;
```

`handlerFunction` is either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("durationchange")}}
- [DOM event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)

---
title: GlobalEventHandlers.onloadedmetadata
slug: Web/API/GlobalEventHandlers/onloadedmetadata
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onloadedmetadata
---
{{ ApiRef("HTML DOM") }}

The **`onloadedmetadata`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("loadedmetadata")}} events.

The `loadedmetadata` event is fired when the metadata has been loaded.

## Syntax

```js
element.onloadedmetadata = handlerFunction;
var handlerFunction = element.onloadedmetadata;
```

`handlerFunction` should be either `null` or a [JavaScript function](/en-US/docs/Web/JavaScript/Reference/Functions)
specifying the handler for the event.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("loadedmetadata")}}
- [DOM event handlers](/en-US/docs/Web/Guide/Events/Event_handlers)

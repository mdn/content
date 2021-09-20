---
title: GlobalEventHandlers.oncancel
slug: Web/API/GlobalEventHandlers/oncancel
tags:
  - API
  - Dialog
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - NeedsExample
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.oncancel
---
{{ApiRef("HTML DOM")}}

The **`oncancel`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("cancel")}} events sent to a {{HTMLElement("dialog")}} element.

The `cancel` event fires when the user indicates a wish to dismiss a
`<dialog>`. This event handler prevents the event from bubbling, so any
parent handlers are not notified of the event.

## Syntax

```js
target.oncancel = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives an {{domxref("Event")}} object as its sole
argument.

Only one `oncancel` handler can be assigned to an object at a time. You may
prefer to use the {{domxref("EventTarget.addEventListener()")}} method instead, since
it's more flexible.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("cancel")}} event
- HTML {{HTMLElement("dialog")}} element
- Related event handler: {{domxref("GlobalEventHandlers.onclose")}}

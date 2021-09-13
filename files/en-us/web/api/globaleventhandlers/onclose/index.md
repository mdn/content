---
title: GlobalEventHandlers.onclose
slug: Web/API/GlobalEventHandlers/onclose
tags:
  - API
  - Dialog
  - Event Handler
  - Experimental
  - GlobalEventHandlers
  - HTML DOM
  - NeedsExample
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onclose
---
{{ApiRef("HTML DOM")}} {{SeeCompatTable}}

The **`onclose`** property of the
{{domxref("GlobalEventHandlers")}} mixin is an [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("close")}} events sent to a {{HTMLElement("dialog")}} element.

The `close` event fires when the user closes a `<dialog>`.

> **Note:** To handle the closing of a window, use
> {{domxref("WindowEventHandlers.onbeforeunload", "onbeforeunload")}} or
> {{domxref("WindowEventHandlers.onunload", "onunload")}}.

## Syntax

```js
target.onclose = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives an {{domxref("Event")}} object as its sole
argument.

Only one `onclose` handler can be assigned to an object at a time. You may
prefer to use the {{domxref("EventTarget.addEventListener()")}} method instead, since
it's more flexible.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{event("close")}} event
- HTML {{HTMLElement("dialog")}} element
- Related event handler: {{domxref("GlobalEventHandlers.oncancel")}}

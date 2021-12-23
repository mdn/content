---
title: WindowEventHandlers.onafterprint
slug: Web/API/WindowEventHandlers/onafterprint
tags:
  - API
  - Event Handler
  - HTML DOM
  - Property
  - Reference
  - Window
  - printing
browser-compat: api.WindowEventHandlers.onafterprint
---
{{ApiRef}}

The **`onafterprint`** property of the
{{domxref("WindowEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("afterprint")}} events for the current window. These events are
raised after the user prints, or if they abort the print dialog.

The {{event("beforeprint")}} and `afterprint` events allow pages to change
their content before printing starts (perhaps to remove a banner, for example) and then
revert those changes after printing has completed. In general, you should prefer the use
of
a [`@media print`](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_types)
CSS at-rule, but it may be necessary to use these events in some cases.

## Syntax

```js
window.addEventListener("afterprint", function(event) { /* ... */ });
window.onafterprint = function(event) { /* ... */ };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.print()")}}
- {{domxref("WindowEventHandlers.onbeforeprint")}}
- [Printing](/en-US/docs/Web/Guide/Printing)

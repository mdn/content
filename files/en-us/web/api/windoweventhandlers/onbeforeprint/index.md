---
title: WindowEventHandlers.onbeforeprint
slug: Web/API/WindowEventHandlers/onbeforeprint
tags:
  - API
  - Event Handler
  - HTML DOM
  - Property
  - Reference
  - Wiindow
  - printing
browser-compat: api.WindowEventHandlers.onbeforeprint
---
{{ApiRef}}

The **`onbeforeprint`** property of the
{{domxref("WindowEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{event("beforeprint")}} events for the current window. These events are
raised before the print dialog window is opened.

The `beforeprint` and {{event("afterprint")}} events allow pages to change
their content before printing starts (perhaps to remove a banner, for example) and then
revert those changes after printing has completed. In general, you should prefer the use
of an
[`@media print`](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_types)
CSS at-rule, but it may be necessary to use these events in some cases.

## Syntax

```js
window.addEventListener("beforeprint", function(event) { /* ... */ });
window.onbeforeprint = function(event) { /* ... */ };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.print()")}}
- {{domxref("WindowEventHandlers.onafterprint")}}
- [Printing](/en-US/docs/Web/Guide/Printing)

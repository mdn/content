---
title: Scheduling
slug: Web/API/Scheduling
page-type: web-api-interface
browser-compat: api.Scheduling
---

{{SeeCompatTable}}{{APIRef("Prioritized Task Scheduling API")}}

The **`Scheduling`** object provides methods and properties to control scheduling tasks within the current document.

## Instance methods

- {{domxref("Scheduling.isInputPending", "isInputPending()")}} {{Experimental_Inline}}
  - : Returns a boolean that indicates whether there are pending input events in the event queue, meaning that the user is attempting to interact with the page.

## Example

See the {{domxref("Scheduling.isInputPending()")}} page for a full example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Optimizing long tasks](https://web.dev/optimize-long-tasks/#yield-only-when-necessary) on web.dev (2022)

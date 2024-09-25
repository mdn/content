---
title: Scheduling
slug: Web/API/Scheduling
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Scheduling
---

{{SeeCompatTable}}{{APIRef("Prioritized Task Scheduling API")}}

The **`Scheduling`** object provides methods and properties to control scheduling tasks within the current document.

> [!WARNING]
> This is an older interface and newer scheduling APIs are available using the {{domxref("Scheduler")}} interface. Some [no longer recommend using `isInputPending()`](https://web.dev/articles/optimize-long-tasks#isinputpending).

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

- {{domxref("Scheduler")}} interface
- {{domxref("Prioritized_task_scheduling_api", "Prioritized Task Scheduling API")}}
- [Faster input events with Facebook's first browser API contribution](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/) on engineering.fb.com (2019)
- [Better JS scheduling with isInputPending()](https://developer.chrome.com/docs/capabilities/web-apis/isinputpending) on developer.chrome.com (2020)
- [Optimizing long tasks](https://web.dev/articles/optimize-long-tasks) on web.dev (2022)

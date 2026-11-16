---
title: "Navigator: scheduling property"
short-title: scheduling
slug: Web/API/Navigator/scheduling
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.scheduling
---

{{SeeCompatTable}}{{APIRef("Prioritized Task Scheduling API")}}

The **`scheduling`** read-only property of the {{domxref("Navigator")}} interface returns a {{domxref("Scheduling")}} object for the current document, which provides methods and properties to control scheduling tasks.

> [!WARNING]
> The {{domxref("Scheduling")}} interface (which includes the {{domxref("Scheduling.isInputPending()", "isInputPending()")}} method) has been superseded by the {{domxref("Scheduler")}} interface, the features of which are better designed for addressing scheduling tasks. See [Don't use `isInputPending()`](https://web.dev/articles/optimize-long-tasks#isinputpending) for more details.

## Value

A {{domxref("Scheduling")}} object.

## Example

See the {{domxref("Scheduling.isInputPending()")}} page for a full example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Scheduler")}} interface
- {{domxref("Prioritized_task_scheduling_api", "Prioritized Task Scheduling API", "", "nocode")}}
- [Faster input events with Facebook's first browser API contribution](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/) on engineering.fb.com (2019)
- [Better JS scheduling with isInputPending()](https://developer.chrome.com/docs/capabilities/web-apis/isinputpending) on developer.chrome.com (2020)
- [Optimizing long tasks](https://web.dev/articles/optimize-long-tasks) on web.dev (2022)

---
title: "Document: prerendering property"
short-title: prerendering
slug: Web/API/Document/prerendering
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Document.prerendering
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

The `prerendering` read-only property of the {{domxref("Document")}} interface returns `true` if the document is currently in the process of prerendering, as initiated via the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API).

## Value

A boolean. Returns `true` if the document is currently in the process of prerendering, and `false` if it is not. `false` will be returned for documents that have finished prerendering, and documents that were not prerendered.

## Examples

To delay an activity while the page is prerendering, you can check for the `prerendering` property. You could for example wait until a page is prerendered before running some analytics:

```js
const intervalID = setInterval(() => {
  if (!document.prerendering) {
    initAnalytics(); // Author-defined function
    clearInterval(intervalID);
  } else {
    // Still prerendering
  }
}, 50);
```

When a prerendered document is activated, {{domxref("PerformanceNavigationTiming.activationStart")}} is set to a non-zero time representing the time between when the prerender was started and the document was actually activated. The following function can check for prerendering _and_ prerendered pages:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

When the prerendered page is activated by the user viewing the page, the {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} event will fire. This can be used to enable activities that previously would be started by default on page load but which you wish to delay until the page is actually viewed by the user.

```js
document.addEventListener("prerenderingchange", initializeView);

function initializeView() {
  // Author-defined function
}
```

> **Note:** See the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) landing page and particularly the [Unsafe speculative loading conditions](/en-US/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions) section for more information on the kinds of activities you might wish to delay.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API)
- {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} event

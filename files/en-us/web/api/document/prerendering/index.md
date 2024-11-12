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

The **`prerendering`** read-only property of the {{domxref("Document")}} interface returns `true` if the document is currently in the process of prerendering, as initiated via the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API).

## Value

A boolean. Returns `true` if the document is currently in the process of prerendering, and `false` if it is not. `false` will be returned for documents that have finished prerendering, and documents that were not prerendered.

## Examples

To run an activity while the page is prerendering, you can check for the `prerendering` property. You could for example run some analytics:

```js
if (document.prerendering) {
  analytics.sendInfo("got this far during prerendering!");
}
```

When a prerendered document is activated, {{domxref("PerformanceNavigationTiming.activationStart")}} is set to a {{domxref("DOMHighResTimeStamp")}} value representing the time between when the prerender was started and the document was actually activated. The following function can check for prerendering _and_ prerendered pages:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    performance.getEntriesByType("navigation")[0]?.activationStart > 0
  );
}
```

When the prerendered page is activated by the user viewing the page, the {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} event will fire. This can be used to enable activities that previously would be started by default on page load but which you wish to delay until the page is actually viewed by the user. The following code sets up an event listener to run a function once prerendering has finished, on a prerendered page, or runs it immediately on a non-prerendered page:

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

> [!NOTE]
> See the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) landing page and particularly the [Unsafe speculative loading conditions](/en-US/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions) section for more information on the kinds of activities you might wish to delay.

To measure how often a prerender is activated, combine all three APIs: `document.prerendering` to detect cases where the page is currently prerendering, `prerenderingchange` to watch for activations in that case, and `activationStart` to check for cases where the page was prerendered in the past.

```js
if (document.prerendering) {
  document.addEventListener(
    "prerenderingchange",
    () => {
      console.log("Prerender activated after this script ran");
    },
    { once: true },
  );
} else if (performance.getEntriesByType("navigation")[0]?.activationStart > 0) {
  console.log("Prerender activated before this script ran");
} else {
  console.log("This page load was not via prerendering");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API)
- {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} event
- {{domxref("PerformanceNavigationTiming.activationStart")}} property

---
title: "Document: prerenderingchange event"
short-title: prerenderingchange
slug: Web/API/Document/prerenderingchange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Document.prerenderingchange_event
---

{{ APIRef("Speculation Rules API") }}{{seecompattable}}

The **`prerenderingchange`** event is fired on a prerendered document when it is activated (i.e. the user views the page).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("prerenderingchange", (event) => {});

prerenderingchange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Preventing code from running during prerendering

The following code sets up an event listener to run a function once prerendering has finished, on a prerendered page (the prerendering is detected via {{domxref("Document.prerendering")}}), or runs it immediately on a non-prerendered page:

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
> See the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) landing page and particularly the [Unsafe speculative loading conditions](/en-US/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions) section for more information on the kinds of activities you might wish to delay until after prerendering has finished.

### Tracking prerendering activations

Code following the above pattern will not suffice for measuring how often a prerender is activated, because it's possible for the code to run after prerendering activation. Instead, use the following pattern:

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", () => {
    console.log("Prerender activated after this script ran");
  }, { once: true });
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
- {{domxref("Document.prerendering", "prerendering")}} property
- {{domxref("PerformanceNavigationTiming.activationStart")}} property

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

The example shows how to defer code, that would otherwise run during prerendering, until after page activation.
This is useful for deferring analytics code, which is only relevant when and if the page is actually viewed.

The code checks if prerendering is running using {{domxref("Document.prerendering")}}, and if so adds an event listener to run an analytics initialization function once the page is activated.
On a page that is not prerendering the analytics code is run immediately.

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

Note that this kind of code should not be used for measuring how often a prerender is activated, because the code may run after a prerendered page has already activated.

> [!NOTE]
> See the [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API) landing page and particularly the [Unsafe speculative loading conditions](/en-US/docs/Web/API/Speculation_Rules_API#unsafe_speculative_loading_conditions) section for more information on the kinds of activities you might wish to delay until after prerendering has finished.

### Measuring prerendering activations

This code shows how to measure how often a prerender is activated.
It uses the `prerenderingchange` to track activation events, and {{domxref("Performance.getEntriesByType()")}} to track navigation activations.

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
- {{domxref("Document.prerendering", "prerendering")}} property
- {{domxref("PerformanceNavigationTiming.activationStart")}} property

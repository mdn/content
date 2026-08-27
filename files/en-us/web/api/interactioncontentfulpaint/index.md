---
title: InteractionContentfulPaint
slug: Web/API/InteractionContentfulPaint
page-type: web-api-interface
status:
  - experimental
browser-compat: api.InteractionContentfulPaint
---

{{APIRef("Performance API")}}

The `InteractionContentfulPaint` interface provides timing information about {{Glossary("Contentful paint", "contentful paints")}} attributable to an interaction.

## Instance properties

This interface directly defines the following properties:

- {{domxref("InteractionContentfulPaint.interactionId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The id of the interaction that resulted in the paint.
- {{domxref("InteractionContentfulPaint.largestContentfulPaint")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns details of the largest {{domxref("LargestContentfulPaint")}} for the interaction. This can remain the same between two `InteractionContentfulPaint` entries for the same interaction if a new contentful paint is smaller than the current largest contentful paint for that interaction.
- {{domxref("InteractionContentfulPaint.paintTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} of when the first rendering phase ended and the paint phase started.
- {{domxref("InteractionContentfulPaint.presentationTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} of when the first painted pixels were actually drawn on the screen.

It also extends the following {{domxref("PerformanceEntry")}} properties, qualifying and constraining them as described:

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `"interaction-contentful-paint"`.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the result of {{domxref("InteractionContentfulPaint.presentationTime")}} - {{domxref("PerformanceEntry.startTime")}}.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns an empty string.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} of the interaction that resulted in the soft navigation.

## Instance methods

- {{domxref("InteractionContentfulPaint.toJSON()")}}
  - : Overrides the {{domxref("PerformanceEntry.toJSON()")}} method return a JSON representation of the `InteractionContentfulPaint` object.

## Description

The `InteractionContentfulPaint` provides a stream of paint updates attributable to an interaction.

At present this is scoped to increasing paint sizes, so it can be used to measure {{Glossary("Largest Contentful Paint", "Largest Contentful Paint (LCP)")}} for {{glossary("Soft Navigation", "Soft Navigations")}}, but the API has been designed to allow for all paints relevant to an interaction to be emitted.

`InteractionContentfulPaint` is needed instead of using the {{domxref("LargestContentfulPaint")}} API as that is only emitted per full page load and is finalized upon interaction (which is a necessary start to a soft navigation).

### Using `navigationId` and `interactionId`

For {{glossary("Soft Navigation", "Soft Navigations")}}, paints happening before the URL is updated may be considered for the {{Glossary("Largest Contentful Paint", "Largest Contentful Paint (LCP)")}} of the soft navigation that is in flight. For the LCP case, {{domxref("PerformanceSoftNavigation.getLargestInteractionContentfulPaint()")}} and {{domxref("InteractionContentfulPaint.interactionId")}} are more effective at considering all relevant paints regardless of the `navigationId`, when calculating that metric.

### Relationship with Event Timing and INP

The [Event Timing API](/en-US/docs/Web/API/PerformanceEventTiming) provides details about UIEvents — scheduling and processing durations, and total duration to next paint — but does not actually directly track the effects of those events, nor any future paints those effects might cause. It is intended to measure the responsiveness time during which a user receives no feedback, which should be kept to a minimum and forms the basis for metrics such as {{Glossary("Interaction to Next Paint", "Interaction to Next Paint (INP)")}}.

`InteractionContentfulPaint`, despite being similarly named to Interaction to Next Paint, serves a different purpose. `InteractionContentfulPaint` excludes non-contentful paints which do count for Event Timing and INP but also measures additional paints beyond the first paint. It allows enables measurement of a more complete understanding of the effects and content updates directly attributable to an interaction.

## Examples

### Observing interaction contentful paints

In the following example, a {{domxref("PerformanceObserver")}} is registered to get the soft navigations. The `buffered` flag is used to access data from before observer creation.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Interaction Contentful Paints:", entry.startTime, entry);
  }
});
observer.observe({ type: "interaction-contentful-paints", buffered: true });
```

### Observing interaction contentful paints specific to a soft navigation

One of the key uses of the `InteractionContentfulPaint` interface is to measure all contentful paints related to a [soft navigation](/en-US/docs/Web/API/PerformanceSoftNavigation) to calculate the {{Glossary("Largest Contentful Paint", "Largest Contentful Paint (LCP)")}} for that soft navigation.

To do this, it is recommended to use the {{domxref("PerformanceSoftNavigation.interactionId")}} rather than the {{domxref("PerformanceEntry.navigationId")}}, since some LCP candidates can happen before the soft navigation is defined (for paints, before the URL is updated) and will therefore have the old `navigationId`.

```js
let currentNavigationInteractionId = 1045; // hardcoded in this example

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.InteractionId === currentNavigationInteractionId) {
      console.log("Soft LCP candidate:", entry.startTime, entry);
    }
  }
});
observer.observe({ type: "interaction-contentful-paints", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Measuring soft navigations](https://developer.chrome.com/docs/web-platform/soft-navigations) on developer.chrome.com (2026)

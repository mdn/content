---
title: "InteractionContentfulPaint: navigationId property"
short-title: navigationId
slug: Web/API/InteractionContentfulPaint/navigationId
page-type: web-api-instance-property
browser-compat: api.InteractionContentfulPaint.navigationId
---

{{APIRef("Performance API")}}

The **`navigationId`** read-only property of the {{domxref("InteractionContentfulPaint")}} interface returns the id of the navigation that this paint is happened under.

Note that, for {{glossary("Soft Navigation", "Soft Navigations")}}, paints happening before the URL is updated may wish to considered for the {{Glossary("Largest Contentful Paint", "Largest Contentful Paint (LCP)")}} of the soft navigation that is in flight. For the LCP case, {{domxref("PerformanceSoftNavigation.getLargestInteractionContentfulPaint()")}} and {{domxref("InteractionContentfulPaint.interactionId")}} are more effective for calculating that metric to consider all relevant paint regardless of the `navigationId`.

## Value

An integer matching either a {{domxref("PerformanceNavigationTiming")}} or a {{domxref("PerformanceSoftNavigation")}} entry.

## Examples

### Logging the `navigationId` of `InteractionContentfulPaint`

This example uses a {{domxref("PerformanceObserver")}} to log new `interaction-contentful-paint` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(
      "Interaction Contentful Paint:",
      entry.startTime,
      entry.navigationId,
    );
  }
});
observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

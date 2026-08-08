---
title: "InteractionContentfulPaint: navigationId property"
short-title: navigationId
slug: Web/API/InteractionContentfulPaint/navigationId
page-type: web-api-instance-property
browser-compat: api.InteractionContentfulPaint.navigationId
---

{{APIRef("Performance API")}}

The **`navigationId`** read-only property of the {{domxref("InteractionContentfulPaint")}} interface returns the id of the navigation that this paint is attributable to.

Note that for {{glossary("Soft Navigation", "Soft Navigations")}} this will return the navigation id of the navigation which the paint happened under. Paints happening before the URL is updated will be attributable to the existing URL, when they may wish to be considered for the {{Glossary("Largest Contentful Paint", "Largest Contentful Paint (LCP)")}} of the navigation that is in flight. The {{domxref("PerformanceSoftNavigation.getLargestInteractionContentfulPaint()")}} and {{domxref("InteractionContentfulPaint.interactionId")}} can be better APIs to use when calculating LCP.

## Value

An integer matching either a {{domxref("PerformanceNavigationTiming")}} or a {{domxref("PerformanceSoftNavigation")}} entry.

## Examples

### Logging the `navigationId` of `InteractionContentfulPaint`

This example uses a {{domxref("PerformanceObserver")}} notifying of new `interaction-contentful-paint` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

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

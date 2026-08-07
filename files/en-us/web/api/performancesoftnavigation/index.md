---
title: PerformanceSoftNavigation
slug: Web/API/PerformanceSoftNavigation
page-type: web-api-interface
browser-compat: api.PerformanceSoftNavigation
---

{{APIRef("Performance API")}}

The `PerformanceSoftNavigation` interface provides timing information about a "soft navigation" for client-side routing as using by {{Glossary("SPA", "single-page application (SPA)")}} sites.

## Description

The `PerformanceSoftNavigation` interface is driven by the browser observing the following:

- A user interaction
- A visible paint updating the screen
- A URL update to the user's address bar

Having the browser drive this rather than by the routing framework calling an API to emit this entry allows the performance timing to be measured consistently regardless of how different applications may handle the navigation (for example, updating the URL first or at the end of the navigation processing).

The `PerformanceSoftNavigation` interface allows measuring of other performance metrics such as:

- {{Glossary("First Contentful Paint", "First Contentful Paint (FCP)")}} which can be measured as the first paint from the soft navigation time.
- {{Glossary("Largest Contentful Paint", "Largest Contentful Paint (LCP)")}} which can be measured through the {{domxref("InteractionContentfulPaint")}} for the soft navigation.
- {{Glossary("CLS", "Cumulative Layout Shift (CLS)")}} which can be calculated between navigations.
- {{Glossary("Interaction to Next Paint", "Interaction to Next Paint (INP)")}} which can be calculated between navigations.

## Instance properties

This interface directly defines the following properties:

- {{domxref("PerformanceSoftNavigation.interactionId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The id of the interaction that resulted in the soft navigation.
- {{domxref("PerformanceSoftNavigation.navigationId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The id of the navigation, unique to this page load.
- {{domxref("PerformanceSoftNavigation.navigationType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The type of the navigation.
- {{domxref("PerformanceSoftNavigation.paintTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the first rendering phase ended and the paint phase started.
- {{domxref("PerformanceSoftNavigation.presentationTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the first painted pixels were actually drawn on the screen.

It also extends the following {{domxref("PerformanceEntry")}} properties, qualifying and constraining them as described:

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `"soft-navigation"`.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("PerformanceSoftNavigation.presentationTime")}} - {{domxref("PerformanceEntry.startTime")}}.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The new URL navigated to.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the time of the interaction which resulted in the soft navigation.

## Instance methods

_This interface also inherits methods from {{domxref("PerformanceEntry")}}._

- {{domxref("PerformanceSoftNavigation.getLargestInteractionContentfulPaint()")}} {{Experimental_Inline}}
  - : Returns returns the current largest {{domxref("InteractionContentfulPaint")}} for this soft navigation.

## Examples

### Observing soft navigations

In the following example, a {{domxref("PerformanceObserver")}} is registered to get the soft navigations. The `buffered` flag is used to access data from before observer creation.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Soft Nav:", entry.startTime, entry.name);
  }
});
observer.observe({ type: "soft-navigation", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Measuring soft navigations](https://developer.chrome.com/docs/web-platform/soft-navigations) on developer.chrome.com

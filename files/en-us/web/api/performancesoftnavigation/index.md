---
title: PerformanceSoftNavigation
slug: Web/API/PerformanceSoftNavigation
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PerformanceSoftNavigation
---

{{APIRef("Performance API")}}

The `PerformanceSoftNavigation` interface provides timing information about {{glossary("soft navigation", "soft navigations")}} as used by client-side routing on {{Glossary("SPA", "single-page application (SPA)")}} sites. It is emitted when a browser observes a soft navigation to have taken place.

## Instance properties

This interface directly defines the following properties:

- {{domxref("PerformanceSoftNavigation.interactionId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The id of the navigation, unique to this page load.
- {{domxref("PerformanceSoftNavigation.navigationType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The type of the navigation.
- {{domxref("PerformanceSoftNavigation.paintTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} of when the first rendering phase ended and the paint phase started.
- {{domxref("PerformanceSoftNavigation.presentationTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} of when the first painted pixels were actually drawn on the screen.

It also extends the following {{domxref("PerformanceEntry")}} properties, qualifying and constraining them as described:

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `"soft-navigation"`.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the result of {{domxref("PerformanceSoftNavigation.presentationTime")}} - {{domxref("PerformanceEntry.startTime")}}.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The new URL navigated to.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} of the interaction that resulted in the soft navigation.

## Instance methods

- {{domxref("PerformanceSoftNavigation.getLargestInteractionContentfulPaint()")}} {{Experimental_Inline}}
  - : Returns the current largest {{domxref("InteractionContentfulPaint")}} for this soft navigation.
- {{domxref("PerformanceSoftNavigation.toJSON()")}}
  - : Overrides the {{domxref("PerformanceEntry.toJSON()")}} method to return a JSON representation of the `PerformanceSoftNavigation` object.

## Description

The `PerformanceSoftNavigation` interface is driven by the browser observing the following:

- A [trusted](/en-US/docs/Web/API/Event/isTrusted) user interaction.
- A visible, {{Glossary("Contentful Paint", "contentful paint")}} as a result of that interaction updating the screen.
- A URL update in the user's address bar as a result of that interaction.

Having the browser provide this rather than a routing framework calling an API to emit this entry allows SPA performance timing to be measured consistently regardless of how different applications handle navigations (for example, updating the URL at the start or the end of navigation processing).

The `PerformanceSoftNavigation` interface allows developers to measure SPA performance metrics such as:

- {{Glossary("First Contentful Paint", "First Contentful Paint (FCP)")}}: Can be measured as the first paint from the soft navigation time.
- {{Glossary("Largest Contentful Paint", "Largest Contentful Paint (LCP)")}}: Can be measured via the {{domxref("InteractionContentfulPaint")}} for the soft navigation.
- {{Glossary("CLS", "Cumulative Layout Shift (CLS)")}}: Can be calculated between navigations.
- {{Glossary("Interaction to Next Paint", "Interaction to Next Paint (INP)")}}: Can be calculated between navigations.

## Examples

### Observing soft navigations

In the following example, a {{domxref("PerformanceObserver")}} is used to log the soft navigations. The `buffered` flag is used to access data from before observer creation.

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

- [Measuring soft navigations](https://developer.chrome.com/docs/web-platform/soft-navigations) on developer.chrome.com (2026)

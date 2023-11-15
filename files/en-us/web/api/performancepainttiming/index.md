---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
page-type: web-api-interface
browser-compat: api.PerformancePaintTiming
---

{{APIRef("Performance API")}}

The **`PerformancePaintTiming`** interface provides timing information about "paint" (also called "render") operations during web page construction. "Paint" refers to conversion of the render tree to on-screen pixels.

There are two key paint moments this API provides:

- {{Glossary("First paint")}} (FP): Time when anything is rendered. Note that the marking of the first paint is optional, not all user agents report it.
- {{Glossary("First contentful paint")}} (FCP): Time when the first bit of DOM text or image content is rendered.

A third key paint moment is provided by the {{domxref("LargestContentfulPaint")}} API:

- {{Glossary("Largest contentful paint")}} (LCP): Render time of the largest image or text block visible within the viewport, recorded from when the page first begins to load.

The data this API provides helps you minimize the time that users have to wait before they can see the site's content start to appear. Decreasing the time until these key paint moments make sites feel more responsive, performant, and engaging for your users.

Like other Performance APIs, this API extends {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instance properties

This interface has no properties but it extends the following {{domxref("PerformanceEntry")}} properties by qualifying and constraining the properties as follows:

- {{domxref("PerformanceEntry.entryType")}}
  - : Returns "`paint`".
- {{domxref("PerformanceEntry.name")}}
  - : Returns either `"first-paint"` or `"first-contentful-paint"`.
- {{domxref("PerformanceEntry.startTime")}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the paint occurred.
- {{domxref("PerformanceEntry.duration")}}
  - : Returns 0.

## Instance methods

This interface has no methods.

## Examples

### Getting paint timings

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `paint` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(
      `The time to ${entry.name} was ${entry.startTime} milliseconds.`,
    );
    // Logs "The time to first-paint was 386.7999999523163 milliseconds."
    // Logs "The time to first-contentful-paint was 400.6999999284744 milliseconds."
  });
});

observer.observe({ type: "paint", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `paint` performance entries present in the browser's performance timeline at the time you call this method:

```js
const entries = performance.getEntriesByType("paint");
entries.forEach((entry) => {
  console.log(`The time to ${entry.name} was ${entry.startTime} milliseconds.`);
  // Logs "The time to first-paint was 386.7999999523163 milliseconds."
  // Logs "The time to first-contentful-paint was 400.6999999284744 milliseconds."
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### See also

- {{domxref("LargestContentfulPaint")}}

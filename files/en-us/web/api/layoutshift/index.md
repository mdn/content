---
title: LayoutShift
slug: Web/API/LayoutShift
page-type: web-api-interface
status:
  - experimental
browser-compat: api.LayoutShift
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The `LayoutShift` interface of the [Performance API](/en-US/docs/Web/API/Performance_API) provides insights into the layout stability of web pages based on movements of the elements on the page.

## Description

A layout shift happens when any element that is visible in the viewport changes its position between two frames. These elements are described as being **unstable**, indicating a lack of visual stability.

The Layout Instability API provides a way to measure and report on these layout shifts. All tools for debugging layout shifts, including those in the browser's developer tools, use this API. The API can also be used to observe and debug layout shifts by logging the information to the console, to send the data to a server endpoint, or to web page analytics.

Performance tools can use this API to calculate a {{glossary("CLS")}} score.

{{InheritanceDiagram}}

## Instance properties

This interface extends the following {{domxref("PerformanceEntry")}} properties by qualifying them as follows:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `0` (the concept of duration does not apply to layout shifts).
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `"layout-shift"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `"layout-shift"`.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the time when the layout shift started.

This interface also supports the following properties:

- {{domxref("LayoutShift.value")}} {{Experimental_Inline}}
  - : Returns the layout shift score calculated as the impact fraction (fraction of the viewport that was shifted) multiplied by the distance fraction (distance moved as a fraction of viewport).
- {{domxref("LayoutShift.hadRecentInput")}} {{Experimental_Inline}}
  - : Returns `true` if {{domxref("LayoutShift.lastInputTime", "lastInputTime")}} is less than 500 milliseconds in the past.
- {{domxref("LayoutShift.lastInputTime")}} {{Experimental_Inline}}
  - : Returns the time of the most recent excluding input (user input that would exclude this entry as a contributor to the CLS score) or `0` if no excluding input has occurred.
- {{domxref("LayoutShift.sources")}} {{Experimental_Inline}}
  - : Returns an array of {{domxref("LayoutShiftAttribution")}} objects with information on the elements that were shifted.

## Instance methods

- {{domxref("LayoutShift.toJSON()")}} {{Experimental_Inline}}
  - : Converts the properties to JSON.

## Examples

### Logging layout shift values

The following example shows how to capture layout shifts and log them to the console.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // Count layout shifts without recent user input only
    if (!entry.hadRecentInput) {
      console.log("LayoutShift value:", entry.value);
      if (entry.sources) {
        for (const { node, currentRect, previousRect } of entry.sources)
          console.log("LayoutShift source:", node, {
            currentRect,
            previousRect,
          });
      }
    }
  }
});

observer.observe({ type: "layout-shift", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LayoutShiftAttribution")}}
- {{glossary("CLS")}}

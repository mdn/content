---
title: LayoutShift
slug: Web/API/LayoutShift
page-type: web-api-interface
tags:
  - API
  - Interface
  - Layout Instability API
  - LayoutShift
  - Performance
  - Reference
  - Web Performance
  - Experimental
browser-compat: api.LayoutShift
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The `LayoutShift` interface of the provides insights into the layout stability of web pages based on movements of the elements on the page.

## Description

A layout shift happens when any element that is visible in the viewport changes its position between two frames. These elements are described as being **unstable**, and contribute to a poor {{Glossary("Cumulative Layout Shift")}} (CLS) score, indicating a lack of visual stability.

The Layout Instability API provides a way to measure and report on these layout shifts. All tools for debugging layout shifts, including those in browser's developer tools, use this API. The API can also be used to observe and debug layout shifts by logging the information to the console, to send the data to a server endpoint, or to web page analytics.

{{InheritanceDiagram}}

## Instance properties

This interface extends the following {{domxref("PerformanceEntry")}} properties for `layout-shift` performance entry types by qualifying them as follows:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `0` (the concept of duration does not apply to layout shifts).
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `"layout-shift"`
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `"layout-shift"`
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("DOMHighResTimeStamp")}} representing the time when the layout shift started.

This interface also supports the following properties:

- {{domxref("LayoutShift.value")}} {{Experimental_Inline}}
  - : Returns the layout shift score calculated by the impact fraction (fraction of the viewport that was shifted) times the distance fraction (distance moved as a fraction of viewport).
- {{domxref("LayoutShift.hadRecentInput")}} {{Experimental_Inline}}
  - : Returns `true` if {{domxref("LayoutShift.lastInputTime", "lastInputTime")}} is less than 500 milliseconds in the past.
- {{domxref("LayoutShift.lastInputTime")}} {{Experimental_Inline}}
  - : Returns the time of the most recent excluding input or `0` if no excluding input has occurred.
- {{domxref("LayoutShift.sources")}} {{Experimental_Inline}}
  - : Returns an array of {{domxref("LayoutShiftAttribution")}} objects with information on the elements that were shifted.

## Instance methods

- {{domxref("LayoutShift.toJSON()")}} {{Experimental_Inline}}
  - : Converts the properties to JSON.

## Examples

### Logging the current CLS score

The following example shows how to capture layout shifts and log them to the console.

```js
let cumulativeLayoutShiftScore = 0;

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // Count layout shifts without recent user input only
    if (!entry.hadRecentInput) {
      cumulativeLayoutShiftScore += entry.value;
      console.log("Current CLS value:", cumulativeLayoutShiftScore, entry);
      if (entry.sources) {
        for (const { node, curRect, prevRect } of entry.sources)
          console.log("Shift source:", node, { curRect, prevRect });
      }
    }
  }
});

observer.observe({ type: "layout-shift", buffered: true });
```

### Measuring the final CLS score

The final CLS score is taken at the time of the [`visibilitychange` event](/en-US/docs/Web/API/Document/visibilitychange_event) for which you can add an event handler.

```js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    // Force any pending records to be dispatched
    observer.takeRecords();
    observer.disconnect();
    console.log("CLS:", cumulativeLayoutShiftScore);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LayoutShiftAttribution")}}
- {{Glossary("Cumulative Layout Shift")}}

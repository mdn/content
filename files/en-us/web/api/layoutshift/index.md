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

The `LayoutShift` interface of the provides insights into the stability of web pages based on movements of the elements on the page.

## Description

A layout shift happens when any element that is visible in the viewport changes its start position between two frames. These elements are described as being **unstable**, and contribute to a poor [Cumulative Layout Shift (CLS)](https://web.dev/cls/) score, indicating a lack of visual stability.

The Layout Instability API provides a way to measure and report on these layout shifts. All tools for debugging layout shifts, including those in DevTools, use this API. The API can also be used to observe and debug layout shifts by logging the information to the console, to send the data to a server endpoint, or to Google Analytics.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("LayoutShift.value")}} {{Experimental_Inline}}
  - : Returns the `impact fraction` (fraction of the viewport that was shifted) times the `distance fraction` (distance moved as a fraction of viewport).
- {{domxref("LayoutShift.hadRecentInput")}} {{Experimental_Inline}}
  - : Returns `true` if there was a user input in the past 500 milliseconds.
- {{domxref("LayoutShift.lastInputTime")}} {{Experimental_Inline}}
  - : Returns the time of the most recent user input.
- {{domxref("LayoutShift.sources")}} {{Experimental_Inline}}
  - : Returns an array of {{domxref('LayoutShiftAttribution')}} objects with information on the elements that were shifted.

## Instance methods

- {{domxref("LayoutShift.toJSON()")}} {{Experimental_Inline}}
  - : Converts the properties to JSON.

## Examples

The following example shows how to capture layout shifts and log them to the console.

Note that in this example data is only sent to the server when the user leaves the tab.

```js
// Catch errors since some browsers throw when using the new `type` option.
// https://bugs.webkit.org/show_bug.cgi?id=209216
try {
  let cumulativeLayoutShiftScore = 0;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      // Only count layout shifts without recent user input.
      if (!entry.hadRecentInput) {
        cumulativeLayoutShiftScore += entry.value;
      }
    }
  });

  observer.observe({ type: "layout-shift", buffered: true });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      // Force any pending records to be dispatched.
      observer.takeRecords();
      observer.disconnect();

      console.log("CLS:", cumulativeLayoutShiftScore);
    }
  });
} catch (e) {
  // Do nothing if the browser doesn't support this API.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

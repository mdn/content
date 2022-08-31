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
{{APIRef("Layout Instability API")}}{{SeeCompatTable}}

The `LayoutShift` interface of the [Layout Instability API](/en-US/docs/Web/API/Layout_Instability_API) provides insights into the stability of web pages based on movements of the elements on the page.

{{InheritanceDiagram}}

## Properties

- {{domxref("LayoutShift.value")}} {{Experimental_Inline}}
  - : Returns the `impact fraction` (fraction of the viewport that was shifted) times the `distance fraction` (distance moved as a fraction of viewport).
- {{domxref("LayoutShift.hadRecentInput")}} {{Experimental_Inline}}
  - : Returns `true` if there was a user input in the past 500 milliseconds.
- {{domxref("LayoutShift.lastInputTime")}} {{Experimental_Inline}}
  - : Returns the time of the most recent user input.
- {{domxref("LayoutShift.sources")}} {{Experimental_Inline}}
  - : Returns an array of {{domxref('LayoutShiftAttribution')}} objects with information on the elements that were shifted.

## Methods

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

  observer.observe({type: 'layout-shift', buffered: true});

  document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    // Force any pending records to be dispatched.
    observer.takeRecords();
    observer.disconnect();

    console.log('CLS:', cumulativeLayoutShiftScore);
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

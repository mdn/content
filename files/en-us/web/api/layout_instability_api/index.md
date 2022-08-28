---
title: Layout Instability API
slug: Web/API/Layout_Instability_API
page-type: web-api-overview
tags:
  - API
  - Layout Instability API
  - Overview
  - Reference
  - Experimental
browser-compat: api.LayoutShift
---
{{DefaultAPISidebar("Layout Instability API")}}{{SeeCompatTable}}

The **Layout Instability API** provides interfaces for measuring and reporting layout shifts.

## Concepts and Usage

A layout shift happens when any element that is visible in the viewport changes its start position between two frames. These elements are described as being **unstable**, and contribute to a poor [Cumulative Layout Shift (CLS)](https://web.dev/cls/) score, indicating a lack of visual stability.

The Layout Instability API provides a way to measure and report on these layout shifts. All tools for debugging layout shifts, including those in DevTools, use this API. The API can also be used to observe and debug layout shifts by logging the information to the console, to send the data to a server endpoint, or to Google Analytics.

## Interfaces

- {{domxref("LayoutShift")}}
  - : Provides insights into the stability of web pages based on movements of the elements on the page.
- {{domxref("LayoutShiftAttribution")}}
  - : Provides debugging information about elements which have shifted.

## Examples

The following example observes all layout shifts, and prints them to the console.

```js
new PerformanceObserver((list) => {
  console.log(list.getEntries());
}).observe({type: 'layout-shift', buffered: true});
```

## Specifications

{{Specifications}}

## See also

- [Cumulative Layout Shift](https://web.dev/cls/)
- [Debug layout shifts](https://web.dev/debug-layout-shifts/)
- [Debug Web Vitals in the field](https://web.dev/debug-web-vitals-in-the-field/)

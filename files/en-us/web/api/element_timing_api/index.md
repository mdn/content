---
title: Element Timing API
slug: Web/API/Element_timing_API
page-type: web-api-overview
tags:
  - API
  - ElementTiming
  - Performance
  - Overview
  - Reference
  - Experimental
browser-compat: api.PerformanceElementTiming
---
{{DefaultAPISidebar("Element Timing")}}{{SeeCompatTable}}

The **Element Timing API** provides features for monitoring the loading performance of large image elements and text nodes as they appear on screen.

## Concepts and Usage

The aim of the Element Timing API is to give web developers or analytics tools the ability to measure rendering timestamps of critical elements on a page.

The API supports timing information on {{htmlelement("img")}} elements, {{SVGElement("image")}} elements inside an {{SVGElement("svg")}}, poster images of {{htmlelement("video")}} elements, elements which have a {{cssxref("background-image")}}, and groups of text nodes, such as a {{htmlelement("p")}}.

The author flags an element for observation by adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute on the element.

## Interfaces

- {{domxref("PerformanceElementTiming")}}
  - : Reports timing information about one associated element.

## Examples

In this example we have two elements which are being observed. We use the {{domxref("PerformanceObserver")}} interface to create a list of performance measurement events, in our case observing the {{domxref("PerformanceEntry.entrytype")}} `element` in order to use the `PerformanceElementTiming` interface from the Element Timing API.

Two entries will be output to the console, the first containing details of the image, the second with details of the text node.

```html
<img src="image.jpg" elementtiming="big-image">
<p elementtiming="text" id="text-id">text here</p>
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach((entry) => {
      console.log(entry);
  });
});
observer.observe({ entryTypes: ["element"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceResourceTiming")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformancePaintTiming")}}
- {{domxref("PerformanceLongTaskTiming")}}

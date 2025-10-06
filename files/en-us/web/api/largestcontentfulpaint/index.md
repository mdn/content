---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
page-type: web-api-interface
browser-compat: api.LargestContentfulPaint
---

{{APIRef("Performance API")}}

The `LargestContentfulPaint` interface provides timing information about the largest image or text paint before user input on a web page.

## Description

The key moment this API provides is the {{Glossary("Largest Contentful Paint")}} (LCP) metric. It provides the render time of the largest image or text block visible within the viewport, recorded from when the page first begins to load. The following elements are considered when determining the LCP:

- {{HTMLElement("img")}} elements.
- [`<image>`](/en-US/docs/Web/SVG/Reference/Element/image) elements inside an SVG.
- The poster images of {{HTMLElement("video")}} elements.
- Elements with a {{cssxref("background-image")}}.
- Groups of text nodes, such as {{HTMLElement("p")}}.

To measure render times of other elements, use the {{domxref("PerformanceElementTiming")}} API.

Additional key paint moments are provided by the {{domxref("PerformancePaintTiming")}} API:

- {{Glossary("First Paint")}} (FP): Time when anything is rendered. Note that the marking of the first paint is optional, not all user agents report it.
- {{Glossary("First Contentful Paint")}} (FCP): Time when the first bit of DOM text or image content is rendered.

`LargestContentfulPaint` inherits from {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

To get an accurate measurement of render time for cross-origin resources, set the {{httpheader("Timing-Allow-Origin")}} header.

Developers should use `startTime` instead of `renderTime` as the LCP value, as the `renderTime` may not be set in some browsers.

See [Cross-origin image render time](/en-US/docs/Web/API/LargestContentfulPaint/renderTime#cross-origin_image_render_time) and [Use startTime over renderTime](/en-US/docs/Web/API/LargestContentfulPaint/renderTime#use_starttime_over_rendertime) for more details.

## Instance properties

This interface extends the following {{domxref("PerformanceEntry")}} properties by qualifying and constraining the properties as follows:

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `"largest-contentful-paint"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns an empty string.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the value of this entry's {{domxref("LargestContentfulPaint.renderTime", "renderTime")}} if it is not `0`, otherwise the value of this entry's {{domxref("LargestContentfulPaint.loadTime", "loadTime")}}.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `0`, as `duration` is not applicable to this interface.

It also supports the following properties:

- {{domxref("LargestContentfulPaint.element")}} {{ReadOnlyInline}}
  - : The element that is the current largest contentful paint.
- {{domxref("LargestContentfulPaint.renderTime")}} {{ReadOnlyInline}}
  - : The time the element was rendered to the screen. May be a coarsened value or `0` if the element is a cross-origin image loaded without the `Timing-Allow-Origin` header.
- {{domxref("LargestContentfulPaint.loadTime")}} {{ReadOnlyInline}}
  - : The time the element was loaded.
- {{domxref("LargestContentfulPaint.size")}} {{ReadOnlyInline}}
  - : The intrinsic size of the element returned as the area (width \* height).
- {{domxref("LargestContentfulPaint.id")}} {{ReadOnlyInline}}
  - : The id of the element. This property returns an empty string when there is no id.
- {{domxref("LargestContentfulPaint.url")}} {{ReadOnlyInline}}
  - : If the element is an image, the request url of the image.

## Instance methods

_This interface also inherits methods from {{domxref("PerformanceEntry")}}._

- {{domxref("LargestContentfulPaint.toJSON()")}}
  - : Returns a JSON representation of the `LargestContentfulPaint` object.

## Examples

### Observing the largest contentful paint

In the following example, an observer is registered to get the largest contentful paint while the page is loading. The `buffered` flag is used to access data from before observer creation.

The LCP API analyzes all content it finds (including content that is removed from the DOM). When new largest content is found, it creates a new entry. It stops searching for larger content when scroll or input events occur, since these events likely introduce new content on the website. Thus the LCP is the last performance entry reported by the observer.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Glossary("Largest Contentful Paint")}}
- {{Glossary("First Contentful Paint")}}
- {{Glossary("First Paint")}}

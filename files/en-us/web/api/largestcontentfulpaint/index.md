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

See [Cross-origin image render time](/en-US/docs/Web/API/LargestContentfulPaint/renderTime#cross-origin_image_render_time) and [Use startTime over renderTime](/en-US/docs/Web/API/LargestContentfulPaint/renderTime#use_starttime_over_rendertime) for more details.

## Instance properties

This interface directly defines the following properties:

- {{domxref("LargestContentfulPaint.element")}} {{ReadOnlyInline}}
  - : The element that is the current largest contentful paint.
- {{domxref("LargestContentfulPaint.renderTime")}} {{ReadOnlyInline}}
  - : The time the element was rendered to the screen. May be a coarsened value if the element is a cross-origin image loaded without the `Timing-Allow-Origin` header.
- {{domxref("LargestContentfulPaint.loadTime")}} {{ReadOnlyInline}}
  - : The time the element was loaded.
- {{domxref("LargestContentfulPaint.size")}} {{ReadOnlyInline}}
  - : The intrinsic size of the element returned as the area (width \* height).
- {{domxref("LargestContentfulPaint.id")}} {{ReadOnlyInline}}
  - : The id of the element. This property returns an empty string when there is no id.
- {{domxref("LargestContentfulPaint.paintTime")}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the rendering phase ended and the paint phase started.
- {{domxref("LargestContentfulPaint.presentationTime")}}
  - : Returns the {{domxref("DOMHighResTimeStamp","timestamp")}} when the painted pixels were actually drawn on the screen.
- {{domxref("LargestContentfulPaint.url")}} {{ReadOnlyInline}}
  - : If the element is an image, the request url of the image.

It also extends the following {{domxref("PerformanceEntry")}} properties, qualifying and constraining them as described:

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `"largest-contentful-paint"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns an empty string.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the value of this entry's {{domxref("LargestContentfulPaint.renderTime", "renderTime")}}.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `0`, as `duration` is not applicable to this interface.

## Instance methods

_This interface also inherits methods from {{domxref("PerformanceEntry")}}._

- {{domxref("LargestContentfulPaint.toJSON()")}}
  - : Returns a JSON representation of the `LargestContentfulPaint` object.

## Examples

### Observing the largest contentful paint

In the following example, a {{domxref("PerformanceObserver")}} is registered to get the largest contentful paint while the page is loading. The `buffered` flag is used to access data from before observer creation.

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

### Observing separate paint and presentation timings

The `paintTime` and `presentationTime` properties enable you to retrieve specific timings for the paint phase starting and the painted pixels being drawn on the screen. The `paintTime` is broadly interoperable, whereas the `presentationTime` is implementation-dependent.

This example builds on the earlier observer example, showing how to check for `paintTime` and `presentationTime` support and retrieve those values if they are available. In non-supporting browsers, the code retrieves the `renderTime` or `loadTime`, depending on what is supported.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  if (lastEntry.presentationTime) {
    console.log(
      "LCP paintTime:",
      lastEntry.paintTime,
      "LCP presentationTime:",
      lastEntry.presentationTime,
    );
  } else if (lastEntry.paintTime) {
    console.log("LCP paintTime:", lastEntry.paintTime);
  } else if (lastEntry.renderTime) {
    console.log("LCP renderTime:", lastEntry.renderTime);
  } else {
    console.log("LCP loadTime:", lastEntry.loadTime);
  }
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

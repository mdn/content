---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
page-type: web-api-interface
status:
  - experimental
browser-compat: api.LargestContentfulPaint
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The `LargestContentfulPaint` interface provides timing information about the largest image or text paint before user input on a web page.

## Description

The key moment this API provides is the {{Glossary("Largest Contentful Paint")}} (LCP) metric. It provides the render time of the largest image or text block visible within the viewport, recorded from when the page first begins to load. The following elements are considered when determining the LCP:

- {{HTMLElement("img")}} elements.
- [`<image>`](/en-US/docs/Web/SVG/Element/image) elements inside an SVG.
- The poster images of {{HTMLElement("video")}} elements.
- Elements with a {{cssxref("background-image")}}.
- Groups of text nodes, such as {{HTMLElement("p")}}.

To measure render times of other elements, use the {{domxref("PerformanceElementTiming")}} API.

Additional key paint moments are provided by the {{domxref("PerformancePaintTiming")}} API:

- {{Glossary("First paint")}} (FP): Time when anything is rendered. Note that the marking of the first paint is optional, not all user agents report it.
- {{Glossary("First contentful paint")}} (FCP): Time when the first bit of DOM text or image content is rendered.

`LargestContentfulPaint` inherits from {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instance properties

This interface extends the following {{domxref("PerformanceEntry")}} properties by qualifying and constraining the properties as follows:

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns "`largest-contentful-paint`".
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns an empty string.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the value of this entry's {{domxref("LargestContentfulPaint.renderTime", "renderTime")}} if it is not `0`, otherwise the value of this entry's {{domxref("LargestContentfulPaint.loadTime", "loadTime")}}.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `0`, as `duration` is not applicable to this interface.

It also supports the following properties:

- {{domxref("LargestContentfulPaint.element")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The element that is the current largest contentful paint.
- {{domxref("LargestContentfulPaint.renderTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The time the element was rendered to the screen. May not be available if the element is a cross-origin image loaded without the `Timing-Allow-Origin` header.
- {{domxref("LargestContentfulPaint.loadTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The time the element was loaded.
- {{domxref("LargestContentfulPaint.size")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The intrinsic size of the element returned as the area (width \* height).
- {{domxref("LargestContentfulPaint.id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The id of the element. This property returns an empty string when there is no id.
- {{domxref("LargestContentfulPaint.url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : If the element is an image, the request url of the image.

## Instance methods

_This interface also inherits methods from {{domxref("PerformanceEntry")}}._

- {{domxref("LargestContentfulPaint.toJSON()")}} {{Experimental_Inline}}
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

### Cross-origin image render time

For security reasons, the value of the {{domxref("LargestContentfulPaint.renderTime", "renderTime")}} property is `0` if the resource is a cross-origin request. Instead the {{domxref("LargestContentfulPaint.loadTime", "loadTime")}} is exposed. To expose cross-origin render time information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

For example, to allow `https://developer.mozilla.org` to see `renderTime`, the cross-origin resource should send:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Like in the code example, you can use {{domxref("PerformanceEntry.startTime", "startTime")}}, which returns the value of the entry's {{domxref("LargestContentfulPaint.renderTime", "renderTime")}} if it is not `0`, and otherwise the value of this entry's {{domxref("LargestContentfulPaint.loadTime", "loadTime")}}. However, it is recommended to set the {{HTTPHeader("Timing-Allow-Origin")}} header so that the metrics will be more accurate.

If you use `startTime`, you can flag any inaccuracies by checking if `renderTime` was used:

```js
const isAccurateLCP = entry.renderTime ? true : false;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Glossary("Largest Contentful Paint")}}
- {{Glossary("First contentful paint")}}
- {{Glossary("First paint")}}

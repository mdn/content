---
title: "PerformanceElementTiming: renderTime property"
short-title: renderTime
slug: Web/API/PerformanceElementTiming/renderTime
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceElementTiming.renderTime
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`renderTime`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the render time of the associated element.

## Value

A {{domxref("DOMHighResTimeStamp")}} with the render time of the element.

For images this will be the **image rendering timestamp**. This is defined as the next paint that occurs after the image becomes fully loaded. If the timing allow check fails (as defined by the [Timing-allow-origin](/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin) header) this will return `0`.

For text nodes this will be the **text rendering timestamp**. This is defined as when the element becomes text painted.

## Examples

### Logging `renderTime`

In this example an {{HTMLElement("img")}} element is being observed by adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute. A {{domxref("PerformanceObserver")}} is registered to get all performance entries of type `"element"` and the `buffered` flag is used to access data from before observer creation. Calling `entry.renderTime` returns the render time of the image element.

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.renderTime);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

### Cross-origin image render time

For security reasons, the value of the `renderTime` property was originally `0` if the resource is a cross-origin request. Instead the `loadTime` property should be used as a fallback.

Browsers [may now expose a slightly coarsened render time](https://github.com/w3c/paint-timing/issues/104) in these situations. Check for [browser support](#browser_compatibility).

To expose more accurate cross-origin render-time information, the {{HTTPHeader("Timing-Allow-Origin")}} HTTP response header needs to be set.

For example, to allow `https://developer.mozilla.org` to see an accurate `renderTime`, the cross-origin resource should send:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Alternatively, you can use {{domxref("PerformanceEntry.startTime", "startTime")}} which returns the value of the entry's `renderTime` if it is not `0`, and otherwise the value of this entry's {{domxref("PerformanceElementTiming.loadTime", "loadTime")}}. However, it is recommended to set the {{HTTPHeader("Timing-Allow-Origin")}} header so that the metrics will be more accurate.

If you use `startTime`, you can flag any inaccuracies by checking if `renderTime` was used:

```js
const isRenderTime = entry.renderTime ? true : false;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

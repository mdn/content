---
title: PerformanceElementTiming
slug: Web/API/PerformanceElementTiming
tags:
  - API
  - Interface
  - Reference
  - PerformanceElementTiming
browser-compat: api.PerformanceElementTiming
---
{{DefaultAPISidebar("Element Timing")}}

The **`PerformanceElementTiming`** interface of the {{domxref('Element Timing API','','',' ')}} reports timing information on a specific element identified by the page author. For example it could report timing information about the main image in an article.

## Properties

- {{domxref("PerformanceElementTiming.element")}}{{ReadOnlyInline}}
  - : An {{domxref("Element")}} representing the element we are returning information about.
- {{domxref("PerformanceElementTiming.id")}}{{ReadOnlyInline}}
  - : A {{domxref("DOMString")}} which is the {{htmlattrxref("id")}} of the element.
- {{domxref("PerformanceElementTiming.identifier")}}{{ReadOnlyInline}}
  - : A {{domxref("DOMString")}} which is the value of the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/for) attribute on the element.
- {{domxref("PerformanceElementTiming.intersectionRect")}}{{ReadOnlyInline}}
  - : A {{domxref("DOMRectReadOnly")}} which is the rectangle of the element within the viewport.
- {{domxref("PerformanceElementTiming.loadTime")}}{{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} with the loadTime of the element.
- {{domxref("PerformanceElementTiming.naturalHeight")}}{{ReadOnlyInline}}
  - : An unsigned 32-bit integer (unsigned long) which is the intrinsic height of the image if this is applied to an image, 0 for text.
- {{domxref("PerformanceElementTiming.naturalWidth")}}{{ReadOnlyInline}}
  - : An unsigned 32-bit integer (unsigned long) which is the intrinsic width of the image if this is applied to an image, 0 for text.
- {{domxref("PerformanceElementTiming.renderTime")}}{{ReadOnlyInline}}
  - : A {{domxref("DOMHighResTimeStamp")}} with the renderTime of the element.
- {{domxref("PerformanceElementTiming.url")}}{{ReadOnlyInline}}
  - : A {{domxref("DOMString")}} which is the initial URL of the resources request for images, 0 for text.

## Methods

- {{domxref("PerformanceElementTiming.toJSON()")}}
  - : Generates a JSON description of the object.

## Examples

In this example we have two elements which are being observed. We use the {{domxref("PerformanceObserver")}} interface to create a list of performance measurement events. In our case observing the {{domxref("PerformanceEntry.entrytype")}} `element` in order to use the `PerformanceElementTiming` interface.

Two entries will be output to the console. The first containing details of the image, the second with details of the text node.

```html
<img src="image.jpg" elementtiming="big-image">
<p elementtiming="text" id="text-id">text here</p>
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach(function (entry) {
      console.log(entry);
  });
});
observer.observe({ entryTypes: ["element"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

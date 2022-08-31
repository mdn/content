---
title: PerformanceElementTiming
slug: Web/API/PerformanceElementTiming
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - PerformanceElementTiming
  - Experimental
browser-compat: api.PerformanceElementTiming
---
{{APIRef("Element Timing")}}{{SeeCompatTable}}

The **`PerformanceElementTiming`** interface of the {{domxref('Element Timing API','','',' ')}} reports timing information on a specific element identified by the page author. For example it could report timing information about the main image in an article.

{{InheritanceDiagram}}

## Properties

- {{domxref("PerformanceElementTiming.element")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An {{domxref("Element")}} representing the element we are returning information about.
- {{domxref("PerformanceElementTiming.id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string which is the {{htmlattrxref("id")}} of the element.
- {{domxref("PerformanceElementTiming.identifier")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string which is the value of the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/for) attribute on the element.
- {{domxref("PerformanceElementTiming.intersectionRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("DOMRectReadOnly")}} which is the rectangle of the element within the viewport.
- {{domxref("PerformanceElementTiming.loadTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("DOMHighResTimeStamp")}} with the loadTime of the element.
- {{domxref("PerformanceElementTiming.naturalHeight")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An unsigned 32-bit integer (unsigned long) which is the intrinsic height of the image if this is applied to an image, 0 for text.
- {{domxref("PerformanceElementTiming.naturalWidth")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An unsigned 32-bit integer (unsigned long) which is the intrinsic width of the image if this is applied to an image, 0 for text.
- {{domxref("PerformanceElementTiming.renderTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("DOMHighResTimeStamp")}} with the renderTime of the element.
- {{domxref("PerformanceElementTiming.url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string which is the initial URL of the resources request for images, 0 for text.

## Methods

- {{domxref("PerformanceElementTiming.toJSON()")}} {{Experimental_Inline}}
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
  list.getEntries().forEach((entry) => {
      console.log(entry);
  });
});
observer.observe({ entryTypes: ["element"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

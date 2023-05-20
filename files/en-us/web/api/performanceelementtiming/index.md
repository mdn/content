---
title: PerformanceElementTiming
slug: Web/API/PerformanceElementTiming
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PerformanceElementTiming
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`PerformanceElementTiming`** interface contains render timing information for image and text node elements the developer annotated with an [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute for observation.

## Description

The aim of the Element Timing API is to give web developers or analytics tools the ability to measure rendering timestamps of critical elements on a page.

The API supports timing information on the following elements:

- {{htmlelement("img")}} elements,
- {{SVGElement("image")}} elements inside an {{SVGElement("svg")}},
- [poster](/en-US/docs/Web/HTML/Element/video#poster) images of {{htmlelement("video")}} elements,
- elements which have a {{cssxref("background-image")}}, and
- groups of text nodes, such as a {{htmlelement("p")}}.

The author flags an element for observation by adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute on the element.

`PerformanceElementTiming` inherits from {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instance properties

This interface extends the following {{domxref("PerformanceEntry")}} properties for event timing performance entry types by qualifying them as follows:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `0` as `duration` does not apply to this interface.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Always returns `"element"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `"image-paint"` for images and `"text-paint"` for text.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the value of this entry's {{domxref("PerformanceElementTiming.renderTime", "renderTime")}} if it is not `0`, otherwise the value of this entry's {{domxref("PerformanceElementTiming.loadTime", "loadTime")}}.

This interface also supports the following properties:

- {{domxref("PerformanceElementTiming.element")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An {{domxref("Element")}} representing the element we are returning information about.
- {{domxref("PerformanceElementTiming.id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A string which is the [`id`](/en-US/docs/Web/HTML/Global_attributes#id) of the element.
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

## Instance methods

- {{domxref("PerformanceElementTiming.toJSON()")}} {{Experimental_Inline}}
  - : Returns a JSON representation of the `PerformanceElementTiming` object.

## Examples

### Observing render time of specific elements

In this example two elements are being observed by adding the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute. A {{domxref("PerformanceObserver")}} is registered to get all performance entries of type `"element"` and the `buffered` flag is used to access data from before observer creation.

```html
<img src="image.jpg" elementtiming="big-image" />
<p elementtiming="text" id="text-id">text here</p>
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});
observer.observe({ type: "element", buffered: true });
```

Two entries will be output to the console. The first containing details of the image, the second with details of the text node.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) HTML attribute

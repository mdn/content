---
title: "IntersectionObserver: root property"
short-title: root
slug: Web/API/IntersectionObserver/root
page-type: web-api-instance-property
browser-compat: api.IntersectionObserver.root
---

{{APIRef("Intersection Observer API")}}

The {{domxref("IntersectionObserver")}} interface's read-only
**`root`** property identifies the {{domxref("Element")}} or
{{domxref("Document")}} whose bounds are treated as the {{Glossary("bounding box")}}
of the {{Glossary("viewport")}} for the element which is the observer's target.

If the `root` is `null`, then the bounds of the actual document
viewport are used.

## Value

A {{domxref("Element")}} or {{domxref("Document")}} object whose bounding box is used
as the bounds of the viewport for the purposes of determining how much of the target
element is visible. The intersection of this bounding rectangle, offset by any margins
specified in the options passed to the
{{domxref("IntersectionObserver.IntersectionObserver", "IntersectionObserver()")}}
constructor, the target element's bounds, minus the bounds of every element or other
object which overlaps the target element, is considered to be the visible area of the
target element.

If `root` is `null`, then the owning document is used as the
root, and the bounds its viewport (that is, the visible area of the document) are used
as the root bounds.

## Examples

This example sets the {{cssxref("border")}} of the intersection observer's root element
to be a 2-pixel medium green line.

```js
observer.root.style.border = "2px solid #44aa44";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Timing element visibility with the Intersection Observer API](/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)

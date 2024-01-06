---
title: "HTMLImageElement: align property"
short-title: align
slug: Web/API/HTMLImageElement/align
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLImageElement.align
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The _obsolete_ **`align`**
property of the {{domxref("HTMLImageElement")}} interface is a string which indicates
how to position the image relative to its container.

You should instead use the
CSS property {{cssxref("vertical-align")}}, which does in fact also work on images
despite its name. You can also use the {{cssxref("float")}} property to float the image
to the left or right margin.

The `align` property reflects the HTML [`align`](/en-US/docs/Web/HTML/Element/img#align)
content attribute.

## Value

A string specifying one of the following strings which set the
alignment mode for the image.

### Baseline alignment

These three values specify the alignment of the element relative to the text baseline.
These should be replaced by using the CSS {{cssxref("vertical-align")}} property.

- `bottom`
  - : The bottom edge of the image is to be aligned vertically with the current text
    baseline. **Default value.**
- `middle`
  - : The center of the object should be aligned vertically with the current baseline.
- `top`
  - : The top edge of the object should be aligned vertically with the current baseline.

It may be worth noting that {{cssxref("vertical-align")}} offers several additional
options for its value; you may wish to consider these when changing your code to use it.

### Floating images horizontally

The `left` and `right` properties don't affect the
baseline-relative alignment. Instead, they cause the image to "float" to the left or
right margin, allowing the following text to flow around the image. You should instead
use the CSS {{cssxref("float")}} property, specifying as the value
either `left` or `right`.

- `left`
  - : Floats the image over to place the left edge flush against the current margin. Any
    text that follows will flow against the image's right edge.
- `right`
  - : Floats the image to place its right edge flush against the right margin. Subsequent
    text will flow along the image's left edge.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

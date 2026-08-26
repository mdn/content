---
title: "HTMLImageElement: vspace property"
short-title: vspace
slug: Web/API/HTMLImageElement/vspace
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.HTMLImageElement.vspace
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

The _deprecated_ **`vspace`** property of the {{domxref("HTMLImageElement")}} interface specifies the number of pixels of empty space to leave empty on the top and bottom sides of the {{HTMLElement("img")}} element when laying out the page. It reflects the `<img>` element's [`vspace`](/en-US/docs/Web/HTML/Reference/Elements/img#vspace) content attribute.

You should instead use the CSS property {{cssxref("margin")}} or its longhand properties to establish margin space around an image.

## Value

An integer value specifying the height, in pixels, of the vertical margin to apply to the top and bottom sides of the image.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("margin")}}
- {{domxref("HTMLImageElement.hspace")}}

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

The _obsolete_ **`vspace`** property of the
{{domxref("HTMLImageElement")}} interface specifies the number of pixels of empty space
to leave empty on the top and bottom of the {{HTMLElement("img")}} element when laying
out the page.

## Value

An integer value specifying the height, in pixels, of the vertical margin to apply to
the top and bottom sides of the image.

## Usage notes

The value specified for `vspace` is mapped to the {{cssxref("margin-top")}}
and {{cssxref("margin-bottom")}} properties to specify the height of those margins in
pixels.

> **Warning:** This property is obsolete. You should instead use the CSS
> {{cssxref("margin")}} property and its longhand forms to establish margins around
> an `<img>`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: HTMLImageElement.hspace
slug: Web/API/HTMLImageElement/hspace
page-type: web-api-instance-property
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLImageElement
  - Horizontal
  - Image
  - Layout
  - Property
  - Reference
  - hspace
  - img
  - left
  - margin
  - right
  - spacing
  - Deprecated
browser-compat: api.HTMLImageElement.hspace
---
{{APIRef("HTML DOM")}}{{deprecated_header}}

The
*obsolete* **`hspace`** property of the
{{domxref("HTMLImageElement")}} interface specifies the number of pixels of empty
space to leave empty on the left and right sides of the {{HTMLElement("img")}} element
when laying out the page.

This property reflects the {{Glossary("HTML")}} {{htmlattrxref("hspace", "img")}}
attribute.

## Value

An integer value specifying the width, in pixels, of the horizontal margin to apply to
the left and right sides of the image.

## Usage notes

The value specified for `hspace` is mapped to the {{cssxref("margin-left")}}
and {{cssxref("margin-right")}} properties to specify the width of those margins in
pixels.

> **Warning:** This property is obsolete. You should instead use the CSS
> {{cssxref("margin")}} property and its longhand forms to establish margins around
> an `<img>`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

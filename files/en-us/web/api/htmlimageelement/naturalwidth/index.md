---
title: HTMLImageElement.naturalWidth
slug: Web/API/HTMLImageElement/naturalWidth
page-type: web-api-instance-property
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLImageElement
  - Intrinsic Width
  - Intrinsic size
  - Property
  - Reference
  - naturalWidth
  - size
  - width
browser-compat: api.HTMLImageElement.naturalWidth
---
{{APIRef("HTML DOM")}}

The {{domxref("HTMLImageElement")}} interface's read-only
**`naturalWidth`** property returns the intrinsic (natural),
density-corrected width of the image in {{Glossary("CSS pixel", "CSS
    pixels")}}.

This is the width the image is if drawn with nothing constraining
its width; if you neither specify a width for the image nor place the image inside a
container that limits or expressly specifies the image width, this is the number of CSS
pixels wide the image will be.

The corresponding {{domxref("HTMLImageElement.naturalHeight", "naturalHeight")}} method
returns the natural height of the image.

> **Note:** Most of the time the natural width is the actual width of the image sent by the server.
> Nevertheless, browsers can modify an image before pushing it to the renderer. For example, Chrome
> [degrades the resolution of images on low-end devices](https://bugs.chromium.org/p/chromium/issues/detail?id=1187043#c7). In such cases, `naturalWidth` will consider the width of the image modified
> by such browser interventions as the natural width, and returns this value.

## Value

An integer value indicating the intrinsic width of the image, in CSS pixels. This is
the width at which the image is naturally drawn when no constraint or specific value is
established for the image. This natural width is corrected for the pixel density of the
device on which it's being presented, unlike the value of
{{domxref("HTMLImageElement.width", "width")}}.

If the intrinsic width is not available—either because the image does not specify an
intrinsic width or because the image data is not available in order to obtain this
information, `naturalWidth` returns 0.

## Examples

See [`HTMLImageElement.naturalHeight`](/en-US/docs/Web/API/HTMLImageElement/naturalHeight#example) for example code that displays an image in both its natural "density-adjusted" size, and in its rendered size as altered by the page's CSS and other factors.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: ImageBitmap
slug: Web/API/ImageBitmap
page-type: web-api-interface
tags:
  - API
  - Canvas
  - ImageBitmap
  - Interface
  - Reference
browser-compat: api.ImageBitmap
---
{{APIRef("Canvas API")}}

The **`ImageBitmap`** interface represents a bitmap image which can be drawn to a {{HTMLElement("canvas")}} without undue latency. It can be created from a variety of source objects using the {{domxref("createImageBitmap()")}} factory method. `ImageBitmap` provides an asynchronous and resource efficient pathway to prepare textures for rendering in WebGL.

`ImageBitmap` is a {{glossary("Transferable objects","transferable object")}}.

## Properties

- {{domxref("ImageBitmap.height")}} {{ReadOnlyInline}}
  - : An `unsigned` `long` representing the height, in CSS pixels, of the `ImageData`.
- {{domxref("ImageBitmap.width")}} {{ReadOnlyInline}}
  - : An `unsigned` `long` representing the width, in CSS pixels, of the `ImageData`.

## Methods

- {{domxref("ImageBitmap.close()")}}
  - : Disposes of all graphical resources associated with an `ImageBitmap`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("createImageBitmap()")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("OffScreenCanvas.transferToImageBitmap()")}}

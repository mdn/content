---
title: ImageDecoder
slug: Web/API/ImageDecoder
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - ImageDecoder
browser-compat: api.ImageDecoder
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`ImageDecoder`** interface of the {{domxref('WebCodecs API','','','true')}} provides a way to unpack and decode encoded image data.

## Constructor

- {{domxref("ImageDecoder.ImageDecoder", "ImageDecoder()")}}
  - : Creates a new `ImageDecoder` object.

## Properties

- {{domxref("ImageDecoder.complete")}}{{ReadOnlyInline}}
  - : Returns a {{jsxref("boolean")}} indicating whether the data is completely buffered.
- {{domxref("ImageDecoder.completed")}}{{ReadOnlyInline}}
  - : Returns a {{jsxref("Promise")}} that resolves once `complete` is true.
- {{domxref("ImageDecoder.tracks")}}{{ReadOnlyInline}}
  - : Returns an {{domxref("ImageTrackList")}} object listing the available tracks and providing a method for selecting a track to decode.
- {{domxref("ImageDecoder.type")}}{{ReadOnlyInline}}
  - : Returns a {{jsxref("DOMString")}} reflecting the [mime type](https://en.wikipedia.org/wiki/Media_type) configured during construction.

## Methods

- {{domxref("ImageDecoder.close()")}}
  - : Ends all pending work and releases system resources.
- {{domxref("ImageDecoder.decode()")}}
  - : Enqueues a control message to decode the frame of an image.
- {{domxref("ImageDecoder.isTypeSupported()")}}
  - : Indicates if the provided [mime type](https://en.wikipedia.org/wiki/Media_type) is supported for unpacking and decoding.
- {{domxref("ImageDecoder.reset()")}}
  - : Resets all states including configuration, control messages in the control message queue, and all pending callbacks.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

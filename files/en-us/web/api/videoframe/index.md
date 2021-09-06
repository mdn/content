---
title: VideoFrame
slug: Web/API/VideoFrame
tags:
  - API
  - Interface
  - Reference
  - VideoFrame
browser-compat: api.VideoFrame
---
{{DefaultAPISidebar("Web Codecs API")}}

The **`VideoFrame`** interface of the {{domxref('Web Codecs API','','',' ')}}

## Description


## Constructor

- {{domxref("VideoFrame.VideoFrame()")}}
  - : Creates a new `VideoFrame` object.

## Properties

- {{domxref("VideoFrame.format")}}{{ReadOnlyInline}}
  - : Returns the pixel format of the `VideoFrame`.
- {{domxref("VideoFrame.codedWidth")}}{{ReadOnlyInline}}
  - : Returns the width of the `VideoFrame` in pixels, potentionally including non-visible padding, and prior to considering potential ratio adjustments.
- {{domxref("VideoFrame.codedHeight")}}{{ReadOnlyInline}}
  - : Returns the height of the `VideoFrame` in pixels, potentionally including non-visible padding, and prior to considering potential ratio adjustments.
- {{domxref("VideoFrame.codedRect")}}{{ReadOnlyInline}}
  - : Returns a {{domxref("DOMRectReadOnly")}} with the width and height matching `codedWidth` and `codedHeight`.
- {{domxref("VideoFrame.visibleRect")}}{{ReadOnlyInline}}
  - : Returns a {{domxref("DOMRectReadOnly")}} describing the visible rectangle of pixels for this `VideoFrame`.
- {{domxref("VideoFrame.displayWidth")}}{{ReadOnlyInline}}
  - : Returns the width of the `VideoFrame` when displayed after applying aspect ratio adjustments.
- {{domxref("VideoFrame.displayHeight")}}{{ReadOnlyInline}}
  - : Returns the height of the `VideoFrame` when displayed after applying aspect ratio adjustments.
- {{domxref("VideoFrame.duration")}}{{ReadOnlyInline}}
  - : Returns the duration of the audio in microseconds.
- {{domxref("VideoFrame.timestamp")}}{{ReadOnlyInline}}
  - : Returns the timestamp of the audio in microseconds.
- {{domxref("VideoFrame.colorSpace")}}{{ReadOnlyInline}}
  - :

## Methods

- {{domxref("VideoFrame.allocationSize()")}}
  - : Returns the number of bytes required to hold the sample as filtered by options passed into the method.
- {{domxref("VideoFrame.clone()")}}
  - : Creates a new `VideoFrame` object with reference to the same media resource as the original.
- {{domxref("VideoFrame.close()")}}
  - : Clears all states and releases the reference to the media resource.



## Examples


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


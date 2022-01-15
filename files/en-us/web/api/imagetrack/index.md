---
title: ImageTrack
slug: Web/API/ImageTrack
tags:
  - API
  - Interface
  - Reference
  - ImageTrack
browser-compat: api.ImageTrack
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`ImageTrack`** interface of the {{domxref('WebCodecs API','','','true')}} represents an individual image track.

## Properties

- {{domxref("ImageTrack.animated")}}{{ReadOnlyInline}}
  - : Returns a {{jsxref("boolean")}} indicating whether the track is animated and therefore has multiple frames.
- {{domxref("ImageTrack.frameCount")}}{{ReadOnlyInline}}
  - : Returns an integer indicating the number of frames in the track.
- {{domxref("ImageTrack.repetitionCount")}}{{ReadOnlyInline}}
  - : Returns an integer indicating the number of times that the animation repeats.
- {{domxref("ImageTrack.selected")}}{{ReadOnlyInline}}
  - : Returns a {{jsxref("boolean")}} indicating whether the track is selected for decoding.

### Event handlers

- {{domxref("ImageTrack.onchange")}}
  - : An event handler fired at the `ImageTrack` when the {{domxref("ImageTrack.frameCount","frameCount")}} is altered.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


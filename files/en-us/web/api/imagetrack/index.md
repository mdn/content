---
title: ImageTrack
slug: Web/API/ImageTrack
page-type: web-api-interface
browser-compat: api.ImageTrack
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`ImageTrack`** interface of the {{domxref('WebCodecs API','','','true')}} represents an individual image track.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("ImageTrack.animated")}} {{ReadOnlyInline}}
  - : Returns a {{jsxref("boolean")}} indicating whether the track is animated and therefore has multiple frames.
- {{domxref("ImageTrack.frameCount")}} {{ReadOnlyInline}}
  - : Returns an integer indicating the number of frames in the track.
- {{domxref("ImageTrack.repetitionCount")}} {{ReadOnlyInline}}
  - : Returns an integer indicating the number of times that the animation repeats.
- {{domxref("ImageTrack.selected")}} {{ReadOnlyInline}}
  - : Returns a {{jsxref("boolean")}} indicating whether the track is selected for decoding.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

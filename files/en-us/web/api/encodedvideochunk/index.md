---
title: EncodedVideoChunk
slug: Web/API/EncodedVideoChunk
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - EncodedVideoChunk
  - Experimental
browser-compat: api.EncodedVideoChunk
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`EncodedVideoChunk`** interface of the {{domxref('WebCodecs API','','',' ')}} represents a chunk of encoded video data.

## Constructor

- {{domxref("EncodedVideoChunk.EncodedVideoChunk", "EncodedVideoChunk()")}} {{Experimental_Inline}}
  - : Creates a new `EncodedVideoChunk` object.

## Instance properties

- {{domxref("EncodedVideoChunk.type")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string indicating whether this chunk of data is a key chunk.
- {{domxref("EncodedVideoChunk.timestamp")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an integer representing the timestamp of the video in microseconds.
- {{domxref("EncodedVideoChunk.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an integer representing the duration of the video in microseconds.
- {{domxref("EncodedVideoChunk.byteLength")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an integer representing the length of the video in bytes.

## Instance methods

- {{domxref("EncodedVideoChunk.copyTo()")}} {{Experimental_Inline}}
  - : Copies the encoded video data.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

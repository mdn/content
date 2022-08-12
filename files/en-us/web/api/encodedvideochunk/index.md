---
title: EncodedVideoChunk
slug: Web/API/EncodedVideoChunk
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - EncodedVideoChunk
browser-compat: api.EncodedVideoChunk
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`EncodedVideoChunk`** interface of the {{domxref('WebCodecs API','','',' ')}} represents a chunk of encoded video data.

## Constructor

- {{domxref("EncodedVideoChunk.EncodedVideoChunk", "EncodedVideoChunk()")}}
  - : Creates a new `EncodedVideoChunk` object.

## Properties

- {{domxref("EncodedVideoChunk.type")}} {{ReadOnlyInline}}
  - : Returns a string indicating whether this chunk of data is a key chunk.
- {{domxref("EncodedVideoChunk.timestamp")}} {{ReadOnlyInline}}
  - : Returns an integer representing the timestamp of the video in microseconds.
- {{domxref("EncodedVideoChunk.duration")}} {{ReadOnlyInline}}
  - : Returns an integer representing the duration of the video in microseconds.
- {{domxref("EncodedVideoChunk.byteLength")}} {{ReadOnlyInline}}
  - : Returns an integer representing the length of the video in bytes.

## Methods

- {{domxref("EncodedVideoChunk.copyTo()")}}
  - : Copies the encoded video data.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

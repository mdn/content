---
title: EncodedAudioChunk
slug: Web/API/EncodedAudioChunk
tags:
  - API
  - Interface
  - Reference
  - EncodedAudioChunk
browser-compat: api.EncodedAudioChunk
---
{{DefaultAPISidebar("WebCodecs API")}}

The **`EncodedAudioChunk`** interface of the {{domxref('WebCodecs API','','',' ')}} represents a chunk of encoded audio data.

## Constructor

- {{domxref("EncodedAudioChunk.EncodedAudioChunk()")}}
  - : Creates a new `EncodedAudioChunk` object.

## Properties

- {{domxref("EncodedAudioChunk.type")}}{{ReadOnlyInline}}
  - : Returns a string indicating whether this chunk of data is a key chunk.
- {{domxref("EncodedAudioChunk.timestamp")}}{{ReadOnlyInline}}
  - : Returns an integer representing the timestamp of the audio in microseconds.
- {{domxref("EncodedAudioChunk.duration")}}{{ReadOnlyInline}}
  - : Returns an integer representing the duration of the audio in microseconds.
- {{domxref("EncodedAudioChunk.byteLength")}}{{ReadOnlyInline}}
  - : Returns an integer representing the length of the audio in bytes.


## Methods

- {{domxref("EncodedAudioChunk.copyTo()")}}
  - : Copies the encoded audio data.
## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


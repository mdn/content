---
title: EncodedAudioChunk
slug: Web/API/EncodedAudioChunk
page-type: web-api-interface
status:
  - experimental
browser-compat: api.EncodedAudioChunk
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`EncodedAudioChunk`** interface of the {{domxref('WebCodecs API','','',' ')}} represents a chunk of encoded audio data.

## Constructor

- {{domxref("EncodedAudioChunk.EncodedAudioChunk", "EncodedAudioChunk()")}} {{Experimental_Inline}}
  - : Creates a new `EncodedAudioChunk` object.

## Instance properties

- {{domxref("EncodedAudioChunk.type")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a string indicating whether this chunk of data is a key chunk.
- {{domxref("EncodedAudioChunk.timestamp")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an integer representing the timestamp of the audio in microseconds.
- {{domxref("EncodedAudioChunk.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an integer representing the duration of the audio in microseconds.
- {{domxref("EncodedAudioChunk.byteLength")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an integer representing the length of the audio in bytes.

## Instance methods

- {{domxref("EncodedAudioChunk.copyTo()")}} {{Experimental_Inline}}
  - : Copies the encoded audio data.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

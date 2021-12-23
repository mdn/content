---
title: AudioDecoder
slug: Web/API/AudioDecoder
tags:
  - API
  - Interface
  - Reference
  - AudioDecoder
browser-compat: api.AudioDecoder
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`AudioDecoder`** interface of the {{domxref('WebCodecs API','','',' ')}} decodes chunks of audio.

## Constructor

- {{domxref("AudioDecoder.AudioDecoder()")}}
  - : Creates a new `AudioDecoder` object.

## Properties

- {{domxref("AudioDecoder.decodeQueueSize")}}{{ReadOnlyInline}}
  - : An integer representing the number of decode queue requests.
- {{domxref("AudioDecoder.state")}}{{ReadOnlyInline}}
  - : Represents the state of the underlying codec and whether it is configured for decoding.

## Methods

- {{domxref("AudioDecoder.configure()")}}
  - : Enqueues a control message to configure the audio decoder for decoding chunks.
- {{domxref("AudioDecoder.decode()")}}
  - : Enqueues a control message to decode a given chunk of audio.
- {{domxref("AudioDecoder.flush()")}}
  - : Returns a promise that resolves once all pending messages in the queue have been completed.
- {{domxref("AudioDecoder.reset()")}}
  - : Resets all states including configuration, control messages in the control message queue, and all pending callbacks.
- {{domxref("AudioDecoder.close()")}}
  - : Ends all pending work and releases system resources.


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}


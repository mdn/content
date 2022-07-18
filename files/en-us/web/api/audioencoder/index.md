---
title: AudioEncoder
slug: Web/API/AudioEncoder
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - AudioEncoder
browser-compat: api.AudioEncoder
---
{{APIRef("WebCodecs API")}}
The **`AudioEncoder`** interface of the [WebCodecs API](/en-US/docs/Web/API/WebCodecs_API) encodes {{domxref("AudioData")}} objects.

## Constructor

- {{domxref("AudioEncoder.AudioEncoder", "AudioEncoder()")}}
  - : Creates a new `AudioEncoder` object.

## Properties

- {{domxref("AudioEncoder.encodeQueueSize")}} {{ReadOnlyInline}}
  - : An integer representing the number of encode queue requests.
- {{domxref("AudioEncoder.state")}} {{ReadOnlyInline}}
  - : Represents the state of the underlying codec and whether it is configured for encoding.

## Methods

- {{domxref("AudioEncoder.configure()")}}
  - : Enqueues a control message to configure the audio encoder for encoding chunks.
- {{domxref("AudioEncoder.encode()")}}
  - : Enqueues a control message to encode a given {{domxref("AudioData")}} objects.
- {{domxref("AudioEncoder.flush()")}}
  - : Returns a promise that resolves once all pending messages in the queue have been completed.
- {{domxref("AudioEncoder.reset()")}}
  - : Resets all states including configuration, control messages in the control message queue, and all pending callbacks.
- {{domxref("AudioEncoder.close()")}}
  - : Ends all pending work and releases system resources.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

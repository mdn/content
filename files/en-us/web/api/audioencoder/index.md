---
title: AudioEncoder
slug: Web/API/AudioEncoder
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - AudioEncoder
  - Experimental
browser-compat: api.AudioEncoder
---
{{APIRef("WebCodecs API")}}{{SeeCompatTable}}
The **`AudioEncoder`** interface of the [WebCodecs API](/en-US/docs/Web/API/WebCodecs_API) encodes {{domxref("AudioData")}} objects.

## Constructor

- {{domxref("AudioEncoder.AudioEncoder", "AudioEncoder()")}} {{Experimental_Inline}}
  - : Creates a new `AudioEncoder` object.

## Properties

- {{domxref("AudioEncoder.encodeQueueSize")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An integer representing the number of encode queue requests.
- {{domxref("AudioEncoder.state")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Represents the state of the underlying codec and whether it is configured for encoding.

## Methods

- {{domxref("AudioEncoder.configure()")}} {{Experimental_Inline}}
  - : Enqueues a control message to configure the audio encoder for encoding chunks.
- {{domxref("AudioEncoder.encode()")}} {{Experimental_Inline}}
  - : Enqueues a control message to encode a given {{domxref("AudioData")}} objects.
- {{domxref("AudioEncoder.flush()")}} {{Experimental_Inline}}
  - : Returns a promise that resolves once all pending messages in the queue have been completed.
- {{domxref("AudioEncoder.reset()")}} {{Experimental_Inline}}
  - : Resets all states including configuration, control messages in the control message queue, and all pending callbacks.
- {{domxref("AudioEncoder.close()")}} {{Experimental_Inline}}
  - : Ends all pending work and releases system resources.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

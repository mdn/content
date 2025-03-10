---
title: AudioEncoder
slug: Web/API/AudioEncoder
page-type: web-api-interface
browser-compat: api.AudioEncoder
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`AudioEncoder`** interface of the [WebCodecs API](/en-US/docs/Web/API/WebCodecs_API) encodes {{domxref("AudioData")}} objects.

{{InheritanceDiagram}}

## Constructor

- {{domxref("AudioEncoder.AudioEncoder", "AudioEncoder()")}}
  - : Creates a new `AudioEncoder` object.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("AudioEncoder.encodeQueueSize")}} {{ReadOnlyInline}}
  - : An integer representing the number of encode queue requests.
- {{domxref("AudioEncoder.state")}} {{ReadOnlyInline}}
  - : Represents the state of the underlying codec and whether it is configured for encoding.

### Events

- {{domxref("AudioEncoder.dequeue_event", "dequeue")}}
  - : Fires to signal a decrease in {{domxref("AudioEncoder.encodeQueueSize")}}.

## Static methods

- {{domxref("AudioEncoder.isConfigSupported_static", "AudioEncoder.isConfigSupported()")}}
  - : Returns a promise indicating whether the provided `AudioEncoderConfig` is supported.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("EventTarget")}}._

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

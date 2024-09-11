---
title: AudioDecoder
slug: Web/API/AudioDecoder
page-type: web-api-interface
browser-compat: api.AudioDecoder
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`AudioDecoder`** interface of the {{domxref('WebCodecs API','','',' ')}} decodes chunks of audio.

{{InheritanceDiagram}}

## Constructor

- {{domxref("AudioDecoder.AudioDecoder", "AudioDecoder()")}}
  - : Creates a new `AudioDecoder` object.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("AudioDecoder.decodeQueueSize")}} {{ReadOnlyInline}}
  - : An integer representing the number of decode queue requests.
- {{domxref("AudioDecoder.state")}} {{ReadOnlyInline}}
  - : Represents the state of the underlying codec and whether it is configured for decoding.

### Events

- {{domxref("AudioDecoder.dequeue_event", "dequeue")}}
  - : Fires to signal a decrease in {{domxref("AudioDecoder.decodeQueueSize")}}.

## Static methods

- {{domxref("AudioDecoder/isConfigSupported_static", "AudioDecoder.isConfigSupported()")}}
  - : Returns a promise indicating whether the provided `AudioDecoderConfig` is supported.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("EventTarget")}}._

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

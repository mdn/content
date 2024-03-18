---
title: AudioDecoder
slug: Web/API/AudioDecoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AudioDecoder
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`AudioDecoder`** interface of the {{domxref('WebCodecs API','','',' ')}} decodes chunks of audio.

{{InheritanceDiagram}}

## Constructor

- {{domxref("AudioDecoder.AudioDecoder", "AudioDecoder()")}} {{Experimental_Inline}}
  - : Creates a new `AudioDecoder` object.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("AudioDecoder.decodeQueueSize")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : An integer representing the number of decode queue requests.
- {{domxref("AudioDecoder.state")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Represents the state of the underlying codec and whether it is configured for decoding.

### Events

- {{domxref("AudioDecoder.dequeue_event", "dequeue")}} {{Experimental_Inline}}
  - : Fires to signal a decrease in {{domxref("AudioDecoder.decodeQueueSize")}}.

## Static methods

- {{domxref("AudioDecoder/isConfigSupported_static", "AudioDecoder.isConfigSupported()")}} {{Experimental_Inline}}
  - : Returns a promise indicating whether the provided `AudioDecoderConfig` is supported.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("AudioDecoder.configure()")}} {{Experimental_Inline}}
  - : Enqueues a control message to configure the audio decoder for decoding chunks.
- {{domxref("AudioDecoder.decode()")}} {{Experimental_Inline}}
  - : Enqueues a control message to decode a given chunk of audio.
- {{domxref("AudioDecoder.flush()")}} {{Experimental_Inline}}
  - : Returns a promise that resolves once all pending messages in the queue have been completed.
- {{domxref("AudioDecoder.reset()")}} {{Experimental_Inline}}
  - : Resets all states including configuration, control messages in the control message queue, and all pending callbacks.
- {{domxref("AudioDecoder.close()")}} {{Experimental_Inline}}
  - : Ends all pending work and releases system resources.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

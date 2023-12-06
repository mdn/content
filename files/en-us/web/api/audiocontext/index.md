---
title: AudioContext
slug: Web/API/AudioContext
page-type: web-api-interface
browser-compat: api.AudioContext
---

{{APIRef("Web Audio API")}}

The `AudioContext` interface represents an audio-processing graph built from audio modules linked together, each represented by an {{domxref("AudioNode")}}.

An audio context controls both the creation of the nodes it contains and the execution of the audio processing, or decoding. You need to create an `AudioContext` before you do anything else, as everything happens inside a context. It's recommended to create one AudioContext and reuse it instead of initializing a new one each time, and it's OK to use a single `AudioContext` for several different audio sources and pipeline concurrently.

{{InheritanceDiagram}}

## Constructor

- {{domxref("AudioContext.AudioContext", "AudioContext()")}}
  - : Creates and returns a new `AudioContext` object.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("BaseAudioContext")}}._

- {{domxref("AudioContext.baseLatency")}} {{ReadOnlyInline}}
  - : Returns the number of seconds of processing latency incurred by the {{domxref("AudioContext")}} passing the audio from the {{domxref("AudioDestinationNode")}} to the audio subsystem.
- {{domxref("AudioContext.outputLatency")}} {{ReadOnlyInline}}
  - : Returns an estimation of the output latency of the current audio context.
- {{domxref("AudioContext.sinkId")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the sink ID of the current output audio device.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("BaseAudioContext")}}._

- {{domxref("AudioContext.close()")}}
  - : Closes the audio context, releasing any system audio resources that it uses.
- {{domxref("AudioContext.createMediaElementSource()")}}
  - : Creates a {{domxref("MediaElementAudioSourceNode")}} associated with an {{domxref("HTMLMediaElement")}}. This can be used to play and manipulate audio from {{HTMLElement("video")}} or {{HTMLElement("audio")}} elements.
- {{domxref("AudioContext.createMediaStreamSource()")}}
  - : Creates a {{domxref("MediaStreamAudioSourceNode")}} associated with a {{domxref("MediaStream")}} representing an audio stream which may come from the local computer microphone or other sources.
- {{domxref("AudioContext.createMediaStreamDestination()")}}
  - : Creates a {{domxref("MediaStreamAudioDestinationNode")}} associated with a {{domxref("MediaStream")}} representing an audio stream which may be stored in a local file or sent to another computer.
- {{domxref("AudioContext.createMediaStreamTrackSource()")}}
  - : Creates a {{domxref("MediaStreamTrackAudioSourceNode")}} associated with a {{domxref("MediaStream")}} representing an media stream track.
- {{domxref("AudioContext.getOutputTimestamp()")}}
  - : Returns a new `AudioTimestamp` object containing two audio timestamp values relating to the current audio context.
- {{domxref("AudioContext.resume()")}}
  - : Resumes the progression of time in an audio context that has previously been suspended/paused.
- {{domxref("AudioContext.setSinkId()")}} {{Experimental_Inline}}
  - : Sets the output audio device for the `AudioContext`.
- {{domxref("AudioContext.suspend()")}}
  - : Suspends the progression of time in the audio context, temporarily halting audio hardware access and reducing CPU/battery usage in the process.

## Events

- {{domxref("AudioContext/sinkchange_event", "sinkchange")}} {{Experimental_Inline}}
  - : Fired when the output audio device (and therefore, the {{domxref("AudioContext.sinkId")}}) has changed.

## Examples

Basic audio context declaration:

```js
const audioCtx = new AudioContext();

const oscillatorNode = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();
const finish = audioCtx.destination;
// etc.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("OfflineAudioContext")}}

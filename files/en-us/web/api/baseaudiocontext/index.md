---
title: BaseAudioContext
slug: Web/API/BaseAudioContext
page-type: web-api-interface
browser-compat: api.BaseAudioContext
---

{{APIRef("Web Audio API")}}

The `BaseAudioContext` interface of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) acts as a base definition for online and offline audio-processing graphs, as represented by {{domxref("AudioContext")}} and {{domxref("OfflineAudioContext")}} respectively. You wouldn't use `BaseAudioContext` directly — you'd use its features via one of these two inheriting interfaces.

A `BaseAudioContext` can be a target of events, therefore it implements the {{domxref("EventTarget")}} interface.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("BaseAudioContext.audioWorklet")}} {{ReadOnlyInline}} {{securecontext_inline}}
  - : Returns the {{domxref("AudioWorklet")}} object, which can be used to create and manage {{domxref("AudioNode")}}s in which JavaScript code implementing the {{domxref("AudioWorkletProcessor")}} interface are run in the background to process audio data.
- {{domxref("BaseAudioContext.currentTime")}} {{ReadOnlyInline}}
  - : Returns a double representing an ever-increasing hardware time in seconds used for scheduling. It starts at `0`.
- {{domxref("BaseAudioContext.destination")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("AudioDestinationNode")}} representing the final destination of all audio in the context. It can be thought of as the audio-rendering device.
- {{domxref("BaseAudioContext.listener")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("AudioListener")}} object, used for 3D spatialization.
- {{domxref("BaseAudioContext.sampleRate")}} {{ReadOnlyInline}}
  - : Returns a float representing the sample rate (in samples per second) used by all nodes in this context. The sample-rate of an {{domxref("AudioContext")}} cannot be changed.
- {{domxref("BaseAudioContext.state")}} {{ReadOnlyInline}}
  - : Returns the current state of the `AudioContext`.

## Instance methods

_Also implements methods from the interface_ {{domxref("EventTarget")}}.

- {{domxref("BaseAudioContext.createAnalyser()")}}
  - : Creates an {{domxref("AnalyserNode")}}, which can be used to expose audio time and frequency data and for example to create data visualizations.
- {{domxref("BaseAudioContext.createBiquadFilter()")}}
  - : Creates a {{domxref("BiquadFilterNode")}}, which represents a second order filter configurable as several different common filter types: high-pass, low-pass, band-pass, etc
- {{domxref("BaseAudioContext.createBuffer()")}}
  - : Creates a new, empty {{ domxref("AudioBuffer") }} object, which can then be populated by data and played via an {{ domxref("AudioBufferSourceNode") }}.
- {{domxref("BaseAudioContext.createBufferSource()")}}
  - : Creates an {{domxref("AudioBufferSourceNode")}}, which can be used to play and manipulate audio data contained within an {{ domxref("AudioBuffer") }} object. {{ domxref("AudioBuffer") }}s are created using {{domxref("BaseAudioContext/createBuffer", "AudioContext.createBuffer()")}} or returned by {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} when it successfully decodes an audio track.
- {{domxref("BaseAudioContext.createConstantSource()")}}
  - : Creates a {{domxref("ConstantSourceNode")}} object, which is an audio source that continuously outputs a monaural (one-channel) sound signal whose samples all have the same value.
- {{domxref("BaseAudioContext.createChannelMerger()")}}
  - : Creates a {{domxref("ChannelMergerNode")}}, which is used to combine channels from multiple audio streams into a single audio stream.
- {{domxref("BaseAudioContext.createChannelSplitter()")}}
  - : Creates a {{domxref("ChannelSplitterNode")}}, which is used to access the individual channels of an audio stream and process them separately.
- {{domxref("BaseAudioContext.createConvolver()")}}
  - : Creates a {{domxref("ConvolverNode")}}, which can be used to apply convolution effects to your audio graph, for example a reverberation effect.
- {{domxref("BaseAudioContext.createDelay()")}}
  - : Creates a {{domxref("DelayNode")}}, which is used to delay the incoming audio signal by a certain amount. This node is also useful to create feedback loops in a Web Audio API graph.
- {{domxref("BaseAudioContext.createDynamicsCompressor()")}}
  - : Creates a {{domxref("DynamicsCompressorNode")}}, which can be used to apply acoustic compression to an audio signal.
- {{domxref("BaseAudioContext.createGain()")}}
  - : Creates a {{domxref("GainNode")}}, which can be used to control the overall volume of the audio graph.
- {{domxref("BaseAudioContext.createIIRFilter()")}}
  - : Creates an {{domxref("IIRFilterNode")}}, which represents a second order filter configurable as several different common filter types.
- {{domxref("BaseAudioContext.createOscillator()")}}
  - : Creates an {{domxref("OscillatorNode")}}, a source representing a periodic waveform. It basically generates a tone.
- {{domxref("BaseAudioContext.createPanner()")}}
  - : Creates a {{domxref("PannerNode")}}, which is used to spatialize an incoming audio stream in 3D space.
- {{domxref("BaseAudioContext.createPeriodicWave()")}}
  - : Creates a {{domxref("PeriodicWave")}}, used to define a periodic waveform that can be used to determine the output of an {{ domxref("OscillatorNode") }}.
- {{domxref("BaseAudioContext.createScriptProcessor()")}} {{deprecated_inline}}
  - : Creates a {{domxref("ScriptProcessorNode")}}, which can be used for direct audio processing via JavaScript.
- {{domxref("BaseAudioContext.createStereoPanner()")}}
  - : Creates a {{domxref("StereoPannerNode")}}, which can be used to apply stereo panning to an audio source.
- {{domxref("BaseAudioContext.createWaveShaper()")}}
  - : Creates a {{domxref("WaveShaperNode")}}, which is used to implement non-linear distortion effects.
- {{domxref("BaseAudioContext.decodeAudioData()")}}
  - : Asynchronously decodes audio file data contained in an {{jsxref("ArrayBuffer")}}. In this case, the `ArrayBuffer` is usually loaded from an {{domxref("XMLHttpRequest")}}'s `response` attribute after setting the `responseType` to `arraybuffer`. This method only works on complete files, not fragments of audio files.

## Events

- {{domxref("BaseAudioContext.statechange_event", "statechange")}}
  - : Fired when the `AudioContext`'s state changes due to the calling of one of the state change methods ({{domxref("AudioContext.suspend")}}, {{domxref("AudioContext.resume")}}, or {{domxref("AudioContext.close")}}).

## Examples

```js
const audioContext = new AudioContext();

const oscillatorNode = audioContext.createOscillator();
const gainNode = audioContext.createGain();
const finish = audioContext.destination;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioContext")}}
- {{domxref("OfflineAudioContext")}}

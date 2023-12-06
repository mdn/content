---
title: "AudioNode: connect() method"
short-title: connect()
slug: Web/API/AudioNode/connect
page-type: web-api-instance-method
browser-compat: api.AudioNode.connect
---

{{ APIRef("Web Audio API") }}

The `connect()` method of the {{ domxref("AudioNode") }} interface lets
you connect one of the node's outputs to a target, which may be either another
`AudioNode` (thereby directing the sound data to the specified node) or an
{{domxref("AudioParam")}}, so that the node's output data is automatically used to
change the value of that parameter over time.

## Syntax

```js-nolint
connect(destination)
connect(destination, outputIndex)
connect(destination, outputIndex, inputIndex)
```

### Parameters

- `destination`
  - : The {{domxref("AudioNode")}} or {{domxref("AudioParam")}} to which to connect.
- `outputIndex` {{optional_inline}}
  - : An index specifying which output of the current `AudioNode` to connect to
    the destination. The index numbers are defined according to the number of output
    channels (see [Audio channels](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)).
    While you can only connect a given output to a given input once
    (repeated attempts are ignored), you can connect an output to multiple inputs by
    calling `connect()` repeatedly. This makes [fan-out](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#fan-in_and_fan-out)
    possible. The default value is 0.
- `inputIndex` {{optional_inline}}
  - : An index describing which input of the destination you want to connect the current
    `AudioNode` to; the default is 0. The index numbers are defined according
    to the number of input channels
    (see [Audio channels](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)). It is possible to connect an `AudioNode` to another
    `AudioNode`, which in turn connects back to the first
    `AudioNode`, creating a cycle.

### Return value

If the destination is a node, `connect()` returns a reference to the
destination {{domxref("AudioNode")}} object, allowing you to chain multiple
`connect()` calls. In some browsers, older implementations of this interface
return {{jsxref("undefined")}}.

If the destination is an `AudioParam`, `connect()` returns
`undefined`.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the value specified as `outputIndex` or `inputIndex` doesn't correspond to an existing input or output.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if the destination node is not part of the same audio context as the source node.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if the specified connection would create a cycle (in which the audio loops back through
    the same nodes repeatedly) and there are no {{domxref("DelayNode")}} objects in the cycle to
    prevent the resulting waveform from getting stuck constructing the same audio frame
    indefinitely. Also thrown if the `inputIndex` parameter is used while the destination is an {{domxref("AudioParam")}}.

## Examples

### Connecting to an audio input

The most obvious use of the `connect()` method is to direct the audio output
from one node into the audio input of another node for further processing. For example,
you might send the audio from a {{domxref("MediaElementAudioSourceNode")}}—that is, the
audio from an HTML media element such as {{HTMLElement("audio")}}—through a band pass
filter implemented using a {{domxref("BiquadFilterNode")}} to reduce noise before then
sending the audio along to the speakers.

This example creates an oscillator, then links it to a gain node, so that the gain node
controls the volume of the oscillator node.

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

### AudioParam example

In this example, we will be altering the gain value of a {{domxref("GainNode")}} using
an {{domxref("OscillatorNode")}} with a slow frequency value. This technique is know as
an _LFO_-controlled parameter.

```js
const audioCtx = new AudioContext();

// create an normal oscillator to make sound
const oscillator = audioCtx.createOscillator();

// create a second oscillator that will be used as an LFO (Low-frequency
// oscillator), and will control a parameter
const lfo = audioCtx.createOscillator();

// set the frequency of the second oscillator to a low number
lfo.frequency.value = 2.0; // 2Hz: two oscillations per second

// create a gain whose gain AudioParam will be controlled by the LFO
const gain = audioCtx.createGain();

// connect the LFO to the gain AudioParam. This means the value of the LFO
// will not produce any audio, but will change the value of the gain instead
lfo.connect(gain.gain);

// connect the oscillator that will produce audio to the gain
oscillator.connect(gain);

// connect the gain to the destination so we hear sound
gain.connect(audioCtx.destination);

// start the oscillator that will produce audio
oscillator.start();

// start the oscillator that will modify the gain value
lfo.start();
```

#### AudioParam notes

It is possible to connect an `AudioNode` output to more than one {{
  domxref("AudioParam") }}, and more than one AudioNode output to a single {{
  domxref("AudioParam") }}, with multiple calls to `connect()`. [Fan-in and fan-out](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#fan-in_and_fan-out) are therefore supported.

An {{ domxref("AudioParam") }} will take the rendered audio data from any
`AudioNode` output connected to it and convert it to mono by [down-mixing](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)
(if it is not already mono). Next, it will mix it together with any other such outputs,
and the intrinsic parameter value (the value the {{ domxref("AudioParam") }} would
normally have without any audio connections), including any timeline changes scheduled
for the parameter.

Therefore, it is possible to choose the range in which an {{domxref("AudioParam")}}
will change by setting the value of the {{domxref("AudioParam")}} to the central
frequency, and to use a {{domxref("GainNode")}} between the audio source and the
{{domxref("AudioParam")}} to adjust the range of the {{domxref("AudioParam")}} changes.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

---
title: "AudioNode: channelCountMode property"
short-title: channelCountMode
slug: Web/API/AudioNode/channelCountMode
page-type: web-api-instance-property
browser-compat: api.AudioNode.channelCountMode
---

{{ APIRef("Web Audio API") }}

The `channelCountMode` property of the {{ domxref("AudioNode") }} interface represents an enumerated value describing the way channels must be matched between the node's inputs and outputs.

## Value

The possible values of the `channelCountMode` enumerated value, and their meanings are:

- `max`

  - : The number of channels is equal to the maximum number of channels of all connections.
    In this case, `channelCount` is ignored and only up-mixing happens.

    The following AudioNode children default to this value: {{domxref("GainNode")}}, {{domxref("DelayNode")}}, {{domxref("ScriptProcessorNode")}}, {{domxref("BiquadFilterNode")}}, {{domxref("WaveShaperNode")}}.

- `clamped-max`

  - : The number of channels is equal to the maximum number of channels of all connections, clamped to the value of `channelCount`.

    The following AudioNode children default to this value: {{domxref("PannerNode")}}, {{domxref("ConvolverNode")}}, {{domxref("DynamicsCompressorNode")}}

- `explicit`

  - : The number of channels is defined by the value of `channelCount`.

    The following AudioNode children default to this value: {{domxref("AudioDestinationNode")}}, {{domxref("AnalyserNode")}}, {{domxref("ChannelSplitterNode")}}, {{domxref("ChannelMergerNode")}}

> [!NOTE]
> In older versions of the spec, the default for a {{domxref("ChannelSplitterNode")}} was `max`.

## Examples

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelCountMode = "explicit";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

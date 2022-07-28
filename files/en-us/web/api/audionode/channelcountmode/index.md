---
title: AudioNode.channelCountMode
slug: Web/API/AudioNode/channelCountMode
page-type: web-api-instance-property
tags:
  - API
  - AudioNode
  - Property
  - Reference
  - Web Audio API
  - channelCountMode
browser-compat: api.AudioNode.channelCountMode
---
{{ APIRef("Web Audio API") }}

The `channelCountMode` property of the {{ domxref("AudioNode") }} interface represents an enumerated value describing the way channels must be matched between the node's inputs and outputs.

The possible values of `channelCountMode` and their meanings are:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
      <th scope="col">
        The following <code>AudioNode</code> children default to this value
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>max</code></td>
      <td>
        The number of channels is equal to the maximum number of channels of all
        connections. In this case, <code>channelCount</code> is ignored and only
        up-mixing happens.
      </td>
      <td>
        {{domxref("GainNode")}}, {{domxref("DelayNode")}},
        {{domxref("ScriptProcessorNode")}},
        {{domxref("BiquadFilterNode")}},
        {{domxref("WaveShaperNode")}}
      </td>
    </tr>
    <tr>
      <td><code>clamped-max</code></td>
      <td>
        The number of channels is equal to the maximum number of channels of all
        connections, <em>clamped</em> to the value of <code>channelCount</code>.
      </td>
      <td>
        {{domxref("PannerNode")}}, {{domxref("ConvolverNode")}},
        {{domxref("DynamicsCompressorNode")}}
      </td>
    </tr>
    <tr>
      <td><code>explicit</code></td>
      <td>
        The number of channels is defined by the value of
        <code>channelCount</code>.
      </td>
      <td>
        {{domxref("AudioDestinationNode")}},
        {{domxref("AnalyserNode")}},
        {{domxref("ChannelSplitterNode")}},
        {{domxref("ChannelMergerNode")}}
      </td>
    </tr>
  </tbody>
</table>

> **Note:** In older versions of the spec, the default for a {{domxref("ChannelSplitterNode")}} was max.

## Value

A enumerated value representing a [channelCountMode](https://webaudio.github.io/web-audio-api/#idl-def-ChannelCountMode).

## Examples

```js
const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelCountMode = 'explicit';
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

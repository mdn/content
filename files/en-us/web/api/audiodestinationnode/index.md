---
title: AudioDestinationNode
slug: Web/API/AudioDestinationNode
page-type: web-api-interface
browser-compat: api.AudioDestinationNode
---

{{APIRef("Web Audio API")}}

The `AudioDestinationNode` interface represents the end destination of an audio graph in a given context — usually the speakers of your device. It can also be the node that will "record" the audio data when used with an `OfflineAudioContext`.

`AudioDestinationNode` has no output (as it _is_ the output, no more `AudioNode` can be linked after it in the audio graph) and one input. The number of channels in the input must be between `0` and the `maxChannelCount` value or an exception is raised.

The `AudioDestinationNode` of a given `AudioContext` can be retrieved using the {{domxref("BaseAudioContext/destination", "AudioContext.destination")}} property.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Instance properties

_Inherits properties from its parent, {{domxref("AudioNode")}}_.

- {{domxref("AudioDestinationNode.maxChannelCount")}}
  - : An `unsigned long` defining the maximum number of channels that the physical device can handle.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("AudioNode")}}_.

## Example

There is no complex set up for using an `AudioDestinationNode` — by default, this represents the output of the user's system (e.g. their speakers), so you can get it hooked up inside an audio graph using only a few lines of code:

```js
const audioCtx = new AudioContext();
const source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

To see a more complete implementation, check out one of our MDN Web Audio examples, such as [Voice-change-o-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) or [Violent Theremin](https://github.com/mdn/webaudio-examples/tree/main/violent-theremin).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

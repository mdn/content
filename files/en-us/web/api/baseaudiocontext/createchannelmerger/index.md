---
title: "BaseAudioContext: createChannelMerger() method"
short-title: createChannelMerger()
slug: Web/API/BaseAudioContext/createChannelMerger
page-type: web-api-instance-method
browser-compat: api.BaseAudioContext.createChannelMerger
---

{{ APIRef("Web Audio API") }}

The `createChannelMerger()` method of the {{domxref("BaseAudioContext")}} interface creates a {{domxref("ChannelMergerNode")}},
which combines channels from multiple audio streams into a single audio stream.

> **Note:** The {{domxref("ChannelMergerNode.ChannelMergerNode", "ChannelMergerNode()")}} constructor is the
> recommended way to create a {{domxref("ChannelMergerNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createChannelMerger(numberOfInputs)
```

### Parameters

- `numberOfInputs`
  - : The number of channels in the input audio streams, which the output stream will
    contain; the default is 6 if this parameter is not specified.

### Return value

A {{domxref("ChannelMergerNode")}}.

## Examples

The following example shows how you could separate a stereo track (say, a piece of
music), and process the left and right channel differently. To use them, you need to use
the second and third parameters of the {{domxref("AudioNode/connect", "AudioNode.connect(AudioNode)")}}
method, which allow you to specify both the index of the channel to connect from and the
index of the channel to connect to.

```js
const ac = new AudioContext();
ac.decodeAudioData(someStereoBuffer, (data) => {
  const source = ac.createBufferSource();
  source.buffer = data;
  const splitter = ac.createChannelSplitter(2);
  source.connect(splitter);
  const merger = ac.createChannelMerger(2);

  // Reduce the volume of the left channel only
  const gainNode = ac.createGain();
  gainNode.gain.setValueAtTime(0.5, ac.currentTime);
  splitter.connect(gainNode, 0);

  // Connect the splitter back to the second input of the merger: we
  // effectively swap the channels, here, reversing the stereo image.
  gainNode.connect(merger, 0, 1);
  splitter.connect(merger, 1, 0);

  const dest = ac.createMediaStreamDestination();

  // Because we have used a ChannelMergerNode, we now have a stereo
  // MediaStream we can use to pipe the Web Audio graph to WebRTC,
  // MediaRecorder, etc.
  merger.connect(dest);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

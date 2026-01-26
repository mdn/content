---
title: ChannelSplitterNode
slug: Web/API/ChannelSplitterNode
page-type: web-api-interface
browser-compat: api.ChannelSplitterNode
---

{{APIRef("Web Audio API")}}

The `ChannelSplitterNode` interface, often used in conjunction with its opposite, {{domxref("ChannelMergerNode")}}, separates the different channels of an audio source into a set of mono outputs. This is useful for accessing each channel separately, e.g., for performing channel mixing where gain must be separately controlled on each channel.

![Default channel splitter node with a single input splitting to form 6 mono outputs.](webaudiosplitter.png)

If your `ChannelSplitterNode` always has one single input, the amount of outputs is defined by a parameter on its constructor and the call to {{domxref("BaseAudioContext/createChannelSplitter", "AudioContext.createChannelSplitter()")}}. In the case that no value is given, it will default to `6`. If there are fewer channels in the input than there are outputs, supernumerary outputs are silent.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td>variable; defaults to <code>6</code>.</td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td>
        <code>"explicit"</code>. Older implementations, as per earlier versions
        of the spec use <code>"max"</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td>
        Fixed to the number of outputs. Older implementations, as per earlier
        versions of the spec use <code>2</code> (not used in the default count
        mode).
      </td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"discrete"</code></td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("ChannelSplitterNode.ChannelSplitterNode()","ChannelSplitterNode()")}}
  - : Creates a new `ChannelSplitterNode` object instance.

## Instance properties

_No specific property; inherits properties from its parent, {{domxref("AudioNode")}}_.

## Instance methods

_No specific method; inherits methods from its parent, {{domxref("AudioNode")}}_.

## Examples

### Basic channel splitting

Create a stereo audio source and split it into separate left and right channels:

```js
const audioContext = new AudioContext();
const splitter = audioContext.createChannelSplitter(2);

// Get a stereo audio source (e.g., from a microphone or audio file)
const source = audioContext.createMediaStreamAudioSource(stream);

// Connect the source to the splitter
source.connect(splitter);

// Connect each channel to different processors
const leftGain = audioContext.createGain();
const rightGain = audioContext.createGain();

splitter.connect(leftGain, 0);
splitter.connect(rightGain, 1);

// Now you can process left and right channels independently
leftGain.gain.value = 0.5; // Reduce left channel volume
rightGain.gain.value = 0.8; // Reduce right channel volume

leftGain.connect(audioContext.destination);
rightGain.connect(audioContext.destination);
```

### Analyzing individual channels

Split a stereo signal and analyze each channel with an analyser:

```js
const audioContext = new AudioContext();
const splitter = audioContext.createChannelSplitter(2);
const leftAnalyser = audioContext.createAnalyser();
const rightAnalyser = audioContext.createAnalyser();

const source = audioContext.createMediaElementAudioSource(audioElement);
source.connect(splitter);

// Connect each channel to its own analyser
splitter.connect(leftAnalyser, 0);
splitter.connect(rightAnalyser, 1);

// Get frequency data from each channel
const leftData = new Uint8Array(leftAnalyser.frequencyBinCount);
const rightData = new Uint8Array(rightAnalyser.frequencyBinCount);

function analyze() {
  leftAnalyser.getByteFrequencyData(leftData);
  rightAnalyser.getByteFrequencyData(rightData);

  console.log("Left channel:", leftData);
  console.log("Right channel:", rightData);

  requestAnimationFrame(analyze);
}

analyze();
```

### Splitting a multi-channel source

When working with sources that have more than 2 channels:

```js
const audioContext = new AudioContext();

// Create a splitter for a 6-channel source (default)
const splitter = audioContext.createChannelSplitter();

// Or specify the exact number of channels you need
const splitter6Ch = audioContext.createChannelSplitter(6);

const source = audioContext.createMediaStreamAudioSource(stream);
source.connect(splitter);

// Access individual channels by index (0-5)
for (let i = 0; i < 6; i++) {
  const gain = audioContext.createGain();
  splitter.connect(gain, i);
  gain.connect(audioContext.destination);
}
```

For more examples, see [`BaseAudioContext.createChannelSplitter()`](/en-US/docs/Web/API/BaseAudioContext/createChannelSplitter#examples).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

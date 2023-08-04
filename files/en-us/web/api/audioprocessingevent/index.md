---
title: AudioProcessingEvent
slug: Web/API/AudioProcessingEvent
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.AudioProcessingEvent
---

{{APIRef("Web Audio API")}}{{deprecated_header}}

The `AudioProcessingEvent` interface of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) represents events that occur when a {{domxref("ScriptProcessorNode")}} input buffer is ready to be processed.

An `audioprocess` event with this interface is fired on a {{domxref("ScriptProcessorNode")}} when audio processing is required. During audio processing, the input buffer is read and processed to produce output audio data, which is then written to the output buffer.

> **Warning:** This feature has been deprecated and should be replaced by an [`AudioWorklet`](/en-US/docs/Web/API/AudioWorklet).

{{InheritanceDiagram}}

## Constructor

- {{domxref("AudioProcessingEvent.AudioProcessingEvent", "AudioProcessingEvent()")}} {{Deprecated_Inline}}
  - : Creates a new `AudioProcessingEvent` object.

## Instance properties

_Also implements the properties inherited from its parent, {{domxref("Event")}}_.

- {{domxref("AudioProcessingEvent.playbackTime", "playbackTime")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : A double representing the time when the audio will be played,
    as defined by the time of {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}.
- {{domxref("AudioProcessingEvent.inputBuffer", "inputBuffer")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : An {{domxref("AudioBuffer")}} that is the buffer containing the input audio data to be processed.
    The number of channels is defined as a parameter `numberOfInputChannels`,
    of the factory method {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}}.
    Note that the returned <code>AudioBuffer</code> is only valid in the scope of the event handler.
- {{domxref("AudioProcessingEvent.outputBuffer", "outputBuffer")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : An {{domxref("AudioBuffer")}} that is the buffer where the output audio data should be written.
    The number of channels is defined as a parameter, <code>numberOfOutputChannels</code>,
    of the factory method {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}}.
    Note that the returned <code>AudioBuffer</code> is only valid in the scope of the event handler.

## Examples

The following example shows how to use of a `ScriptProcessorNode` to take a
track loaded via {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}}, process it, adding a bit
of white noise to each audio sample of the input track (buffer) and play it through the
{{domxref("AudioDestinationNode")}}. For each channel and each sample frame, the
`scriptNode.onaudioprocess` function takes the associated
`audioProcessingEvent` and uses it to loop through each channel of the input
buffer, and each sample in each channel, and add a small amount of white noise, before
setting that result to be the output sample in each case.

> **Note:** For a full working example, see our [script-processor-node](https://mdn.github.io/webaudio-examples/script-processor-node/)
> GitHub repo. (You can also access the [source code](https://github.com/mdn/webaudio-examples/blob/master/script-processor-node/index.html).)

```js
const myScript = document.querySelector("script");
const myPre = document.querySelector("pre");
const playButton = document.querySelector("button");

// Create AudioContext and buffer source
const audioCtx = new AudioContext();
const source = audioCtx.createBufferSource();

// Create a ScriptProcessorNode with a bufferSize of 4096 and a single input and output channel
const scriptNode = audioCtx.createScriptProcessor(4096, 1, 1);
console.log(scriptNode.bufferSize);

// load in an audio track via XHR and decodeAudioData

function getData() {
  request = new XMLHttpRequest();
  request.open("GET", "viper.ogg", true);
  request.responseType = "arraybuffer";
  request.onload = () => {
    const audioData = request.response;

    audioCtx.decodeAudioData(
      audioData,
      (buffer) => {
        myBuffer = buffer;
        source.buffer = myBuffer;
      },
      (e) => console.error(`Error with decoding audio data: ${e.err}`),
    );
  };
  request.send();
}

// Give the node a function to process audio events
scriptNode.onaudioprocess = (audioProcessingEvent) => {
  // The input buffer is the song we loaded earlier
  const inputBuffer = audioProcessingEvent.inputBuffer;

  // The output buffer contains the samples that will be modified and played
  const outputBuffer = audioProcessingEvent.outputBuffer;

  // Loop through the output channels (in this case there is only one)
  for (let channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    const inputData = inputBuffer.getChannelData(channel);
    const outputData = outputBuffer.getChannelData(channel);

    // Loop through the 4096 samples
    for (let sample = 0; sample < inputBuffer.length; sample++) {
      // make output equal to the same as the input
      outputData[sample] = inputData[sample];

      // add noise to each output sample
      outputData[sample] += (Math.random() * 2 - 1) * 0.2;
    }
  }
};

getData();

// Wire up the play button
playButton.onclick = () => {
  source.connect(scriptNode);
  scriptNode.connect(audioCtx.destination);
  source.start();
};

// When the buffer source stops playing, disconnect everything
source.onended = () => {
  source.disconnect(scriptNode);
  scriptNode.disconnect(audioCtx.destination);
};
```

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

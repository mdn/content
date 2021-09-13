---
title: BaseAudioContext.createScriptProcessor()
slug: Web/API/BaseAudioContext/createScriptProcessor
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - Method
  - Reference
  - Web Audio API
  - createScriptProcessor
browser-compat: api.BaseAudioContext.createScriptProcessor
---
{{APIRef("Web Audio API")}}{{deprecated_header}}

The `createScriptProcessor()` method of the {{domxref("BaseAudioContext")}} interface
creates a {{domxref("ScriptProcessorNode")}} used for direct audio processing.

> **Note:** This feature was replaced by [AudioWorklets](/en-US/docs/Web/API/AudioWorklet) and the {{domxref("AudioWorkletNode")}} interface.

## Syntax

```js
var scriptProcessor = audioCtx.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
```

### Parameters

- `bufferSize`

  - : The buffer size in units of sample-frames. If specified, the bufferSize must be one
    of the following values: 256, 512, 1024, 2048, 4096, 8192, 16384. If it's not passed
    in, or if the value is 0, then the implementation will choose the best buffer size for
    the given environment, which will be a constant power of 2 throughout the lifetime of
    the node.

    This value controls how frequently the `audioprocess` event is dispatched
    and how many sample-frames need to be processed each call. Lower values for
    `bufferSize` will result in a lower (better) latency. Higher values will be
    necessary to avoid audio breakup and glitches. It is recommended for authors to not
    specify this buffer size and allow the implementation to pick a good buffer size to
    balance between latency and audio quality.

- `numberOfInputChannels`
  - : Integer specifying the number of channels for this node's input, defaults to 2.
    Values of up to 32 are supported.
- `numberOfOutputChannels`
  - : Integer specifying the number of channels for this node's output, defaults to 2.
    Values of up to 32 are supported.

> **Warning:** Webkit currently (version 31) requires that a valid
> `bufferSize` be passed when calling this method.

> **Note:** It is invalid for both `numberOfInputChannels` and
> `numberOfOutputChannels` to be zero.

### Returns

A {{domxref("ScriptProcessorNode")}}.

## Example

The following example shows basic usage of a `ScriptProcessorNode` to take a
track loaded via {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}}, process it, adding a bit
of white noise to each audio sample of the input track (buffer) and play it through the
{{domxref("AudioDestinationNode")}}. For each channel and each sample frame, the
`scriptNode.onaudioprocess` function takes the associated
`audioProcessingEvent` and uses it to loop through each channel of the input
buffer, and each sample in each channel, and add a small amount of white noise, before
setting that result to be the output sample in each case.

> **Note:** For a full working example, see our [script-processor-node](https://mdn.github.io/webaudio-examples/script-processor-node/)
> github repo (also view the [source
> code](https://github.com/mdn/webaudio-examples/blob/master/script-processor-node/index.html).)

```js
var myScript = document.querySelector('script');
var myPre = document.querySelector('pre');
var playButton = document.querySelector('button');

// Create AudioContext and buffer source
var audioCtx = new AudioContext();
source = audioCtx.createBufferSource();

// Create a ScriptProcessorNode with a bufferSize of 4096 and a single input and output channel
var scriptNode = audioCtx.createScriptProcessor(4096, 1, 1);
console.log(scriptNode.bufferSize);

// load in an audio track via XHR and decodeAudioData

function getData() {
  request = new XMLHttpRequest();
  request.open('GET', 'viper.ogg', true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
      myBuffer = buffer;
      source.buffer = myBuffer;
    },
    function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
}

// Give the node a function to process audio events
scriptNode.onaudioprocess = function(audioProcessingEvent) {
  // The input buffer is the song we loaded earlier
  var inputBuffer = audioProcessingEvent.inputBuffer;

  // The output buffer contains the samples that will be modified and played
  var outputBuffer = audioProcessingEvent.outputBuffer;

  // Loop through the output channels (in this case there is only one)
  for (var channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    var inputData = inputBuffer.getChannelData(channel);
    var outputData = outputBuffer.getChannelData(channel);

    // Loop through the 4096 samples
    for (var sample = 0; sample < inputBuffer.length; sample++) {
      // make output equal to the same as the input
      outputData[sample] = inputData[sample];

      // add noise to each output sample
      outputData[sample] += ((Math.random() * 2) - 1) * 0.2;
    }
  }
}

getData();

// wire up play button
playButton.onclick = function() {
  source.connect(scriptNode);
  scriptNode.connect(audioCtx.destination);
  source.start();
}

// When the buffer source stops playing, disconnect everything
source.onended = function() {
  source.disconnect(scriptNode);
  scriptNode.disconnect(audioCtx.destination);
}
```

## Specifications

Since the August 29 2014 [Web Audio API specification](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createscriptprocessor) publication, this feature has been deprecated. It is no longer on track to become a standard.

It was replaced by [AudioWorklets](/en-US/docs/Web/API/AudioWorklet) and the {{domxref("AudioWorkletNode")}} interface.

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

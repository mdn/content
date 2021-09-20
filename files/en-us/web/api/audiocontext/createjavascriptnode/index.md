---
title: AudioContext.createJavaScriptNode()
slug: Web/API/AudioContext/createJavaScriptNode
tags:
  - API
  - Audio
  - Method
  - Deprecated
  - Reference
  - Web
  - createJavaScriptNode
---
{{APIRef("Web Audio API")}}{{deprecated_header}}

The `AudioContext.createJavaScriptNode()` method creates a
{{domxref("JavaScriptNode")}} which is used for directly manipulating audio data with
JavaScript.

> **Note:** This method is obsolete, and has been renamed to
> {{domxref("BaseAudioContext/createScriptProcessor", "AudioContext.createScriptProcessor()")}}. See also
> {{domxref("ScriptProcessorNode")}}.

## Syntax

```js
var jsNode = audioCtx.createJavaScriptNode(bufferSize, numInputChannels, numOutputChannels);
```

### Parameters

- `bufferSize`
  - : The buffer size must be in units of sample frames, i.e., one of: 256, 512, 1024,
    2048, 4096, 8192, or 16384. It controls the frequency of callbacks asking for a buffer
    refill. Smaller sizes allow for lower latency and higher for better overall quality.
- `numInputChannels`
  - : The number of input channels in the audio stream.
- `numOutputChannels`
  - : The number of output channels in the audio stream.

## Example

The following script illustrates the use of `createJavaScriptNode()`:

```js
var SineWave = function(context) {
  var that = this;
  this.x = 0; // Initial sample number
  this.context = context;
  this.node = context.createJavaScriptNode(1024, 1, 1);
  this.node.onaudioprocess = function(e) { that.process(e) };
}

SineWave.prototype.process = function(e) {
  var data = e.outputBuffer.getChannelData(0);
  for (var i = 0; i < data.length; ++i) {
    data[i] = Math.sin(this.x++);
  }
}

SineWave.prototype.play = function() {
  this.node.connect(this.context.destination);
}

SineWave.prototype.pause = function() {
  this.node.disconnect();
}
```

## See also

- [Generating
  Tones with the Web Audio API](http://0xfe.blogspot.com/2011/08/generating-tones-with-web-audio-api.html)
- [Exploring
  the HTML5 Web Audio: visualizing sound](http://www.smartjava.org/content/exploring-html5-web-audio-visualizing-sound)

---
title: "AudioWorkletGlobalScope: currentTime property"
short-title: currentTime
slug: Web/API/AudioWorkletGlobalScope/currentTime
page-type: web-api-instance-property
browser-compat: api.AudioWorkletGlobalScope.currentTime
---

{{APIRef("Web Audio API")}}

The read-only **`currentTime`** property of the {{domxref("AudioWorkletGlobalScope")}} interface returns a double that represents the ever-increasing context time of the audio block being processed. It is equal to the {{domxref("BaseAudioContext.currentTime", "currentTime")}} property of the {{domxref("BaseAudioContext")}} the worklet belongs to.

## Value

A floating-point number representing the time.

## Examples

The {{domxref("AudioWorkletProcessor")}} has access to the specific {{domxref("AudioWorkletGlobalScope")}} properties:

```js
// AudioWorkletProcessor defined in : test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    // Logs the current sample-frame and time at the moment of instantiation.
    // They are accessible from the AudioWorkletGlobalScope.
    console.log(currentFrame);
    console.log(currentTime);
  }

  // The process method is required - output silence,
  // which the outputs are already filled with.
  process(inputs, outputs, parameters) {
    return true;
  }
}

// Logs the sample rate, that is not going to change ever,
// because it's a read-only property of a BaseAudioContext
// and is set only during its instantiation.
console.log(sampleRate);

// You can declare any variables and use them in your processors
// for example it may be an ArrayBuffer with a wavetable.
const usefulVariable = 42;
console.log(usefulVariable);

registerProcessor("test-processor", TestProcessor);
```

The main script loads the processor, creates an instance of {{domxref("AudioWorkletNode")}}, passes the name of the processor to it, and connects the node to an audio graph. We should see the output of {{domxref("console.log()")}} calls in the console:

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("test-processor.js");
const testNode = new AudioWorkletNode(audioContext, "test-processor");
testNode.connect(audioContext.destination);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

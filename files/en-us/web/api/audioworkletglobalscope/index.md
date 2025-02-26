---
title: AudioWorkletGlobalScope
slug: Web/API/AudioWorkletGlobalScope
page-type: web-api-interface
browser-compat: api.AudioWorkletGlobalScope
---

{{APIRef("Web Audio API")}}

The **`AudioWorkletGlobalScope`** interface of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) represents a global execution context for user-supplied code, which defines custom {{domxref("AudioWorkletProcessor")}}-derived classes.

Each {{domxref("BaseAudioContext")}} has a single {{domxref("AudioWorklet")}} available under the {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} property, which runs its code in a single `AudioWorkletGlobalScope`.

As the global execution context is shared across the current `BaseAudioContext`, it's possible to define any other variables and perform any actions allowed in worklets — apart from defining `AudioWorkletProcessor` derived classes.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties defined on its parent interface, {{domxref("WorkletGlobalScope")}}._

- {{domxref("AudioWorkletGlobalScope.currentFrame", "currentFrame")}} {{ReadOnlyInline}}
  - : Returns an integer that represents the ever-increasing current sample-frame of the audio block being processed. It is incremented by 128 (the size of a render quantum) after the processing of each audio block.
- {{domxref("AudioWorkletGlobalScope.currentTime", "currentTime")}} {{ReadOnlyInline}}
  - : Returns a double that represents the ever-increasing context time of the audio block being processed. It is equal to the {{domxref("BaseAudioContext.currentTime", "currentTime")}} property of the {{domxref("BaseAudioContext")}} the worklet belongs to.
- {{domxref("AudioWorkletGlobalScope.sampleRate", "sampleRate")}} {{ReadOnlyInline}}
  - : Returns a float that represents the sample rate of the associated {{domxref("BaseAudioContext")}}.

## Instance methods

_This interface also inherits methods defined on its parent interface, {{domxref("WorkletGlobalScope")}}._

- {{domxref("AudioWorkletGlobalScope.registerProcessor", "registerProcessor()")}}
  - : Registers a class derived from the {{domxref('AudioWorkletProcessor')}} interface. The class can then be used by creating an {{domxref("AudioWorkletNode")}}, providing its registered name.

## Examples

In this example we output all global properties into the console in the constructor of a custom {{domxref("AudioWorkletProcessor")}}.

First we need to define the processor, and register it. Note that this should be done in a separate file.

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
// for example it may be an ArrayBuffer with a wavetable
const usefulVariable = 42;
console.log(usefulVariable);

registerProcessor("test-processor", TestProcessor);
```

Next, in our main scripts file we'll load the processor, create an instance of {{domxref("AudioWorkletNode")}} — passing the name of the processor to it — and connect the node to an audio graph. We should see the output of {{domxref("console/log_static", "console.log()")}} calls in the console:

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
- [Using AudioWorklet](/en-US/docs/Web/API/Web_Audio_API/Using_AudioWorklet)

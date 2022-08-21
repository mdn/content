---
title: AudioWorkletProcessor
slug: Web/API/AudioWorkletProcessor
page-type: web-api-interface
tags:
  - API
  - Audio
  - AudioWorklet
  - AudioWorkletProcessor
  - Interface
  - Reference
  - Web Audio API
  - sound
browser-compat: api.AudioWorkletProcessor
---
{{APIRef("Web Audio API")}}

The **`AudioWorkletProcessor`** interface of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) represents an audio processing code behind a custom {{domxref("AudioWorkletNode")}}. It lives in the {{domxref("AudioWorkletGlobalScope")}} and runs on the Web Audio rendering thread. In turn, an {{domxref("AudioWorkletNode")}} based on it runs on the main thread.

## Constructor

> **Note:** The `AudioWorkletProcessor` and classes that derive from it cannot be instantiated directly from a user-supplied code. Instead, they are created only internally by the creation of an associated {{domxref("AudioWorkletNode")}}s. The constructor of the deriving class is getting called with an options object, so you can perform a custom initialization procedures — see constructor page for details.

- {{domxref("AudioWorkletProcessor.AudioWorkletProcessor", "AudioWorkletProcessor()")}}
  - : Creates a new instance of an `AudioWorkletProcessor` object.

## Properties

- {{domxref("AudioWorkletProcessor.port", "port")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("MessagePort")}} used for bidirectional communication between the processor and the {{domxref("AudioWorkletNode")}} which it belongs to. The other end is available under the {{domxref("AudioWorkletNode.port", "port")}} property of the node.

## Methods

_The `AudioWorkletProcessor` interface does not define any methods of its own. However, you must provide a {{domxref("AudioWorkletProcessor.process", "process()")}} method, which is called in order to process the audio stream._

## Events

_The `AudioWorkletProcessor` interface doesn't respond to any events._

## Usage notes

### Deriving classes

To define custom audio processing code you have to derive a class from the `AudioWorkletProcessor` interface. Although not defined on the interface, the deriving class must have the {{domxref("AudioWorkletProcessor.process", "process")}} method. This method gets called for each block of 128 sample-frames and takes input and output arrays and calculated values of custom {{domxref("AudioParam")}}s (if they are defined) as parameters. You can use inputs and audio parameter values to fill the outputs array, which by default holds silence.

Optionally, if you want custom {{domxref("AudioParam")}}s on your node, you can supply a {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} property as a _static getter_ on the processor. The array of {{domxref("AudioParamDescriptor")}}-based objects returned is used internally to create the {{domxref("AudioParam")}}s during the instantiation of the `AudioWorkletNode`.

The resulting `AudioParam`s reside in the {{domxref("AudioWorkletNode.parameters", "parameters")}} property of the node and can be automated using standard methods such as [`linearRampToValueAtTime`](/en-US/docs/Web/API/AudioParam/linearRampToValueAtTime). Their calculated values will be passed into the {{domxref("AudioWorkletProcessor.process", "process()")}} method of the processor for you to shape the node output accordingly.

### Processing audio

An example algorithm of creating a custom audio processing mechanism is:

1. Create a separate file;
2. In the file:

    1. Extend the `AudioWorkletProcessor` class (see ["Deriving classes" section](#deriving_classes)) and supply your own {{domxref("AudioWorkletProcessor.process", "process()")}} method in it;
    2. Register the processor using {{domxref("AudioWorkletGlobalScope.registerProcessor()")}} method;

3. Load the file using {{domxref("Worklet.addModule", "addModule()")}} method on your audio context's {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} property;
4. Create an {{domxref("AudioWorkletNode")}} based on the processor. The processor will be instantiated internally by the `AudioWorkletNode` constructor.
5. Connect the node to the other nodes.

## Examples

In the example below we create a custom {{domxref("AudioWorkletNode")}} that outputs white noise.

First, we need to define a custom `AudioWorkletProcessor`, which will output white noise, and register it. Note that this should be done in a separate file.

```js
// white-noise-processor.js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  process (inputs, outputs, parameters) {
    const output = outputs[0]
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] = Math.random() * 2 - 1
      }
    })
    return true
  }
}

registerProcessor('white-noise-processor', WhiteNoiseProcessor)
```

Next, in our main script file we'll load the processor, create an instance of {{domxref("AudioWorkletNode")}}, passing it the name of the processor, then connect the node to an audio graph.

```js
const audioContext = new AudioContext()
await audioContext.audioWorklet.addModule('white-noise-processor.js')
const whiteNoiseNode = new AudioWorkletNode(audioContext, 'white-noise-processor')
whiteNoiseNode.connect(audioContext.destination)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Using AudioWorklet](/en-US/docs/Web/API/Web_Audio_API/Using_AudioWorklet)

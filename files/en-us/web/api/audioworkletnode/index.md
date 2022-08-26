---
title: AudioWorkletNode
slug: Web/API/AudioWorkletNode
page-type: web-api-interface
tags:
  - API
  - Audio
  - AudioWorkletNode
  - Interface
  - Reference
  - Web Audio API
browser-compat: api.AudioWorkletNode
---
{{APIRef("Web Audio API")}}

> **Note:** Although the interface is available outside [secure contexts](/en-US/docs/Web/Security/Secure_Contexts), the {{domxref("BaseAudioContext.audioWorklet")}} property is not, thus custom {{domxref("AudioWorkletProcessor")}}s cannot be defined outside them.

The **`AudioWorkletNode`** interface of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) represents a base class for a user-defined {{domxref("AudioNode")}}, which can be connected to an audio routing graph along with other nodes. It has an associated {{domxref("AudioWorkletProcessor")}}, which does the actual audio processing in a Web Audio rendering thread.

{{InheritanceDiagram}}

## Constructor

- {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}}
  - : Creates a new instance of an `AudioWorkletNode` object.

## Properties

_Also Inherits properties from its parent, {{domxref("AudioNode")}}_.

- {{domxref("AudioWorkletNode.port")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("MessagePort")}} used for bidirectional communication between the node and its associated {{domxref("AudioWorkletProcessor")}}. The other end is available under the {{domxref("AudioWorkletProcessor.port", "port")}} property of the processor.
- {{domxref("AudioWorkletNode.parameters")}} {{ReadOnlyInline}}
  - : Returns an {{domxref("AudioParamMap")}} — a collection of {{domxref("AudioParam")}} objects. They are instantiated during the creation of the underlying `AudioWorkletProcessor`. If the `AudioWorkletProcessor` has a static {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} getter, the {{domxref("AudioParamDescriptor")}} array returned from it is used to create `AudioParam` objects on the `AudioWorkletNode`. With this mechanism it is possible to make your own `AudioParam` objects accessible from your `AudioWorkletNode`. You can then use their values in the associated `AudioWorkletProcessor`.

### Events

- {{domxref("AudioWorkletNode.processorerror_event", "processorerror")}}
  - : Fired when an error is thrown in associated {{domxref("AudioWorkletProcessor")}}. Once fired, the processor and consequently the node will output silence throughout its lifetime.

## Methods

_Also inherits methods from its parent, {{domxref("AudioNode")}}_.

_The `AudioWorkletNode` interface does not define any methods of its own._

## Examples

In this example we create a custom `AudioWorkletNode` that outputs random noise.

First, we need to define a custom {{domxref("AudioWorkletProcessor")}}, which will output random noise, and register it. Note that this should be done in a separate file.

```js
// random-noise-processor.js
class RandomNoiseProcessor extends AudioWorkletProcessor {
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

registerProcessor('random-noise-processor', RandomNoiseProcessor)
```

Next, in our main script file we'll load the processor, create an instance of `AudioWorkletNode` passing it the name of the processor, and connect the node to an audio graph.

```js
const audioContext = new AudioContext()
await audioContext.audioWorklet.addModule('random-noise-processor.js')
const randomNoiseNode = new AudioWorkletNode(audioContext, 'random-noise-processor')
randomNoiseNode.connect(audioContext.destination)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Using AudioWorklet](/en-US/docs/Web/API/Web_Audio_API/Using_AudioWorklet)

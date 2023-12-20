---
title: "AudioWorkletNode: parameters property"
short-title: parameters
slug: Web/API/AudioWorkletNode/parameters
page-type: web-api-instance-property
browser-compat: api.AudioWorkletNode.parameters
---

{{APIRef("Web Audio API")}}

The read-only **`parameters`** property of the
{{domxref("AudioWorkletNode")}} interface returns the associated
{{domxref("AudioParamMap")}} — that is, a `Map`-like collection of
{{domxref("AudioParam")}} objects. They are instantiated during creation of the
underlying {{domxref("AudioWorkletProcessor")}} according to its
{{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}} static
getter.

## Value

The {{domxref("AudioParamMap")}} object containing {{domxref("AudioParam")}} instances.
They can be automated in the same way as with default `AudioNode`s, and their
calculated values can be used in the {{domxref("AudioWorkletProcessor.process",
  "process")}} method of your {{domxref("AudioWorkletProcessor")}}.

## Examples

To demonstrate creation and usage of custom `AudioParam`s, we'll expand the
example from {{domxref("AudioWorkletNode")}} page. There we've created a simple node
which outputs white noise. Here, additionally, we'll create a custom gain parameter, so
we can directly change volume of the output (although you could use
{{domxref("GainNode")}} to achieve this as well).

First, we need to define a custom `AudioWorkletProcessor`, and register it.
Note that this should be done in a separate file.

We expand the processor by adding a static
{{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}}
getter. It will be used internally by the `AudioWorkletNode` constructor to
populate its `parameters` with instantiated `AudioParam` objects.

```js
// white-noise-processor.js
class WhiteNoiseProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: "customGain",
        defaultValue: 1,
        minValue: 0,
        maxValue: 1,
        automationRate: "a-rate",
      },
    ];
  }

  process(inputs, outputs, parameters) {
    const output = outputs[0];
    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        channel[i] =
          (Math.random() * 2 - 1) *
          (parameters["customGain"].length > 1
            ? parameters["customGain"][i]
            : parameters["customGain"][0]);
        // note: a parameter contains an array of 128 values (one value for each of 128 samples),
        // however it may contain a single value which is to be used for all 128 samples
        // if no automation is scheduled for the moment.
      }
    });
    return true;
  }
}

registerProcessor("white-noise-processor", WhiteNoiseProcessor);
```

Next, in our main scripts file we'll load the processor, create an instance of
`AudioWorkletNode` passing it the name of the processor, and connect the node
to an audio graph.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("white-noise-processor.js");
const whiteNoiseNode = new AudioWorkletNode(
  audioContext,
  "white-noise-processor",
);
whiteNoiseNode.connect(audioContext.destination);
```

Now we can change the gain on the node like this:

```js
const gainParam = whiteNoiseNode.parameters.get("customGain");
gainParam.setValueAtTime(0, audioContext.currentTime);
gainParam.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.5);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

---
title: "AudioWorkletProcessor: AudioWorkletProcessor() constructor"
short-title: AudioWorkletProcessor()
slug: Web/API/AudioWorkletProcessor/AudioWorkletProcessor
page-type: web-api-constructor
browser-compat: api.AudioWorkletProcessor.AudioWorkletProcessor
---

{{APIRef("Web Audio API")}}

The **`AudioWorkletProcessor()`**
constructor creates a new {{domxref("AudioWorkletProcessor")}} object, which
represents an underlying audio processing mechanism of an
{{domxref("AudioWorkletNode")}}.

## Syntax

> [!NOTE]
> The `AudioWorkletProcessor` and classes that derive from it
> cannot be instantiated directly from a user-supplied code. Instead, they are created
> only internally by the creation of an associated {{domxref("AudioWorkletNode")}}s.

```js-nolint
new AudioWorkletProcessor(options)
```

### Parameters

- `options`

  - : An object that is passed as _options_ parameter to the
    {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}} constructor and
    passed through [the structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
    Available properties are as follows:

    <!-- The specification refers to this object as: AudioWorkletNodeOptions -->

    - `numberOfInputs` {{optional_inline}}
      - : The value to initialize the {{domxref("AudioNode.numberOfInputs", "numberOfInputs")}} property to. Defaults to 1.
    - `numberOfOutputs` {{optional_inline}}
      - : The value to initialize the {{domxref("AudioNode.numberOfOutputs", "numberOfOutputs")}} property to. Defaults to 1.
    - `outputChannelCount` {{optional_inline}}
      - : An **array** defining the number of channels for each output. For example, _outputChannelCount: \[n, m]_ specifies the number of channels in the first output to be _n_ and the second output to be _m_. The array length must match `numberOfOutputs`.
    - `parameterData` {{optional_inline}}
      - : An object containing the initial values of custom {{domxref("AudioParam")}} objects on this node (in its {{domxref("AudioWorkletNode.parameters", "parameters")}} property), with `key` being the name of a custom parameter and `value` being its initial value.
    - `processorOptions` {{optional_inline}}
      - : Any additional data that can be used for custom initialization of the underlying {{domxref("AudioWorkletProcessor")}}.

    Note that there are default values for the first two properties, so even if there are no
    _options_ object passed to the {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}} constructor, the _options_ object passed by the node to the `AudioWorkletProcessor` constructor will exist and at minimum have `numberOfInputs` and `numberOfOutputs`.

### Return value

The newly constructed {{domxref("AudioWorkletProcessor")}} instance.

## Examples

In this example we pass custom options to the
{{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}} constructor and
observe how a [structured clone](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) of them gets passed to our `AudioWorkletProcessor` constructor.

First, we need to define a custom {{domxref("AudioWorkletProcessor")}} and register it.
Note that this should be done in a separate file.

```js
// test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    console.log(options.numberOfInputs);
    console.log(options.processorOptions.someUsefulVariable);
  }
  process(inputs, outputs, parameters) {
    return true;
  }
}

registerProcessor("test-processor", TestProcessor);
```

Next, in our main script file we'll load the processor, create an instance of
`AudioWorkletNode` passing it the name of the processor and _options_
object.

In the _options_ object we pass `processorOptions` with a
{{jsxref("Map")}} instance under `someUsefulVariable` key. We don't pass
`numberOfInputs` and see how it gets its default value.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("test-processor.js");
const testNode = new AudioWorkletNode(audioContext, "test-processor", {
  processorOptions: {
    someUsefulVariable: new Map([
      [1, "one"],
      [2, "two"],
    ]),
  },
});
```

The console output will be as follows:

```plain
> 1 // AudioWorkletNode options.numberOfInputs set to default
> Map(2) { 1 => "one", 2 => "two" } // A cloned map under someUsefulVariable
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioWorkletNode", "AudioWorkletNode")}} interface

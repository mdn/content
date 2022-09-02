---
title: AudioWorkletNode()
slug: Web/API/AudioWorkletNode/AudioWorkletNode
page-type: web-api-constructor
tags:
  - API
  - AudioWorkletNode
  - Constructor
  - Reference
  - Web Audio API
browser-compat: api.AudioWorkletNode.AudioWorkletNode
---
{{APIRef("Web Audio API")}}

The **`AudioWorkletNode()`**
constructor creates a new {{domxref("AudioWorkletNode")}} object, which represents an
{{domxref("AudioNode")}} that uses a JavaScript function to perform custom audio
processing.

## Syntax

```js
new AudioWorkletNode(context, name)
new AudioWorkletNode(context, name, options)
```

### Parameters

- `context`
  - : The {{domxref("BaseAudioContext")}} instance this node will be associated with.
- `name`
  - : A string, which represents the name of the {{domxref("AudioWorkletProcessor")}} this
    node will be based on. A processor with the provided name must first be registered
    using the {{domxref("AudioWorkletGlobalScope.registerProcessor()")}} method.
- `options` {{optional_inline}}

  - : An object containing zero or more of the following optional properties to configure the new node:

    <!-- The specification refers to this object as: AudioWorkletNodeOptions -->

    > **Note:** The result of [the structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
    > applied to the object is also internally passed into the associated {{domxref("AudioWorkletProcessor.AudioWorkletProcessor", "AudioWorkletProcessor()")}} constructor
    > — this allows custom initialization of an underlying user-defined {{domxref("AudioWorkletProcessor")}}.

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

### Exceptions

- `NotSupportedError` {{domxref("DOMException")}}
  - : The specified `options.outputChannelCount` is `0` or larger
    than the current implementation supports.

    Both `options.numberOfInputs` and `options.numberOfOutputs` are 0.
- `IndexSizeError` {{domxref("DOMException")}}
  - : The length of `options.outputChannelCount` array does not match
    `options.numberOfOutputs`.

## Usage notes

Different `options` parameter values can have the following effects.

If the number of inputs and number of outputs are both set to 0, a `NotSupportedError` will be thrown and the node construction process aborted. If the length of the `outputChannelCount` array doesn't match `numberOfOutputs`, an `IndexSizeError`  {{domxref("DOMException")}} will be thrown.

If `outputChannelCount` isn't specified, and `numberOfInputs` and `numberOfOutputs` are both 1, the `AudioWorkletNode`'s initial channel count is set to 1. This has the effect of changing the output channel count to dynamically change to the computed number of channels, based on the input's channel count and the current setting of the {{domxref("AudioNode")}} property {{domxref("AudioNode.channelCountMode", "channelCountMode")}}.

Otherwise, if `outputChannelCount` is provided _and_ if the values of `numberOfInputs` and `numberOfOutputs` are both 1, the audio worklet node's channel count is set to the value of `outputChannelCount`. Otherwise, the channel count of each channel in the set of output channels is set to match the corresponding value in the `outputChannelCount` array.

## Examples

_For a complete example demonstrating user-defined audio processing, see the
{{domxref("AudioWorkletNode")}} page._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Background audio processing using AudioWorklet](/en-US/docs/Web/API/Web_Audio_API/Using_AudioWorklet)
- {{domxref("AudioWorkletNode", "AudioWorkletNode")}} interface

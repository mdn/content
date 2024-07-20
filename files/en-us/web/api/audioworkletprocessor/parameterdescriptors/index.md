---
title: "AudioWorkletProcessor: parameterDescriptors property"
short-title: parameterDescriptors
slug: Web/API/AudioWorkletProcessor/parameterDescriptors
page-type: web-api-instance-property
status:
  - experimental
spec-urls: https://webaudio.github.io/web-audio-api/#audioworkletprocess-callback-parameters
---

{{APIRef("Web Audio API")}}{{SeeCompatTable}}

The read-only **`parameterDescriptors`** property of an {{domxref("AudioWorkletProcessor")}}-derived class is a _static getter_,
which returns an iterable of {{domxref("AudioParamDescriptor")}}-based objects.

The property is not a part of the {{domxref("AudioWorkletProcessor")}}
interface, but, if defined, it is called internally by the
{{domxref("AudioWorkletProcessor")}} constructor to create a list of custom
{{domxref("AudioParam")}} objects in the {{domxref("AudioWorkletNode.parameters", "parameters")}} property of the associated {{domxref("AudioWorkletNode")}}.

Defining the getter is optional.

## Value

An iterable of {{domxref("AudioParamDescriptor")}}-based objects. The properties of
these objects are as follows:

- `name`
  - : The string which represents the name of the `AudioParam`. Under this name the `AudioParam` will be available in the {{domxref("AudioWorkletNode.parameters", "parameters")}} property of the node, and under this name the {{domxref("AudioWorkletProcessor.process")}} method will acquire the calculated values of this `AudioParam`.
- `automationRate` {{optional_inline}}
  - : Either [`"a-rate"`](/en-US/docs/Web/API/AudioParam#a-rate), or [`"k-rate"`](/en-US/docs/Web/API/AudioParam#k-rate) string which represents an automation rate of this `AudioParam`. Defaults to `"a-rate"`.
- `minValue` {{optional_inline}}
  - : A `float` which represents minimum value of the `AudioParam`. Defaults to `-3.4028235e38`.
- `maxValue` {{optional_inline}}
  - : A `float` which represents maximum value of the `AudioParam`. Defaults to `3.4028235e38`.
- `defaultValue` {{optional_inline}}
  - : A `float` which represents initial value of the `AudioParam`. Defaults to `0`.

## Examples

See [`AudioWorkletNode.parameters`](/en-US/docs/Web/API/AudioWorkletNode/parameters#examples) for example code showing how to add static `parameterDescriptors` getter to a custom `AudioWorkletProcessor`.

## Specifications

{{Specifications}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

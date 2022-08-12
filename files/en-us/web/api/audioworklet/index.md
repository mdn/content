---
title: AudioWorklet
slug: Web/API/AudioWorklet
page-type: web-api-interface
tags:
  - API
  - Audio
  - AudioWorklet
  - Background
  - Custom
  - Interface
  - Low-latency
  - Reference
  - Web Audio API
  - Worklet
  - Zero-latency
  - latency
  - sound
browser-compat: api.AudioWorklet
---
{{APIRef("Web Audio API")}}{{securecontext_header}}

The **`AudioWorklet`** interface of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) is used to supply custom audio processing scripts that execute in a separate thread to provide very low latency audio processing.

The worklet's code is run in the {{domxref("AudioWorkletGlobalScope")}} global execution context, using a separate Web Audio thread which is shared by the worklet and other audio nodes.

Access the audio context's instance of `AudioWorklet` through the {{domxref("BaseAudioContext.audioWorklet")}} property.

{{InheritanceDiagram}}

## Properties

_The `AudioWorklet` interface does not define any properties of its own, but does inherit properties of {{domxref("Worklet")}}._

## Methods

_This interface inherits methods from {{domxref('Worklet')}}. The `AudioWorklet` interface does not define any methods of its own._

## Events

_`AudioWorklet` has no events to which it responds._

## Examples

See {{domxref("AudioWorkletNode")}} for complete examples of custom audio node creation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioWorkletGlobalScope")}} — the global execution context of an `AudioWorklet`
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Using AudioWorklet](/en-US/docs/Web/API/Web_Audio_API/Using_AudioWorklet)

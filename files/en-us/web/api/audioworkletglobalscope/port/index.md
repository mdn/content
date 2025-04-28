---
title: "AudioWorkletGlobalScope: port"
short-title: port
slug: Web/API/AudioWorkletGlobalScope/port
page-type: web-api-instance-property
browser-compat: api.AudioWorkletGlobalScope.port
---

{{APIRef("Web Audio API")}}

The **`port`** read-only property of the {{domxref("AudioWorkletGlobalScope")}} interface returns a {{domxref("MessagePort")}} object that can be used to send and receive messages between the main thread and the associated {{domxref("AudioWorklet")}}.

This allows for custom, asynchronous communication between code in the main thread and the global scope of an audio worklet, such as sending control data or global settings.

## Value

The {{domxref("MessagePort")}} object that is connecting the `AudioWorklet` and its associated `AudioWorkletGlobalScope`.

## Examples

See [`AudioWorkletNode.port`](/en-US/docs/Web/API/AudioWorkletNode/port#examples) for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Using AudioWorklet](/en-US/docs/Web/API/Web_Audio_API/Using_AudioWorklet)

---
title: "AudioWorklet: port"
short-title: port
slug: Web/API/AudioWorklet/port
page-type: web-api-instance-property
browser-compat: api.AudioWorklet.port
---

{{APIRef("Web Audio API")}}

The **`port`** read-only property of the {{domxref("AudioWorklet")}} interface returns a {{domxref("MessagePort")}} object that can be used to send and receive messages between the main thread and the associated {{domxref("AudioWorkletGlobalScope")}}.

This allows for custom, asynchronous communication between code in the main thread and the global scope of an audio worklet, such as receiving control data or global settings.

## Value

The {{domxref("MessagePort")}} object connecting the `AudioWorklet` and its associated `AudioWorkletGlobalScope`.

## Examples

See [`AudioWorkletNode.port`](/en-US/docs/Web/API/AudioWorkletNode/port#examples) for more examples.

### Using a port for global messages

In the following example, we can use `port.onmessage` to receive data and `port.postMessage` to send data:

```js
const context = new AudioContext();
// Load the module that contains worklet code
await context.audioWorklet.addModule("processor.js");

// Listener for messages from AudioWorkletGlobalScope
context.audioWorklet.port.onmessage = (event) => {
  console.log("Message from global worklet:", event.data);
};

// Set a global config, for example:
context.audioWorklet.port.postMessage({
  volume: 0.8,
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("AudioWorkletGlobalScope")}} — the global execution context of an `AudioWorklet`
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Using AudioWorklet](/en-US/docs/Web/API/Web_Audio_API/Using_AudioWorklet)

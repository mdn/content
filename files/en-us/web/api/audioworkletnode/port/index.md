---
title: AudioWorkletNode.port
slug: Web/API/AudioWorkletNode/port
page-type: web-api-instance-property
tags:
  - API
  - AudioWorkletNode
  - Property
  - Reference
  - Web Audio API
  - port
browser-compat: api.AudioWorkletNode.port
---
{{APIRef("Web Audio API")}}

The read-only **`port`** property of the
{{domxref("AudioWorkletNode")}} interface returns the associated
{{domxref("MessagePort")}}. It can be used to communicate between the node and its
associated {{domxref("AudioWorkletProcessor")}}.

> **Note:** The port at the other end of the channel is
> available under the {{domxref("AudioWorkletProcessor.port", "port")}} property of the
> processor.

## Value

The {{domxref("MessagePort")}} object that is connecting the
`AudioWorkletNode` and its associated `AudioWorkletProcessor`.

## Examples

To demonstrate bidirectional communication capabilities, we'll create an
`AudioWorkletProcessor`, which will output silence and respond to ping
requests from its `AudioWorkletNode`.

First, we need to define a custom `AudioWorkletProcessor`, and register it.
Note that this should be done in a separate file.

```js
// ping-pong-processor.js
class PingPongProcessor extends AudioWorkletProcessor {
  constructor (...args) {
    super(...args)
    this.port.onmessage = (e) => {
      console.log(e.data)
      this.port.postMessage('pong')
    }
  }
  process (inputs, outputs, parameters) {
    return true
  }
}

registerProcessor('ping-pong-processor', PingPongProcessor)
```

Now in our main scripts file we'll load the processor, create an instance of
`AudioWorkletNode` passing the name of the processor, and connect the node to
an audio graph.

```js
const audioContext = new AudioContext()
await audioContext.audioWorklet.addModule('ping-pong-processor.js')
const pingPongNode = new AudioWorkletNode(audioContext, 'ping-pong-processor')
// send the message containing 'ping' string
// to the AudioWorkletProcessor from the AudioWorkletNode every second
setInterval(() => pingPongNode.port.postMessage('ping'), 1000)
pingPongNode.port.onmessage = (e) => console.log(e.data)
pingPongNode.connect(audioContext.destination)
```

This will output `"ping"` and `"pong"` strings to the console
every second.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

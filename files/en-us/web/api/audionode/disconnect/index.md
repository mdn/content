---
title: "AudioNode: disconnect() method"
short-title: disconnect()
slug: Web/API/AudioNode/disconnect
page-type: web-api-instance-method
browser-compat: api.AudioNode.disconnect
---

{{ APIRef("Web Audio API") }}

The **`disconnect()`** method of the {{ domxref("AudioNode") }} interface lets you disconnect one or more nodes from the node on which the method is called.

## Syntax

```js-nolint
disconnect()
```

### Parameters

There are several versions of the `disconnect()` method, which accept different combinations of parameters to control which nodes to disconnect from. If no parameters are provided, all outgoing connections are disconnected.

- `destination` {{optional_inline}}
  - : An {{domxref("AudioNode")}} or {{domxref("AudioParam")}} specifying the node or nodes to disconnect from. If this value is an `AudioNode`, a single node is disconnected from, with any other, optional, parameters (`output` and/or `input`) further limiting which inputs and/or outputs should be disconnected. If this value is an `AudioParam`, then the connection to that `AudioParam` is terminated, and the node's contributions to that computed parameter become 0 going forward once the change takes effect.
- `output` {{optional_inline}}
  - : An index describing which output from the current `AudioNode` is to be disconnected. The index numbers are defined according to the number of output channels (see [Audio channels](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)).
- `input` {{optional_inline}}
  - : An index describing which input into the specified destination `AudioNode` is to be disconnected. The index numbers are defined according to the number of input channels (see [Audio channels](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)).

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if the value specified as `input` or `output` is invalid, referring to a node which doesn't exist or is outside the permitted range.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if the node on which `disconnect()` is called isn't connected to the specified `destination` node.

## Examples

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioCtx = new AudioContext();

const oscillator = audioCtx.createOscillator();
const gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

gainNode.disconnect();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

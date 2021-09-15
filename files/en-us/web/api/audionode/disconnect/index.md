---
title: AudioNode.disconnect()
slug: Web/API/AudioNode/disconnect
tags:
  - API
  - Audio
  - AudioNode
  - Disconnect
  - Method
  - Reference
  - Web Audio API
browser-compat: api.AudioNode.disconnect
---
{{ APIRef("Web Audio API") }}

The **`disconnect()`** method of the {{ domxref("AudioNode") }} interface lets you disconnect one or more nodes from the node on which the method is called.

## Syntax

```js
AudioNode.disconnect();

AudioNode.disconnect(output);

AudioNode.disconnect(destination);

AudioNode.disconnect(destination, output);

AudioNode.disconnect(destination, output, input);
```

### Return value

{{jsxref("undefined")}}

### Parameters

There are several versions of the `disconnect()` method, which accept different combinations of parameters to control which nodes to disconnect from. If no parameters are provided, all outgoing connections are disconnected.

- `destination` {{optional_inline}}
  - : An {{domxref("AudioNode")}} or {{domxref("AudioParam")}} specifying the node or nodes to disconnect from. If this value is an `AudioNode`, a single node is disconnected from, with any other, optional, parameters (`output` and/or `input`) further limiting which inputs and/or outputs should be disconnected. If this value is an `AudioParam`, then the connection to that `AudioParam` is terminated, and the node's contributions to that computed parameter become 0 going forward once the change takes effect. If no matching connection is found, an `InvalidAccessError` exception is thrown.
- `output` {{optional_inline}}
  - : An index describing which output from the current `AudioNode` is to be disconnected. The index numbers are defined according to the number of output channels (see [Audio channels](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)). If this parameter is out-of-bound, an `IndexSizeError` exception is thrown.
- `input` {{optional_inline}}
  - : An index describing which input into the specified destination `AudioNode` is to be disconnected. The index numbers are defined according to the number of input channels (see [Audio channels](/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)).  If this parameter is out-of-bound, an `IndexSizeError` exception is thrown.

### Exceptions

- `IndexSizeError`
  - : A value specified for `input` or `output` is invalid, referring to a node which doesn't exist or outside the permitted range.
- `InvalidAccessError`
  - : The node on which `disconnect()` was called isn't connected to the specified `destination` node.

## Example

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

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

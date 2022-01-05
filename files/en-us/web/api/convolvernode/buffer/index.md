---
title: ConvolverNode.buffer
slug: Web/API/ConvolverNode/buffer
tags:
  - API
  - Buffer
  - ConvolverNode
  - Property
  - Reference
  - Web Audio API
browser-compat: api.ConvolverNode.buffer
---
{{ APIRef("Web Audio API") }}

The **`buffer`** property of the {{ domxref("ConvolverNode") }} interface represents a mono, stereo, or 4-channel {{domxref("AudioBuffer")}} containing the (possibly multichannel) impulse response used by the `ConvolverNode` to create the reverb effect.

This is normally a simple recording of as-close-to-an-impulse as can be found in the space you want to model. For example, if you want to model the reverb in your bathroom, you might set up a microphone near the door to record the sound of a balloon pop or synthesized impulse from the sink. That audio recording could then be used as the buffer.

This _{{domxref("AudioBuffer")}}_ must have the same sample-rate as the `AudioContext` or an exception will be thrown. At the time when this attribute is set, the buffer and the state of the attribute will be used to configure the `ConvolverNode` with this impulse response having the given normalization. The initial value of this attribute is `null`.

## Syntax

```js
var audioCtx = new AudioContext();
var convolver = audioCtx.createConvolver();
convolver.buffer = myAudioBuffer;
```

### Value

An {{domxref("AudioBuffer")}}.

## Example

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var convolver = audioCtx.createConvolver();

  ...

// grab audio track via XHR for convolver node

var soundSource, concertHallBuffer;

ajaxRequest = new XMLHttpRequest();
ajaxRequest.open('GET', 'concert-crowd.ogg', true);
ajaxRequest.responseType = 'arraybuffer';

ajaxRequest.onload = function() {
  var audioData = ajaxRequest.response;
  audioCtx.decodeAudioData(audioData, function(buffer) {
      concertHallBuffer = buffer;
      soundSource = audioCtx.createBufferSource();
      soundSource.buffer = concertHallBuffer;
    }, function(e){"Error with decoding audio data" + e.err});
}

ajaxRequest.send();

  ...

convolver.buffer = concertHallBuffer;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

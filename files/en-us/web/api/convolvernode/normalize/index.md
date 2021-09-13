---
title: ConvolverNode.normalize
slug: Web/API/ConvolverNode/normalize
tags:
  - API
  - ConvolverNode
  - Property
  - Reference
  - Web Audio API
  - parent
browser-compat: api.ConvolverNode.normalize
---
{{ APIRef("Web Audio API") }}

The `normalize` property of the {{ domxref("ConvolverNode") }} interface
is a boolean that controls whether the impulse response from the buffer will be
scaled by an equal-power normalization when the `buffer` attribute is set,
or not.

Its default value is `true` in order to achieve a more uniform output
level from the convolver, when loaded with diverse impulse responses. If normalize is
set to `false`, then the convolution will be rendered with no
pre-processing/scaling of the impulse response. Changes to this value do not take
effect until the next time the `buffer` attribute is set.

## Syntax

```js
var audioCtx = new AudioContext();
var convolver = audioCtx.createConvolver();
convolver.normalize = false;
```

### Value

A boolean.

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

convolver.normalize = false; // must be set before the buffer, to take effect
convolver.buffer = concertHallBuffer;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

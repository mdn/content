---
title: "ConvolverNode: normalize property"
short-title: normalize
slug: Web/API/ConvolverNode/normalize
page-type: web-api-instance-property
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

## Value

A boolean.

## Examples

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const convolver = audioCtx.createConvolver();

// …

// grab audio track via XHR for convolver node

let soundSource;
let concertHallBuffer;

ajaxRequest = new XMLHttpRequest();
ajaxRequest.open("GET", "concert-crowd.ogg", true);
ajaxRequest.responseType = "arraybuffer";

ajaxRequest.onload = () => {
  let audioData = ajaxRequest.response;
  audioCtx.decodeAudioData(
    audioData,
    (buffer) => {
      concertHallBuffer = buffer;
      soundSource = audioCtx.createBufferSource();
      soundSource.buffer = concertHallBuffer;
    },
    (e) => console.error(`Error with decoding audio data: ${e.err}`),
  );
};

ajaxRequest.send();

// …

convolver.normalize = false; // must be set before the buffer, to take effect
convolver.buffer = concertHallBuffer;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

---
title: BaseAudioContext.createConvolver()
slug: Web/API/BaseAudioContext/createConvolver
page-type: web-api-instance-method
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - Method
  - Reference
  - Web Audio API
  - createConvolver
browser-compat: api.BaseAudioContext.createConvolver
---
{{ APIRef("Web Audio API") }}

The `createConvolver()` method of the {{ domxref("BaseAudioContext") }}
interface creates a {{ domxref("ConvolverNode") }}, which is commonly used to apply
reverb effects to your audio. See the [spec definition of Convolution](https://webaudio.github.io/web-audio-api/#background-3) for more information.

> **Note:** The {{domxref("ConvolverNode.ConvolverNode", "ConvolverNode()")}}
> constructor is the recommended way to create a {{domxref("ConvolverNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js
createConvolver()
```

### Parameters

None.

### Return value

A {{domxref("ConvolverNode")}}.

## Examples

The following example shows basic usage of an AudioContext to create a convolver node.
The basic premise is that you create an AudioBuffer containing a sound sample to be used
as an ambience to shape the convolution (called the _impulse response_,) and
apply that to the convolver. The example below uses a short sample of a concert hall
crowd, so the reverb effect applied is really deep and echoey.

For applied examples/information, check out our [Voice-change-O-matic demo](https://mdn.github.io/voice-change-o-matic/) ([see app.js](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js) for relevant code).

```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const convolver = audioCtx.createConvolver();

// …

// grab audio track via XHR for convolver node

let soundSource, concertHallBuffer;

ajaxRequest = new XMLHttpRequest();
ajaxRequest.open('GET', 'concert-crowd.ogg', true);
ajaxRequest.responseType = 'arraybuffer';

ajaxRequest.onload = () => {
  const audioData = ajaxRequest.response;
  audioCtx.decodeAudioData(audioData, (buffer) => {
      concertHallBuffer = buffer;
      soundSource = audioCtx.createBufferSource();
      soundSource.buffer = concertHallBuffer;
    }, (e) => console.error(`Error with decoding audio data: ${e.err}`));
}

ajaxRequest.send();

// …

convolver.buffer = concertHallBuffer;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

---
title: BaseAudioContext.createStereoPanner()
slug: Web/API/BaseAudioContext/createStereoPanner
page-type: web-api-instance-method
tags:
  - API
  - AudioContext
  - BaseAudioContext
  - Media
  - Method
  - Reference
  - Web Audio API
  - createStereoPanner
browser-compat: api.BaseAudioContext.createStereoPanner
---
{{ APIRef("Web Audio API") }}

The `createStereoPanner()` method of the {{ domxref("BaseAudioContext") }} interface creates a {{ domxref("StereoPannerNode") }}, which can be used to apply
stereo panning to an audio source.
It positions an incoming audio stream in a stereo image using a [low-cost panning algorithm](https://webaudio.github.io/web-audio-api/#stereopanner-algorithm).

> **Note:** The {{domxref("StereoPannerNode.StereoPannerNode", "StereoPannerNode()")}}
> constructor is the recommended way to create a {{domxref("StereoPannerNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js
createStereoPanner()
```

### Parameters

None.

### Return value

A {{domxref("StereoPannerNode")}}.

## Examples

In our [StereoPannerNode example](https://mdn.github.io/webaudio-examples/stereo-panner-node/) ([see source code](https://github.com/mdn/webaudio-examples/tree/master/stereo-panner-node)) HTML we have a simple {{htmlelement("audio")}} element along with a
slider {{HTMLElement("input")}} to increase and decrease pan value. In the JavaScript we
create a {{domxref("MediaElementAudioSourceNode")}} and a
{{domxref("StereoPannerNode")}}, and connect the two together using the
`connect()` method. We then use an `oninput` event handler to
change the value of the {{domxref("StereoPannerNode.pan")}} parameter and update the pan
value display when the slider is moved.

Moving the slider left and right while the music is playing pans the music across to
the left and right speakers of the output, respectively.

```js
const audioCtx = new AudioContext();
const myAudio = document.querySelector('audio');

const panControl = document.querySelector('.panning-control');
const panValue = document.querySelector('.panning-value');

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// Create a stereo panner
const panNode = audioCtx.createStereoPanner();

// Event handler function to increase panning to the right and left
// when the slider is moved

panControl.oninput = () => {
  panNode.pan.setValueAtTime(panControl.value, audioCtx.currentTime);
  panValue.innerHTML = panControl.value;
}

// connect the MediaElementAudioSourceNode to the panNode
// and the panNode to the destination, so we can play the
// music and adjust the panning using the controls
source.connect(panNode);
panNode.connect(audioCtx.destination);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

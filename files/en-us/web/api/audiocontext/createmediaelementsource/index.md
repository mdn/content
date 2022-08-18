---
title: AudioContext.createMediaElementSource()
slug: Web/API/AudioContext/createMediaElementSource
page-type: web-api-instance-method
tags:
  - API
  - AudioContext
  - Method
  - Reference
  - Web Audio API
  - createMediaElementSource
browser-compat: api.AudioContext.createMediaElementSource
---
{{ APIRef("Web Audio API") }}

The `createMediaElementSource()` method of the {{ domxref("AudioContext") }} Interface is used to create a new {{ domxref("MediaElementAudioSourceNode") }} object, given an existing HTML {{htmlelement("audio")}} or {{htmlelement("video")}} element, the audio from which can then be played and manipulated.

For more details about media element audio source nodes, check out the {{ domxref("MediaElementAudioSourceNode") }} reference page.

## Syntax

```js
createMediaElementSource(myMediaElement)
```

### Parameters

- `myMediaElement`
  - : An {{domxref("HTMLMediaElement")}} object that you want to feed into an audio processing graph to manipulate.

### Return value

A {{domxref("MediaElementAudioSourceNode")}}.

## Examples

This simple example creates a source from an {{htmlelement("audio") }} element using `createMediaElementSource()`, then passes the audio through a {{ domxref("GainNode") }} before feeding it into the {{ domxref("AudioDestinationNode") }} for playback. When the mouse pointer is moved, the `updatePage()` function is invoked, which calculates the current gain as a ratio of mouse Y position divided by overall window height. You can therefore increase and decrease the volume of the playing music by moving the mouse pointer up and down.

> **Note:** You can also [view this example running live](https://mdn.github.io/webaudio-examples/media-source-buffer/), or [view the source](https://github.com/mdn/webaudio-examples/tree/master/media-source-buffer).

```js
const audioCtx = new AudioContext();
const myAudio = document.querySelector('audio');

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node
const gainNode = audioCtx.createGain();

// Create variables to store mouse pointer Y coordinate
// and HEIGHT of screen
let curY;
const HEIGHT = window.innerHeight;

// Get new mouse pointer coordinates when mouse is moved
// then set new gain value
document.onmousemove = updatePage;

function updatePage(e) {
  curY = e.pageY;
  gainNode.gain.value = curY / HEIGHT;
}

// Connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination, so we can play the
// music and adjust the volume using the mouse cursor
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

> **Note:** As a consequence of calling `createMediaElementSource()`, audio playback from the {{domxref("HTMLMediaElement")}} will be re-routed into the processing graph of the AudioContext. So playing/pausing the media can still be done through the media element API and the player controls.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

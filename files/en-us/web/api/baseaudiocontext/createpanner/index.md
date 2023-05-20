---
title: "BaseAudioContext: createPanner() method"
short-title: createPanner()
slug: Web/API/BaseAudioContext/createPanner
page-type: web-api-instance-method
browser-compat: api.BaseAudioContext.createPanner
---

{{ APIRef("Web Audio API") }}

The `createPanner()` method of the {{ domxref("BaseAudioContext") }}
Interface is used to create a new {{domxref("PannerNode")}}, which is used to
spatialize an incoming audio stream in 3D space.

The panner node is spatialized in relation to the AudioContext's
{{domxref("AudioListener") }} (defined by the {{domxref("BaseAudioContext/listener", "AudioContext.listener")}}
attribute), which represents the position and orientation of the person listening to the
audio.

> **Note:** The {{domxref("PannerNode.PannerNode", "PannerNode()")}}
> constructor is the recommended way to create a {{domxref("PannerNode")}}; see
> [Creating an AudioNode](/en-US/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createPanner()
```

### Parameters

None.

### Return value

A {{domxref("PannerNode")}}.

## Examples

In the following example, you can see an example of how the `createPanner()`
method, {{domxref("AudioListener")}} and {{domxref("PannerNode")}} would be used to
control audio spatialization. Generally you will define the position in 3D space that
your audio listener and panner (source) occupy initially, and then update the position
of one or both of these as the application is used. You might be moving a character
around inside a game world for example, and wanting delivery of audio to change
realistically as your character moves closer to or further away from a music player such
as a stereo. In the example you can see this being controlled by the functions
`moveRight()`, `moveLeft()`, etc., which set new values for the
panner position via the `PositionPanner()` function.

To see a complete implementation, check out our [panner-node example](https://mdn.github.io/webaudio-examples/panner-node/)
([view the source code](https://github.com/mdn/webaudio-examples/tree/master/panner-node)) — this demo transports you to the 2.5D "Room of metal", where you can
play a track on a boom box and then walk around the boom box to see how the sound
changes!

Note how we have used some feature detection to either give the browser the newer
property values (like {{domxref("AudioListener.forwardX")}}) for setting position, etc.
if it supports those, or older methods (like
{{domxref("AudioListener.setOrientation()")}}) if it still supports those but not the
new properties.

```js
// set up listener and panner position information
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const xPos = Math.floor(WIDTH / 2);
const yPos = Math.floor(HEIGHT / 2);
const zPos = 295;

// define other variables

const audioCtx = new AudioContext();

const panner = audioCtx.createPanner();
panner.panningModel = "HRTF";
panner.distanceModel = "inverse";
panner.refDistance = 1;
panner.maxDistance = 10000;
panner.rolloffFactor = 1;
panner.coneInnerAngle = 360;
panner.coneOuterAngle = 0;
panner.coneOuterGain = 0;

if (panner.orientationX) {
  panner.orientationX.setValueAtTime(1, audioCtx.currentTime);
  panner.orientationY.setValueAtTime(0, audioCtx.currentTime);
  panner.orientationZ.setValueAtTime(0, audioCtx.currentTime);
} else {
  panner.setOrientation(1, 0, 0);
}

const listener = audioCtx.listener;

if (listener.forwardX) {
  listener.forwardX.setValueAtTime(0, audioCtx.currentTime);
  listener.forwardY.setValueAtTime(0, audioCtx.currentTime);
  listener.forwardZ.setValueAtTime(-1, audioCtx.currentTime);
  listener.upX.setValueAtTime(0, audioCtx.currentTime);
  listener.upY.setValueAtTime(1, audioCtx.currentTime);
  listener.upZ.setValueAtTime(0, audioCtx.currentTime);
} else {
  listener.setOrientation(0, 0, -1, 0, 1, 0);
}

let source;

const play = document.querySelector(".play");
const stop = document.querySelector(".stop");

const boomBox = document.querySelector(".boom-box");

const listenerData = document.querySelector(".listener-data");
const pannerData = document.querySelector(".panner-data");

leftBound = -xPos + 50;
rightBound = xPos - 50;

xIterator = WIDTH / 150;

// listener will always be in the same place for this demo

if (listener.positionX) {
  listener.positionX.setValueAtTime(xPos, audioCtx.currentTime);
  listener.positionY.setValueAtTime(yPos, audioCtx.currentTime);
  listener.positionZ.setValueAtTime(300, audioCtx.currentTime);
} else {
  listener.setPosition(xPos, yPos, 300);
}

listenerData.textContent = `Listener data: X ${xPos} Y ${yPos} Z 300`;

// panner will move as the boombox graphic moves around on the screen
function positionPanner() {
  if (panner.positionX) {
    panner.positionX.setValueAtTime(xPos, audioCtx.currentTime);
    panner.positionY.setValueAtTime(yPos, audioCtx.currentTime);
    panner.positionZ.setValueAtTime(zPos, audioCtx.currentTime);
  } else {
    panner.setPosition(xPos, yPos, zPos);
  }
  pannerData.textContent = `Panner data: X ${xPos} Y ${yPos} Z ${zPos}`;
}
```

> **Note:** In terms of working out what position values to apply to the
> listener and panner, to make the sound appropriate to what the visuals are doing on
> screen, there is quite a bit of math involved, but you will soon get used to it with a
> bit of experimentation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

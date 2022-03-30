---
title: AudioParam.setValueAtTime()
slug: Web/API/AudioParam/setValueAtTime
tags:
  - API
  - AudioParam
  - Method
  - Reference
  - Web Audio API
  - setValueAtTime
browser-compat: api.AudioParam.setValueAtTime
---
{{ APIRef("Web Audio API") }}

The `setValueAtTime()` method of the
{{domxref("AudioParam")}} interface schedules an instant change to the
`AudioParam` value at a precise time, as measured against
{{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}. The new value is given in the value parameter.

## Syntax

```js
var AudioParam = AudioParam.setValueAtTime(value, startTime)
```

### Parameters

- value
  - : A floating point number representing the value the AudioParam will change to at the
    given time.
- startTime
  - : A double representing the time (in seconds) after the {{domxref("AudioContext")}}
    was first created that the change in value will happen. A {{jsxref("TypeError")}} is
    thrown if this value is negative.

### Returns

A reference to this `AudioParam` object. In some browsers older
implementations of this interface return {{jsxref('undefined')}}.

## Examples

This simple example features a media element source with two control buttons (see our
[webaudio-examples
repo](https://github.com/mdn/webaudio-examples/blob/master/audio-param/index.html) for the source code, or [view the example
live](https://mdn.github.io/webaudio-examples/audio-param/)). When the buttons are pressed, the `currGain` variable is
incremented/decremented by 0.25, then the `setValueAtTime()` method is used
to set the gain value equal to `currGain`, one second from now
(`audioCtx.currentTime + 1`.)

```js
// create audio context
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

// set basic variables for example
var myAudio = document.querySelector('audio');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

var targetAtTimePlus = document.querySelector('.set-target-at-time-plus');
var targetAtTimeMinus = document.querySelector('.set-target-at-time-minus');

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
var source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node and set it's gain value to 0.5
var gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
var currGain = gainNode.gain.value;

// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// set buttons to do something onclick
targetAtTimePlus.onclick = function() {
  currGain += 0.25;
  gainNode.gain.setValueAtTime(currGain, audioCtx.currentTime + 1);
}

targetAtTimeMinus.onclick = function() {
  currGain -= 0.25;
  gainNode.gain.setValueAtTime(currGain, audioCtx.currentTime + 1);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

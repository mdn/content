---
title: AudioParam.exponentialRampToValueAtTime()
slug: Web/API/AudioParam/exponentialRampToValueAtTime
tags:
  - API
  - AudioParam
  - Method
  - Reference
  - Web Audio API
  - exponentialRampToValueAtTime
browser-compat: api.AudioParam.exponentialRampToValueAtTime
---
{{ APIRef("Web Audio API") }}

The **`exponentialRampToValueAtTime()`** method of the {{
    domxref("AudioParam") }} Interface schedules a gradual exponential change in the value
of the {{domxref("AudioParam")}}. The change starts at the time specified for the
_previous_ event, follows an exponential ramp to the new value given in the
`value` parameter, and reaches the new value at the time given in the
`endTime` parameter.

> **Note:** Exponential ramps are considered more useful when changing
> frequencies or playback rates than linear ramps because of the way the human ear
> works.

## Syntax

```js
var AudioParam = AudioParam.exponentialRampToValueAtTime(value, endTime)
```

### Parameters

- value
  - : A floating point number representing the value the `AudioParam` will ramp
    to by the given time.
- endTime
  - : A double representing the exact time (in seconds) after the ramping starts that the
    changing of the value will stop.

### Returns

A reference to this `AudioParam` object. In some browsers older
implementations of this interface return {{jsxref('undefined')}}.

## Examples

In this example, we have a media source with two control buttons (see the [audio-param
repo](https://github.com/mdn/webaudio-examples/tree/master/audio-param) for the source code, or [view the example
live](https://mdn.github.io/webaudio-examples/audio-param/).) When these buttons are pressed, `exponentialRampToValueAtTime()`
is used to fade the gain value up to 1.0, and down to 0, respectively. This is pretty
useful for fade in/fade out effects:

```js
// create audio context
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

// set basic variables for example
var myAudio = document.querySelector('audio');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

var expRampPlus = document.querySelector('.exp-ramp-plus');
var expRampMinus = document.querySelector('.exp-ramp-minus');

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
var source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node and set its gain value to 0.5
var gainNode = audioCtx.createGain();

// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// set buttons to do something onclick
expRampPlus.onclick = function() {
  gainNode.gain.exponentialRampToValueAtTime(1.0, audioCtx.currentTime + 2);
}

expRampMinus.onclick = function() {
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 2);
}
```

> **Note:** A value of 0.01 was used for the value to ramp down to in the
> last function rather than 0, as an _invalid or illegal string_ error is thrown
> if 0 is used — the value needs to be positive.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

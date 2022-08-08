---
title: AudioParam.linearRampToValueAtTime()
slug: Web/API/AudioParam/linearRampToValueAtTime
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - AudioParam
  - Method
  - Reference
  - Web Audio API
  - linearRampToValueAtTime
browser-compat: api.AudioParam.linearRampToValueAtTime
---
{{ APIRef("Web Audio API") }}

The `linearRampToValueAtTime()` method of the {{ domxref("AudioParam") }}
Interface schedules a gradual linear change in the value of the
`AudioParam`. The change starts at the time specified for the
_previous_ event, follows a linear ramp to the new value given in the
`value` parameter, and reaches the new value at the time given in the
`endTime` parameter.

## Syntax

```js
linearRampToValueAtTime(value, endTime)
```

### Parameters

- `value`
  - : A floating point number representing the value the `AudioParam` will ramp
    to by the given time.
- `endTime`
  - : A double representing the exact time (in seconds) after the ramping starts that the
    changing of the value will stop.

### Return value

A reference to this `AudioParam` object. In some browsers older
implementations of this interface return {{jsxref('undefined')}}.

## Examples

In this example, we have a media source with two control buttons (see the [audio-param repo](https://github.com/mdn/webaudio-examples/tree/master/audio-param) for the source code, or [view the example live](https://mdn.github.io/webaudio-examples/audio-param/).) When these buttons are pressed, `linearRampToValueAtTime()` is
used to fade the gain value up to 1.0, and down to 0, respectively. This is pretty
useful for fade in/fade out effects, although {{
  domxref("AudioParam.exponentialRampToValueAtTime()") }} is often said to be a bit more
natural.

```js
// create audio context
const audioCtx = new AudioContext();

// set basic variables for example
const myAudio = document.querySelector('audio');

const linearRampPlus = document.querySelector('.linear-ramp-plus');
const linearRampMinus = document.querySelector('.linear-ramp-minus');

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node and set it's gain value to 0.5
const gainNode = audioCtx.createGain();

// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// set buttons to do something onclick
linearRampPlus.onclick = () => {
  gainNode.gain.linearRampToValueAtTime(1.0, audioCtx.currentTime + 2);
}

linearRampMinus.onclick = () => {
  gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

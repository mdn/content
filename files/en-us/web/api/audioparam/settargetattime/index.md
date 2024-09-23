---
title: "AudioParam: setTargetAtTime() method"
short-title: setTargetAtTime()
slug: Web/API/AudioParam/setTargetAtTime
page-type: web-api-instance-method
browser-compat: api.AudioParam.setTargetAtTime
---

{{ APIRef("Web Audio API") }}

The `setTargetAtTime()` method of the
{{domxref("AudioParam")}} interface schedules the start of a gradual change to the
`AudioParam` value. This is useful for decay or release portions of ADSR
envelopes.

## Syntax

```js-nolint
setTargetAtTime(target, startTime, timeConstant)
```

### Parameters

- `target`
  - : The value the parameter will start to transition towards at the given start time.
- `startTime`
  - : The time that the exponential transition will begin, in the same time coordinate
    system as {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}. If it is less than or equal to
    `AudioContext.currentTime`, the parameter will start changing immediately.
- `timeConstant`
  - : The time-constant value, given in seconds, of an exponential approach to the target
    value. The larger this value is, the slower the transition will be.

### Return value

A reference to this `AudioParam` object. Some older browser implementations
of this interface return {{jsxref('undefined')}}.

## Description

The change starts at the time specified in `startTime` and exponentially
moves towards the value given by the `target` parameter. The decay rate as
defined by the `timeConstant` parameter is exponential; therefore the value
will never reach `target` completely, but after each timestep of length
`timeConstant`, the value will have approached `target` by
another <math><semantics><mrow><mn>1</mn><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup><mo>≈</mo><mn>63.2</mn><mtext>%</mtext></mrow><annotation encoding="TeX">1 - e^{-1} \approx 63.2%</annotation></semantics></math>. For the complete formula (which uses a first-order linear continuous
time-invariant system), check the [Web Audio specification](https://webaudio.github.io/web-audio-api/#dom-audioparam-settargetattime).

If you absolutely need to reach the target value by a specific time, you can use
{{domxref("AudioParam.exponentialRampToValueAtTime()")}}. However, for mathematical
reasons, that method does not work if the current value or the target value is
`0`.

### Choosing a good `timeConstant`

As mentioned above, the value changes exponentially, with each
`timeConstant` bringing you another 63.2% toward the target value. You don't
have to worry about reaching the target value; once you are close enough, any further
changes will be imperceptible to a human listener.

Depending on your use case, getting 95% toward the target value may already be enough;
in that case, you could set `timeConstant` to one third of the desired
duration.

For more details, check the following table on how the value changes from 0% to 100% as
the time progresses.

| Time since `startTime` | Value                                                       |
| ---------------------- | ----------------------------------------------------------- |
| `0 * timeConstant`     | 0%                                                          |
| `0.5 * timeConstant`   | 39.3%                                                       |
| `1 * timeConstant`     | 63.2%                                                       |
| `2 * timeConstant`     | 86.5%                                                       |
| `3 * timeConstant`     | 95.0%                                                       |
| `4 * timeConstant`     | 98.2%                                                       |
| `5 * timeConstant`     | 99.3%                                                       |
| `n * timeConstant`     | <math><semantics><mrow><mn>1</mn></mrow></semantics></math> |

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mn>1</mn><mo>-</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>n</mi></mrow></msup></mrow><annotation encoding="TeX">1 - e^{-n}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

## Examples

In this example, we have a media source with two control buttons (see the [webaudio-examples repo](https://github.com/mdn/webaudio-examples/blob/main/audio-param/index.html) for the source code, or [view the example live](https://mdn.github.io/webaudio-examples/audio-param/).) When these buttons are pressed, `setTargetAtTime()` is used to
fade the gain value up to 1.0, and down to 0, respectively, with the effect starting
after 1 second, and the length of time the effect lasts being controlled by the
timeConstant.

```js
// create audio context
const audioCtx = new AudioContext();

// set basic variables for example
const myAudio = document.querySelector("audio");

const atTimePlus = document.querySelector(".at-time-plus");
const atTimeMinus = document.querySelector(".at-time-minus");

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
const source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node and set its gain value to 0.5
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
let currGain = gainNode.gain.value;

// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// set buttons to do something onclick
atTimePlus.onclick = () => {
  currGain = 1.0;
  gainNode.gain.setTargetAtTime(1.0, audioCtx.currentTime + 1, 0.5);
};

atTimeMinus.onclick = () => {
  currGain = 0;
  gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + 1, 0.5);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

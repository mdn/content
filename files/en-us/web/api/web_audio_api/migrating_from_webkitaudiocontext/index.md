---
title: Migrating from webkitAudioContext
slug: Web/API/Web_Audio_API/Migrating_from_webkitAudioContext
page-type: guide
---

{{DefaultAPISidebar("Web Audio API")}}

In this article, we cover the differences in Web Audio API since it was first implemented in WebKit and how to update your code to use the modern Web Audio API.

The Web Audio standard was first implemented in [WebKit](https://webkit.org/), and the implementation was built in parallel with the work on the [specification](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html) of the API. As the specification evolved and changes were made to the spec, some of the old implementation pieces were not removed from the WebKit (and Blink) implementations due to backwards compatibility reasons.

New engines implementing the Web Audio spec (such as Gecko) will only implement the official, final version of the specification, which means that code using `webkitAudioContext` or old naming conventions in the Web Audio specification may not immediately work out of the box in a compliant Web Audio implementation. This article attempts to summarize the areas where developers are likely to encounter these problems and provide examples on how to port such code to standards based {{domxref("AudioContext")}}, which will work across different browser engines.

> **Note:** There is a library called [webkitAudioContext monkeypatch](https://github.com/cwilso/webkitAudioContext-MonkeyPatch), which automatically fixes some of these changes to make most code targeting `webkitAudioContext` to work on the standards based `AudioContext` out of the box, but it currently doesn't handle all of the cases below. Please consult the [README file](https://github.com/cwilso/webkitAudioContext-MonkeyPatch/blob/gh-pages/README.md) for that library to see a list of APIs that are automatically handled by it.

## Changes to the creator methods

Three of the creator methods on `webkitAudioContext` have been renamed in {{domxref("AudioContext")}}.

- `createGainNode()` has been renamed to {{domxref("createGain")}}.
- `createDelayNode()` has been renamed to {{domxref("createDelay")}}.
- `createJavaScriptNode()` has been renamed to {{domxref("createScriptProcessor")}}.

These are simple renames that were made in order to improve the consistency of these method names on {{domxref("AudioContext")}}. If your code uses either of these names, like in the example below:

```js
// Old method names
const gain = context.createGainNode();
const delay = context.createDelayNode();
const js = context.createJavaScriptNode(1024);
```

you can rename the methods to look like this:

```js
// New method names
const gain = context.createGain();
const delay = context.createDelay();
const js = context.createScriptProcessor(1024);
```

The semantics of these methods remain the same in the renamed versions.

## Changes to starting and stopping nodes

In `webkitAudioContext`, there are two ways to start and stop {{domxref("AudioBufferSourceNode")}} and {{domxref("OscillatorNode")}}: the `noteOn()` and `noteOff()` methods, and the `start()` and `stop()` methods. ({{domxref("AudioBufferSourceNode")}} has yet another way of starting output: the `noteGrainOn()` method.) The `noteOn()`/`noteGrainOn()`/`noteOff()` methods were the original way to start/stop output in these nodes, and in the newer versions of the specification, the `noteOn()` and `noteGrainOn()` methods were consolidated into a single `start()` method, and the `noteOff()` method was renamed to the `stop()` method.

In order to port your code, you can just rename the method that you're using. For example, if you have code like the below:

```js
const osc = context.createOscillator();
osc.noteOn(1);
osc.noteOff(1.5);

const src = context.createBufferSource();
src.noteGrainOn(1, 0.25);
src.noteOff(2);
```

you can change it like this in order to port it to the standard AudioContext API:

```js
const osc = context.createOscillator();
osc.start(1);
osc.stop(1.5);

const src = context.createBufferSource();
src.start(1, 0.25);
src.stop(2);
```

## Remove synchronous buffer creation

In the old WebKit implementation of Web Audio, there were two versions of `createBuffer()`, one which created an initially empty buffer, and one which took an existing {{jsxref("ArrayBuffer")}} containing encoded audio, decoded it and returned the result in the form of an {{domxref("AudioBuffer")}}. The latter version of `createBuffer()` was potentially expensive, because it had to decode the audio buffer synchronously, and with the buffer being arbitrarily large, it could take a lot of time for this method to complete its work, and no other part of your web page's code could execute in the mean time.

Because of these problems, this version of the `createBuffer()` method has been removed, and you should use the asynchronous `decodeAudioData()` method instead.

The example below shows old code which downloads an audio file over the network, and then decoded it using `createBuffer()`:

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/path/to/audio.ogg", true);
xhr.responseType = "arraybuffer";
xhr.send();
xhr.onload = () => {
  const decodedBuffer = context.createBuffer(xhr.response, false);
  if (decodedBuffer) {
    // Decoding was successful, do something useful with the audio buffer
  } else {
    alert("Decoding the audio buffer failed");
  }
};
```

Converting this code to use `decodeAudioData()` is relatively simple, as can be seen below:

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/path/to/audio.ogg", true);
xhr.responseType = "arraybuffer";
xhr.send();
xhr.onload = () => {
  context.decodeAudioData(
    xhr.response,
    (decodedBuffer) => {
      // Decoding was successful, do something useful with the audio buffer
    },
    () => {
      alert("Decoding the audio buffer failed");
    },
  );
};
```

Note that the `decodeAudioData()` method is asynchronous, which means that it will return immediately, and then when the decoding finishes, one of the success or failure callback functions will get called depending on whether the audio decoding was successful. This means that you may need to restructure your code to run the part which happened after the `createBuffer()` call in the success callback, as you can see in the example above.

## Renaming of AudioParam.setTargetValueAtTime

The `setTargetValueAtTime()` method on the {{domxref("AudioParam")}} interface has been renamed to `setTargetAtTime()`. This is also a simple rename to improve the understandability of the API, and the semantics of the method are the same. If your code is using `setTargetValueAtTime()`, you can rename it to use `setTargetAtTime()`. For example, if we have code that looks like this:

```js
const gainNode = context.createGain();
gainNode.gain.setTargetValueAtTime(0.0, 10.0, 1.0);
```

you can rename the method, and be compliant with the standard, like so:

```js
const gainNode = context.createGain();
gainNode.gain.setTargetAtTime(0.0, 10.0, 1.0);
```

## Enumerated values that changed

The original `webkitAudioContext` API used C-style number based enumerated values in the API. Those values have since been changed to use the Web IDL based enumerated values, which should be familiar because they are similar to things like the {{domxref("HTMLInputElement")}} property {{domxref("HTMLInputElement.type", "type")}}.

### OscillatorNode.type

{{domxref("OscillatorNode")}}'s type property has been changed to use Web IDL enums. Old code using `webkitAudioContext` can be ported to standards based {{domxref("AudioContext")}} like below:

```js
// Old webkitAudioContext code:
const osc = context.createOscillator();
osc.type = osc.SINE; // sine waveform
osc.type = osc.SQUARE; // square waveform
osc.type = osc.SAWTOOTH; // sawtooth waveform
osc.type = osc.TRIANGLE; // triangle waveform
osc.setWaveTable(table);
const isCustom = osc.type === osc.CUSTOM; // isCustom will be true
```

```js
// New standard AudioContext code:
const osc = context.createOscillator();
osc.type = "sine"; // sine waveform
osc.type = "square"; // square waveform
osc.type = "sawtooth"; // sawtooth waveform
osc.type = "triangle"; // triangle waveform
osc.setPeriodicWave(table); // Note: setWaveTable has been renamed to setPeriodicWave!
const isCustom = osc.type === "custom"; // isCustom will be true
```

### BiquadFilterNode.type

{{domxref("BiquadFilterNode")}}'s type property has been changed to use Web IDL enums. Old code using `webkitAudioContext` can be ported to standards based {{domxref("AudioContext")}} like below:

```js
// Old webkitAudioContext code:
const filter = context.createBiquadFilter();
filter.type = filter.LOWPASS; // lowpass filter
filter.type = filter.HIGHPASS; // highpass filter
filter.type = filter.BANDPASS; // bandpass filter
filter.type = filter.LOWSHELF; // lowshelf filter
filter.type = filter.HIGHSHELF; // highshelf filter
filter.type = filter.PEAKING; // peaking filter
filter.type = filter.NOTCH; // notch filter
filter.type = filter.ALLPASS; // allpass filter
```

```js
// New standard AudioContext code:
const filter = context.createBiquadFilter();
filter.type = "lowpass"; // lowpass filter
filter.type = "highpass"; // highpass filter
filter.type = "bandpass"; // bandpass filter
filter.type = "lowshelf"; // lowshelf filter
filter.type = "highshelf"; // highshelf filter
filter.type = "peaking"; // peaking filter
filter.type = "notch"; // notch filter
filter.type = "allpass"; // allpass filter
```

### PannerNode.panningModel

{{domxref("PannerNode")}}'s panningModel property has been changed to use Web IDL enums. Old code using `webkitAudioContext` can be ported to standards based {{domxref("AudioContext")}} like below:

```js
// Old webkitAudioContext code:
const panner = context.createPanner();
panner.panningModel = panner.EQUALPOWER; // equalpower panning
panner.panningModel = panner.HRTF; // HRTF panning
```

```js
// New standard AudioContext code:
const panner = context.createPanner();
panner.panningModel = "equalpower"; // equalpower panning
panner.panningModel = "HRTF"; // HRTF panning
```

### PannerNode.distanceModel

{{domxref("PannerNode")}}'s `distanceModel` property has been changed to use Web IDL enums. Old code using `webkitAudioContext` can be ported to standards based {{domxref("AudioContext")}} like below:

```js
// Old webkitAudioContext code:
const panner = context.createPanner();
panner.distanceModel = panner.LINEAR_DISTANCE; // linear distance model
panner.distanceModel = panner.INVERSE_DISTANCE; // inverse distance model
panner.distanceModel = panner.EXPONENTIAL_DISTANCE; // exponential distance model
```

```js
// Mew standard AudioContext code:
const panner = context.createPanner();
panner.distanceModel = "linear"; // linear distance model
panner.distanceModel = "inverse"; // inverse distance model
panner.distanceModel = "exponential"; // exponential distance model
```

## Gain control moved to its own node type

The Web Audio standard now controls all gain using the {{domxref("GainNode")}}. Instead of setting a `gain` property directly on an audio source, you connect the source to a gain node and then control the gain using that node's `gain` parameter.

### AudioBufferSourceNode

The `gain` attribute of {{domxref("AudioBufferSourceNode")}} has been removed. The same functionality can be achieved by connecting the {{domxref("AudioBufferSourceNode")}} to a gain node. See the following example:

```js
// Old webkitAudioContext code:
const src = context.createBufferSource();
src.buffer = someBuffer;
src.gain.value = 0.5;
src.connect(context.destination);
src.noteOn(0);
```

```js
// New standard AudioContext code:
const src = context.createBufferSource();
src.buffer = someBuffer;
const gain = context.createGain();
src.connect(gain);
gain.gain.value = 0.5;
gain.connect(context.destination);
src.start(0);
```

### AudioBuffer

The `gain` attribute of {{domxref("AudioBuffer")}} has been removed. The same functionality can be achieved by connecting the {{domxref("AudioBufferSourceNode")}} that owns the buffer to a gain node. See the following example:

```js
// Old webkitAudioContext code:
const src = context.createBufferSource();
src.buffer = someBuffer;
src.buffer.gain = 0.5;
src.connect(context.destination);
src.noteOn(0);
```

```js
// New standard AudioContext code:
const src = context.createBufferSource();
src.buffer = someBuffer;
const gain = context.createGain();
src.connect(gain);
gain.gain.value = 0.5;
gain.connect(context.destination);
src.start(0);
```

## Removal of AudioBufferSourceNode.looping

The `looping` attribute of {{domxref("AudioBufferSourceNode")}} has been removed. This attribute was an alias of the `loop` attribute, so you can just use the `loop` attribute instead. Instead of having code like this:

```js
const source = context.createBufferSource();
source.looping = true;
```

you can change it to respect the last version of the specification:

```js
const source = context.createBufferSource();
source.loop = true;
```

Note, the `loopStart` and `loopEnd` attributes are not supported in `webkitAudioContext`.

## Changes to determining playback state

The `playbackState` attribute of {{domxref("AudioBufferSourceNode")}} and {{domxref("OscillatorNode")}} has been removed. Depending on why you used this attribute, you can use the following techniques to get the same information:

- If you need to compare this attribute to `UNSCHEDULED_STATE`, you can basically remember whether you've called `start()` on the node or not.
- If you need to compare this attribute to `SCHEDULED_STATE`, you can basically remember whether you've called `start()` on the node or not. You can compare the value of {{domxref("AudioContext.currentTime")}} to the first argument passed to `start()` to know whether playback has started or not.
- If you need to compare this attribute to `PLAYING_STATE`, you can compare the value of {{domxref("AudioContext.currentTime")}} to the first argument passed to `start()` to know whether playback has started or not.
- If you need to know when playback of the node is finished (which is the most significant use case of `playbackState`), there is a new ended event which you can use to know when playback is finished. Please see this code example:

```js
// Old webkitAudioContext code:
const src = context.createBufferSource();
// Some time later...
const isFinished = src.playbackState === src.FINISHED_STATE;
```

```js
// New AudioContext code:
let isFinished = false;
const src = context.createBufferSource();
src.onended = (event) => {
  isFinished = true;
};
```

The exact same changes have been applied to both {{domxref("AudioBufferSourceNode")}} and {{domxref("OscillatorNode")}}, so you can apply the same techniques to both kinds of nodes.

## Removal of AudioContext.activeSourceCount

The `activeSourceCount` attribute has been removed from {{domxref("AudioContext")}}. If you need to count the number of playing source nodes, you can maintain the count by handling the ended event on the source nodes, as shown above.

Code using the `activeSourceCount` attribute of the {{domxref("AudioContext")}}, like this snippet:

```js
const src0 = context.createBufferSource();
const src1 = context.createBufferSource();
// Set buffers and other parameters...
src0.start(0);
src1.start(0);
// Some time later...
console.log(context.activeSourceCount);
```

could be rewritten like that:

```js
// Array to track the playing source nodes:
const sources = [];

// When starting the source, put it at the end of the array,
// and set a handler to make sure it gets removed when the
// AudioBufferSourceNode reaches its end.
// First argument is the AudioBufferSourceNode to start, other arguments are
// the argument to the |start()| method of the AudioBufferSourceNode.
function startSource(src, ...startArgs) {
  src.onended = () => {
    sources.splice(sources.indexOf(src), 1);
  };
  sources.push(src);
  src.start.apply(src, startArgs);
}

function activeSources() {
  return sources.length;
}

const src0 = context.createBufferSource();
const src1 = context.createBufferSource();

// Set buffers and other parameters...
startSource(src0, 0);
startSource(src1, 0);

// Some time later, query the number of sources...
console.log(activeSources());
```

## Renaming of WaveTable

The {{domxref("WaveTable")}} interface has been renamed to {{domxref("PeriodicWave")}}. Here is how you can port old code using `WaveTable` to the standard AudioContext API:

```js
// Old webkitAudioContext code:
const osc = context.createOscillator();
const table = context.createWaveTable(realArray, imaginaryArray);
osc.setWaveTable(table);
```

```js
// New standard AudioContext code:
const osc = context.createOscillator();
const table = context.createPeriodicWave(realArray, imaginaryArray);
osc.setPeriodicWave(table);
```

## Removal of some of the AudioParam read-only attributes

The following read-only attributes have been removed from AudioParam: `name`, `units`, `minValue`, and `maxValue`. These used to be informational attributes. Here is some information on how you can get these values if you need them:

- The `name` attribute is a string representing the name of the {{domxref("AudioParam")}} object. For example, the name of {{domxref("GainNode.gain")}} is `"gain"`. You can track where the {{domxref("AudioParam")}} object is coming from in your code if you need this information.
- The `minValue` and `maxValue` attributes are read-only values representing the nominal range for the {{domxref("AudioParam")}}. For example, for {{domxref("GainNode") }}, these values are 0 and 1, respectively. Note that these bounds are not enforced by the engine, and are merely used for informational purposes. As an example, it's perfectly valid to set a gain value to 2, or even -1. In order to find out these nominal values, you can consult the [specification](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html).
- The `units` attribute as implemented in `webkitAudioContext` implementations is unused, and always returns 0. There is no reason why you should need this attribute.

## Removal of MediaElementAudioSourceNode.mediaElement

The `mediaElement` attribute of {{domxref("MediaElementAudioSourceNode")}} has been removed. You can keep a reference to the media element used to create this node if you need to access it later.

## Removal of MediaStreamAudioSourceNode.mediaStream

The `mediaStream` attribute of {{domxref("MediaStreamAudioSourceNode")}} has been removed. You can keep a reference to the media stream used to create this node if you need to access it later.

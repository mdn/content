---
title: Audio and video manipulation
slug: Web/Guide/Audio_and_video_manipulation
tags:
  - Audio
  - Canvas
  - Examples
  - Guide
  - HTML
  - Media
  - Video
  - Web Audio API
  - WebGL
  - developer recommendation
---
The beauty of the web is that you can combine technologies to create new forms. Having native audio and video in the browser means we can use these data streams with technologies such as {{htmlelement("canvas")}}, [WebGL](/en-US/docs/Web/API/WebGL_API) or [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) to modify audio and video directly, for example adding reverb/compression effects to audio, or grayscale/sepia filters to video. This article provides a reference to explain what you need to do.

## Video manipulation

The ability to read the pixel values from each frame of a video can be very useful.

### Video and canvas

The {{htmlelement("canvas")}} element provides a surface for drawing graphics onto web pages; it is very powerful and can be coupled tightly with video.

The general technique is to:

1. Write a frame from the {{htmlelement("video")}} element to the {{htmlelement("canvas")}} element.
2. Read the data from the `<canvas>` element and manipulate it.
3. Write the manipulated data to your "display" `<canvas>` (which effectively can be the same element).
4. Pause and repeat.

For example, let's process a video to display it in greyscale. In this case, we'll show both the source video and the output greyscale frames. Ordinarily, if you were implementing a "play video in greyscale" feature, you'd probably add `display: none` to the style for the `<video>` element, to keep the source video from being drawn to the screen while showing only the canvas showing the altered frames.

#### HTML

We can set up our video player and `<canvas>` element like this:

```html
<video id="my-video" controls="true" width="480" height="270" crossorigin="anonymous">
  <source src="https://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type="video/webm">
  <source src="https://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type="video/mp4">
</video>

<canvas id="my-canvas" width="480" height="270"></canvas>
```

#### JavaScript

This code handles altering the frames.

```js
const processor = {
  timerCallback() {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    setTimeout(() => {
      this.timerCallback();
    }, 16); // roughly 60 frames per second
  },

  doLoad() {
    this.video = document.getElementById("my-video");
    this.c1 = document.getElementById("my-canvas");
    this.ctx1 = this.c1.getContext("2d");

    this.video.addEventListener("play", () => {
      this.width = this.video.width;
      this.height = this.video.height;
      this.timerCallback();
    }, false);
  },

  computeFrame() {
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    const frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    const l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {
      const grey = (frame.data[i * 4 + 0] + frame.data[i * 4 + 1] + frame.data[i * 4 + 2]) / 3;

      frame.data[i * 4 + 0] = grey;
      frame.data[i * 4 + 1] = grey;
      frame.data[i * 4 + 2] = grey;
    }
    this.ctx1.putImageData(frame, 0, 0);

    return;
  }
};
```

Once the page has loaded you can call

```js
processor.doLoad()
```

#### Result

{{EmbedLiveSample("Video_and_canvas", '100%', 580)}}

This is a pretty simple example showing how to manipulate video frames using a canvas. For efficiency, you should consider using {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} instead of `setTimeout()` when running on browsers that support it.

You can achieve the same result by applying the {{cssxref("filter-function/grayscale", "grayscale()")}} CSS function to the source `<video>` element.

> **Note:** Due to potential security issues if your video is on a different domain than your code, you'll need to enable [CORS (Cross Origin Resource Sharing)](/en-US/docs/Web/HTTP/CORS) on your video server.

### Video and WebGL

[WebGL](/en-US/docs/Web/API/WebGL_API) is a powerful API that uses canvas to draw hardware-accelerated 3D or 2D scenes. You can combine WebGL and the {{htmlelement("video")}} element to create video textures, which means you can put video inside 3D scenes.

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

> **Note:** You can find the [source code of this demo on GitHub](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) ([see it live](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/) also).

### Playback rate

We can also adjust the rate that audio and video plays at using an attribute of the {{htmlelement("audio")}} and {{htmlelement("video")}} element called {{domxref("HTMLMediaElement.playbackRate", "playbackRate")}}. `playbackRate` is a number that represents a multiple to be applied to the rate of playback, for example 0.5 represents half speed while 2 represents double speed.

Note that the `playbackRate` property works with both `<audio>` and `<video>`, but in both cases, it changes the playback speed but _not_ the pitch. To manipulate the audio's pitch you need to use the Web Audio API. See the {{domxref("AudioBufferSourceNode.playbackRate")}} property.

#### HTML

```html
<video id="my-video" controls
  src="https://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v">
</video>
```

#### JavaScript

```js
const myVideo = document.getElementById('my-video');
myVideo.playbackRate = 2;
```

#### Editable example

```html hidden
<video id="my-video" controls="true" width="480" height="270">
  <source src="https://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type="video/webm">
  <source src="https://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type="video/mp4">
</video>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
const myVideo = document.getElementById('my-video');
myVideo.playbackRate = 2;</textarea>
```

```js hidden
const textarea = document.getElementById('code');
const reset = document.getElementById('reset');
const edit = document.getElementById('edit');
const code = textarea.value;

function setPlaybackRate() {
  eval(textarea.value);
}

reset.addEventListener('click', () => {
  textarea.value = code;
  setPlaybackRate();
});

edit.addEventListener('click', () => {
  textarea.focus();
})

textarea.addEventListener('input', setPlaybackRate);
window.addEventListener('load', setPlaybackRate);
```

{{ EmbedLiveSample('Editable_example', 700, 450) }}

> **Note:** Try the [playbackRate example](https://jsbin.com/qomuvefu/2/edit) live.

## Audio manipulation

`playbackRate` aside, to manipulate audio you'll typically use the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API).

### Selecting an audio source

The Web Audio API can receive audio from a variety of sources, then process it and send it back out to an {{domxref("AudioDestinationNode")}} representing the output device to which the sound is sent after processing.

| If the audio source is…                                                                                                                                                                  | Use this Web Audio node type                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| An audio track from an HTML {{HTMLElement("audio")}} or {{HTMLElement("video")}} element                                                                                   | {{domxref("MediaElementAudioSourceNode")}} |
| A plain raw audio data buffer in memory                                                                                                                                                    | {{domxref("AudioBufferSourceNode")}}         |
| An oscillator generating a sine wave or other computed waveform                                                                                                                            | {{domxref("OscillatorNode")}}                 |
| An audio track from [WebRTC](/en-US/docs/Web/API/WebRTC_API) (such as the microphone input you can get using {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}. | {{domxref("MediaStreamAudioSourceNode")}} |

### Audio filters

The Web Audio API has a lot of different filter/effects that can be applied to audio using the {{domxref("BiquadFilterNode")}}, for example.

#### HTML

```html
<video id="my-video" controls
  src="myvideo.mp4" type="video/mp4">
</video>
```

#### JavaScript

```js
const context = new AudioContext();
const audioSource = context.createMediaElementSource(document.getElementById("my-video"));
const filter = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

// Configure filter
filter.type = "lowshelf";
filter.frequency.value = 1000;
filter.gain.value = 25;
```

#### Editable example

```html hidden
<video id="my-video" controls="true" width="480" height="270" crossorigin="anonymous">
  <source src="https://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm" type="video/webm">
  <source src="https://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v" type="video/mp4">
</video>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
  filter.type = "lowshelf";
  filter.frequency.value = 1000;
  filter.gain.value = 25;
</textarea>
```

```js hidden
const context = new AudioContext();
const audioSource = context.createMediaElementSource(document.getElementById("my-video"));
const filter  = context.createBiquadFilter();
audioSource.connect(filter);
filter.connect(context.destination);

const textarea = document.getElementById('code');
const reset = document.getElementById('reset');
const edit = document.getElementById('edit');
const code = textarea.value;

function setFilter() {
  eval(textarea.value);
}

reset.addEventListener('click', () => {
  textarea.value = code;
  setFilter();
});

edit.addEventListener('click', () => {
  textarea.focus();
})

textarea.addEventListener('input', setFilter);
window.addEventListener('load', setFilter);
```

{{ EmbedLiveSample('Editable_example_2', 700, 450) }}

> **Note:** unless you have [CORS](/en-US/docs/Web/HTTP/CORS) enabled, to avoid security issues your video should be on the same domain as your code.

#### Common audio filters

These are some of the common types of audio filter you can apply:

- Low Pass: Allows frequencies below the cutoff frequency to pass through and attenuates frequencies above the cutoff.
- High Pass: Allows frequencies above the cutoff frequency to pass through and attenuates frequencies below the cutoff.
- Band Pass: Allows a range of frequencies to pass through and attenuates the frequencies below and above this frequency range.
- Low Shelf: Allows all frequencies through, but adds a boost (or attenuation) to the lower frequencies.
- High Shelf: Allows all frequencies through, but adds a boost (or attenuation) to the higher frequencies.
- Peaking: Allows all frequencies through, but adds a boost (or attenuation) to a range of frequencies.
- Notch: Allows all frequencies through, except for a set of frequencies.
- Allpass: Allows all frequencies through, but changes the phase relationship between the various frequencies.

> **Note:** See {{domxref("BiquadFilterNode")}} for more information.

### Convolutions and impulses

It's also possible to apply impulse responses to audio using the {{domxref("ConvolverNode")}}. An **impulse response** is the sound created after a brief impulse of sound (like a hand clap). An impulse response will signify the environment in which the impulse was created (for example, an echo created by clapping your hands in a tunnel).

#### Example

```js
const convolver = context.createConvolver();
convolver.buffer = this.impulseResponseBuffer;
// Connect the graph.
source.connect(convolver);
convolver.connect(context.destination);
```

See this [Codepen](https://codepen.io/a2sheppy/pen/JjPgVYL) for an applied (but very, very silly; like, little kids will giggle kind of silly) example.

### Spatial audio

We can also position audio using a **panner node**. A panner node—{{domxref("PannerNode")}}—lets us define a source cone as well as positional and directional elements, all in 3D space as defined using 3D cartesian coordinates.

#### Example

```js
const panner = context.createPanner();
panner.coneOuterGain = 0.2;
panner.coneOuterAngle = 120;
panner.coneInnerAngle = 0;

panner.connect(context.destination);
source.connect(panner);
source.start(0);

// Position the listener at the origin.
context.listener.setPosition(0, 0, 0);
```

> **Note:** You can find an [example on our GitHub repository](https://github.com/mdn/webaudio-examples/tree/master/panner-node) ([see it live](https://mdn.github.io/webaudio-examples/panner-node/) also).

### JavaScript codecs

It's also possible to manipulate audio at a low level using JavaScript. This can be useful should you want to create audio codecs.

Libraries currently exist for the following formats :

- AAC: [AAC.js](https://github.com/audiocogs/aac.js)
- ALAC: [alac.js](https://github.com/audiocogs/alac.js)
- FLAC: [flac.js](https://github.com/audiocogs/flac.js)
- MP3: [mp3.js](https://github.com/audiocogs/mp3.js)
- Opus: [Opus.js](https://github.com/audiocogs/opus.js)
- Vorbis: [vorbis.js](https://github.com/audiocogs/vorbis.js)

> **Note:** At Audiocogs, you can [Try out a few demos](http://audiocogs.org/codecs/); Audiocogs also provides a framework, [Aurora.js](http://audiocogs.org/codecs/), which is intended to help you author your own codecs in JavaScript.

## Examples

- [Various Web Audio API (and other) examples](https://github.com/mdn/webaudio-examples)
- [THREE.js Video Cube example](https://github.com/chrisdavidmills/threejs-video-cube)
- [Convolution Effects in Real-Time](https://github.com/cwilso/web-audio-samples/blob/master/samples/audio/convolution-effects.html)

## See also

### Tutorials

- [Manipulating Video Using Canvas](/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [HTML playbackRate explained](/en-US/docs/Web/Guide/Audio_and_video_delivery/WebAudio_playbackRate_explained)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Web audio spatialization basics](/en-US/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [Using Video frames as a WebGL Texture](/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL#using_the_video_frames_as_a_texture) (You can also the [THREE.js](https://threejs.org) WebGL library (and others) to [achieve this effect](https://stemkoski.github.io/Three.js/Video.html))
- [Animating Textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
- [Developing Game Audio with the Web Audio API (Room effects and filters) (2012)](https://web.dev/webaudio-games/#room-effects-and-filters)

### Reference

- The {{htmlelement("audio")}} and {{htmlelement("video")}} elements
- The {{domxref("HTMLMediaElement")}} API
- The {{htmlelement("canvas")}} element
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
- [AudioContext](/en-US/docs/Web/API/AudioContext)
- More info on [Spatial Audio](/en-US/docs/Web/API/BaseAudioContext/createPanner)
- [Web media technologies](/en-US/docs/Web/Media)

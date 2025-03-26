---
title: "AudioContext: createMediaStreamSource() method"
short-title: createMediaStreamSource()
slug: Web/API/AudioContext/createMediaStreamSource
page-type: web-api-instance-method
browser-compat: api.AudioContext.createMediaStreamSource
---

{{ APIRef("Web Audio API") }}

The `createMediaStreamSource()` method of the {{ domxref("AudioContext") }}
Interface is used to create a new {{ domxref("MediaStreamAudioSourceNode") }}
object, given a media stream (say, from a {{ domxref("MediaDevices.getUserMedia") }}
instance), the audio from which can then be played and manipulated.

For more details about media stream audio source nodes, check out the {{domxref("MediaStreamAudioSourceNode")}} reference page.

## Syntax

```js-nolint
createMediaStreamSource(stream)
```

### Parameters

- `stream`
  - : A {{domxref("MediaStream")}} to serve as an audio source to be fed into an audio
    processing graph for use and manipulation.

### Return value

A new {{domxref("MediaStreamAudioSourceNode")}} object representing the audio node
whose media is obtained from the specified source stream.

## Examples

In this example, we grab a media (audio + video) stream from {{domxref("navigator.getUserMedia")}}, feed the media into a {{htmlelement("video")}} element to play then mute the audio, but then also feed the audio into a {{domxref("MediaStreamAudioSourceNode")}}.
Next, we feed this source audio into a low pass {{ domxref("BiquadFilterNode") }} (which effectively serves as a bass booster),
then a {{domxref("AudioDestinationNode") }}.

The range slider below the {{ htmlelement("video") }} element controls the amount of
gain given to the lowpass filter — increase the value of the slider to make the audio
sound more bass heavy!

> [!NOTE]
> You can see this [example running live](https://mdn.github.io/webaudio-examples/stream-source-buffer/), or [view the source](https://github.com/mdn/webaudio-examples/tree/main/stream-source-buffer).

```js
const pre = document.querySelector("pre");
const video = document.querySelector("video");
const myScript = document.querySelector("script");
const range = document.querySelector("input");

// getUserMedia block - grab stream
// put it into a MediaStreamAudioSourceNode
// also output the visuals into a video element

if (navigator.mediaDevices) {
  console.log("getUserMedia supported.");
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then((stream) => {
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
        video.muted = true;
      };

      // Create a MediaStreamAudioSourceNode
      // Feed the HTMLMediaElement into it
      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaStreamSource(stream);

      // Create a biquad filter
      const biquadFilter = audioCtx.createBiquadFilter();
      biquadFilter.type = "lowshelf";
      biquadFilter.frequency.value = 1000;
      biquadFilter.gain.value = range.value;

      // connect the AudioBufferSourceNode to the gainNode
      // and the gainNode to the destination, so we can play the
      // music and adjust the volume using the mouse cursor
      source.connect(biquadFilter);
      biquadFilter.connect(audioCtx.destination);

      // Get new mouse pointer coordinates when mouse is moved
      // then set new gain value

      range.oninput = () => {
        biquadFilter.gain.value = range.value;
      };
    })
    .catch((err) => {
      console.log(`The following gUM error occurred: ${err}`);
    });
} else {
  console.log("getUserMedia not supported on your browser!");
}

// dump script to pre element

pre.textContent = myScript.textContent;
```

> [!NOTE]
> As a consequence of calling
> `createMediaStreamSource()`, audio playback from the media stream will
> be re-routed into the processing graph of the {{domxref("AudioContext")}}. So
> playing/pausing the stream can still be done through the media element API and the
> player controls.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

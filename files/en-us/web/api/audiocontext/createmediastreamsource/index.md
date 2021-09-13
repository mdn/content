---
title: AudioContext.createMediaStreamSource()
slug: Web/API/AudioContext/createMediaStreamSource
tags:
  - API
  - Audio
  - AudioContext
  - AudioNode
  - Media
  - MediaStream
  - MediaStreamTrack
  - Method
  - Reference
  - Web
  - Web Audio
  - Web Audio API
  - createMediastreamSource
browser-compat: api.AudioContext.createMediaStreamSource
---
{{ APIRef("Web Audio API") }}

The `createMediaStreamSource()` method of the {{ domxref("AudioContext") }}
Interface is used to create a new {{ domxref("MediaStreamAudioSourceNode") }}
object, given a media stream (say, from a {{ domxref("MediaDevices.getUserMedia") }}
instance), the audio from which can then be played and manipulated.

For more details about media stream audio source nodes, check out the {{
    domxref("MediaStreamAudioSourceNode") }} reference page.

## Syntax

```js
audioSourceNode = audioContext.createMediaStreamSource(stream);
```

### Parameters

- `stream`
  - : A {{domxref("MediaStream")}} to serve as an audio source to be fed into an audio
    processing graph for use and manipulation.

### Return value

A new {{domxref("MediaStreamAudioSourceNode")}} object representing the audio node
whose media is obtained from the specified source stream.

## Example

In this example, we grab a media (audio + video) stream from {{
    domxref("navigator.getUserMedia") }}, feed the media into a {{ htmlelement("video") }}
element to play then mute the audio, but then also feed the audio into a {{
    domxref("MediaStreamAudioSourceNode") }}. Next, we feed this source audio into a low
pass {{ domxref("BiquadFilterNode") }} (which effectively serves as a bass booster),
then a {{domxref("AudioDestinationNode") }}.

The range slider below the {{ htmlelement("video") }} element controls the amount of
gain given to the lowpass filter — increase the value of the slider to make the audio
sound more bass heavy!

> **Note:** You can see this [example
> running live](https://mdn.github.io/webaudio-examples/stream-source-buffer/), or [view
> the source](https://github.com/mdn/webaudio-examples/tree/master/stream-source-buffer).

```js
var pre = document.querySelector('pre');
var video = document.querySelector('video');
var myScript = document.querySelector('script');
var range = document.querySelector('input');

// getUserMedia block - grab stream
// put it into a MediaStreamAudioSourceNode
// also output the visuals into a video element

if (navigator.mediaDevices) {
    console.log('getUserMedia supported.');
    navigator.mediaDevices.getUserMedia ({audio: true, video: true})
    .then(function(stream) {
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
            video.play();
            video.muted = true;
        };

        // Create a MediaStreamAudioSourceNode
        // Feed the HTMLMediaElement into it
        var audioCtx = new AudioContext();
        var source = audioCtx.createMediaStreamSource(stream);

        // Create a biquadfilter
        var biquadFilter = audioCtx.createBiquadFilter();
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

        range.oninput = function() {
            biquadFilter.gain.value = range.value;
        }
    })
    .catch(function(err) {
        console.log('The following gUM error occurred: ' + err);
    });
} else {
   console.log('getUserMedia not supported on your browser!');
}

// dump script to pre element

pre.innerHTML = myScript.innerHTML;
```

> **Note:** As a consequence of calling
> `createMediaStreamSource()`, audio playback from the media stream will
> be re-routed into the processing graph of the {{domxref("AudioContext")}}. So
> playing/pausing the stream can still be done through the media element API and the
> player controls.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio
  API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

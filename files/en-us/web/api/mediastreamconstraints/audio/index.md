---
title: MediaStreamConstraints.audio
slug: Web/API/MediaStreamConstraints/audio
tags:
  - API
  - Audio
  - Constraints
  - Dictionary
  - Interface
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaStreamConstraints
  - Reference
  - Web
  - WebRTC
  - getusermedia
browser-compat: api.MediaStreamConstraints.audio
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaStreamConstraints")}} dictionary's
**`audio`** property is used to indicate what kind of audio
track, if any, should be included in the {{domxref("MediaStream")}} returned by a call
to {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}.

To learn more about how constraints work, see [Capabilities, constraints,
and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints).

## Syntax

```js
var audioConstraints = true | false | MediaTrackConstraints;
```

### Value

The value of the `audio` property can be specified as either of two types:

- A boolean value
  - : If specified, it indicates whether or not an audio track should
    be included in the returned stream; if it's `true`, an audio track is
    included; if no audio source is available or if permission is not given to use the
    audio source, the call to `getUserMedia()` will fail. If
    `false`, no audio track is included.
- {{domxref("MediaTrackConstraints")}}
  - : A constraints dictionary detailing the preferable and/or required values or ranges
    of values for the track's constrainable properties. If you specify constraints, an
    audio track meeting the constraints is required.

## Examples

For browsers with [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
enabled, the samples below need the `microphone` feature enabled. See
{{SectionOnPage("/en-US/docs/Web/API/MediaDevices/getUserMedia", "Security")}} for
details and examples on how to configure this.

### Using a Boolean value

In this example, we provide a simple value of `true` for the
`audio` property. This tells `getUserMedia()` that we require an
audio track, but we don't care about any specifics beyond that.

```html hidden
<p>Click the start button below to begin the demonstration.</p>
<div id="startButton" class="button">
  Start
</div>
<audio id="audio" autoplay controls></audio><br>
<div id="log"></div>
```

```css hidden
body {
  font: 14px "Open Sans", "Arial", sans-serif;
}

audio {
  margin-top: 20px;
  border: 1px solid black;
  width: 160px;
}

.button {
  cursor: pointer;
  width: 160px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
}
```

```js hidden
let audioElement = document.getElementById("audio");
let logElement = document.getElementById("log");

function log(msg) {
 logElement.innerHTML += msg + "<br>";
}
```

```js
document.getElementById("startButton").addEventListener("click", function() {
  navigator.mediaDevices.getUserMedia({
    audio: true
  }).then(stream => audioElement.srcObject = stream)
    .catch(err => log(err.name + ": " + err.message));
}, false);
```

Here we see an event handler for a {{domxref("click")}} event which uses
{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} to obtain an audio-only
stream with no specific constraints, then attaches the resulting stream to an
{{HTMLElement("audio")}} element once the stream is returned.

#### Result

{{ EmbedLiveSample('Using_a_Boolean_value', 600, 180, "", "", "", "microphone") }}

### Using a MediaTrackConstraints object

Now let's look at a similar example that uses a set of constraints based on the
{{domxref("MediaTrackConstraints")}} dictionary:

```html hidden
<p>Click the start button below to begin the demonstration.</p>
<div id="startButton" class="button">
  Start
</div>
<audio id="audio" autoplay controls></audio><br>
<div id="log"></div>
```

```css hidden
body {
  font: 14px "Open Sans", "Arial", sans-serif;
}

audio {
  margin-top: 20px;
  border: 1px solid black;
  width: 160px;
}

.button {
  cursor: pointer;
  width: 160px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
}
```

```js hidden
let audioElement = document.getElementById("audio");
let logElement = document.getElementById("log");

function log(msg) {
 logElement.innerHTML += msg + "<br>";
}
```

```js
document.getElementById("startButton").addEventListener("click", function() {
  navigator.mediaDevices.getUserMedia({
    audio: {
      sampleSize: 8,
      echoCancellation: true
    }
  }).then(stream => audioElement.srcObject = stream)
    .catch(err => log(err.name + ": " + err.message));
}, false);
```

Here we see an event handler for a {{domxref("Element.click_event", "click")}} event
which calls {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, specifying a set
of audio constraints requesting that echo cancellation be enabled and that, if possible,
the sample rate be 8 bits per sample instead of the more common 16 bits (possibly as a
bandwidth saving measure). As long as an audio input device is available and the user
allows it to be used, an audio track will be included in the resulting stream, and it
will match the specified constraints as well as possible.

#### Result

{{ EmbedLiveSample('Using_a_MediaTrackConstraints_object', 600, 180, "", "", "",
  "microphone") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [Capabilities,
  constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("MediaDevices.getUserMedia()")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaTrackConstraints")}}

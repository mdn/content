---
title: MediaStreamConstraints.video
slug: Web/API/MediaStreamConstraints/video
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
  - Video
  - getusermedia
browser-compat: api.MediaStreamConstraints.video
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaStreamConstraints")}} dictionary's
**`video`** property is used to indicate what kind of video
track, if any, should be included in the {{domxref("MediaStream")}} returned by a call
to {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}.

To learn more about how constraints work, see [Capabilities, constraints,
and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints).

## Syntax

```js
var videoConstraints = true | false | MediaTrackConstraints;
```

### Value

The value of the `video` property can be specified as either of two types:

- A boolean value
  - : If specified, it indicates whether or not a video track should be
    included in the returned stream; if it's `true`, a video track is included;
    if no video source is available or if permission is not given to use the video source,
    the call to `getUserMedia()` will fail. If `false`, no video
    track is included.
- {{domxref("MediaTrackConstraints")}}
  - : A constraints dictionary detailing the preferable and/or required values or ranges
    of values for the track's constrainable properties. If you specify constraints, a
    video track meeting these constraints is required.

## Examples

### Using a Boolean value

In this example, we provide a simple value of `true` for the
`video` property. This tells `getUserMedia()` that we require a
video track, but we don't care about any specifics beyond that.

```html hidden
<p>Click the start button below to begin the demonstration.</p>
<div id="startButton" class="button">
  Start
</div>
<video id="video" width="160" height="120" autoplay></video><br>
<div id="log"></div>
```

```css hidden
body {
  font: 14px "Open Sans", "Arial", sans-serif;
}

video {
  margin-top: 20px;
  border: 1px solid black;
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
let videoElement = document.getElementById("video");
let logElement = document.getElementById("log");

function log(msg) {
 logElement.innerHTML += msg + "<br>";
}
```

```js
document.getElementById("startButton").addEventListener("click", function() {
  navigator.mediaDevices.getUserMedia({
      video: true
  }).then(stream => videoElement.srcObject = stream)
    .catch(err => log(err.name + ": " + err.message));
}, false);
```

Here we see an event handler for a {{domxref("click")}} event which uses
{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} to obtain a video-only stream
with no specific constraints, then attaches the resulting stream to a
{{HTMLElement("video")}} element once the stream is returned.

#### Result

{{ EmbedLiveSample('Using_a_Boolean_value', 600, 280, "", "", "", "camera") }}

### Using a MediaTrackConstraints object

Now let's look at a similar example that uses a set of constraints based on the
{{domxref("MediaTrackConstraints")}} dictionary:

```html hidden
<p>Click the start button below to begin the demonstration.</p>
<div id="startButton" class="button">
  Start
</div>
<video id="video" width="160" height="120" autoplay></video><br>
<div id="log"></div>
```

```css hidden
body {
  font: 14px "Open Sans", "Arial", sans-serif;
}

video {
  margin-top: 20px;
  border: 1px solid black;
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
let videoElement = document.getElementById("video");
let logElement = document.getElementById("log");

function log(msg) {
 logElement.innerHTML += msg + "<br>";
}
```

```js
document.getElementById("startButton").addEventListener("click", function() {
  navigator.mediaDevices.getUserMedia({
      video: {
        width: 160,
        height: 120,
        frameRate: 15
      }
  }).then(stream => videoElement.srcObject = stream)
    .catch(err => log(err.name + ": " + err.message));
}, false);
```

Here we see an event handler for a {{domxref("click")}} event which calls
{{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, specifying a set of video
constraints that indicate a preference for a video track whose dimensions are as close
as possible to 160x120 pixels, and whose frame rate is as close to 15 frames per second
as possible. As long as a video input device is available and the user allows it to be
used, a video track will be included in the resulting stream, and it will match the
specified constraints as well as possible.

#### Result

{{ EmbedLiveSample('Using_a_MediaTrackConstraints_object', 600, 280, "", "", "",
  "camera") }}

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

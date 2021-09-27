---
title: MediaRecorder
slug: Web/API/MediaRecorder
tags:
  - API
  - Audio
  - Interface
  - Media
  - Media Capture
  - Media Capture and Streams
  - Media Recorder API
  - MediaRecorder
  - Reference
  - Video
browser-compat: api.MediaRecorder
---
{{APIRef("Media Recorder API")}}

The **`MediaRecorder`** interface of the [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API) provides functionality to easily record media. It is created using the {{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}} constructor.

## Constructor

- {{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}}
  - : Creates a new `MediaRecorder` object, given a {{domxref("MediaStream")}} to record. Options are available to do things like set the container's MIME type (such as `"video/webm"` or `"video/mp4"`) and the bit rates of the audio and video tracks or a single overall bit rate.

## Properties

- {{domxref("MediaRecorder.mimeType")}} {{readonlyInline}}
  - : Returns the MIME type that was selected as the recording container for the `MediaRecorder` object when it was created.
- {{domxref("MediaRecorder.state")}} {{readonlyInline}}
  - : Returns the current state of the `MediaRecorder` object (`inactive`, `recording`, or `paused`.)
- {{domxref("MediaRecorder.stream")}} {{readonlyInline}}
  - : Returns the stream that was passed into the constructor when the `MediaRecorder` was created.
- {{domxref("MediaRecorder.ignoreMutedMedia")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Indicates whether the `MediaRecorder` instance will record input when the input {{domxref("MediaStreamTrack")}} is muted. If this attribute is `false`, `MediaRecorder` will record silence for audio and black frames for video. The default is `false`.
- {{domxref("MediaRecorder.videoBitsPerSecond")}} {{readonlyInline}} {{experimental_inline}}
  - : Returns the video encoding bit rate in use. This may differ from the bit rate specified in the constructor (if it was provided).
- {{domxref("MediaRecorder.audioBitsPerSecond")}} {{readonlyInline}} {{experimental_inline}}
  - : Returns the audio encoding bit rate in use. This may differ from the bit rate specified in the constructor (if it was provided).

## Methods

- {{domxref("MediaRecorder.pause()")}}
  - : Pauses the recording of media.
- {{domxref("MediaRecorder.requestData()")}}
  - : Requests a {{domxref("Blob")}} containing the saved data received thus far (or since the last time `requestData()` was called. After calling this method, recording continues, but in a new `Blob`.
- {{domxref("MediaRecorder.resume()")}}
  - : Resumes recording of media after having been paused.
- {{domxref("MediaRecorder.start()")}}
  - : Begins recording media; this method can optionally be passed a `timeslice` argument with a value in milliseconds. If this is specified, the media will be captured in separate chunks of that duration, rather than the default behavior of recording the media in a single large chunk.
- {{domxref("MediaRecorder.stop()")}}
  - : Stops recording, at which point a {{event("dataavailable")}} event containing the final `Blob` of saved data is fired. No more recording occurs.

## Static methods

- {{domxref("MediaRecorder.isTypeSupported()")}}
  - : A static method which returns a `true` or `false` value indicating if the given MIME media type is supported by the current user agent.

## Event handlers

- {{domxref("MediaRecorder.ondataavailable")}}
  - : Called to handle the {{event("dataavailable")}} event, which is periodically triggered each time `timeslice` milliseconds of media have been recorded (or when the entire media has been recorded, if `timeslice` wasn't specified). The event, of type {{domxref("BlobEvent")}}, contains the recorded media in its {{domxref("BlobEvent.data", "data")}} property. You can then collect and act upon that recorded media data using this event handler.
- {{domxref("MediaRecorder.onerror")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called to handle the {{event("error")}} event, including reporting errors that arise with media recording. These are fatal errors that stop recording. The received event is based on the {{domxref("MediaRecorderErrorEvent")}} interface, whose {{domxref("MediaRecorderErrorEvent.error", "error")}} property contains a {{domxref("DOMException")}} that describes the actual error that occurred.
- {{domxref("MediaRecorder.onpause")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called to handle the {{event("pause")}} event, which occurs when media recording is paused.
- {{domxref("MediaRecorder.onresume")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called to handle the {{event("resume")}} event, which occurs when media recording resumes after being paused.
- {{domxref("MediaRecorder.onstart")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called to handle the {{event("start")}} event, which occurs when media recording starts.
- {{domxref("MediaRecorder.onstop")}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called to handle the {{event("stop")}} event, which occurs when media recording ends, either when the {{domxref("MediaStream")}} ends — or after the {{domxref("MediaRecorder.stop()")}} method is called.
- {{domxref("MediaRecorder.onwarning")}} {{deprecated_inline}}
  - : An [event handler](/en-US/docs/Web/Events/Event_handlers) called to handle the {{event("warning")}} event, which occurs when media recording has a non-fatal error, or after the {{domxref("MediaRecorder.onwarning()")}} method is called.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- [`error`](/en-US/docs/Web/API/MediaRecorder/error_event)
  - : Fired when an error occurs: for example because recording wasn't allowed or was attempted using an unsupported codec.
    Also available via the [`onerror`](/en-US/docs/Web/API/MediaRecorder/onerror) property.
- [`warning`](/en-US/docs/Web/API/MediaRecorder/warning_event){{deprecated_inline}}
  - : Fired when a problem occurs that does not halt recording.
    Also available via the [`onwarning`](/en-US/docs/Web/API/MediaRecorder/onwarning) property.

## Example

```js
if (navigator.mediaDevices) {
  console.log('getUserMedia supported.');

  var constraints = { audio: true };
  var chunks = [];

  navigator.mediaDevices.getUserMedia(constraints)
  .then(function(stream) {

    var mediaRecorder = new MediaRecorder(stream);

    visualize(stream);

    record.onclick = function() {
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log("recorder started");
      record.style.background = "red";
      record.style.color = "black";
    }

    stop.onclick = function() {
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
      console.log("recorder stopped");
      record.style.background = "";
      record.style.color = "";
    }

    mediaRecorder.onstop = function(e) {
      console.log("data available after MediaRecorder.stop() called.");

      var clipName = prompt('Enter a name for your sound clip');

      var clipContainer = document.createElement('article');
      var clipLabel = document.createElement('p');
      var audio = document.createElement('audio');
      var deleteButton = document.createElement('button');

      clipContainer.classList.add('clip');
      audio.setAttribute('controls', '');
      deleteButton.innerHTML = "Delete";
      clipLabel.innerHTML = clipName;

      clipContainer.appendChild(audio);
      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(deleteButton);
      soundClips.appendChild(clipContainer);

      audio.controls = true;
      var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      chunks = [];
      var audioURL = URL.createObjectURL(blob);
      audio.src = audioURL;
      console.log("recorder stopped");

      deleteButton.onclick = function(e) {
        evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
      }
    }

    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    }
  })
  .catch(function(err) {
    console.log('The following error occurred: ' + err);
  })
}
```

> **Note:** This code sample is inspired by the Web Dictaphone demo. Some lines have been omitted for brevity; [refer to the source](https://github.com/mdn/web-dictaphone/) for the complete code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on Github](https://github.com/mdn/web-dictaphone/).)
- [Recording a media element](/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("MediaDevices.getUserMedia")}}
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML5 video language lab web application using MediaDevices and the MediaStream Recording API for video recording ([source on GitHub](https://github.com/chrisjohndigital/OpenLang))

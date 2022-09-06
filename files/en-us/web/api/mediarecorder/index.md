---
title: MediaRecorder
slug: Web/API/MediaRecorder
page-type: web-api-interface
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

{{InheritanceDiagram}}

## Constructor

- {{domxref("MediaRecorder.MediaRecorder", "MediaRecorder()")}}
  - : Creates a new `MediaRecorder` object, given a {{domxref("MediaStream")}} to record. Options are available to do things like set the container's MIME type (such as `"video/webm"` or `"video/mp4"`) and the bit rates of the audio and video tracks or a single overall bit rate.

## Properties

- {{domxref("MediaRecorder.mimeType")}} {{ReadOnlyInline}}
  - : Returns the MIME type that was selected as the recording container for the `MediaRecorder` object when it was created.
- {{domxref("MediaRecorder.state")}} {{ReadOnlyInline}}
  - : Returns the current state of the `MediaRecorder` object (`inactive`, `recording`, or `paused`.)
- {{domxref("MediaRecorder.stream")}} {{ReadOnlyInline}}
  - : Returns the stream that was passed into the constructor when the `MediaRecorder` was created.
- {{domxref("MediaRecorder.videoBitsPerSecond")}} {{ReadOnlyInline}}
  - : Returns the video encoding bit rate in use. This may differ from the bit rate specified in the constructor (if it was provided).
- {{domxref("MediaRecorder.audioBitsPerSecond")}} {{ReadOnlyInline}}
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
  - : Stops recording, at which point a {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} event containing the final `Blob` of saved data is fired. No more recording occurs.

## Static methods

- {{domxref("MediaRecorder.isTypeSupported()")}}
  - : A static method which returns a `true` or `false` value indicating if the given MIME media type is supported by the current user agent.

## Events

Listen to these events using `addEventListener()` or by assigning an event listener to the `oneventname` property of this interface.

- [`dataavailable`](/en-US/docs/Web/API/MediaRecorder/dataavailable_event)
  - : Fires periodically each time `timeslice` milliseconds of media have been recorded (or when the entire media has been recorded, if `timeslice` wasn't specified). The event, of type {{domxref("BlobEvent")}}, contains the recorded media in its {{domxref("BlobEvent.data", "data")}} property.
- [`error`](/en-US/docs/Web/API/MediaRecorder/error_event)
  - : Fired when there are fatal errors that stop recording. The received event is based on the {{domxref("MediaRecorderErrorEvent")}} interface, whose {{domxref("MediaRecorderErrorEvent.error", "error")}} property contains a {{domxref("DOMException")}} that describes the actual error that occurred.
- [`pause`](/en-US/docs/Web/API/MediaRecorder/pause_event)
  - : Fired when media recording is paused.
- [`resume`](/en-US/docs/Web/API/MediaRecorder/resume_event)
  - : Fired when media recording resumes after being paused.
- [`start`](/en-US/docs/Web/API/MediaRecorder/start_event)
  - : Fired when media recording starts.
- [`stop`](/en-US/docs/Web/API/MediaRecorder/stop_event)
  - : Fired when media recording ends, either when the {{domxref("MediaStream")}} ends, or after the {{domxref("MediaRecorder.stop()")}} method is called.
- [`warning`](/en-US/docs/Web/API/MediaRecorder/warning_event) {{deprecated_inline}}
  - : Fired when media recording has a non-fatal error, or after the {{domxref("MediaRecorder.onwarning()")}} method is called.

## Example

```js
if (navigator.mediaDevices) {
  console.log('getUserMedia supported.');

  const constraints = { audio: true };
  let chunks = [];

  navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {

    const mediaRecorder = new MediaRecorder(stream);

    visualize(stream);

    record.onclick = () => {
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log("recorder started");
      record.style.background = "red";
      record.style.color = "black";
    }

    stop.onclick = () => {
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
      console.log("recorder stopped");
      record.style.background = "";
      record.style.color = "";
    }

    mediaRecorder.onstop = (e) => {
      console.log("data available after MediaRecorder.stop() called.");

      const clipName = prompt('Enter a name for your sound clip');

      const clipContainer = document.createElement('article');
      const clipLabel = document.createElement('p');
      const audio = document.createElement('audio');
      const deleteButton = document.createElement('button');

      clipContainer.classList.add('clip');
      audio.setAttribute('controls', '');
      deleteButton.textContent = "Delete";
      clipLabel.textContent = clipName;

      clipContainer.appendChild(audio);
      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(deleteButton);
      soundClips.appendChild(clipContainer);

      audio.controls = true;
      const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      chunks = [];
      const audioURL = URL.createObjectURL(blob);
      audio.src = audioURL;
      console.log("recorder stopped");

      deleteButton.onclick = (e) => {
        const evtTgt = e.target;
        evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
      }
    }

    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    }
  })
  .catch((err) => {
    console.error(`The following error occurred: ${err}`);
  })
}
```

> **Note:** This code sample is inspired by the Web Dictaphone demo. Some lines have been omitted for brevity; [refer to the source](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone) for the complete code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the MediaRecorder API](/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/dom-examples/media/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).)
- [Recording a media element](/en-US/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("MediaDevices.getUserMedia")}}
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML video language lab web application using MediaDevices and the MediaStream Recording API for video recording ([source on GitHub](https://github.com/chrisjohndigital/OpenLang))

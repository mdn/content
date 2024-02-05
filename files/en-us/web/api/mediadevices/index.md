---
title: MediaDevices
slug: Web/API/MediaDevices
page-type: web-api-interface
browser-compat: api.MediaDevices
---

{{APIRef("Media Capture and Streams")}}{{SecureContext_Header}}

The **`MediaDevices`** interface of the {{domxref("Media Capture and Streams API", "", "", "nocode")}} provides access to connected media input devices like cameras and microphones, as well as screen sharing. In essence, it lets you obtain access to any hardware source of media data.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent interface, {{domxref("EventTarget")}}._

## Instance methods

_Inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("MediaDevices.enumerateDevices", "enumerateDevices()")}}
  - : Obtains an array of information about the media input and output devices available on the system.
- {{domxref("MediaDevices.getSupportedConstraints", "getSupportedConstraints()")}}
  - : Returns an object conforming to {{domxref("MediaTrackSupportedConstraints")}} indicating which constrainable properties are supported on the {{domxref("MediaStreamTrack")}} interface. See [Media Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints) to learn more about constraints and how to use them.
- {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}
  - : Prompts the user to select a display or portion of a display (such as a window) to capture as a {{domxref("MediaStream")}} for sharing or recording purposes. Returns a promise that resolves to a `MediaStream`.
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
  - : With the user's permission through a prompt, turns on a camera and/or a microphone on the system and provides a {{domxref("MediaStream")}} containing a video track and/or an audio track with the input.
- {{domxref("MediaDevices.selectAudioOutput", "selectAudioOutput()") }} {{Experimental_Inline}}
  - : Prompts the user to select a specific audio output device.

## Events

- {{domxref("MediaDevices/devicechange_event", "devicechange")}}
  - : Fired when a media input or output device is attached to or removed from the user's computer.

## Example

```js
// Put variables in global scope to make them available to the browser console.
const video = document.querySelector("video");
const constraints = {
  audio: false,
  video: true,
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((stream) => {
    const videoTracks = stream.getVideoTracks();
    console.log("Got stream with constraints:", constraints);
    console.log(`Using video device: ${videoTracks[0].label}`);
    stream.onremovetrack = () => {
      console.log("Stream ended");
    };
    video.srcObject = stream;
  })
  .catch((error) => {
    if (error.name === "OverconstrainedError") {
      console.error(
        `The resolution ${constraints.video.width.exact}x${constraints.video.height.exact} px is not supported by your device.`,
      );
    } else if (error.name === "NotAllowedError") {
      console.error(
        "You need to grant this page permission to access your camera and microphone.",
      );
    } else {
      console.error(`getUserMedia error: ${error.name}`, error);
    }
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API): The API this interface is part of.
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API): The API defining the {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} method.
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("Navigator.mediaDevices")}}: Returns a reference to a `MediaDevices` object that can be used to access devices.
- [CameraCaptureJS:](https://github.com/chrisjohndigital/CameraCaptureJS) HTML video capture and playback using `MediaDevices` and the MediaStream Recording API
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML video language lab web application using `MediaDevices` and the MediaStream Recording API for video recording

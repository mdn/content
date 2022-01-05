---
title: MediaDevices
slug: Web/API/MediaDevices
tags:
  - API
  - Audio
  - Conference
  - Devices
  - Interface
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaDevices
  - Reference
  - Screen Capture
  - Screen Capture API
  - Sharing
  - Video
  - WebRTC
browser-compat: api.MediaDevices
---
{{APIRef("Media Capture and Streams")}}

The **`MediaDevices`** interface provides access to connected media input devices like cameras and microphones, as well as screen sharing. In essence, it lets you obtain access to any hardware source of media data.

## Properties

_Inherits properties from its parent interface, {{domxref("EventTarget")}}._

## Events

- {{domxref("MediaDevices/devicechange_event", "devicechange")}}
  - : Fired when a media input or output device is attached to or removed from the user's computer.
    Also available via the {{domxref("MediaDevices/ondevicechange", "ondevicechange")}} property.

## Methods

_Inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{ domxref("MediaDevices.enumerateDevices", "enumerateDevices()") }}
  - : Obtains an array of information about the media input and output devices available on the system.
- {{domxref("MediaDevices.getSupportedConstraints", "getSupportedConstraints()")}}
  - : Returns an object conforming to {{domxref("MediaTrackSupportedConstraints")}} indicating which constrainable properties are supported on the {{domxref("MediaStreamTrack")}} interface. See {{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API", "Capabilities and constraints")}} to learn more about constraints and how to use them.
- {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}
  - : Prompts the user to select a display or portion of a display (such as a window) to capture as a {{domxref("MediaStream")}} for sharing or recording purposes. Returns a promise that resolves to a `MediaStream`.
- {{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }}
  - : With the user's permission through a prompt, turns on a camera and/or a microphone on the system and provides a {{domxref("MediaStream")}} containing a video track and/or an audio track with the input.
- {{domxref("MediaDevices.selectAudioOutput", "selectAudioOutput()") }}
  - : Prompts the user to select a specific audio output device.

## Example

```js
'use strict';

// Put variables in global scope to make them available to the browser console.
var video = document.querySelector('video');
var constraints = window.constraints = {
  audio: false,
  video: true
};
var errorElement = document.querySelector('#errorMsg');

navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  var videoTracks = stream.getVideoTracks();
  console.log('Got stream with constraints:', constraints);
  console.log('Using video device: ' + videoTracks[0].label);
  stream.onremovetrack = function() {
    console.log('Stream ended');
  };
  window.stream = stream; // make variable available to browser console
  video.srcObject = stream;
})
.catch(function(error) {
  if (error.name === 'ConstraintNotSatisfiedError') {
    errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
        constraints.video.height.exact + ' px is not supported by your device.');
  } else if (error.name === 'PermissionDeniedError') {
    errorMsg('Permissions have not been granted to use your camera and ' +
      'microphone, you need to allow the page access to your devices in ' +
      'order for the demo to work.');
  }
  errorMsg('getUserMedia error: ' + error.name, error);
});

function errorMsg(msg, error) {
  errorElement.innerHTML += '<p>' + msg + '</p>';
  if (typeof error !== 'undefined') {
    console.error(error);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API): The API this interface is part of.
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API): The API defining the {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} method.
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("Navigator.mediaDevices")}}: Returns a reference to a `MediaDevices` object that can be used to access devices.
- [CameraCaptureJS:](https://github.com/chrisjohndigital/CameraCaptureJS) HTML5 video capture and playback using `MediaDevices` and the MediaStream Recording API ([source on GitHub](https://github.com/chrisjohndigital/CameraCaptureJS))
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML5 video language lab web application using `MediaDevices` and the MediaStream Recording API for video recording ([source on GitHub](https://github.com/chrisjohndigital/OpenLang))

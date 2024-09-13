---
title: "Navigator: getUserMedia() method"
short-title: getUserMedia()
slug: Web/API/Navigator/getUserMedia
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.Navigator.getUserMedia
---

{{APIRef("Media Capture and Streams")}}{{deprecated_header}}{{SecureContext_Header}}

The deprecated **`Navigator.getUserMedia()`** method prompts the user for permission to use up to one video input device (such as a camera or shared screen) and up to one audio input device (such as a microphone) as the source for a {{domxref("MediaStream")}}.

If permission is granted, a `MediaStream` whose video and/or audio tracks come from those devices is delivered to the specified success callback.
If permission is denied, no compatible input devices exist, or any other error condition occurs, the error callback is executed with an object describing what went wrong.
If the user instead doesn't make a choice at all, neither callback is executed.

> [!NOTE]
> This is a legacy method.
> Please use the newer {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} instead.
> While technically not deprecated, this old callback version is marked as such, since the specification strongly encourages using the newer promise returning version.

## Syntax

```js-nolint
getUserMedia(constraints, successCallback, errorCallback)
```

### Parameters

- `constraints`
  - : An object specifying the types of media to
    request, along with any requirements for each type. For details, see the [constraints](/en-US/docs/Web/API/MediaDevices/getUserMedia#parameters)
    section under the modern {{domxref("MediaDevices.getUserMedia()")}} method, as well
    as the article [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints).
- `successCallback`

  - : A function which is invoked when the request for media access is approved. The
    function is called with one parameter: the {{domxref("MediaStream")}} object that
    contains the media stream. Your callback can then assign the stream to the desired
    object (such as an {{HTMLElement("audio")}} or {{HTMLElement("video")}} element), as
    shown in the following example:

    ```js
    function successCallback(stream) {
      const video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        // Do something with the video here.
      };
    }
    ```

- `errorCallback`
  - : When the call fails, the function specified in the `errorCallback` is
    invoked with an object as its sole argument; this
    object is modeled on {{domxref("DOMException")}}.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Width and height

Here's an example of using `getUserMedia()`, including code to cope with
various browsers' prefixes. Note that this is the deprecated way of doing it: See the
[Examples](/en-US/docs/Web/API/MediaDevices/getUserMedia#frame_rate) section
under the {{domxref("MediaDevices.getUserMedia()")}} for modern examples.

```js
navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia(
    { audio: true, video: { width: 1280, height: 720 } },
    (stream) => {
      const video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
      };
    },
    (err) => {
      console.error(`The following error occurred: ${err.name}`);
    },
  );
} else {
  console.log("getUserMedia not supported");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaDevices.getUserMedia()")}} that replaces this deprecated method.
- [WebRTC](/en-US/docs/Web/API/WebRTC_API) - the introductory page to the API
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API) - the API for the
  media stream objects
- [Taking webcam photos](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos) - a
  tutorial on using `getUserMedia()` for taking photos rather than video.

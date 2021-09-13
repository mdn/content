---
title: MediaDevices.getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
tags:
  - API
  - Capture
  - Conference
  - Media
  - MediaDevices
  - Method
  - Reference
  - Screen Capture
  - Screen Capture API
  - Sharing
  - Video
  - display
  - getDisplayMedia
  - screen
browser-compat: api.MediaDevices.getDisplayMedia
---
{{DefaultAPISidebar("Screen Capture API")}}

The {{domxref("MediaDevices")}} interface's
**`getDisplayMedia()`** method prompts the user to select and
grant permission to capture the contents of a display or portion thereof (such as a
window) as a {{domxref("MediaStream")}}.

The resulting stream can then be
recorded using the [MediaStream
Recording API](/en-US/docs/Web/API/MediaStream_Recording_API) or transmitted as part of a [WebRTC](/en-US/docs/Web/API/WebRTC_API) session.

See [Using the
Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) for more details and an example.

## Syntax

```js
var promise = navigator.mediaDevices.getDisplayMedia(constraints);
```

### Parameters

- `constraints` {{optional_inline}}
  - : An optional {{domxref("MediaStreamConstraints")}} object specifying requirements for
    the returned {{domxref("MediaStream")}}. Since `getDisplayMedia()` requires
    a video track, the returned stream will have one even if no video track is expressly
    requested by the `constraints` object.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("MediaStream")}} containing a
video track whose contents come from a user-selected screen area, as well as an optional
audio track.

> **Note:** Browser support for audio tracks varies, both in terms of
> whether or not they're supported at all by the media recorder and in terms of the
> audio sources supported. Check the {{anch("Browser
    compatibility", "compatibility table")}} for details for each browser.

### Exceptions

Rejections of the returned promise are made by passing a {{domxref("DOMException")}}
error object to the promise's failure handler. Possible errors are:

- {{JSxRef("AbortError")}}
  - : An error or failure that doesn't match any of the other exceptions below occurred.
- {{JSxRef("InvalidStateError")}}
  - : The call to `getDisplayMedia()` was not made from code running due to a
    user action, such as an event handler. Another potential cause for this event: the
    {{domxref("document")}} in whose context `getDisplayMedia()` was called is
    not fully active; for example, perhaps it is not the frontmost tab.
- {{JSxRef("NotAllowedError")}}
  - : Permission to access a screen area was denied by the user, or the current browsing
    instance is not permitted access to screen sharing.
- {{JSxRef("NotFoundError")}}
  - : No sources of screen video are available for capture.
- {{JSxRef("NotReadableError")}}
  - : The user selected a screen, window, tab, or other source of screen data, but a
    hardware or operating system level error or lockout occurred, preventing the sharing
    of the selected source.
- {{JSxRef("OverconstrainedError")}}
  - : After creating the stream, applying the specified `constraints` fails
    because no compatible stream could be generated.
- {{JSxRef("TypeError")}}
  - : The specified `constraints` include constraints which are not permitted
    when calling `getDisplayMedia()`. These unsupported constraints are
    `advanced` and any constraints which in turn have a member named
    `min` or `exact`.

## Usage notes

### Privacy and security

Because `getDisplayMedia()` could be used in nefarious ways, it can be a
source of significant privacy and security concerns. For that reason, the specification
details measures browsers are required to take in order to fully support
`getDisplayMedia()`.

- The specified `constraints` can't be used to limit the options available
  to the user. Instead, they must be applied after the user chooses a source, in order
  to generate output that matches the constraints.
- The go-ahead permission to use `getDisplayMedia()` cannot be persisted
  for reuse. The user must be prompted for permission every time.
- The call to `getDisplayMedia()` must be made from code which is running
  in response to a user action, such as in an event handler.
- Browsers are encouraged to provide a warning to users about sharing displays or
  windows that contain browsers, and to keep a close eye on what other content might be
  getting captured and shown to other users.

## Example

In the example below, a `startCapture()` method is created which initiates
screen capture given a set of options specified by the `displayMediaOptions`
parameter. The options are specified in the form of a
{{domxref("MediaStreamConstraints")}} object which specifies the preferred stream
configuration and the [display
surface](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#visible_vs_logical_display_surfaces) from which video is to be captured.

```js
async function startCapture(displayMediaOptions) {
  let captureStream = null;

  try {
    captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch(err) {
    console.error("Error: " + err);
  }
  return captureStream;
}
```

This uses {{jsxref("await")}} to asynchronously wait for `getDisplayMedia()`
to resolve with a {{domxref("MediaStream")}} which contains the display contents as
requested by the specified options. The stream is then returned to the caller for use,
perhaps for adding to a WebRTC call using {{domxref("RTCPeerConnection.addTrack()")}} to
add the video track from the stream.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the
  Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}: Capturing media from a
  camera and/or microphone

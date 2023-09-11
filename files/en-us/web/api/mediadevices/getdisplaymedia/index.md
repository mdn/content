---
title: "MediaDevices: getDisplayMedia() method"
short-title: getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
page-type: web-api-instance-method
browser-compat: api.MediaDevices.getDisplayMedia
---

{{DefaultAPISidebar("Screen Capture API")}}

The {{domxref("MediaDevices")}} interface's **`getDisplayMedia()`** method prompts the user to select and
grant permission to capture the contents of a display or portion thereof (such as a window) as a {{domxref("MediaStream")}}.

The resulting stream can then be
recorded using the [MediaStream Recording API](/en-US/docs/Web/API/MediaStream_Recording_API) or transmitted as part of a [WebRTC](/en-US/docs/Web/API/WebRTC_API) session.

See [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) for more details and an example.

## Syntax

```js-nolint
getDisplayMedia()
getDisplayMedia(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An optional object specifying requirements for the returned {{domxref("MediaStream")}}. The options for `getDisplayMedia()` work in the same as the [constraints](/en-US/docs/Web/API/MediaDevices/getUserMedia#parameters) for the {{domxref("MediaDevices.getUserMedia()")}} method, although in that case only `audio` and `video` can be specified. The list of possible option properties for `getDisplayMedia()` is as follows:
    - `video` {{optional_inline}}
      - : A boolean or a {{domxref("MediaTrackConstraints")}} instance; the default value is `true`. If this option is omitted or set to `true`, the stream will contain a video track A value of `true` indicates that the returned {{domxref("MediaStream")}} will contain a video track. Since `getDisplayMedia()` requires a video track, if this option is set to `false` the promise will reject with a `TypeError`.
    - `audio` {{optional_inline}}
      - : A boolean or a {{domxref("MediaTrackConstraints")}} instance; the default value is `false`. A value of `true` indicates that the returned {{domxref("MediaStream")}} will contain an audio track, if audio is supported and available for the display surface chosen by the user.
    - `controller` {{optional_inline}}
      - : A {{domxref("CaptureController")}} object instance containing methods that can be used to further manipulate the capture session if included.
    - `preferCurrentTab` {{non-standard_inline}} {{optional_inline}}
      - : A boolean; a value of `true` instructs the browser to offer the current tab as the most prominent capture source, i.e. as a separate "This Tab" option in the "Choose what to share" options presented to the user. This is useful as many app types generally just want to share the current tab. For example, a slide deck app might want to let the user stream the current tab containing the presentation to a virtual conference. A default value is not mandated by the spec; see the [Browser compatibility](#browser_compatibility) section for browser-specific defaults.
    - `selfBrowserSurface` {{optional_inline}}
      - : An enumerated value specifying whether the browser should allow the user to select the current tab for capture. This helps to avoid the "infinite hall of mirrors" effect experienced when a video conferencing app inadvertently shares its own display. Possible values are `include`, which hints that the browser should include the current tab in the choices offered for capture, and `exclude`, which hints that it should be excluded. A default value is not mandated by the spec; see the [Browser compatibility](#browser_compatibility) section for browser-specific defaults.
    - `surfaceSwitching` {{optional_inline}}
      - : An enumerated value specifying whether the browser should display a control to allow the user to dynamically switch the shared tab during screen-sharing. This is much more convenient than having to go through the whole sharing process again each time a user wants to switch the shared tab. Possible values are `include`, which hints that the browser should include the control, and `exclude`, which hints that it should not be shown. A default value is not mandated by the spec; see the [Browser compatibility](#browser_compatibility) section for browser-specific defaults.
    - `systemAudio` {{optional_inline}}
      - : An enumerated value specifying whether the browser should include the system audio among the possible audio sources offered to the user. Possible values are `include`, which hints that the browser should include the system audio in the list of choices, and `exclude`, which hints that it should be excluded. A default value is not mandated by the spec; see the [Browser compatibility](#browser_compatibility) section for browser-specific defaults.

> **Note:** See the article [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints) for a lot more detail on how these options work.

### Return value

A {{jsxref("Promise")}} that resolves to a {{domxref("MediaStream")}} containing a
video track whose contents come from a user-selected screen area, as well as an optional
audio track.

> **Note:** Browser support for audio tracks varies, both in terms of whether or not they're supported at all by the media recorder and in terms of the audio sources supported. Check the [compatibility table](#browser_compatibility) for details for each browser.

### Exceptions

- `AbortError` {{domxref("DOMException")}}
  - : Returned if an error or failure does not match any of the other exceptions listed here.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the call to `getDisplayMedia()` was not made from code running due to a
    user action, such as an event handler. Another potential cause for this event: the
    {{domxref("document")}} in whose context `getDisplayMedia()` was called is
    not fully active; for example, perhaps it is not the frontmost tab.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Returned if the permission to access a screen area was denied by the user (for example by a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)), or the current browsing instance is not permitted access to screen sharing.
- `NotFoundError` {{domxref("DOMException")}}
  - : Returned if no sources of screen video are available for capture.
- `NotReadableError` {{domxref("DOMException")}}
  - : Returned if the user selected a screen, window, tab, or another source of screen data, but a
    hardware or operating system level error or lockout occurred, preventing the sharing
    of the selected source.
- `OverconstrainedError` {{domxref("DOMException")}}
  - : Returned if, after creating the stream, applying any specified constraints fails
    because no compatible stream could be generated.
- {{jsxref("TypeError")}}
  - : Returned if the specified `options` include values that are not permitted
    when calling `getDisplayMedia()`, for example a `video` property set to false, or if any specified {{domxref("MediaTrackConstraints")}} are not permitted. `min` and `exact` values are not permitted in constraints used in {{domxref("MediaDevices.getDisplayMedia()")}} calls.

## Security

Because `getDisplayMedia()` could be used in nefarious ways, it can be a
source of significant privacy and security concerns. For that reason, the specification
details measures browsers are required to take in order to fully support
`getDisplayMedia()`.

- The specified options can't be used to limit the choices available
  to the user. Instead, they must be applied after the user chooses a source, in order
  to generate output that matches the options.
- The go-ahead permission to use `getDisplayMedia()` cannot be persisted
  for reuse. The user must be prompted for permission every time.
- [Transient user activation](/en-US/docs/Web/Security/User_activation) is required. The user has to interact with the page or a UI element in order for this feature to work.
- Browsers are encouraged to provide a warning to users about sharing displays or
  windows that contain browsers, and to keep a close eye on what other content might be
  getting captured and shown to other users.

## Examples

In the example below, a `startCapture()` method is created which initiates
screen capture given a set of options specified by the `displayMediaOptions`
parameter. The options are specified in an object which specifies the preferred stream
configuration and the [display surface](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#visible_vs_logical_display_surfaces) from which video is to be captured.

```js
async function startCapture(displayMediaOptions) {
  let captureStream;

  try {
    captureStream =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
  return captureStream;
}
```

This uses {{jsxref("Operators/await", "await")}} to asynchronously wait for `getDisplayMedia()`
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
- [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}: Capturing media from a
  camera and/or microphone

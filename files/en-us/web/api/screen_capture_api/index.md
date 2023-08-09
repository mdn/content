---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
page-type: web-api-overview
browser-compat: api.MediaDevices.getDisplayMedia
---

{{DefaultAPISidebar("Screen Capture API")}}

The Screen Capture API introduces additions to the existing Media Capture and Streams API to let the user select a screen or portion of a screen (such as a window) to capture as a media stream. This stream can then be recorded or shared with others over the network.

## Screen Capture API concepts and usage

The Screen Capture API is relatively simple to use. Its sole method is {{domxref("MediaDevices.getDisplayMedia()")}}, whose job is to ask the user to select a screen or portion of a screen to capture in the form of a {{domxref("MediaStream")}}.

To start capturing video from the screen, you call `getDisplayMedia()` on `navigator.mediaDevices`:

```js
captureStream = await navigator.mediaDevices.getDisplayMedia(
  displayMediaOptions,
);
```

The {{jsxref("Promise")}} returned by `getDisplayMedia()` resolves to a {{domxref("MediaStream")}} which streams the captured media.

See the article [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) for a more in-depth look at how to use the API to capture screen contents as a stream.

## Interfaces

- {{domxref("CaptureController")}}
  - : Provides methods that can be used to further manipulate a capture session separate from its initiation via {{domxref("MediaDevices.getDisplayMedia()")}}. A `CaptureController` object is associated with a capture session by passing it into a {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} call as the value of the options object's `controller` property.

## Additions to the MediaDevices interface

- {{domxref("MediaDevices.getDisplayMedia()")}}
  - : The `getDisplayMedia()` method is added to the `MediaDevices` interface. Similar to {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, this method creates a promise that resolves with a {{domxref("MediaStream")}} containing the display area selected by the user, in a format that matches the specified options.

## Additions to existing dictionaries

The Screen Capture API adds properties to the following dictionaries defined by other specifications.

### MediaTrackConstraints

- {{domxref("MediaTrackConstraints.displaySurface")}}
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) indicating what type of display surface is to be captured. The value is one of `browser`, `monitor`, or `window`.
- {{domxref("MediaTrackConstraints.logicalSurface")}}
  - : Indicates whether or not the video in the stream represents a logical display surface (that is, one which may not be entirely visible onscreen, or may be completely offscreen). A value of `true` indicates a logical display surface is to be captured.
- {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback")}}
  - : Controls whether the audio playing in a tab will continue to be played out of a user's local speakers when the tab is captured, or whether it will be suppressed. A value of `true` indicates that it will be suppressed.

### MediaTrackSettings

- {{domxref("MediaTrackSettings.cursor")}}
  - : A string which indicates whether or not the display surface currently being captured includes the mouse cursor, and if so, whether it's only visible while the mouse is in motion or if it's always visible. The value is one of `always`, `motion`, or `never`.
- {{domxref("MediaTrackSettings.displaySurface")}}
  - : A string indicating what type of display surface is currently being captured. The value is one of `browser`, `monitor`, or `window`.
- {{domxref("MediaTrackSettings.logicalSurface")}}
  - : A boolean value, which is `true` if the video being captured doesn't directly correspond to a single onscreen display area.
- {{domxref("MediaTrackSettings.suppressLocalAudioPlayback")}}
  - : A boolean value, which is `true` if the audio being captured is not played out of the user's local speakers.

### MediaTrackSupportedConstraints

- {{domxref("MediaTrackSupportedConstraints.displaySurface")}}
  - : A boolean, which is `true` if the current environment supports the {{domxref("MediaTrackConstraints.displaySurface")}} constraint.
- {{domxref("MediaTrackSupportedConstraints.logicalSurface")}}
  - : A boolean, which is `true` if the current environment supports the constraint {{domxref("MediaTrackConstraints.logicalSurface")}}.
- {{domxref("MediaTrackSupportedConstraints.suppressLocalAudioPlayback")}}
  - : A boolean, which is `true` if the current environment supports the constraint {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback")}}.

## Permissions Policy validation

{{Glossary("User agent", "User agents")}} that support [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) (either using the HTTP {{HTTPHeader("Permissions-Policy")}} header or the {{HTMLElement("iframe")}} attribute [`allow`](/en-US/docs/Web/HTML/Element/iframe#allow)) can specify a desire to use the Screen Capture API using the directive `display-capture`:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

The default allowlist is `self`, which lets any content within the same origin use Screen Capture.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaDevices.getDisplayMedia()")}}

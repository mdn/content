---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
page-type: web-api-overview
tags:
  - API
  - MediaDevices
  - MediaStream
  - Overview
  - Reference
  - Screen Capture
  - Screen Capture API
  - Screen Sharing
  - getDisplayMedia
browser-compat: api.MediaDevices.getDisplayMedia
---
{{DefaultAPISidebar("Screen Capture API")}}

The Screen Capture API introduces additions to the existing Media Capture and Streams API to let the user select a screen or portion of a screen (such as a window) to capture as a media stream. This stream can then be recorded or shared with others over the network.

## Screen Capture API concepts and usage

The Screen Capture API is relatively simple to use. Its sole method is {{domxref("MediaDevices.getDisplayMedia()")}}, whose job is to ask the user to select a screen or portion of a screen to capture in the form of a {{domxref("MediaStream")}}.

To start capturing video from the screen, you call `getDisplayMedia()` on the instance of `Media` `navigator.mediaDevices`:

```js
captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

The {{jsxref("Promise")}} returned by `getDisplayMedia()` resolves to a {{domxref("MediaStream")}} which streams the captured media.

See the article [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) for a more in-depth look at how to use the API to capture screen contents as a stream.

## Additions to existing interfaces

The Screen Capture API doesn't have any interfaces of its own; instead, it adds one method to the existing {{domxref("MediaDevices")}} interface.

### MediaDevices interface

- {{domxref("MediaDevices.getDisplayMedia()")}}
  - : The `getDisplayMedia()` method is added to the `MediaDevices` interface. Similar to {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, this method creates a promise that resolves with a {{domxref("MediaStream")}} containing the display area selected by the user, in a format that matches the specified options.

## Additions to existing dictionaries

The Screen Capture API adds properties to the following dictionaries defined by other specifications.

### MediaTrackConstraints

- {{domxref("MediaTrackConstraints.cursor")}}
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) indicating whether or not the cursor should be included in the captured display surface's stream, and if it should always be visible or if it should only be visible while the mouse is in motion.
- {{domxref("MediaTrackConstraints.displaySurface")}}
  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) indicating what type of display surface is to be captured. The value is one of `application`, `browser`, `monitor`, or `window`.
- {{domxref("MediaTrackConstraints.logicalSurface")}}
  - : Indicates whether or not the video in the stream represents a logical display surface (that is, one which may not be entirely visible onscreen, or may be completely offscreen). A value of `true` indicates a logical display surface is to be captured.

### MediaTrackSettings

- {{domxref("MediaTrackSettings.cursor")}}
  - : A string which indicates whether or not the display surface currently being captured includes the mouse cursor, and if so, whether it's only visible while the mouse is in motion or if it's always visible. The value is one of `always`, `motion`, or `never`.
- {{domxref("MediaTrackSettings.displaySurface")}}
  - : A string indicating what type of display surface is currently being captured. The value is one of `application`, `browser`, `monitor`, or `window`.
- {{domxref("MediaTrackSettings.logicalSurface")}}
  - : A Boolean value which is `true` if the video being captured doesn't directly correspond to a single onscreen display area.

### MediaTrackSupportedConstraints

- {{domxref("MediaTrackSupportedConstraints.cursor")}}
  - : A Boolean which is `true` if the user agent and device support the {{domxref("MediaTrackConstraints.cursor")}} constraint.
- {{domxref("MediaTrackSupportedConstraints.displaySurface")}}
  - : A Boolean which is `true` if the current environment supports the {{domxref("MediaTrackConstraints.displaySurface")}} constraint.
- {{domxref("MediaTrackSupportedConstraints.logicalSurface")}}
  - : A Boolean which is `true` if the current environment supports the constraint {{domxref("MediaTrackConstraints.logicalSurface")}}.

## Dictionaries

The following dictionaries are defined by the Screen Capture API.

- `CursorCaptureConstraint`
  - : An enumerated string type used to provide the value for the `cursor` property for the settings and constraints. The possible values are `always`, `motion`, and `never`.
- `DisplayCaptureSurfaceType`
  - : An enumerated string type which is used to identify the kind of display surface to capture. This type is used for the `displaySurface` property in the constraints and settings objects, and has the possible values `application`, `browser`, `monitor`, and `window`.

## Feature Policy validation

{{Glossary("User agent", "User agents")}} that support Feature Policy (either using HTTP's {{HTTPHeader("Feature-Policy")}} header or the {{HTMLElement("iframe")}} attribute {{htmlattrxref("allow", "iframe")}}) can specify a desire to use the Screen Capture API using the policy control directive `display-capture`:

```html
<iframe allow="display-capture" src="/some-other-document.html">
```

The default allow list is `self`, which lets the any content within the document use Screen Capture.

See [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy) for a more in-depth explanation of how Feature Policy is used.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- {{domxref("MediaDevices.getDisplayMedia()")}}

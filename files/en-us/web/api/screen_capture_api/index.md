---
title: Screen Capture API
slug: Web/API/Screen_Capture_API
page-type: web-api-overview
browser-compat:
  - api.MediaDevices.getDisplayMedia
  - api.CropTarget
  - api.RestrictionTarget
spec-urls:
  - https://w3c.github.io/mediacapture-screen-share/
  - https://screen-share.github.io/element-capture/
  - https://w3c.github.io/mediacapture-region/
  - https://w3c.github.io/mediacapture-surface-control/
---

{{DefaultAPISidebar("Screen Capture API")}}

The Screen Capture API introduces additions to the existing Media Capture and Streams API to let the user select a screen or portion of a screen (such as a window) to capture as a media stream. This stream can then be recorded or shared with others over the network.

## Screen Capture API concepts and usage

The Screen Capture API is relatively simple to use. Its main method is {{domxref("MediaDevices.getDisplayMedia()")}}, whose job is to ask the user to select a screen or portion of a screen to capture in the form of a {{domxref("MediaStream")}}.

To start capturing video from the screen, you call `getDisplayMedia()` on `navigator.mediaDevices`:

```js
captureStream =
  await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

The {{jsxref("Promise")}} returned by `getDisplayMedia()` resolves to a {{domxref("MediaStream")}} which streams the captured display surface.

See the article [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) for a more in-depth look at how to use the API to capture screen contents as a stream.

### Screen capture extensions

The Screen Capture API has additional features that extend its capabilities:

#### Limiting the screen area captured in the stream

- The **Element Capture API** restricts the captured region to a specified rendered DOM element and its descendants.
- The **Region Capture API** crops the captured region to the area of the screen in which a specified DOM element is rendered.

See [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_API/Element_Region_Capture) to learn more.

#### Controlling the captured screen area

The **Captured Surface Control API** allows the capturing application to provide limited control over the captured display surface, for example zooming and scrolling its contents.

See [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) to learn more.

## Interfaces

- {{domxref("BrowserCaptureMediaStreamTrack")}}
  - : Represents a single video track; extends the {{domxref("MediaStreamTrack")}} class with methods to limit the part of a self-capture stream (for example, a user's screen or window) that is captured.
- {{domxref("CaptureController")}}
  - : Provides methods that can be used to further manipulate a captured display surface (captured via {{domxref("MediaDevices.getDisplayMedia()")}}). A `CaptureController` object is associated with a captured display surface by passing it into a `getDisplayMedia()` call as the value of the options object's `controller` property.
- {{domxref("CropTarget")}}
  - : Provides a static method, {{domxref("CropTarget.fromElement_static", "fromElement()")}}, which returns a {{domxref("CropTarget")}} instance that can be used to crop a captured video track to the area in which a specified element is rendered.
- {{domxref("RestrictionTarget")}}
  - : Provides a static method, {{domxref("RestrictionTarget.fromElement_static", "fromElement()")}}, which returns a {{domxref("RestrictionTarget")}} instance that can be used to restrict a captured video track to a specified DOM element.

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
- {{domxref("MediaTrackSettings.screenPixelRatio")}}
  - : A number representing the ratio of the physical size of a pixel on the captured display surface (displayed at its physical resolution) to the logical size of a CSS pixel on the capturing screen (displayed at its logical resolution). It cannot be used as a constraint or capability.

### MediaTrackSupportedConstraints

- {{domxref("MediaTrackSupportedConstraints.displaySurface")}}
  - : A boolean, which is `true` if the current environment supports the {{domxref("MediaTrackConstraints.displaySurface")}} constraint.
- {{domxref("MediaTrackSupportedConstraints.logicalSurface")}}
  - : A boolean, which is `true` if the current environment supports the constraint {{domxref("MediaTrackConstraints.logicalSurface")}}.
- {{domxref("MediaTrackSupportedConstraints.suppressLocalAudioPlayback")}}
  - : A boolean, which is `true` if the current environment supports the constraint {{domxref("MediaTrackConstraints.suppressLocalAudioPlayback")}}.

## Security considerations

Websites that support [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) (either using the HTTP {{HTTPHeader("Permissions-Policy")}} header or the {{HTMLElement("iframe")}} attribute [`allow`](/en-US/docs/Web/HTML/Reference/Elements/iframe#allow)) can specify a desire to use the Screen Capture API using the directive {{HTTPHeader("Permissions-Policy/display-capture", "display-capture")}}:

```html
<iframe allow="display-capture" src="/some-other-document.html">…</iframe>
```

A site can also specify a desire to use the [Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) via the {{HTTPHeader("Permissions-Policy/captured-surface-control", "captured-surface-control")}} directive. Specifically, the {{domxref("CaptureController.forwardWheel", "forwardWheel()")}}, {{domxref("CaptureController.increaseZoomLevel", "increaseZoomLevel()")}}, {{domxref("CaptureController.decreaseZoomLevel", "decreaseZoomLevel()")}}, and {{domxref("CaptureController.resetZoomLevel", "resetZoomLevel()")}} methods are controlled by this directive.

The default allowlist for both directives is `self`, which permits any content within the same origin use Screen Capture.

These methods are considered [powerful features](/en-US/docs/Web/Security#secure_contexts_and_feature_permissions), which means that even if permission is allowed via a `Permissions-Policy`, the user will still be prompted for permission to use them. The [Permissions API](/en-US/docs/Web/API/Permissions_API) can be used to query the aggregate permission (from both the website and the user) for using the listed features.

In addition, the specification requires that a user has recently interacted with the page to use these features — this means that [transient activation](/en-US/docs/Glossary/Transient_activation) is required. See the individual method pages for more details.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Using the Element Capture and Region Capture APIs](/en-US/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
- [Using the Captured Surface Control API](/en-US/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
- {{domxref("MediaDevices.getDisplayMedia()")}}

---
title: DisplayMediaStreamConstraints.video
slug: Web/API/DisplayMediaStreamConstraints/video
tags:
  - API
  - Capture
  - Constraints
  - DisplayMediaStreamConstraints
  - Media
  - Property
  - Reference
  - Screen Capture
  - Screen Capture API
  - Screen Sharing
  - Sharing
  - Video
  - display
  - getDisplayMedia
  - screen
browser-compat: api.DisplayMediaStreamConstraints.video
---
{{APIRef("Screen Capture API")}}

The {{domxref("DisplayMediaStreamConstraints")}} dictionary's **`video`** property is used to configure the video track in
the stream returned by {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}.

This value may be a boolean value, where `true` specifies that a default selection of input source be made (typically the entire display
area of the device in use, spanning every screen in a multiple screen configuration).
Since a video track must always be included, a value of `false` results in a `TypeError` exception being thrown.

More precise control over the format of the returned video track may be exercised by providing a constraint object, which is used to
process the video data after obtaining it from the device but prior to adding it to the stream.

## Syntax

```js
displayMediaStreamConstraints.video = allowVideoFlag;
displayMediaStreamConstraints.video = mediaTrackConstraints;

displayMediaStreamConstraints = {
  video: allowVideoFlag | mediaTrackConstraints;
}
```

### Value

The value may be either a boolean value or a "constraints" object.

If a boolean value is specified, a value of `true` (the default) indicates that the stream returned by {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}
should be in whatever format the user agent feels is best.
A value of `false` is not permitted and will throw a `TypeError`.

If a constraints object is given instead, the video track will be processed to match the settings given in the constraints object.

The allowed properties of the constraint object are:

- {{domxref("MediaTrackConstraints.cursor", "cursor")}}

  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) that specifies whether or not to include the mouse cursor in the generated track, and if so, whether or not to hide it while not moving. The value may be a single one of the following strings, or an array of them to allow the browser flexibility in deciding what to do about the cursor.

    - `always`
      - : The mouse is always visible in the video content of the {{domxref("MediaStream")}}, unless the mouse has moved outside the area of the content.
    - `motion`
      - : The mouse cursor is always included in the video if it's moving, and for a short time after it stops moving.
    - `never`
      - : The mouse cursor is never included in the shared video.

- {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}}

  - : A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) which specifies the types of display surface that may be selected by the user. This may be a single one of the following strings, or a list of them to allow multiple source surfaces:

    - `application`
      - : The stream contains all of the windows of the application chosen by the user rendered into the one video track.
    - `browser`
      - : The stream contains the contents of a single browser tab selected by the user.
    - `monitor`
      - : The stream's video track contains the entire contents of one or more of the user's screens.
    - `window`
      - : The stream contains a single window selected by the user for sharing.

- {{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}}
  - : A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) value that may contain a single Boolean value or a set of them, indicating whether or not to allow the user to choose source surfaces which do not directly correspond to display areas.
    These may include backing buffers for windows to allow capture of window contents that are hidden by other windows in front of them, or buffers containing larger documents that need to be scrolled through to see the entire contents in their windows.

## Example

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the
  Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Capabilities,
  constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)

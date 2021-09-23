---
title: MediaTrackConstraints.cursor
slug: Web/API/MediaTrackConstraints/cursor
tags:
  - API
  - Capture
  - Constraints
  - Media
  - Media Capture and Streams
  - Media Capture and Streams API
  - MediaTrackConstraints
  - Property
  - Reference
  - Screen Capture
  - Screen Capture API
  - Sharing
  - Video
  - display
  - screen
browser-compat: api.MediaTrackConstraints.cursor
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`cursor`** property is a [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDOMString)
describing the requested or mandatory constraints placed upon the value of the
{{domxref("MediaTrackSettings.cursor", "cursor")}} constrainable property, which is used
to specify whether or not the cursor should be included in the captured video.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.cursor")}} as returned by a call
to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Syntax

```js
var constraintsObject = { cursor: constraint };

constraintsObject.cursor = constraint;
```

### Value

A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#ConstrainDOMString) which specifies whether or not the mouse cursor
should be rendered into the video track in the {{domxref("MediaStream")}} returned by
the call to {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}. See
{{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API/Constraints", "How constraints
  are defined")}} for an explanation of how to define constraints.

## Usage notes

You can check the setting selected by the user agent after the display media has been
created by {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} by calling
{{domxref("MediaStreamTrack.getSettings", "getSettings()")}} on the display media's
video {{domxref("MediaStreamTrack")}}, then checking the value of  the returned
{{domxref("MediaTrackSettings")}} object's {{domxref("MediaTrackSettings.cursor",
  "cursor")}} object.

For example, if your app needs to alter the stream by inserting a representation of the
cursor position if the stream doesn't include the rendered cursor, you can determine the
need to do so by using code like this:

```js
let insertFakeCursorFlag = false;

if (displayStream.getVideoTracks()[0].getSettings().cursor === "never") {
  insertFakeCursorFlag = true;
}
```

Following this code, `insertFakeCursorFlag` is `true` if there's
no cursor rendered into the stream already. Later code can detect this flag's value and
if it's `true`, can manually look at some metadata that might be provided and
insert a fake representation of the cursor at the correct position.

## Examples

Here are some example constraints objects for `getDisplayMedia()` that make
use of the `cursor` property. In addition, see
{{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API/Constraints", "Example:
  Constraint exerciser")}} for a complete example showing how constraints are used.

### Example: Cursor always visible

This example sets up the constraints to request that the cursor always be visible.

```js
let displayMediaOptions = {
  cursor: "always"
};
```

### Example: Cursor visible during motion with fallback

In this example, the `cursor` property is configured to request that the
cursor be visible when in motion, falling back to always being visible if the user agent
doesn't support in-motion only cursor rendering.

```js
let displayMediaOptions = {
  cursor: ["motion", "always"]
};
```

### Example: Require that the cursor not be visible

This constraints object explicitly requires that the cursor _not_ be rendered
into the video track.

```js
let displayMediaOptions = {
  cursor: {
    exact: "none"
  }
};
```

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
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}

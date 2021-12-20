---
title: MediaSessionActionDetails.seekTime
slug: Web/API/MediaSessionActionDetails/seekTime
tags:
  - API
  - Audio
  - Media
  - Media Session API
  - MediaSession
  - MediaSessionActionDetails
  - Property
  - Reference
  - Scrub
  - Time
  - Video
  - absolute
  - forward
  - reverse
  - seek
  - seekTime
browser-compat: api.MediaSessionActionDetails.seekTime
---
{{APIRef("Media Session API")}}

The {{domxref("MediaSessionActionDetails")}}
dictionary's **`seekTime`** property is always included when a
[`seekto`](/en-US/docs/Web/API/MediaSessionActionDetails#seekto)
action is sent to the action handler callback. Its value is the absolute time, in
seconds, to move the current play position to.

To change the time by an offset rather than moving to an absolute time, the
[`seekforward`](/en-US/docs/Web/API/MediaSessionActionDetails#seekforward)
or
[`seekbackward`](/en-US/docs/Web/API/MediaSessionActionDetails#seekbackward)
actions should be used instead.

## Syntax

```js
let mediaSessionActionDetails = { seekTime: absTimeInSeconds };

let absTime = mediaSessionActionDetails.seekTime;
```

### Value

A floating-point value indicating the absolute time in seconds into the media to which
to move the current play position.

## Usage notes

To perform a "fast" seek (such as when issuing multiple `seekto` actions in
sequence while handling a scrubbing operation, the details object's
{{domxref("MediaSessionActionDetails.fastSeek", "fastSeek")}} property's value is set
to `true`, indicating that you should minimize or eliminate anything you do
while handling the action that is only necessary at the final step.

If the value of `fastSeek` is false, or `fastSeek` is missing,
the action should be treated as the final action of the operation, and you should
finalize any details that need to be handled.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Session API](/en-US/docs/Web/API/Media_Session_API)
- Refer to the {{domxref("MediaSession")}} method
  {{domxref("MediaSession.setActionHandler", "setActionHandler()")}}

---
title: MediaSessionActionDetails
slug: Web/API/MediaSessionActionDetails
tags:
  - API
  - Audio
  - Dictionary
  - Media
  - Media Session API
  - MediaSession
  - MediaSessionActionDetails
  - Reference
  - Video
  - forward
  - pause
  - play
  - reverse
  - seek
browser-compat: api.MediaSessionActionDetails
---
{{APIRef("Media Session API")}}

The [Media Session API'](/en-US/docs/Web/API/Media_Session_API)s **`MediaSessionActionDetails`** dictionary is the type used by the sole input parameter into the callback which is executed when a {{anch("Media action types", "media session action")}} occurs.

It specifies the type of action which needs to be performed as well as the data needed to perform the action.

## Properties

- {{domxref("MediaSessionActionDetails.action", "action")}}
  - : A [Media Session action type](/en-US/docs/Web/API/MediaSessionAction) string taken from the `MediaSessionAction` enumerated type, indicating which type of action needs to be performed. See {{anch("Media action types")}} below for possible values.
- {{domxref("MediaSessionActionDetails.fastSeek", "fastSeek")}} {{optional_inline}}
  - : An `{{anch("seekto")}}` action may *optionally* include this property, which is a Boolean value indicating whether or not to perform a "fast" seek. A "fast" seek is a seek being performed in a rapid sequence, such as when fast-forwarding or reversing through the media, rapidly skipping through it. This property can be used to indicate that you should use the shortest possible method to seek the media. `fastSeek` is not included on the final action in the seek sequence in this situation.
- {{domxref("MediaSessionActionDetails.seekOffset", "seekOffset")}} {{optional_inline}}
  - : If the `action` is either `{{anch("seekforward")}}` or `{{anch("seekbackward")}}` and this property is present, it is a floating point value which indicates the number of seconds to move the play position forward or backward. If this property isn't present, those actions should choose a reasonable default distance to skip forward or backward (such as 7 or 10 seconds).
- {{domxref("MediaSessionActionDetails.seekTime", "seekTime")}} {{optional_inline}}
  - : If the `action` is `{{anch("seekto")}}`, this property must be present and must be a floating-point value indicating the absolute time within the media to move the playback position to, where 0 indicates the beginning of the media. This property is not present for other action types.

## Media action types

A media session action's type is specified using a string from the `MediaSessionAction` enumerated type.

### Values

Each of the actions is a common media session control request. Implement support for each of these in order to allow that type of action to be performed. The following strings identify the currently available types of media session action:

- `nexttrack`
  - : Advances playback to the next track.
- `pause`
  - : Pauses playback of the media.
- `play`
  - : Begins (or resumes) playback of the media.
- `previoustrack`
  - : Moves back to the previous track.
- `seekbackward`
  - : Seeks backward through the media from the current position. The {{domxref("MediaSessionActionDetails")}} property {{domxref("MediaSessionActionDetails.seekOffset", "seekOffset")}} specifies the amount of time to seek backward.
- `seekforward`
  - : Seeks forward from the current position through the media. The {{domxref("MediaSessionActionDetails")}} property {{domxref("MediaSessionActionDetails.seekOffset", "seekOffset")}} specifies the amount of time to seek forward.
- `seekto`
  - : Moves the playback position to the specified time within the media. The time to which to seek is specified in the {{domxref("MediaSessionActionDetails")}} property {{domxref("MediaSessionActionDetails.seekTime", "seekTime")}}. If you intend to perform multiple `seekto` operations in rapid succession, you can also specify the {{domxref("MediaSessionActionDetails")}} property {{domxref("MediaSessionActionDetails.fastSeek", "fastSeek")}} property with a value of `true`. This lets the browser know it can take steps to optimize repeated operations, and is likely to result in improved performance.
- `skipad`
  - : Skips past the currently playing advertisement or commercial. This action may or may not be available, depending on the platform and {{Glossary("user agent")}}, or may be disabled due to subscription level or other circumstances.
- `stop`
  - : Halts playback entirely.

## Examples

See [`MediaSessionAction`](/en-US/docs/Web/API/MediaSessionAction#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

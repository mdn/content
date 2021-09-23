---
title: MediaSessionActionDetails.seekOffset
slug: Web/API/MediaSessionActionDetails/seekOffset
tags:
  - API
  - Audio
  - Media
  - Media Session API
  - MediaSession API
  - MediaSessionActionDetails
  - Property
  - Reference
  - Rewind
  - Scrub
  - Skip
  - Video
  - action
  - forward
  - offset
  - reverse
  - seek
  - seekOffset
browser-compat: api.MediaSessionActionDetails.seekOffset
---
{{APIRef("Media Session API")}}

The {{domxref("MediaSessionActionDetails")}}
dictionary's **`seekOffset`** property is an optional value
passed into the action handler callback to provide the number of seconds the
`seekforward` and `seekbackward` actions should move the
playback time by.

## Syntax

```js
let mediaSessionActionDetails = { seekOffset: deltaTimeInSeconds };

let deltaTime = mediaSessionActionDetails.seekOffset;
```

### Value

A floating-point value indicating the time delta in seconds by which to move the
playback position relative to its current timestamp. If the offset isn't specified, the
{{Glossary("user agent")}} will choose an appropriate offset automatically. This is
typically in the range of five to ten seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Session API](/en-US/docs/Web/API/Media_Session_API)
- Refer to the {{domxref("MediaSession")}} method
  {{domxref("MediaSession.setActionHandler", "setActionHandler()")}}

---
title: MediaSessionActionDetails.fastSeek
slug: Web/API/MediaSessionActionDetails/fastSeek
tags:
  - API
  - Audio
  - Media
  - Media Session API
  - MediaSessionActionDetails
  - Property
  - Reference
  - Scrub
  - Video
  - action
  - fastSeek
  - seek
browser-compat: api.MediaSessionActionDetails.fastSeek
---
{{APIRef("Media Session API")}}

The Boolean property **`fastSeek`** in the
{{domxref("MediaSessionActionDetails")}} dictionary is an optional value which, when
specified and `true`, indicates that the requested
[`seekto`](/en-US/docs/Web/API/MediaSessionActionDetails#seekto)
operation is part of an ongoing series of `seekto` operations. Your handler
should take steps to return as quickly as possible by skipping any steps of its
operation which are only necessary when the seek operation is complete.

Once `fastSeek` is `false` or not present, the repeating series
of `seekto` actions is complete and you can finalize the state of your web
app or content.

## Syntax

```js
let mediaSessionActionDetails = { fastSeek: shouldFastSeek };

let shouldFastSeek = mediaSessionActionDetails.fastSeek;
```

### Value

A Boolean which is `true` if the action is part of an ongoing series of seek
actions which should be treated as part of an overall seek operation. If the value
is `false` or this property isn't present, the seek is final.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Session API](/en-US/docs/Web/API/Media_Session_API)
- Refer to the {{domxref("MediaSession")}} method
  {{domxref("MediaSession.setActionHandler", "setActionHandler()")}}

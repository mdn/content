---
title: "HTMLMediaElement: seekToNextFrame() method"
short-title: seekToNextFrame()
slug: Web/API/HTMLMediaElement/seekToNextFrame
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.HTMLMediaElement.seekToNextFrame
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

The **`HTMLMediaElement.seekToNextFrame()`** method
asynchronously advances the current play position to the next frame in the media.

> **Warning:** This non-standard method is part of an experimentation process around support for
> non-real-time access to media for tasks including filtering, editing, and so forth.
> You should _not_ use this method in production code, because its implementation
> may change—or be removed outright—without notice. You are, however, invited to
> experiment with it.

This method lets you access frames of video media without the media being performed in
real time. This also lets you access media using frames as a seek unit rather than
timecodes (albeit only by seeking one frame at a time until you get to the frame you
want). Possible uses for this method include filtering and editing of video content.

This method returns immediately, returning a {{jsxref("Promise")}}, whose fulfillment
handler is called when the seek operation is complete. In addition, a
{{domxref("HTMLMediaElement/seeked_event", "seeked")}} event is sent to let interested parties know that a seek has taken
place. If the seek fails because the media is already at the last frame, a
{{domxref("HTMLMediaElement/seeked_event", "seeked")}} event occurs, followed immediately by an {{domxref("HTMLMediaElement/ended_event", "ended")}} event.

If there is no video on the media element, or the media isn't seekable, nothing
happens.

## Syntax

```js-nolint
seekToNextFrame()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} which is fulfilled once the seek operation has completed.

## Specifications

Not part of any specification.

## Browser compatibility

{{Compat}}

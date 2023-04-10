---
title: "HTMLMediaElement: currentTime property"
short-title: currentTime
slug: Web/API/HTMLMediaElement/currentTime
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.currentTime
---

{{APIRef("HTML DOM")}}

The {{domxref("HTMLMediaElement")}} interface's
**`currentTime`** property specifies the current playback time
in seconds.

Changing the value of `currentTime` seeks the media to
the new time.

## Value

A double-precision floating-point value indicating the current playback time in
seconds.

If the media is not yet playing, the value of `currentTime` indicates the
time position within the media at which playback will begin once the
{{domxref("HTMLMediaElement.play", "play()")}} method is called.

Setting `currentTime` to a new value seeks the media to the given time, if
the media is available.

For media without a known duration—such as media being streamed live—it's possible that
the browser may not be able to obtain parts of the media that have expired from the
media buffer. Also, media whose timeline doesn't begin at 0 seconds cannot be seeked to
a time before its timeline's earliest time.

The length of the media in seconds can be determined using the
{{domxref("HTMLMediaElement.duration", "duration")}} property.

## Examples

```js
const video = document.createElement("video");
console.log(video.currentTime);
```

## Usage notes

### Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), browsers may round or
otherwise adjust the value returned by `currentTime`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement")}}: Interface used to define the `HTMLMediaElement.currentTime` property
- {{domxref("HTMLMediaElement.fastSeek()")}}: Another way to set the time
- {{domxref("HTMLMediaElement.duration")}}: The duration of the media in seconds

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

### Time precision

The browser does not apply timer rounding to `currentTime`, including values supplied by script. Seeking can still adjust the resulting playback position to a position supported by the media.

The value of `currentTime` is an approximation of the current playback position. The browser updates this value as playback progresses. The [HTML specification](https://html.spec.whatwg.org/multipage/media.html#official-playback-position) requires the reported playback position to remain stable while scripts are running.

The update frequency depends on the browser and media playback pipeline. As a result, successive reads can return the same `currentTime` even when {{jsxref("Date.now()")}} has advanced. The number of decimal places in the value does not indicate how often it updates or how accurately it matches the audio or video being presented.

For example, successive readings during playback might produce these values:

```js
video.currentTime;
// Might be:
// 23.404
// 23.404
// 23.452
// …
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement")}}: Interface used to define the `HTMLMediaElement.currentTime` property
- {{domxref("HTMLMediaElement.fastSeek()")}}: Another way to set the time
- {{domxref("HTMLMediaElement.duration")}}: The duration of the media in seconds

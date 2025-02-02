---
title: "HTMLMediaElement: played property"
short-title: played
slug: Web/API/HTMLMediaElement/played
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.played
---

{{APIRef("HTML DOM")}}

The **`played`** read-only property of the {{domxref("HTMLMediaElement")}} interface indicates the time ranges the resource, an {{htmlelement("audio")}} or {{htmlelement("video")}} media file, has played. It returns a new {{domxref("TimeRanges")}} object that contains the ranges of the media source that the browser has played, if any, at the time the attribute is evaluated.

## Value

A {{domxref("TimeRanges")}} object; representing the time ranges that have been played.

## Examples

```js
const media = document.querySelector("audio");
const playedTimeRanges = media.played;
let timePlayed = 0;
// calculate the total time the media has played
for (let i = 0; i < playedTimeRanges.length; i++) {
  timePlayed += playedTimeRanges.end(i) - playedTimeRanges.start(i);
}
console.log(`The media played for a total of ${timePlayed} seconds.`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement.seeked_event", "seeked")}} event
- {{domxref("HTMLMediaElement.progress_event", "progress")}} event
- {{domxref("HTMLMediaElement.seekable")}}
- {{domxref("HTMLMediaElement.buffered")}}
- {{domxref("HTMLVideoElement")}}
- {{domxref("HTMLAudioElement")}}

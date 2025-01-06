---
title: "HTMLMediaElement: played property"
short-title: played
slug: Web/API/HTMLMediaElement/played
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.played
---

{{APIRef("HTML DOM")}}

The **`played`** read-only property of the {{domxref("HTMLMediaElement")}} interface indicates the time ranges the resource, an {{htmlelement("audio")}} or {{htmlelement("audio")}} media file, has played. It returns a new {{domxref("TimeRanges")}} object that contains the ranges of the media source that the browser has played, if any, at the time the attribute is evaluated.

## Value

A {{domxref("TimeRanges")}} object, which includes the number of ranges as a `length`, with the `start` and `end` time for each range.

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
- {{domxref("HTMLMediaElement")}}
- {{domxref("HTMLVideoElement")}}
- {{domxref("HTMLAudioElement")}}

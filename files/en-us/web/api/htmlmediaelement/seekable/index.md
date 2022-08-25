---
title: HTMLMediaElement.seekable
slug: Web/API/HTMLMediaElement/seekable
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - Extensions
  - HTMLMediaElement
  - MSE
  - Media
  - Property
  - Reference
  - Video
  - seekable
  - source
browser-compat: api.HTMLMediaElement.seekable
---
{{APIRef("HTML DOM")}}

The **`seekable`** read-only property of {{domxref("HTMLMediaElement")}} objects returns a new static [normalized `TimeRanges` object](/en-US/docs/Web/API/TimeRanges#normalized_timeranges_objects) that represents the ranges of the media resource, if any, that the user agent is able to seek to at the time `seekable` property is accessed.

## Value

A new static [normalized TimeRanges object](/en-US/docs/Web/API/TimeRanges#normalized_timeranges_objects) that represents the ranges of the media resource, if any, that the user agent is able to seek to at the time `seekable` property is accessed.

## Examples

```js
const video = document.querySelector("video");
const timeRangesObject = video.seekable;
const timeRanges = [];
//Go through the object and output an array
for (let count = 0; count < timeRangesObject.length; count++) {
  timeRanges.push([timeRangesObject.start(count), timeRangesObject.end(count)]);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- [Media Source Extensions API](/en-US/docs/Web/API/Media_Source_Extensions_API)
- [Media buffering, seeking, and time ranges](/en-US/docs/Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges)

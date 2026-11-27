---
title: "MediaSource: setLiveSeekableRange() method"
short-title: setLiveSeekableRange()
slug: Web/API/MediaSource/setLiveSeekableRange
page-type: web-api-instance-method
browser-compat: api.MediaSource.setLiveSeekableRange
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`setLiveSeekableRange()`** method of the
{{domxref("MediaSource")}} interface sets the range that the user can seek to in the
media element.

## Syntax

```js-nolint
setLiveSeekableRange(start, end)
```

### Parameters

- `start`
  - : The start of the seekable range to set in seconds measured from the beginning of the
    source. If the duration of the media source is positive infinity, then the
    {{domxref("TimeRanges")}} object returned by the
    {{domxref("HTMLMediaElement.seekable")}} property will have a start timestamp no
    greater than this value.
- `end`
  - : The end of the seekable range to set in seconds measured from the beginning of the
    source. If the duration of the media source is positive infinity, then the
    {{domxref("TimeRanges")}} object returned by the
    {{domxref("HTMLMediaElement.seekable")}} property will have an end timestamp no
    less than this value.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using setLiveSeekableRange()

This example sets a live seekable range from 10 to 40 seconds without loading any media.

```html
<video></video>
```

```js
const video = document.querySelector("video");
const mediaSource = new MediaSource();
const objectURL = URL.createObjectURL(mediaSource);

mediaSource.addEventListener(
  "sourceopen",
  () => {
    mediaSource.duration = Infinity;
    mediaSource.setLiveSeekableRange(10, 40);
  },
  { once: true },
);

video.src = objectURL;
```

In a real app, you probably want to control the seekable range depending on what data is available locally.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

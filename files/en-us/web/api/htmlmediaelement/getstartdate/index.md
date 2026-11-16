---
title: "HTMLMediaElement: getStartDate() method"
short-title: getStartDate()
slug: Web/API/HTMLMediaElement/getStartDate
page-type: web-api-instance-method
browser-compat: api.HTMLMediaElement.getStartDate
---

{{APIRef("HTML DOM")}}

The **`getStartDate()`** method of the {{domxref("HTMLMediaElement")}} interface returns a new {{jsxref("Date")}} object representing the real-world date and time corresponding to the beginning of the media.

This is useful for media streams that are anchored to a real-world clock, such as a live broadcast that began at a specific date and time. For media that does not include date and time information, the returned `Date` object will have a time value of {{jsxref("NaN")}}.

## Syntax

```js-nolint
getStartDate()
```

### Parameters

None.

### Return value

A {{jsxref("Date")}} object representing the start date and time of the media. If the media does not include date and time information, the returned `Date` object will have a time value of `NaN`.

## Description

Internally, each media element tracks a start date, which begins as `NaN` (not set). Once the browser has loaded enough data to read the media's metadata, it sets the start date to the real-world time that corresponds to the beginning of the media — if the format provides one. If it doesn't, the start date stays `NaN`.

For media that does specify a start time and date (for example, a live TV broadcast streamed over the web), `getStartDate()` returns a `Date` object corresponding to the real-world time at which the media begins. This allows media player controls to display absolute times (such as "2:30 PM") rather than times relative to the start of playback (such as "3 hours, 12 minutes").

The returned `Date` will have a time value of `NaN` (making it an [invalid date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)) in either of the following cases:

- No data has been loaded yet ({{domxref("HTMLMediaElement.readyState", "readyState")}} is `HAVE_NOTHING`), so the start date hasn't been set.
- The media format doesn't include date and time information.

The start date is not guaranteed to be available as soon as the {{domxref("HTMLMediaElement/loadedmetadata_event", "loadedmetadata")}} event fires. For example, [HLS](https://developer.apple.com/documentation/http-live-streaming) streams carry dates in segment-level `#EXT-X-PROGRAM-DATE-TIME` tags, which may not have been read yet at that point. Listening for the {{domxref("HTMLMediaElement/loadeddata_event", "loadeddata")}} event instead is more reliable across formats, because by then the browser has loaded enough data to determine the start date.

## Examples

### Displaying the start date of a live stream

This example retrieves the start date of a live stream — the real-world date and time at which the broadcast began, as embedded in the stream by the server — and displays it. It listens for the {{domxref("HTMLMediaElement/loadeddata_event", "loadeddata")}} event, which fires once enough data has been loaded for the start date to be available.

#### HTML

```html
<video src="livestream.m3u8" controls></video>
<output>Start date: loading…</output>
```

#### JavaScript

```js
const video = document.querySelector("video");
const display = document.querySelector("output");

video.addEventListener("loadeddata", () => {
  const startDate = video.getStartDate();

  if (isNaN(startDate.getTime())) {
    display.textContent = "Start date: not available";
  } else {
    display.textContent = `Start date: ${startDate.toLocaleString()}`;
  }
});
```

#### Result

The output below shows the start date of the media, as provided by the server.
Note that this is encoded in the example metadata in [stream.m3u8](https://github.com/mdn/dom-examples/blob/main/media/getstartdate/stream.m3u8).

{{EmbedGHLiveSample("dom-examples/media/getstartdate/", '100%', 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement")}}
- {{domxref("HTMLMediaElement.currentTime")}}
- {{domxref("HTMLMediaElement.duration")}}

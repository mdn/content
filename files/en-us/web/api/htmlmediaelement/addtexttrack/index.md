---
title: "HTMLMediaElement: addTextTrack() method"
short-title: addTextTrack()
slug: Web/API/HTMLMediaElement/addTextTrack
page-type: web-api-instance-method
browser-compat: api.HTMLMediaElement.addTextTrack
---

{{APIRef("HTML DOM")}}

The **`addTextTrack()`** method of the {{domxref("HTMLMediaElement")}} interface creates a new {{domxref("TextTrack")}} object and adds it to the media element. It fires an {{domxref("TextTrackList/addtrack_event", "addtrack")}} event on this media element's {{domxref("HTMLMediaElement/textTracks", "textTracks")}}. This method can't be used on a {{domxref("TextTrackList")}} interface, only an {{domxref("HTMLMediaElement")}}.

## Syntax

```js-nolint
addTextTrack(kind)
addTextTrack(kind, label)
addTextTrack(kind, label, language)
```

### Parameters

- `kind`
  - : A string representing the {{domxref("TextTrack.kind")}} property (`subtitles`, `captions`, `descriptions`, `chapters`, or `metadata`).
- `label`
  - : A string representing the {{domxref("TextTrack.label")}} property.
- `language`
  - : A string representing the {{domxref("TextTrack.language")}} property.

### Return value

The newly created {{domxref("TextTrack")}} object.

### Exceptions

None.

## Examples

This example adds a new {{domxref("TextTrack")}} with the `kind` set to `"subtitles"`, and adds a new {{domxref("VTTCue")}} to that.

```js
const video = document.querySelector("video");
const newTrack = video.addTextTrack("subtitles");
newTrack.addCue(new VTTCue(3, 6, "Hello world!"));
console.log(newTrack.cues[0].text);
// "Hello world!"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextTrack")}}
- [WebVTT API](/en-US/docs/Web/API/WebVTT_API)
- [Web media technologies](/en-US/docs/Web/Media)
- Learning: [Video and audio content](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

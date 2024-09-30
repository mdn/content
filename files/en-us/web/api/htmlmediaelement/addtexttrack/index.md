---
title: "HTMLMediaElement: addTextTrack() method"
short-title: addTextTrack()
slug: Web/API/HTMLMediaElement/addTextTrack
page-type: web-api-instance-method
browser-compat: api.HTMLMediaElement.addTextTrack
---

{{APIRef("HTML DOM")}}

The {{domxref("HTMLMediaElement")}}
**`addTextTrack()`** method creates a new {{domxref("TextTrack")}} object, and adds it to the media element. It fires the {{domxref("addtrack")}} event. This method can't be used on a {{domxref("TextTrackList")}} interface, only a {{domxref("HTMLMediaElement")}}.

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

A {{domxref("TextTrackList")}} representing the {{domxref("HTMLMediaElement.textTracks")}} property, with the newly created `TextTrack` object inserted.

### Exceptions

None.

## Examples

This example adds a new {{domxref("TextTrack")}} with the `kind` set to `"subtitles"`, and adds a new {{domxref("VTTCue")}} to that.

```js
const video = document.querySelector("video");
video.addTextTrack("subtitles");
video.textTracks[0].addCue(new VTTCue(3, 6, "Hello world!"));
console.log(voices.textTracks[2].cues[0].text);
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
- Learning: [Video and audio content](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [Using the Web Audio API](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

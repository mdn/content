---
title: HTMLMediaElement.textTracks
slug: Web/API/HTMLMediaElement/textTracks
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Property
  - Reference
  - Tracks
  - Video
  - Web
  - textTracks
browser-compat: api.HTMLMediaElement.textTracks
---
{{APIRef("HTML DOM")}}

The read-only **`textTracks`**
property on {{DOMxRef("HTMLMediaElement")}} objects returns a
{{DOMxRef("TextTrackList")}} object listing all of the {{DOMxRef("TextTrack")}}
objects representing the media element's text tracks, in the same order as in
the list of text tracks.

You can detect when tracks are added to and removed from an
[`<audio>`](/en-US/docs/Web/HTML/Element/audio) or
[`<video>`](/en-US/docs/Web/HTML/Element/video) element
using the `addtrack` and `removetrack` events. However, these
events aren't sent directly to the media element itself. Instead, they're sent to the
track list object of the [`HTMLMediaElement`](/en-US/docs/Web/API/HTMLMediaElement)
that corresponds to the type of track that was added to the element

The returned list is _live_; that is, as tracks are added to and removed from
the media element, the list's contents change dynamically. Once you have a reference to
the list, you can monitor it for changes to detect when new text tracks are added or
existing ones removed.

See {{SectionOnPage("/en-US/docs/Web/API/TextTrackList", "Event handlers")}} to learn
more about watching for changes to a media element's track list.

## Value

A {{DOMxRef("TextTrackList")}} object representing the list of text tracks included in the media element. The list of tracks can be accessed using `textTracks[n]` to get the *n*th text track from the object's list of text tracks, or using the `textTracks`.[`getTrackById()`](/en-US/docs/Web/API/TextTrackList/getTrackById)
method.

Each track is represented by a {{DOMxRef("TextTrack")}} object which provides
information about the track.

## Examples

We start with a
[`<video>`](/en-US/docs/Web/HTML/Element/video) that has
several [`<track>`](/en-US/docs/Web/HTML/Element/track)
children

```html
<video controls poster="/images/sample.gif">
  <source src="sample.mp4" type="video/mp4">
  <source src="sample.ogv" type="video/ogv">
  <track kind="captions" src="sampleCaptions.vtt" srclang="en">
  <track kind="descriptions" src="sampleDescriptions.vtt" srclang="en">
  <track kind="chapters" src="sampleChapters.vtt" srclang="en">
  <track kind="subtitles" src="sampleSubtitles_de.vtt" srclang="de">
  <track kind="subtitles" src="sampleSubtitles_en.vtt" srclang="en">
  <track kind="subtitles" src="sampleSubtitles_ja.vtt" srclang="ja">
  <track kind="subtitles" src="sampleSubtitles_oz.vtt" srclang="oz">
  <track kind="metadata" src="keyStage1.vtt" srclang="en" label="Key Stage 1">
  <track kind="metadata" src="keyStage2.vtt" srclang="en" label="Key Stage 2">
  <track kind="metadata" src="keyStage3.vtt" srclang="en" label="Key Stage 3">
</video>
```

The `HTMLMediaElement.textTracks` returns a
`textTracksList` thru which we can iterate. Here we print all the properties
of each English track to the console.

```js
const tracks = document.querySelector('video').textTracks;

for (const track of tracks) {
   if (track.language === 'en') {
      console.dir(track);
   }
}
```

{{EmbedLiveSample("Examples", "100%", 155)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{DOMxRef("HTMLMediaElement")}}.
- {{HTMLElement("video")}} and {{HTMLElement("audio")}}
- {{DOMxRef("VideoTrack")}} and {{DOMxRef("VideoTrackList")}}
- {{DOMxRef("AudioTrack")}} and {{DOMxRef("AudioTrackList")}}
- VideoTrackList
  [`change`](/en-US/docs/Web/API/VideoTrackList/change_event),
  [`addtrack`](/en-US/docs/Web/API/VideoTrackList/addtrack_event)
  and
  [`removetrack`](/en-US/docs/Web/API/VideoTrackList/removetrack_event)
  events
- Audio TrackList
  [`change`](/en-US/docs/Web/API/AudioTrackList/change_event),
  [`addtrack`](/en-US/docs/Web/API/AudioTrackList/addtrack_event)
  and
  [`removetrack`](/en-US/docs/Web/API/AudioTrackList/removetrack_event)
  events

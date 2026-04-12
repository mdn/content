---
title: "HTMLMediaElement: textTracks property"
short-title: textTracks
slug: Web/API/HTMLMediaElement/textTracks
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.textTracks
---

{{APIRef("HTML DOM")}}

The read-only **`textTracks`**
property on {{DOMxRef("HTMLMediaElement")}} objects returns a
{{DOMxRef("TextTrackList")}} object listing all of the {{DOMxRef("TextTrack")}}
objects representing the media element's text tracks, in the same order as in
the list of text tracks.

You can detect when tracks are added to and removed from an
[`<audio>`](/en-US/docs/Web/HTML/Reference/Elements/audio) or
[`<video>`](/en-US/docs/Web/HTML/Reference/Elements/video) element
using the `addtrack` and `removetrack` events. However, these
events aren't sent directly to the media element itself. Instead, they're sent to the
track list object of the [`HTMLMediaElement`](/en-US/docs/Web/API/HTMLMediaElement)
that corresponds to the type of track that was added to the element

The returned list is _live_; that is, as tracks are added to and removed from
the media element, the list's contents change dynamically. Once you have a reference to
the list, you can monitor it for changes to detect when new text tracks are added or
existing ones removed.

See [TextTrackList events](/en-US/docs/Web/API/TextTrackList#events) to learn
more about watching for changes to a media element's track list.

## Value

A {{DOMxRef("TextTrackList")}} object representing the list of text tracks included in the media element. The list of tracks can be accessed using `textTracks[n]` to get the n-th text track from the object's list of text tracks, or using the [`textTracks.getTrackById()`](/en-US/docs/Web/API/TextTrackList/getTrackById)
method.

Each track is represented by a {{DOMxRef("TextTrack")}} object which provides
information about the track.

## Examples

We start with a
[`<video>`](/en-US/docs/Web/HTML/Reference/Elements/video) that has
several [`<track>`](/en-US/docs/Web/HTML/Reference/Elements/track)
children

```html
<video controls>
  <source src="/shared-assets/videos/sintel-short.webm" type="video/webm" />
  <source src="/shared-assets/videos/sintel-short.mp4" type="video/mp4" />
  <track
    kind="subtitles"
    src="/shared-assets/misc/sintel-en.vtt"
    srclang="en"
    label="English" />
  <track
    kind="subtitles"
    src="/shared-assets/misc/sintel-de.vtt"
    srclang="de"
    label="Deutsch" />
  <track
    kind="subtitles"
    src="/shared-assets/misc/sintel-es.vtt"
    srclang="es"
    label="Español" />
</video>
```

The `HTMLMediaElement.textTracks` returns a `TextTrackList` through which we can iterate. Here we set all three tracks to show simultaneously.

```js
const tracks = document.querySelector("video").textTracks;

for (const track of tracks) {
  track.mode = "showing";
}
```

{{EmbedLiveSample("Examples", "100%", 350)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement")}}: Interface used to define the `HTMLMediaElement.textTracks` property
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
- {{DOMxRef("AudioTrack")}}, {{DOMxRef("AudioTrackList")}}
- {{DOMxRef("VideoTrack")}}, {{DOMxRef("VideoTrackList")}}
- [`addtrack`](/en-US/docs/Web/API/VideoTrackList/addtrack_event),
  [`change`](/en-US/docs/Web/API/VideoTrackList/change_event),
  [`removetrack`](/en-US/docs/Web/API/VideoTrackList/removetrack_event): AudioTrackList events
- [`addtrack`](/en-US/docs/Web/API/VideoTrackList/addtrack_event),
  [`change`](/en-US/docs/Web/API/VideoTrackList/change_event),
  [`removetrack`](/en-US/docs/Web/API/VideoTrackList/removetrack_event): VideoTrackList events

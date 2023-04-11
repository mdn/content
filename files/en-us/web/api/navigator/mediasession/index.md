---
title: "Navigator: mediaSession property"
short-title: mediaSession
slug: Web/API/Navigator/mediaSession
page-type: web-api-instance-property
browser-compat: api.Navigator.mediaSession
---

{{APIRef}}

The read-only {{domxref("Navigator")}} property
**`mediaSession`** returns a {{domxref("MediaSession")}}
object that can be used to share with the browser metadata and other information about
the current playback state of media being handled by a document.

This
information may, in turn, be shared with the device and/or operating system in order to
a device's standard media control user experience to describe and control the playback
of the media.

In addition, the `MediaSession` interface provides the
{{domxref("MediaSession.setActionHandler", "setActionHandler()")}} method, which lets
you receive events when the user engages device controls such as either onscreen or
physical play, pause, seek, and other similar controls. An internet radio app, for
example, can use `setActionHandler()` to let the media controls on a keyboard
or elsewhere on the user's device be used to control the app's media playback.

## Value

A {{domxref("MediaSession")}} object the current document can use to share information
about media it's playing and its current playback status. This information can include
typical metadata such as the title, artist, and album name of the song being played as
well as potentially one or more images containing things like album art, artist photos,
and so forth.

## Examples

In this example, metadata is submitted to the `mediaSession` object. Note
that the code begins by ensuring that the {{domxref("navigator.mediaSession")}} property
is available before attempting to use it.

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Podcast Episode Title",
    artist: "Podcast Host",
    album: "Podcast Name",
    artwork: [{ src: "podcast.jpg" }],
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

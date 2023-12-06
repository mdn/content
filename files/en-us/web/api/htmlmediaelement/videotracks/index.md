---
title: "HTMLMediaElement: videoTracks property"
short-title: videoTracks
slug: Web/API/HTMLMediaElement/videoTracks
page-type: web-api-instance-property
browser-compat: api.HTMLMediaElement.videoTracks
---

{{APIRef("HTML DOM")}}

The read-only **`videoTracks`**
property on {{DOMxRef("HTMLMediaElement")}} objects returns a
{{DOMxRef("VideoTrackList")}} object listing all of the {{DOMxRef("VideoTrack")}}
objects representing the media element's video tracks.

The returned list is _live_; that is, as tracks are added to and removed from
the media element, the list's contents change dynamically. Once you have a reference to
the list, you can monitor it for changes to detect when new video tracks are added or
existing ones removed. See [VideoTrackList events](/en-US/docs/Web/API/VideoTrackList#events)
to learn more about watching for changes to a media element's track list.

## Value

A {{DOMxRef("VideoTrackList")}} object representing the list of video tracks included
in the media element. The list of tracks can be accessed using array notation, or using
the object's {{domxref("VideoTrackList.getTrackById", "getTrackById()")}} method.

Each track is represented by a {{DOMxRef("VideoTrack")}} object which provides
information about the track.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLMediaElement")}}: Interface used to define the `HTMLMediaElement.videoTracks` property
- {{HTMLElement("video")}}
- {{DOMxRef("VideoTrack")}}, {{DOMxRef("VideoTrackList")}}

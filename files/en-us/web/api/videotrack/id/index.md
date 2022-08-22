---
title: VideoTrack.id
slug: Web/API/VideoTrack/id
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - Interface
  - Media
  - Property
  - Read-only
  - Reference
  - Video
  - Video Track
  - VideoTrack
  - id
  - track
browser-compat: api.VideoTrack.id
---
{{APIRef("HTML DOM")}}

The **`id`** property contains a
string which uniquely identifies the track represented by the
**{{domxref("VideoTrack")}}**.

This ID can be used with the
{{domxref("VideoTrackList.getTrackById()")}} method to locate a specific track within
the media associated with a media element.

The track ID can also be used as the fragment of a URL that loads the specific track
(if the media supports media fragments).

## Value

A string which identifies the track, suitable for use when calling
{{domxref("VideoTrackList.getTrackById", "getTrackById()")}} on an
{{domxref("VideoTrackList")}} such as the one specified by a media element's
{{domxref("HTMLMediaElement.videoTracks", "videoTracks")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

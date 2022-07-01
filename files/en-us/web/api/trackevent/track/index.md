---
title: TrackEvent.track
slug: Web/API/TrackEvent/track
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - Event
  - HTML DOM
  - Media
  - Property
  - Read-only
  - Reference
  - TrackEvent
  - Video
  - track
browser-compat: api.TrackEvent.track
---
{{APIRef("HTML DOM")}}

The read-only **`track`** property of
the {{domxref("TrackEvent")}} interface specifies the media track object to which the
event applies.

The media track will be an {{domxref("AudioTrack")}},
{{domxref("VideoTrack")}}, or {{domxref("TextTrack")}} object.

## Value

An object which is one of the types {{domxref("AudioTrack")}},
{{domxref("VideoTrack")}}, or {{domxref("TextTrack")}}, depending on the type of media
represented by the track. This identifies the track to which the event applies.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: TrackEvent()
slug: Web/API/TrackEvent/TrackEvent
page-type: web-api-constructor
tags:
  - API
  - Audio
  - Constructor
  - HTML DOM
  - Media
  - Reference
  - TrackEvent
  - Tracks
  - Video
browser-compat: api.TrackEvent.TrackEvent
---
{{APIRef("HTML DOM")}}

The **`TrackEvent()`** constructor
creates and returns a new {{domxref("TrackEvent")}} object describing an event which
occurred on a list of tracks ({{domxref("AudioTrackList")}},
{{domxref("VideoTrackList")}}, or {{domxref("TextTrackList")}}).

## Syntax

```js
new TrackEvent(type)
new TrackEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `addtrack` or `removetrack`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `track` {{optional_inline}}
      - : The track to which the event refers; this is `null` by default, but
        should be set to a {{domxref("VideoTrack")}}, {{domxref("AudioTrack")}}, or
        {{domxref("TextTrack")}} as appropriate given the type of track.

### Return value

A new {{domxref("TrackEvent")}} object, initialized as described by the
inputs to the constructor.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

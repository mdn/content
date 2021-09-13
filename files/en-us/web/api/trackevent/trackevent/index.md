---
title: TrackEvent()
slug: Web/API/TrackEvent/TrackEvent
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
trackEvent = new TrackEvent(type, eventInfo);
```

### Parameters

- `type`
  - : The type of track event which is described by the object: `"addtrack"` or
    `"removetrack"`.
- `eventInfo` {{optional_inline}}

  - : An optional dictionary providing additional information configuring the new event;
    it can contain the following fields in any combination:

    - `track` {{optional_inline}}
      - : The track to which the event refers; this is `null` by default, but
        should be set to a {{domxref("VideoTrack")}}, {{domxref("AudioTrack")}}, or
        {{domxref("TextTrack")}} as appropriate given the type of track.
    - `bubbles` {{optional_inline}}
      - : A Boolean indicating whether the event bubbles or not.
    - `cancelable` {{optional_inline}}
      - : A Boolean indicating whether or not the event can be canceled.
    - `composed` {{optional_inline}}
      - : A Boolean indicating whether or not the event will trigger listeners outside of
        a shadow root; see {{domxref("Event.composed")}} for more details.

### Return value

A newly-created {{domxref("TrackEvent")}} object, initialized as described by the
inputs to the constructor.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

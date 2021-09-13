---
title: AudioTrack.id
slug: Web/API/AudioTrack/id
tags:
  - API
  - Audio
  - Audio Track
  - AudioTrack
  - HTML DOM
  - Interface
  - Media
  - Property
  - Read-only
  - Reference
  - id
  - track
browser-compat: api.AudioTrack.id
---
{{APIRef("HTML DOM")}}

The **`id`** property contains a
string which uniquely identifies the track represented by the
**{{domxref("AudioTrack")}}**.

This ID can be used with the
{{domxref("AudioTrackList.getTrackById()")}} method to locate a specific track within
the media associated with a media element. The track ID can also be used as the fragment of a URL that loads the specific track
(if the media supports media fragments).

## Syntax

```js
var trackID = AudioTrack.id;
```

### Value

A {{domxref("DOMString")}} which identifies the track, suitable for use when calling
{{domxref("AudioTrackList.getTrackById", "getTrackById()")}} on an
{{domxref("AudioTrackList")}} such as the one specified by a media element's
{{domxref("HTMLMediaElement.audioTracks", "audioTracks")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

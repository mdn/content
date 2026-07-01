---
title: "AudioTrack: kind property"
short-title: kind
slug: Web/API/AudioTrack/kind
page-type: web-api-instance-property
browser-compat: api.AudioTrack.kind
---

{{APIRef("HTML DOM")}}

The **`kind`** property contains a
string indicating the category of audio contained in the
**{{domxref("AudioTrack")}}**.

The `kind` can be used
to determine the scenarios in which specific tracks should be enabled or disabled. See
[Audio track kind strings](#audio_track_kind_strings) for a list of the kinds available for audio tracks.

## Value

A string specifying the type of content the media represents. The
string is one of those found in [Audio track kind strings](#audio_track_kind_strings) below.

## Audio track kind strings

The kinds available for audio tracks are:

- `"alternative"`
  - : A potential alternative to the main track, such as a different audio take or a
    version of the soundtrack with only the music and no dialogue.
- `"descriptions"`
  - : An audio track providing audible descriptions of the action depicted in a video
    track.
- `"main"`
  - : The primary audio track.
- `"main-desc"`
  - : The primary audio track with audio descriptions mixed into it.
- `"translation"`
  - : A translated version of the primary audio track.
- `"commentary"`
  - : An audio track containing a commentary. This might be used to contain the director's
    commentary track on a movie, for example.
- `""` (empty string)
  - : The track doesn't have an explicit kind, or the kind provided by the track's
    metadata isn't recognized by the {{Glossary("user agent")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

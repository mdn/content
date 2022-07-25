---
title: VideoTrack.kind
slug: Web/API/VideoTrack/kind
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - Media
  - Property
  - Read-only
  - Reference
  - Video
  - Video Track
  - VideoTrack
  - id
  - track
browser-compat: api.VideoTrack.kind
---
{{APIRef("HTML DOM")}}

The **`kind`** property contains a
string indicating the category of video contained in the
**{{domxref("VideoTrack")}}**.

The `kind` can be used
to determine the scenarios in which specific tracks should be enabled or disabled. See
[Video track kind strings](#video_track_kind_strings) for a list of the kinds available for video tracks.

## Value

A string specifying the type of content the media represents. The
string is one of those found in [Video track kind strings](#video_track_kind_strings) below.

## Video track kind strings

The kinds available for video tracks are:

- `"alternative"`
  - : A potential alternative to the main track, such as a different video take or a
    version of the soundtrack with only the music and no dialogue.
- `"captions"`
  - : A version of the main video track with captions burnt in.
- `"main"`
  - : The primary video track.
- `"sign"`
  - : A sign-language interpretation of an audio track.
- `"subtitles"`
  - : A version of the main video track with subtitles burnt in.
- `"commentary"`
  - : A video track containing a commentary. This might be used to contain the director's
    commentary track on a movie, for example.
- `""` (empty string)
  - : The track doesn't have an explicit kind, or the kind provided by the track's
    metadata isn't recognized by the {{Glossary("user agent")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

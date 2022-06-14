---
title: VideoTrack.language
slug: Web/API/VideoTrack/language
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - Language
  - Localization
  - Media
  - Property
  - Read-only
  - Reference
  - Video
  - VideoTrack
  - track
browser-compat: api.VideoTrack.language
---
{{APIRef("HTML DOM")}}

The read-only **{{domxref("VideoTrack")}}**
property **`language`** returns a string identifying the
language used in the video track.

For tracks that include multiple languages
(such as a movie in English in which a few lines are spoken in other languages), this
should be the video's primary language.

## Value

A string specifying the BCP 47 ({{RFC(5646)}}) format language tag of
the primary language used in the video track, or an empty string (`""`) if
the language is not specified or known, or if the track doesn't contain speech.

For example, if the primary language used in the track is United States English, this
value would be `"en-US"`. For Brazilian Portuguese, the value would be
`"pt-BR"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

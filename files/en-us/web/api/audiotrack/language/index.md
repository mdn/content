---
title: AudioTrack.language
slug: Web/API/AudioTrack/language
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - AudioTrack
  - HTML DOM
  - Language
  - Localization
  - Media
  - Property
  - Read-only
  - Reference
  - Translated
  - Translation
  - track
browser-compat: api.AudioTrack.language
---
{{APIRef("HTML DOM")}}

The read-only **{{domxref("AudioTrack")}}**
property **`language`** returns a string identifying the
language used in the audio track.

For tracks that include multiple languages
(such as a movie in English in which a few lines are spoken in other languages), this
should be the video's primary language.

## Value

A string specifying the BCP 47 ({{RFC(5646)}}) format language tag of
the primary language used in the audio track, or an empty string (`""`) if
the language is not specified or known, or if the track doesn't contain speech.

For example, if the primary language used in the track is United States English, this
value would be `"en-US"`. For Brazilian Portuguese, the value would be
`"pt-BR"`.

## Examples

This example locates all of a media element's primary language and translated audio
tracks and returns a list of objects containing each of those tracks'
{{domxref("AudioTrack.id", "id")}}, {{domxref("AudioTrack.kind", "kind")}}, and
`language`.

This could then be used to build a user interface for selecting the language the user
would like to listen to while watching a movie, for example.

```js
function getAvailableLanguages(el) {
  const trackList = [];
  const wantedKinds = [
    "main", "translation"
  ];

  el.audioTracks.forEach((track) => {
    if (wantedKinds.includes(track.kind)) {
      trackList.push({
        id: track.id,
        kind: track.kind,
        language: track.language
      });
    }
  });
  return trackList;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

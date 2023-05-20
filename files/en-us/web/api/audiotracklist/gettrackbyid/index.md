---
title: "AudioTrackList: getTrackById() method"
short-title: getTrackById()
slug: Web/API/AudioTrackList/getTrackById
page-type: web-api-instance-method
browser-compat: api.AudioTrackList.getTrackById
---

{{APIRef("HTML DOM")}}

The **{{domxref("AudioTrackList")}}** method
**`getTrackById()`** returns the first
{{domxref("AudioTrack")}} object from the track list whose {{domxref("AudioTrack.id",
    "id")}} matches the specified string. This lets you find a specified track if
you know its ID string.

## Syntax

```js-nolint
getTrackById(id)
```

### Parameters

- `id`
  - : A string indicating the ID of the track to locate within the track
    list.

### Return value

An {{domxref("AudioTrack")}} object indicating the first track found within the
`AudioTrackList` whose `id` matches the specified string. If no
match is found, this method returns `null`.

The tracks are searched in their natural order; that is, in the order defined by the
media resource itself, or, if the resource doesn't define an order, the relative order
in which the tracks are declared by the media resource.

## Examples

This example suggests a hypothetical game in which movies are used as cut-scenes or
other key set pieces within the game. Each movie has one audio track for each character,
as well as one for the music, sound effects, and so forth. This function allows the game
to disable a specific character's audio in order to adjust the movie's performance based
on occurrences within the game; if the character's dialog isn't relevant, it gets left
out. Obviously, that would require some clever graphic design to make work, but it's a
hypothetical game.

```js
function disableCharacter(videoElem, characterName) {
  videoElem.audioTracks.getTrackById(characterName).enabled = false;
}
```

This short function gets the {{domxref("AudioTrackList")}} containing the video's audio
tracks using {{domxref("HTMLMediaElement.audioTracks")}}, then calls
`getTrackById()` on it, specifying the character's name. The resulting
track's audio is then disabled by setting its {{domxref("AudioTrack.enabled",
  "enabled")}} flag to `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

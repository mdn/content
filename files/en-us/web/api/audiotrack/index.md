---
title: AudioTrack
slug: Web/API/AudioTrack
page-type: web-api-interface
browser-compat: api.AudioTrack
---

{{APIRef("HTML DOM")}}

The **`AudioTrack`** interface represents a single audio track from one of the HTML media elements, {{HTMLElement("audio")}} or {{HTMLElement("video")}}.

The most common use for accessing an `AudioTrack` object is to toggle its {{domxref("AudioTrack.enabled", "enabled")}} property in order to mute and unmute the track.

## Instance properties

- {{domxref("AudioTrack.enabled", "enabled")}}
  - : A Boolean value which controls whether or not the audio track's sound is enabled. Setting this value to `false` mutes the track's audio.
- {{domxref("AudioTrack.id", "id")}} {{ReadOnlyInline}}
  - : A string which uniquely identifies the track within the media. This ID can be used to locate a specific track within an audio track list by calling {{domxref("AudioTrackList.getTrackById()")}}. The ID can also be used as the fragment part of the URL if the media supports seeking by media fragment per the [Media Fragments URI specification](https://www.w3.org/TR/media-frags/).
- {{domxref("AudioTrack.kind", "kind")}} {{ReadOnlyInline}}
  - : A string specifying the category into which the track falls. For example, the main audio track would have a `kind` of `"main"`.
- {{domxref("AudioTrack.label", "label")}} {{ReadOnlyInline}}
  - : A string providing a human-readable label for the track. For example, an audio commentary track for a movie might have a `label` of `"Commentary with director John Q. Public and actors John Doe and Jane Eod."` This string is empty if no label is provided.
- {{domxref("AudioTrack.language", "language")}} {{ReadOnlyInline}}
  - : A string specifying the audio track's primary language, or an empty string if unknown. The language is specified as a BCP 47 ({{RFC(5646)}}) language code, such as `"en-US"` or `"pt-BR"`.
- {{domxref("AudioTrack.sourceBuffer", "sourceBuffer")}} {{ReadOnlyInline}}
  - : The {{domxref("SourceBuffer")}} that created the track. Returns null if the track was not created by a {{domxref("SourceBuffer")}} or the {{domxref("SourceBuffer")}} has been removed from the {{domxref("MediaSource.sourceBuffers")}} attribute of its parent media source.

## Usage notes

To get an `AudioTrack` for a given media element, use the element's {{domxref("HTMLMediaElement.audioTracks", "audioTracks")}} property, which returns an {{domxref("AudioTrackList")}} object from which you can get the individual tracks contained in the media:

```js
const el = document.querySelector("video");
const tracks = el.audioTracks;
```

You can then access the media's individual tracks using either array syntax or functions such as {{jsxref("Array.forEach", "forEach()")}}.

This first example gets the first audio track on the media:

```js
const firstTrack = tracks[0];
```

The next example scans through all of the media's audio tracks, enabling any that are in the user's preferred language (taken from a variable `userLanguage`) and disabling any others.

```js
tracks.forEach((track) => {
  track.enabled = track.language === userLanguage;
});
```

The {{domxref("AudioTrack.language", "language")}} is in standard ({{RFC(5646)}}) format. For US English, this would be `"en-US"`, for example.

## Example

See [`AudioTrack.label`](/en-US/docs/Web/API/AudioTrack/label#examples) for a simple example that shows how to get an array of track kinds and labels for a specified media element, filtered by kind.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: VideoTrack
slug: Web/API/VideoTrack
page-type: web-api-interface
tags:
  - HTML
  - HTML DOM
  - Interface
  - Media
  - Reference
  - Video
  - VideoTrack
  - track
browser-compat: api.VideoTrack
---
{{APIRef("HTML DOM")}}

The {{domxref("VideoTrack")}} interface represents a single video track from a {{HTMLElement("video")}} element.

The most common use for accessing a `VideoTrack` object is to toggle its {{domxref("VideoTrack.selected", "selected")}} property in order to make it the active video track for its {{HTMLElement("video")}} element.

## Properties

- {{domxref("VideoTrack.selected", "selected")}}
  - : A Boolean value which controls whether or not the video track is active. Only a single video track can be active at any given time, so setting this property to `true` for one track while another track is active will make that other track inactive.
- {{domxref("VideoTrack.id", "id")}} {{ReadOnlyInline}}
  - : A string which uniquely identifies the track within the media. This ID can be used to locate a specific track within a video track list by calling {{domxref("VideoTrackList.getTrackById()")}}. The ID can also be used as the fragment part of the URL if the media supports seeking by media fragment per the [Media Fragments URI specification](https://www.w3.org/TR/media-frags/).
- {{domxref("VideoTrack.kind", "kind")}} {{ReadOnlyInline}}
  - : A string specifying the category into which the track falls. For example, the main video track would have a `kind` of `"main"`.
- {{domxref("VideoTrack.label", "label")}} {{ReadOnlyInline}}
  - : A string providing a human-readable label for the track. For example, a track whose `kind` is `"sign"` might have a `label` of `"A sign-language interpretation"`. This string is empty if no label is provided.
- {{domxref("VideoTrack.language", "language")}} {{ReadOnlyInline}}
  - : A string specifying the video track's primary language, or an empty string if unknown. The language is specified as a BCP 47 ({{RFC(5646)}}) language code, such as `"en-US"` or `"pt-BR"`.
- {{domxref("VideoTrack.sourceBuffer", "sourceBuffer")}} {{ReadOnlyInline}}
  - : The {{domxref("SourceBuffer")}} that created the track. Returns null if the track was not created by a {{domxref("SourceBuffer")}} or the {{domxref("SourceBuffer")}} has been removed from the {{domxref("MediaSource.sourceBuffers")}} attribute of its parent media source.

## Usage notes

To get a `VideoTrack` for a given media element, use the element's {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}} property, which returns a {{domxref("VideoTrackList")}} object from which you can get the individual tracks contained in the media:

```js
const el = document.querySelector("video");
const tracks = el.videoTracks;
```

You can then access the media's individual tracks using either array syntax or functions such as {{jsxref("Array.forEach", "forEach()")}}.

This first example gets the first video track on the media:

```js
const firstTrack = tracks[0];
```

The next example scans through all of the media's video tracks, activating the first video track that is in the user's preferred language (taken from a variable `userLanguage`).

```js
for (const track of tracks) {
  if (track.language === userLanguage) {
    track.selected = true;
    break;
  }
};
```

The {{domxref("VideoTrack.language", "language")}} is in standard ({{RFC(5646)}}) format. For US English, this would be `"en-US"`, for example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

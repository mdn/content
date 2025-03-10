---
title: ImageTrackList
slug: Web/API/ImageTrackList
page-type: web-api-interface
browser-compat: api.ImageTrackList
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`ImageTrackList`** interface of the {{domxref('WebCodecs API','','','true')}} represents a list of image tracks.

## Instance properties

- {{domxref("ImageTrackList.ready")}} {{ReadOnlyInline}}
  - : Returns a {{jsxref("promise")}} that resolves once the `ImageTrackList` has been populated with {{domxref("ImageTrack","tracks")}}.
- {{domxref("ImageTrackList.length")}} {{ReadOnlyInline}}
  - : Returns an integer indicating the length of the `ImageTrackList`.
- {{domxref("ImageTrackList.selectedIndex")}} {{ReadOnlyInline}}
  - : Returns an integer indicating the index of the `selectedTrack`.
- {{domxref("ImageTrackList.selectedTrack")}} {{ReadOnlyInline}}
  - : Returns the selected {{domxref("ImageTrack")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

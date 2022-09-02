---
title: ImageTrackList
slug: Web/API/ImageTrackList
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - ImageTrackList
  - Experimental
browser-compat: api.ImageTrackList
---
{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`ImageTrackList`** interface of the {{domxref('WebCodecs API','','','true')}} represents a list of image tracks.

## Properties

- {{domxref("ImageTrackList.ready")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{jsxref("promise")}} that resolves once the `ImageTrackList` has been populated with {{domxref("ImageTrack","tracks")}}.
- {{domxref("ImageTrackList.length")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an integer indicating the length of the `ImageTrackList`.
- {{domxref("ImageTrackList.selectedIndex")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns an integer indicating the index of the `selectedTrack`.
- {{domxref("ImageTrackList.selectedTrack")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the selected {{domxref("ImageTrack")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

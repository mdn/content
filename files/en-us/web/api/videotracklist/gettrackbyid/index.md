---
title: VideoTrackList.getTrackById()
slug: Web/API/VideoTrackList/getTrackById
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - Media
  - Method
  - Reference
  - Track ID
  - Track List
  - Tracks
  - Video
  - VideoTrackList
  - getTrackById
  - id
  - track
browser-compat: api.VideoTrackList.getTrackById
---
{{APIRef("HTML DOM")}}

The **{{domxref("VideoTrackList")}}** method
**`getTrackById()`** returns the first
{{domxref("VideoTrack")}} object from the track list whose {{domxref("VideoTrack.id",
    "id")}} matches the specified string.

This lets you find a specified track if
you know its ID string.

## Syntax

```js
getTrackById(id)
```

### Parameters

- `id`
  - : A string indicating the ID of the track to locate within the track
    list.

### Return value

A {{domxref("VideoTrack")}} object indicating the first track found within the
`VideoTrackList` whose `id` matches the specified string. If no
match is found, this method returns `null`.

The tracks are searched in their natural order; that is, in the order defined by the
media resource itself, or, if the resource doesn't define an order, the relative order
in which the tracks are declared by the media resource.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

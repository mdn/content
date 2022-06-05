---
title: TextTrackList.getTrackById()
slug: Web/API/TextTrackList/getTrackById
page-type: web-api-instance-method
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Media
  - Method
  - Reference
  - TextTrack
  - TextTrackList
  - Track ID
  - Track List
  - Tracks
  - getTrackById
  - id
  - track
browser-compat: api.TextTrackList.getTrackById
---
{{APIRef("HTML DOM")}}

The **{{domxref("TextTrackList")}}** method
**`getTrackById()`** returns the first
{{domxref("TextTrack")}} object from the track list whose
[`id`](/en-US/docs/Web/HTML/Global_attributes/id) matches the
specified string. This lets you find a specified track if you know its ID
string.

## Syntax

```js
getTrackById(id)
```

### Parameters

- `id`
  - : A string indicating the ID of the track to locate within the track
    list.

### Return value

A {{domxref("TextTrack")}} object indicating the first track found within the
`TextTrackList` whose `id` matches the specified string. If no
match is found, this method returns `null`.

The tracks are searched in their natural order; that is, in the order defined by the
media resource itself, or, if the resource doesn't define an order, the relative order
in which the tracks are declared by the media resource.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

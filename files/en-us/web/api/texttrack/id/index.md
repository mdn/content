---
title: TextTrack.id
slug: Web/API/TextTrack/id
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - id
  - TextTrack
browser-compat: api.TextTrack.id
---
{{APIRef("WebVTT")}}

The **`id`** read-only property of the {{domxref("TextTrack")}} interface returns the ID of the track if it has one.

## Value

A string containing the ID, or an empty string.

## Examples

In the following example the value of `id` is printed to the console.

```js
const video = document.querySelector('video');
const track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.id);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

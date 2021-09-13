---
title: TextTrack.id
slug: Web/API/TextTrack/id
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

## Syntax

```js
let id = TextTrack.id;
```

### Value

A {{domxref("DOMString","string")}} containing the ID, or an empty string.

## Examples

In the following example the value of `id` is printed to the console.

```js
let video = document.querySelector('video');
  let track = video.addTextTrack("captions", "Captions", "en");
  track.mode = "showing";
  console.log(track.id);

```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: TextTrack.label
slug: Web/API/TextTrack/label
tags:
  - API
  - Property
  - Reference
  - label
  - TextTrack
browser-compat: api.TextTrack.label
---
{{APIRef("WebVTT")}}

The **`label`** read-only property of the {{domxref("TextTrack")}} interface returns a human-readable label for the text track, if it is available.

## Syntax

```js
let label = TextTrack.label;
```

### Value

A {{domxref("DOMString","string")}} containing the `label`, or an empty string.

## Examples

In the following example the value of `label` is printed to the console.

```js
let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.label);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

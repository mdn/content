---
title: "TextTrack: label property"
short-title: label
slug: Web/API/TextTrack/label
page-type: web-api-instance-property
browser-compat: api.TextTrack.label
---

{{APIRef("WebVTT")}}

The **`label`** read-only property of the {{domxref("TextTrack")}} interface returns a human-readable label for the text track, if it is available.

## Value

A string containing the `label`, or an empty string.

## Examples

In the following example the value of `label` is printed to the console.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.label);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

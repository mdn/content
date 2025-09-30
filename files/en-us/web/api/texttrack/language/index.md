---
title: "TextTrack: language property"
short-title: language
slug: Web/API/TextTrack/language
page-type: web-api-instance-property
browser-compat: api.TextTrack.language
---

{{APIRef("WebVTT")}}

The **`language`** read-only property of the {{domxref("TextTrack")}} interface returns the language of the text track.

## Value

A string containing a language identifier. This will be a valid {{glossary("BCP 47 language tag")}}, for example `"en-US"` for United States English or `"pt-BR"` for Brazilian Portuguese.

## Examples

In the following example the value of `language` is printed to the console.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en-US");
track.mode = "showing";
console.log(track.language);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: TextTrack.language
slug: Web/API/TextTrack/language
tags:
  - API
  - Property
  - Reference
  - language
  - TextTrack
browser-compat: api.TextTrack.language
---
{{APIRef("WebVTT")}}

The **`language`** read-only property of the {{domxref("TextTrack")}} interface returns the language of the text track.

This uses the same values as the HTML {{htmlattrxref("lang")}} attribute. These values are documented in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}.

## Syntax

```js
let language = TextTrack.language;
```

### Value

A {{domxref("DOMString","string")}} containing a language identifier. For example, `"en-US"` for United States English or `"pt-BR"` for Brazilian Portuguese.

## Examples

In the following example the value of `language` is printed to the console.

```js
let video = document.querySelector('video');
let track = video.addTextTrack("captions", "Captions", "en-US");
track.mode = "showing";
console.log(track.language);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

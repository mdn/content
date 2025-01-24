---
title: "HTMLTrackElement: kind property"
short-title: kind
slug: Web/API/HTMLTrackElement/kind
page-type: web-api-instance-property
browser-compat: api.HTMLTrackElement.kind
---

{{ApiRef("HTML DOM")}}

The **`kind`** property of the {{domxref("HTMLTrackElement")}} interface represents the type of track, or how the text track is meant to be used. It reflects the {{htmlelement("track")}} element's enumerated [`kind`](/en-US/docs/Web/HTML/Element/track#kind) attribute.

If no `kind` is set, `subtitles` is used. If the attribute is not set to one of the valid enumerated values, it is invalid and `metadata` is used. Other valid values include `captions`, `descriptions`, and `chapters`.

## Value

A string; lowercase `captions`, `descriptions`, `chapters`, `subtitles` or `metadata`.

## Example

Given the following:

```html
<track src="track.vtt" id="exampleTrack" />
```

We get the following results:

```js
const trackElement = document.getElementById("exampleTrack");
// missing value
console.log(trackElement.kind); // "subtitles"
trackElement.kind = "INVALID";
// invalid value
console.log(trackElement.kind); // "metadata"
trackElement.kind = "CAPTIONS";
// valid value
console.log(trackElement.kind); // "captions"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTrackElement.track")}}
- {{domxref("HTMLTrackElement.label")}}

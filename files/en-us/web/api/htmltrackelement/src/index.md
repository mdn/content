---
title: "HTMLTrackElement: src property"
short-title: src
slug: Web/API/HTMLTrackElement/src
page-type: web-api-instance-property
browser-compat: api.HTMLTrackElement.src
---

{{APIRef("HTML DOM")}}

The **`src`** property of the {{domxref("HTMLTrackElement")}} interface reflects the value of
the {{HTMLElement("track")}} element's [`src`](/en-US/docs/Web/HTML/Element/track#src) attribute, which
indicates the URL of the text track's data.

## Value

A string containing the URL of the text track data.

## Example

```js
const trackElement = document.getElementById("exampleTrack");
console.log(`Track's URL: ${trackElement.src}`);
trackElement.src = "newTrack.vtt";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTrackElement")}}
- {{HTMLElement("track")}}

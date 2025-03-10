---
title: "HTMLTrackElement: label property"
short-title: label
slug: Web/API/HTMLTrackElement/label
page-type: web-api-instance-property
browser-compat: api.HTMLTrackElement.label
---

{{ApiRef("HTML DOM")}}

The **`label`** property of the {{domxref("HTMLTrackElement")}} represents the user-readable title displayed when listing subtitle, caption, and audio descriptions for a track. It reflects the {{htmlelement("track")}} element's [`label`](/en-US/docs/Web/HTML/Element/track#label) attribute.

## Value

A string.

## Example

```js
const trackElement = document.getElementById("exampleTrack");
console.log(`Track's label: ${trackElement.label}`);
trackElement.label = "Updated label";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTrackElement.track")}}
- {{domxref("HTMLTrackElement.kind")}}

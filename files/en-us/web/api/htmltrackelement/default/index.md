---
title: "HTMLTrackElement: default property"
short-title: default
slug: Web/API/HTMLTrackElement/default
page-type: web-api-instance-property
browser-compat: api.HTMLTrackElement.default
---

{{ApiRef("HTML DOM")}}

The **`default`** property of the {{domxref("HTMLTrackElement")}} interface represents whether the track will be enabled if the user's preferences do not indicate that another track would be more appropriate. It reflects the {{htmlelement("track")}} element's boolean [`default`](/en-US/docs/Web/HTML/Element/track#default) attribute, returning `true` if present and `false` otherwise.

## Value

A Boolean.

## Example

```js
const trackElement = document.getElementById("exampleTrack");
console.log(trackElement.default);
trackElement.default = true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTrackElement.kind")}}
- {{domxref("HTMLTrackElement.label")}}

---
title: "HTMLTrackElement: track property"
short-title: track
slug: Web/API/HTMLTrackElement/track
page-type: web-api-instance-property
browser-compat: api.HTMLTrackElement.track
---

{{APIRef("HTML DOM")}}

The **`track`** read-only property of the {{domxref("HTMLTrackElement")}} interface returns a {{DOMxRef("TextTrack")}} object corresponding to the text track of the {{HTMLElement("track")}} element.

## Value

A {{DOMxRef("TextTrack")}} object.

## Example

```js
const trackElement = document.getElementById("exampleTrack");
console.dir(trackElement.track);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTrackElement")}}
- {{domxref("textTrack")}}
- {{HTMLElement("track")}}

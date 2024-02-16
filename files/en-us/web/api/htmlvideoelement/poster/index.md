---
title: "HTMLVideoElement: poster property"
short-title: poster
slug: Web/API/HTMLVideoElement/poster
page-type: web-api-instance-property
browser-compat: api.HTMLVideoElement.poster
---

{{APIRef("HTML DOM")}}

The **`poster`** property of the {{domxref("HTMLVideoElement")}} interface is a string that reflects the URL for an image to be shown while no video data is available. If the property does not represent a valid URL, no poster frame will be shown.

It reflects the `poster` attribute of the {{HTMLElement("video")}} element.

## Value

A string.

## Examples

```html
<video
  id="media"
  src="https://example.com/video.mp4"
  poster="https://example.com/poster.jpg"></video>
```

```js
const el = document.getElementById("media");
console.log(el.poster); // Output: "https://example.com/poster.jpg"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

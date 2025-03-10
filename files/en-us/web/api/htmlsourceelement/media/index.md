---
title: "HTMLSourceElement: media property"
short-title: media
slug: Web/API/HTMLSourceElement/media
page-type: web-api-instance-property
browser-compat: api.HTMLSourceElement.media
---

{{APIRef("HTML DOM")}}

The **`media`** property of the {{domxref("HTMLSourceElement")}} interface is a string representing the intended destination medium for the resource. The value is a [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries), which is a comma separated list of media-types, media-features, and logical operators.

It reflects the `media` attribute of the {{HTMLElement("source")}} element.

## Value

A string.

## Examples

```html
<source
  id="el"
  src="largeVideo.mov"
  type="video/quicktime"
  media="screen and (min-width: 600px)" />
```

```js
const el = document.getElementById("el");
console.log(el.media); // Output: "screen and (min-width: 600px)"
el.media = "(min-width: 800px)"; // Updates the media value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLSourceElement.type")}}
- {{domxref("HTMLSourceElement.sizes")}}
- {{domxref("HTMLSourceElement.src")}}
- {{domxref("HTMLSourceElement.srcset")}}
- {{htmlelement("source")}}
- {{htmlelement("picture")}}
- {{htmlelement("audio")}}
- {{htmlelement("video")}}
- [Using media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)

---
title: "HTMLSourceElement: type property"
short-title: type
slug: Web/API/HTMLSourceElement/type
page-type: web-api-instance-property
browser-compat: api.HTMLSourceElement.type
---

{{APIRef("HTML DOM")}}

The **`type`** property of the {{domxref("HTMLSourceElement")}} interface is a string representing the {{glossary("MIME type")}} of the media resource.

It reflects the `type` attribute of the {{HTMLElement("source")}} element.

## Value

A string.

## Examples

```html
<source
  id="el"
  src="large.webp"
  type="video/webp"
  media="screen and (min-width: 600px)" />
```

```js
const el = document.getElementById("el");
console.log(el.type); // Output: "video/webp"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLSourceElement.src")}}
- {{domxref("HTMLSourceElement.srcset")}}
- {{domxref("HTMLSourceElement.media")}}
- {{domxref("HTMLSourceElement.sizes")}}
- {{htmlelement("source")}}
- {{htmlelement("picture")}}
- {{htmlelement("audio")}}
- {{htmlelement("video")}}
- [Media types found on the web](/en-US/docs/Web/Media/Guides/Formats)
- [Important MIME types for web developers](/en-US/docs/Web/HTTP/MIME_types#important_mime_types_for_web_developers)
- {{domxref("Media Capabilities API")}}

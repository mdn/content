---
title: "HTMLSourceElement: srcset property"
short-title: srcset
slug: Web/API/HTMLSourceElement/srcset
page-type: web-api-instance-property
browser-compat: api.HTMLSourceElement.srcset
---

{{APIRef("HTML DOM")}}

The **`srcset`** property of the {{domxref("HTMLSourceElement")}} interface is a string containing a comma-separated list of candidate images and descriptors. Each list item in the comma-separated list includes the URL of an image resource to use as the source for the element and the circumstances under which that image should be used. Each image in the comma selist one or more image URLs and their descriptorseach specifying image resources to use under given circumstances. Each candidate image is a URL followed by the width of the image with a `'w'` or the pixel density with an `'x'`.

It reflects the `srcset` attribute of the {{HTMLElement("source")}} element nested in a {{htmlelement("picture")}} element. It has no meaning and is ignored when it is nested in an {{htmlelement("audio")}} or {{htmlelement("video")}} element, which use the {{domxref("HTMLSourceElement.src", "src")}} instead.

## Value

A string.

## Examples

```html
<source
  id="el"
  srcset="smile.png, smile-1.5x.png 1.5x, smile-2x.png 2x"
  type="image/png" />
```

```js
const el = document.getElementById("el");
console.log(el.srcset); // Output: "smile.png, smile-1.5x.png 1.5x, smile-large 800w"
el.srcset = "smile.png, smile-med.png 600w, smile-large.png 800w"; // Updates the srcset value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLSourceElement.type")}}
- {{domxref("HTMLSourceElement.src")}}
- {{domxref("HTMLSourceElement.media")}}
- {{domxref("HTMLSourceElement.sizes")}}
- {{htmlelement("source")}}
- {{htmlelement("picture")}}

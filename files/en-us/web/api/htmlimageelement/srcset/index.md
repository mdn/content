---
title: "HTMLImageElement: srcset property"
short-title: srcset
slug: Web/API/HTMLImageElement/srcset
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.srcset
---

{{APIRef("HTML DOM")}}

The **`srcset`** property of the {{domxref("HTMLImageElement")}} interface identifies one or more _image candidate strings_, separated using commas (`,`), each specifying image resources to use under given circumstances. Each image candidate string contains an image URL and an optional width or pixel density descriptor that indicates the conditions under which that candidate should be used instead of the image specified by the {{domxref("HTMLImageElement.src", "src")}} property. It reflects the `<img>` element's [`srcset`](/en-US/docs/Web/HTML/Reference/Elements/img#srcset) content attribute.

The `srcset` property, along with the {{domxref("HTMLImageElement.sizes", "sizes")}} property, are a crucial component in designing responsive websites, as they can be used together to make pages that use appropriate images for the rendering situation.

> [!NOTE]
> If the [`srcset`](/en-US/docs/Web/HTML/Reference/Elements/img#srcset) attribute uses width descriptors, the `sizes` attribute must also be present, or the `srcset` itself will be ignored.

## Value

A string. For more information about the syntax of the `srcset` attribute, see the HTML [`<img>`](/en-US/docs/Web/HTML/Reference/Elements/img#srcset) reference.

## Examples

### Setting the srcset attribute

```js
const img = new Image();
img.srcset =
  "/en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-400px.png 2x, /en-US/docs/Web/HTML/Reference/Elements/img/clock-demo-200px.png";
img.alt = "An example picture";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML images](/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Responsive images](/en-US/docs/Web/HTML/Guides/Responsive_images)
- [Image file type and format guide](/en-US/docs/Web/Media/Guides/Formats/Image_types)
- {{domxref("HTMLImageElement.currentSrc")}}
- {{domxref("HTMLImageElement.sizes")}}
- {{domxref("HTMLImageElement.src")}}

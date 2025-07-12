---
title: "HTMLLinkElement: imageSizes property"
short-title: imageSizes
slug: Web/API/HTMLLinkElement/imageSizes
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.imageSizes
---

{{APIRef("HTML DOM")}}

The **`imageSizes`** property of the {{domxref("HTMLLinkElement")}} interface indicates the size and conditions for the preloaded images defined by the {{domxref("HTMLLinkElement.imageSrcset", "imageSrcset")}} property. It reflects the value of the {{htmlelement("link")}} element's [`imagesizes`](/en-US/docs/Web/HTML/Reference/Elements/link#imagesizes) attribute. This property can retrieve or set the `imagesizes` attribute value.

The `<link>` element's `imagesizes` attribute is the same as the {{htmlelement("img")}} element's `sizes` attribute: a comma-separated **source size** list. Each source size includes a [media condition](/en-US/docs/Web/CSS/CSS_media_queries), the size of the image as a {{cssxref("length")}}, or the keyword `auto`, which must come first. For more information about the syntax of the `sizes` attribute, see [`<img>`](/en-US/docs/Web/HTML/Reference/Elements/img#sizes).

The `imagesrcset` and `imagesizes` attributes are only relevant on `<link>` elements that have both a `rel` attribute set to `preload` and the `as` attribute set to `image`.

## Value

A string composed of comma-separated source sizes, or the empty string `""` if unspecified.

## Examples

Given the following `<link>` element:

```html
<link
  rel="preload"
  as="image"
  imagesrcset="narrow.png, medium.png 600w, wide.png 1200w"
  imagesizes="(width < 400px) 200px, (400px <= width < 600px) 75vw, 50vw" />
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  padding: 0 0.25rem;
  font-size: 1.2em;
  line-height: 1.4;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

…we can retrieve and update the `imagesizes` attribute value with the `imageSizes` property:

```js
const link = document.querySelector("link");
log(`Original: ${link.imageSizes}`);

// Change the value
link.imageSizes = "50vw";
log(`Updated: ${link.imageSizes}`);
```

{{EmbedLiveSample('Examples',"","80")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.imageSrcset")}}
- {{domxref("HTMLImageElement.sizes")}}
- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries)
- [Using the `srcset` and `sizes` attributes](/en-US/docs/Web/HTML/Reference/Elements/img#using_the_srcset_and_sizes_attributes)

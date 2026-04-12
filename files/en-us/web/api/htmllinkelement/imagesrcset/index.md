---
title: "HTMLLinkElement: imageSrcset property"
short-title: imageSrcset
slug: Web/API/HTMLLinkElement/imageSrcset
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.imageSrcset
---

{{APIRef("HTML DOM")}}

The **`imageSrcset`** property of the {{domxref("HTMLLinkElement")}} interface is a string which identifies one or more comma-separated **image candidate strings**. This property reflects the value of the {{htmlelement("link")}} element's [`imagesrcset`](/en-US/docs/Web/HTML/Reference/Elements/link#imagesrcset) attribute. This property can retrieved or set the `imagesrcset` attribute value.

Each image candidate string contains an image URL and an optional width and/or pixel density descriptor indicating the conditions under which that candidate image should be used.

```plain
"images/team-photo.jpg, images/team-photo-retina.jpg 2x, images/team-photo-large.jpg 1400w"
```

For HTML {{htmlelement("link")}} elements with [`rel="preload"`](/en-US/docs/Web/HTML/Reference/Attributes/rel/preload) and [`as="image"`](/en-US/docs/Web/HTML/Reference/Elements/link#as) set, the `imagesrcset` attribute has similar syntax and semantics as the {{htmlelement("img")}} element's [`srcset`](/en-US/docs/Web/HTML/Reference/Elements/img#srcset) attribute, which indicates to preload the appropriate resource used by an `<img>` element with corresponding values for its `srcset` and `sizes` attributes.

If the `imageSrcset` property includes width descriptors, the {{domxref("HTMLLinkElement.imageSizes", "imageSizes")}} property must be non-null, or the `imageSrcset` value will be ignored.

## Value

A string composed of a comma-separated list of one or more image candidate strings, or the empty string `""` if unspecified..

## Examples

Given the following `<link>` element:

```html
<link
  rel="preload"
  as="image"
  imagesizes="50vw"
  imagesrcset="bg-narrow.png, bg-wide.png 800w" />
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

…we can access the `imagesrcset` attribute value, and update it, using the `imageSrcset` property:

```js
const link = document.querySelector("link");
log(`Original: ${link.imageSrcset}`);

// add an image candidate string
link.imageSrcset += ", bg-huge.png 1200w";
log(`Updated: ${link.imageSrcset}`);
```

{{EmbedLiveSample('Examples',"","80")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.imageSizes")}}
- {{domxref("HTMLImageElement.srcset")}}
- [Speculative loading](/en-US/docs/Web/Performance/Guides/Speculative_loading#link_relpreload)
- [Responsive images](/en-US/docs/Web/HTML/Guides/Responsive_images)

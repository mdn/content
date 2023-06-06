---
title: decoding
slug: Web/SVG/Attribute/decoding
page-type: svg-attribute
browser-compat: svg.elements.image.decoding
---

{{SVGRef}}

The `decoding` attribute, valid on {{SVGElement("image")}} elements, provides a hint to the browser as to whether it should perform image decoding along with rendering other content and then present it all together, or render and present the other content first and then decode the image and present it later.

Possible values are as follows:

- `sync`
  - : Decode the image synchronously along with rendering the other content, and present everything together. This results in a single presentation step that looks more "correct" (i.e. no intermediate display steps), but it can result in a performance hit, especially for users on slower networks.
- `async`
  - : Decode the image asynchronously, after rendering and presenting the other content. This may result in slightly inferior presentation, as different parts of the content are presented at different times, but it can improve performance, as the other content is available sooner.
- `auto`
  - : No preference for the decoding mode; the browser decides what is best for the user. This is the default value.

## Example

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <image
    href="https://example.com/mdn_logo_dark.png"
    height="200"
    width="200"
    decoding="async" />
</svg>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SVGImageElement: decoding property](/en-US/docs/Web/API/SVGImageElement/decoding)
- [HTMLImageElement: decoding property](/en-US/docs/Web/API/HTMLImageElement/decoding) (includes more details around the idea of `decoding`)

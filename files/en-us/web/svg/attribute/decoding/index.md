---
title: decoding
slug: Web/SVG/Attribute/decoding
page-type: svg-attribute
browser-compat: svg.elements.image.decoding
---

{{SVGRef}}

The `decoding` attribute, valid on {{SVGElement("image")}} elements, provides a hint to the browser as to whether it should perform image decoding synchronously or asynchronously.

In theory, this attribute provides a hint to the browser as to whether it should perform image decoding along with rendering other content in a single presentation step that looks more "correct" (`sync`), or render and present the other content first and then decode the image and present it later (`async`). In practice, `async` means that the next paint does not wait for the image to decode. It does not make decoding happen off the main thread, as modern browsers do this anyway.

In reality, `decoding` is not very useful. The decode time will be so small for most images — and it's rare for the image paint to be ready in the exact same frame and therefore be waiting for the image decode — that in most situations you won't notice any difference. You might notice a difference if you have very large images embedded in a page — setting `decoding="async"` may stop text content rendering from being held up by image decoding, with a tradeoff that you might experience flashes of unpainted content. However, embedding very large images is not recommended, and would cause more problems than `decode` would solve.

Allowed values:

- `sync`
  - : Decode the image synchronously along with rendering the other content, and present everything together.
- `async`
  - : Decode the image asynchronously, after rendering and presenting the other content.
- `auto`
  - : No preference for the decoding mode; the browser decides what is best for the user. This is the default value.

> **Note:** The {{domxref("SVGImageElement.decoding")}} attribute is more useful, as it provides a way to hint that you want to decode images without blocking your JavaScript execution.

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

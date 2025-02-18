---
title: "HTMLLinkElement: sizes property"
short-title: sizes
slug: Web/API/HTMLLinkElement/sizes
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.sizes
---

{{APIRef("HTML DOM")}}

The **`sizes`** read-only property of the {{domxref("HTMLLinkElement")}} interfaces defines the sizes of the icons for visual media contained in the resource. It reflects the {{HTMLElement("link")}} element's [`sizes`](/en-US/docs/Web/HTML/Element/link#sizes) attribute, which takes a list of space-separated sizes, each in the format `<width in pixels>x<height in pixels>`, or the keyword `any`.

It is only relevant if the {{domxref("HTMLLinkElement.rel", "rel")}} is `icon` or a non-standard type like `apple-touch-icon`.

## Value

A {{domxref("DOMTokenList")}}

## Examples

```html
<link rel="icon" sizes="72x72 114x114" href="smallish.png" />
```

```js
const link = document.querySelector("[rel=icon],[rel=apple-touch-icon]");
console.dir(link.sizes); /* output:
  DOMTokenList [ "72x72", "114x114" ]
    0: "72x72"
    1: "114x114"
    length: 2
    value: "72x72 114x114"
  */
console.log(link.sizes.value); // output: '72x72 114x114'
console.log(link.sizes.length); // output: 2'
console.log(link.sizes[0]); // output: '72x72'
console.log(link.sizes[1]); // output: '114x114'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.rel")}}
- {{domxref("HTMLLinkElement.relList")}}
- {{domxref("HTMLLinkElement.type")}}
- {{domxref("HTMLLinkElement.href")}}
- {{HTMLElement("link")}}
- [`rel`](/en-US/docs/Web/HTML/Attributes/rel) attribute

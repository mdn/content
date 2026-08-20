---
title: "SVGAElement: hash property"
short-title: hash
slug: Web/API/SVGAElement/hash
page-type: web-api-instance-property
browser-compat: api.SVGAElement.hash
---

{{APIRef("SVG")}}

The **`hash`** property of the {{domxref("SVGAElement")}} interface is a string containing a `"#"` followed by the fragment identifier of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}. If the URL does not have a fragment identifier, this property contains an empty string, `""`.

This property can be set to change the fragment of the URL. When setting, a single `"#"` prefix is added to the provided value, if not already present, and setting it to `""` removes the fragment. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

See {{domxref("URL.hash")}} for more information.

## Value

A string.

## Examples

### Getting the hash from an SVG link

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/#example">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```js
const link = document.getElementById("link");
console.log(link.hash); // "#example"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- The {{domxref("SVGAElement")}} interface it belongs to
- {{domxref("HTMLAnchorElement.hash")}}

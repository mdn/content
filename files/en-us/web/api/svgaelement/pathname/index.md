---
title: "SVGAElement: pathname property"
short-title: pathname
slug: Web/API/SVGAElement/pathname
page-type: web-api-instance-property
browser-compat: api.SVGAElement.pathname
---

{{APIRef("SVG")}}

The **`pathname`** property of the {{domxref("SVGAElement")}} interface is a string containing an initial `"/"` followed by the path of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}, not including the query string or fragment. If the element has no {{SVGAttr("href")}} attribute, this property contains an empty string, `""`.

This property can be set to change the path of the URL. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

See {{domxref("URL.pathname")}} for more information.

## Value

A string.

## Examples

### Getting the pathname from an SVG link

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/docs/svg?q=path#example">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```js
const link = document.getElementById("link");
console.log(link.pathname); // "/docs/svg"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- The {{domxref("SVGAElement")}} interface it belongs to
- {{domxref("HTMLAnchorElement.pathname")}}

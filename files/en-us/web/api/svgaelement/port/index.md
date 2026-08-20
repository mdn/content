---
title: "SVGAElement: port property"
short-title: port
slug: Web/API/SVGAElement/port
page-type: web-api-instance-property
browser-compat: api.SVGAElement.port
---

{{APIRef("SVG")}}

The **`port`** property of the {{domxref("SVGAElement")}} interface is a string containing the port number of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}. If the port is the default for the protocol (`80` for `ws:` and `http:`, `443` for `wss:` and `https:`, and `21` for `ftp:`), this property contains an empty string, `""`.

This property can be set to change the port of the URL. If the URL has no {{domxref("SVGAElement.host", "host")}} or its scheme is `file:`, then setting this property has no effect. Invalid port numbers are silently ignored. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

See {{domxref("URL.port")}} for more information.

## Value

A string.

## Examples

### Getting the port from an SVG link

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com:443/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```js
const link = document.getElementById("link");
console.log(link.port); // "" because 443 is the default port for https:

link.setAttribute("href", "https://example.com:8888/");
console.log(link.port); // "8888"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- The {{domxref("SVGAElement")}} interface it belongs to
- {{domxref("HTMLAnchorElement.port")}}

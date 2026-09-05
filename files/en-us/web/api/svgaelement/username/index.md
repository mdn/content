---
title: "SVGAElement: username property"
short-title: username
slug: Web/API/SVGAElement/username
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SVGAElement.username
---

{{APIRef("SVG")}}{{SeeCompatTable}}

The **`username`** property of the {{domxref("SVGAElement")}} interface is a string containing the username component of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}. If the URL does not have a username, this property contains an empty string, `""`.

This property can be set to change the username of the URL. If the URL has no {{domxref("SVGAElement.host", "host")}} or its scheme is `file:`, then setting this property has no effect. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

The username is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

See {{domxref("URL.username")}} for more information.

## Value

A string.

## Examples

### Getting the username from an SVG link

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://anonymous:flabada@example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```js
const link = document.getElementById("link");
console.log(link.username); // "anonymous"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- The {{domxref("SVGAElement")}} interface it belongs to
- {{domxref("HTMLAnchorElement.username")}}

---
title: "SVGAElement: password property"
short-title: password
slug: Web/API/SVGAElement/password
page-type: web-api-instance-property
browser-compat: api.SVGAElement.password
---

{{APIRef("SVG")}}

The **`password`** property of the {{domxref("SVGAElement")}} interface is a string containing the password component of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}. If the URL does not have a password, this property contains an empty string, `""`.

This property can be set to change the password of the URL. If the URL has no {{domxref("SVGAElement.host", "host")}} or its scheme is `file:`, then setting this property has no effect. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

The password is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

See {{domxref("URL.password")}} for more information.

## Value

A string.

## Examples

### Getting the password from an SVG link

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://anonymous:flabada@example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```js
const link = document.getElementById("link");
console.log(link.password); // "flabada"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- The {{domxref("SVGAElement")}} interface it belongs to
- {{domxref("HTMLAnchorElement.password")}}

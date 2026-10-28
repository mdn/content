---
title: "SVGAElement: password property"
short-title: password
slug: Web/API/SVGAElement/password
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SVGAElement.password
---

{{APIRef("SVG")}}{{SeeCompatTable}}

The **`password`** property of the {{domxref("SVGAElement")}} interface represents the password component of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}.
If the URL does not have a password, this property contains an empty string, `""`.

This property can be set to change the password of the URL. If the URL has no {{domxref("SVGAElement.host", "host")}} or its scheme is `file:`, then setting this property has no effect. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

The password is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

See {{domxref("URL.password")}} for more information.

## Value

A string.

## Examples

### Getting the password from an SVG link

Given the following SVG:

```html live-sample___svgaelement-password
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://anonymous:flabada@example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-password
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-password
svg {
  width: 200px;
  height: 30px;
}
svg a text {
  fill: blue;
  text-decoration: underline;
}
#log {
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden live-sample___svgaelement-password
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

We can read the password of the link:

```js live-sample___svgaelement-password
const link = document.getElementById("link");

log(`password: "${link.password}"`); // password: "flabada"
```

{{EmbedLiveSample("svgaelement-password", "100%", "120")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- {{domxref("HTMLAnchorElement.password")}}

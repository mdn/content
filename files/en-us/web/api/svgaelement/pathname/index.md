---
title: "SVGAElement: pathname property"
short-title: pathname
slug: Web/API/SVGAElement/pathname
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SVGAElement.pathname
---

{{APIRef("SVG")}}{{SeeCompatTable}}

The **`pathname`** property of the {{domxref("SVGAElement")}} interface represents the element's path.
It is an initial `"/"` followed by the path of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}, not including the query string or fragment. If the element has no {{SVGAttr("href")}} attribute, this property contains an empty string, `""`.

This property can be set to change the path of the URL. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

See {{domxref("URL.pathname")}} for more information.

## Value

A string.

## Examples

### Getting the pathname from an SVG link

Given the following SVG:

```html live-sample___svgaelement-pathname
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/docs/svg?q=path#example">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-pathname
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-pathname
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

```js hidden live-sample___svgaelement-pathname
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

We can read the path of the link, without the query string and the fragment:

```js live-sample___svgaelement-pathname
const link = document.getElementById("link");

log(`pathname: "${link.pathname}"`); // pathname: "/docs/svg"
```

{{EmbedLiveSample("svgaelement-pathname", "100%", "120")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- {{domxref("HTMLAnchorElement.pathname")}}

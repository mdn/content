---
title: "SVGAElement: hash property"
short-title: hash
slug: Web/API/SVGAElement/hash
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SVGAElement.hash
---

{{APIRef("SVG")}}{{SeeCompatTable}}

The **`hash`** property of the {{domxref("SVGAElement")}} interface represents the element's fragment identifier.
It is the string `"#"`, followed by the fragment identifier of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}. If the URL does not have a fragment identifier, this property contains an empty string, `""`.

This property can be set to change the fragment of the URL. When setting, a single `"#"` prefix is added to the provided value, if not already present, and setting it to `""` removes the fragment. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

See {{domxref("URL.hash")}} for more information.

## Value

A string.

## Examples

### Getting the hash from an SVG link

Given the following SVG:

```html live-sample___svgaelement-hash
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/#example">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-hash
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-hash
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

```js hidden live-sample___svgaelement-hash
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

We can read the fragment identifier of the link:

```js live-sample___svgaelement-hash
const link = document.getElementById("link");

log(`hash: "${link.hash}"`); // hash: "#example"
```

{{EmbedLiveSample("svgaelement-hash", "100%", "120")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- {{domxref("HTMLAnchorElement.hash")}}

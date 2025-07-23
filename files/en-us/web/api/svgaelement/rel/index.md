---
title: "SVGAElement: rel property"
short-title: rel
slug: Web/API/SVGAElement/rel
page-type: web-api-instance-property
browser-compat: api.SVGAElement.rel
---

{{APIRef("SVG")}}

The **`rel`** property of the {{domxref("SVGAElement")}} returns a {{domxref("String")}} reflecting the value of the [`rel`](/en-US/docs/Web/HTML/Reference/Elements/a#rel) attribute of the SVG {{svgelement("a")}} element.

The `rel` attribute specifies the space-separated list of link types, the [`<list-of-Link-Types>`](/en-US/docs/Web/HTML/Reference/Attributes/rel), indicating the relationship between the target or resource represented by the {{SVGElement("a")}} element and the current document. The property can get or set the `rel` attribute value.

## Value

A string; the value of the `rel` attribute.

## Examples

Given the following SVG:

```html
<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
  <!-- A link around a text -->
  <a href="/docs/Web/SVG/Reference/Element/text" rel="terms-of-service">
    <text x="30" y="10">Link text.</text>
  </a>
</svg>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
svg {
  height: 50px;
}
text {
  font-size: 1rem;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

We can retrieve and set the `rel` attribute:

```js
// Select an SVG <a> element
const svgLink = document.querySelector("svg a");

// Access the rel property
log(`Rel: ${svgLink.rel}`);

// Set the rel property
svgLink.rel = "alternate bookmark";

// Access the rel property again
log(`New rel: "${svgLink.rel}"`); // New rel: "alternate bookmark"
```

{{EmbedLiveSample("Example","100%","200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`rel`](/en-US/docs/Web/HTML/Reference/Elements/a#rel)
- {{domxref("SVGAElement.relList")}}
- {{domxref("SVGAnchorElement.rel")}}
- {{domxref("HTMLAnchorElement.rel")}}
- {{domxref("HTMLLinkElement.rel")}}

---
title: "SVGAElement: relList property"
short-title: relList
slug: Web/API/SVGAElement/relList
page-type: web-api-instance-property
browser-compat: api.SVGAElement.relList
---

{{APIRef("SVG")}}

The **`relList`** read-only property of the {{domxref("SVGAElement")}} returns a live {{domxref("DOMTokenList")}} reflecting the space-separated string [`<list-of-Link-Types>`](/en-US/docs/Web/HTML/Reference/Attributes/rel) values of the [`rel`](/en-US/docs/Web/HTML/Reference/Elements/a#rel) attribute of the SVG {{svgelement("a")}} element.

The property itself is read-only, meaning you can't substitute the
{{domxref("DOMTokenList")}} by another one, but the content of the returned list can be
changed.

## Value

A live {{domxref("DOMTokenList")}}.

## Examples

Given the following SVG:

```html
<svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
  <!-- A link around a text -->
  <a href="/docs/Web/SVG/Reference/Element/text" rel="alternate bookmark">
    <text x="30" y="10">Link text</text>
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

We can retrieve every link type defined by `<a>` element's `rel` attribute:

```js
// Select an SVG <a> element
const svgLink = document.querySelector("a");
const relations = svgLink.relList;

relations.forEach((relValue) => {
  log(relValue);
});
```

{{EmbedLiveSample("Example","100%","200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`rel`](/en-US/docs/Web/HTML/Reference/Elements/a#rel)
- {{domxref("SVGAElement.rel")}}
- {{domxref("HTMLAnchorElement.relList")}}
- {{domxref("HTMLLinkElement.relList")}}

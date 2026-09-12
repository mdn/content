---
title: "SVGAElement: search property"
short-title: search
slug: Web/API/SVGAElement/search
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SVGAElement.search
---

{{APIRef("SVG")}}{{SeeCompatTable}}

The **`search`** property of the {{domxref("SVGAElement")}} interface represents the element's query string.
It is a `"?"` followed by the parameters of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}. If the URL does not have any parameters, this property contains an empty string, `""`.

This property can be set to change the query string of the URL. When setting, a single `"?"` prefix is added to the provided value, if not already present, and setting it to `""` removes the query string. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

The query is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

See {{domxref("URL.search")}} for more information.

## Value

A string.

## Examples

### Getting the search string from an SVG link

Given the following SVG:

```html live-sample___svgaelement-search
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/search?q=svg">
    <text x="0" y="20">Search for SVG</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-search
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-search
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

```js hidden live-sample___svgaelement-search
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

We can read the query string of the link:

```js live-sample___svgaelement-search
const link = document.getElementById("link");

log(`search: "${link.search}"`); // search: "?q=svg"
```

{{EmbedLiveSample("svgaelement-search", "100%", "120")}}

### Advanced parsing using URLSearchParams

Alternatively, {{domxref("URLSearchParams")}} can be used to read individual parameters out of the query string:

```html live-sample___svgaelement-search-params
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/search?q=svg">
    <text x="0" y="20">Search for SVG</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-search-params
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-search-params
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

```js hidden live-sample___svgaelement-search-params
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

```js live-sample___svgaelement-search-params
const link = document.getElementById("link");
const params = new URLSearchParams(link.search);

log(`q: "${params.get("q")}"`); // q: "svg"
```

{{EmbedLiveSample("svgaelement-search-params", "100%", "120")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- {{domxref("HTMLAnchorElement.search")}}

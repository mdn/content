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

The **`search`** property of the {{domxref("SVGAElement")}} interface is a string containing a `"?"` followed by the parameters of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}, also known as the _query string_. If the URL does not have any parameters, this property contains an empty string, `""`.

This property can be set to change the query string of the URL. When setting, a single `"?"` prefix is added to the provided value, if not already present, and setting it to `""` removes the query string. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

The query is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

See {{domxref("URL.search")}} for more information.

## Value

A string.

## Examples

### Getting the search string from an SVG link

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/search?q=svg">
    <text x="0" y="20">Search for SVG</text>
  </a>
</svg>
```

```js
const link = document.getElementById("link");
console.log(link.search); // "?q=svg"
```

### Advanced parsing using URLSearchParams

Alternatively, {{domxref("URLSearchParams")}} can be used to read individual parameters out of the query string:

```js
const link = document.getElementById("link");
const params = new URLSearchParams(link.search);
console.log(params.get("q")); // "svg"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- The {{domxref("SVGAElement")}} interface it belongs to
- {{domxref("HTMLAnchorElement.search")}}

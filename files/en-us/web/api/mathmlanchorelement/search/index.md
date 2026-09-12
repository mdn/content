---
title: "MathMLAnchorElement: search property"
short-title: search
slug: Web/API/MathMLAnchorElement/search
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.search
---

{{APIRef("MathML")}}

The **`search`** property of the {{domxref("MathMLAnchorElement")}} interface is a search string, also called a _query string_, that is a string containing a `"?"` followed by the parameters of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element's `href`. If the URL does not have a search query, this property contains an empty string, `""`.

This property can be set to change the query string of the URL. When setting, a single `"?"` prefix is added to the provided value, if not already present. Setting it to `""` removes the query string.

The query is {{Glossary("Percent-encoding", "percent-encoded")}} when setting but not percent-decoded when reading.

The {{domxref("URL.searchParams")}} property is a {{domxref("URLSearchParams")}} object that enables parsing the parameters from the query string. See also {{domxref("URL.search")}}.

## Value

A string.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com/subsection?q=123"> ... </a>
</math>
```

you can get the `search` string of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.search; // returns '?q=123'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element

---
title: "MathMLAnchorElement: href property"
short-title: href
slug: Web/API/MathMLAnchorElement/href
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.href
---

{{APIRef("MathML")}}

The **`href`** property of the {{domxref("MathMLAnchorElement")}} interface is a {{Glossary("stringifier")}} that returns the absolute URL corresponding to the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element's `href` attribute (or an empty string if `href` is unset). Setting this property updates the element's `href` attribute to the provided value.

## Value

A string.

- If the `href` attribute is absent, the value is an empty string (`""`).
- If the `href` attribute is present but is not a valid relative or absolute URL, the value is the attribute's value as-is.
- If the `href` attribute is present and is a valid relative or absolute URL, the value is the absolute URL, resolved relative to the document's base URL. The empty string (`""`) is considered a valid relative URL, resolving to the document's base URL.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com#examples"> ... </a>
</math>
```

you can get the `href` of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.href; // returns 'https://example.com#examples'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element

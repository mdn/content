---
title: "MathMLAnchorElement: rel property"
short-title: rel
slug: Web/API/MathMLAnchorElement/rel
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.MathMLAnchorElement.rel
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

The **`rel`** property of the {{domxref("MathMLAnchorElement")}} interface is a string containing a space-separated list of link types indicating the relationship between the resource represented by the link and the current document.

It reflects the `rel` attribute of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element.

## Value

A string.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com" rel="help alternate">...</a>
</math>
```

you can get the `rel` value of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.rel; // "help alternate"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element
- {{domxref("MathMLAnchorElement.relList")}}
- [`rel` HTML attribute](/en-US/docs/Web/HTML/Reference/Attributes/rel)

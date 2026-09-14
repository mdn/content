---
title: "MathMLAnchorElement: type property"
short-title: type
slug: Web/API/MathMLAnchorElement/type
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.type
---

{{APIRef("MathML")}}

The **`type`** property of the {{domxref("MathMLAnchorElement")}} interface is a string that indicates the MIME type of the linked resource.

It reflects the `type` attribute of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element.

## Value

A string.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com" type="text/html"> ... </a>
</math>
```

you can get the `type` of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.type; // returns 'text/html'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element

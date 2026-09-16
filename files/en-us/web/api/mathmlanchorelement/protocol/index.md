---
title: "MathMLAnchorElement: protocol property"
short-title: protocol
slug: Web/API/MathMLAnchorElement/protocol
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.protocol
---

{{APIRef("MathML")}}

The **`protocol`** property of the {{domxref("MathMLAnchorElement")}} interface is a string containing the protocol or scheme of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element's `href`, including the final `":"`.

This property can be set to change the protocol of the URL. A `":"` is appended to the provided string if not provided. The provided scheme has to be compatible with the rest of the URL to be considered valid.

See {{domxref("URL.protocol")}} for more information.

## Value

A string.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com/subsection#examples"> ... </a>
</math>
```

you can get the `protocol` of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.protocol; // returns 'https:'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element

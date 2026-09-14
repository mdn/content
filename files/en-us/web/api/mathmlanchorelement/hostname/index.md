---
title: "MathMLAnchorElement: hostname property"
short-title: hostname
slug: Web/API/MathMLAnchorElement/hostname
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.hostname
---

{{APIRef("MathML")}}

The **`hostname`** property of the {{domxref("MathMLAnchorElement")}} interface is a string containing either the {{glossary("domain name")}} or {{glossary("IP address")}} of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element's `href`. If the URL does not have a hostname, this property contains an empty string, `""`. IPv4 and IPv6 addresses are normalized, such as stripping leading zeros, and domain names are converted to [IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name).

See {{domxref("URL.hostname")}} for more information.

## Value

A string.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com#examples"> ... </a>
</math>
```

you can get the `hostname` of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.hostname; // returns 'example.com'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element

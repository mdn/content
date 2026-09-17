---
title: "MathMLAnchorElement: host property"
short-title: host
slug: Web/API/MathMLAnchorElement/host
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.host
---

{{APIRef("MathML")}}

The **`host`** property of the {{domxref("MathMLAnchorElement")}} interface is a string containing the host, which is the {{domxref("MathMLAnchorElement.hostname", "hostname")}}, and then, if the {{glossary("port")}} of the URL is nonempty, a `":"`, followed by the {{domxref("MathMLAnchorElement.port", "port")}} of the URL. If the URL does not have a `hostname`, this property contains an empty string, `""`.

See {{domxref("URL.host")}} for more information.

## Value

A string.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a href="https://example.com#examples">...</a>
</math>
```

```js
const mathAnchor = document.querySelector("math a");

mathAnchor.href = "https://example.com/subsection";
mathAnchor.host === "example.com";

mathAnchor.href = "https://example.com:443";
mathAnchor.host === "example.com";
// The port number is not included because 443 is the scheme's default port

mathAnchor.href = "https://example.com:4097";
mathAnchor.host === "example.com:4097";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element

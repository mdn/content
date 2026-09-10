---
title: "MathMLAnchorElement: port property"
short-title: port
slug: Web/API/MathMLAnchorElement/port
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.port
---

{{APIRef("MathML")}}

The **`port`** property of the {{domxref("MathMLAnchorElement")}} interface is a string containing the port number of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element's `href`. If the port is the default for the protocol (`80` for `ws:` and `http:`, `443` for `wss:` and `https:`, and `21` for `ftp:`), this property contains an empty string, `""`.

This property can be set to change the port of the URL. If the URL has no {{domxref("MathMLAnchorElement.host", "host")}} or its scheme is `file:`, then setting this property has no effect. It also silently ignores invalid port numbers.

See {{domxref("URL.port")}} for more information.

## Value

A string.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com:8001/subsection#examples"> ... </a>
</math>
```

you can get the `port` of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.port; // returns '8001'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element

---
title: "MathMLAnchorElement: origin property"
short-title: origin
slug: Web/API/MathMLAnchorElement/origin
page-type: web-api-instance-property
browser-compat: api.MathMLAnchorElement.origin
---

{{APIRef("MathML")}}

The **`origin`** read-only property of the {{domxref("MathMLAnchorElement")}} interface returns a string containing the Unicode serialization of the origin of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element's `href`.

The exact structure varies depending on the type of URL:

- For URLs using the `ftp:`, `http:`, `https:`, `ws:`, and `wss:` schemes, the {{domxref("MathMLAnchorElement.protocol", "protocol")}} followed by `//`, followed by the {{domxref("MathMLAnchorElement.host", "host")}}. Same as `host`, the {{domxref("MathMLAnchorElement.port", "port")}} is only included if it's not the default for the protocol.
- For URLs using `file:` scheme, the value is browser dependent.
- For URLs using the `blob:` scheme, the origin of the URL following `blob:`, but only if that URL uses the `http:`, `https:`, or `file:` scheme. For example, `blob:https://mozilla.org` will have `https://mozilla.org`.

For all other cases, the string `"null"` is returned.

See {{domxref("URL.origin")}} for more information.

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

you can get the `origin` of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.origin; // returns 'https://example.com'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element

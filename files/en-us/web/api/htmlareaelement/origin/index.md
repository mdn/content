---
title: "HTMLAreaElement: origin property"
short-title: origin
slug: Web/API/HTMLAreaElement/origin
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.origin
---

{{APIRef("HTML DOM")}}

The **`origin`** read-only property of the {{domxref("HTMLAreaElement")}} interface returns a string containing the Unicode serialization of the origin of the `<area>` element's `href`.

The exact structure varies depending on the type of URL:

- For URLs using the `ftp:`, `http:`, `https:`, `ws:`, and `wss:` schemes, the {{domxref("HTMLAnchorElement.protocol", "protocol")}} followed by `//`, followed by the {{domxref("HTMLAnchorElement.host", "host")}}. Same as `host`, the {{domxref("HTMLAnchorElement.port", "port")}} is only included if it's not the default for the protocol.
- For URLs using `file:` scheme, the value is browser dependent.
- For URLs using the `blob:` scheme, the origin of the URL following `blob:`, but only if that URL uses the `http:`, `https:`, or `file:` scheme. For example, `blob:https://mozilla.org` will have `https://mozilla.org`.

For all other cases, the string `"null"` is returned.

See {{domxref("URL.origin")}} for more information.

## Value

A string.

## Examples

```js
// An <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.origin; // returns 'https://developer.mozilla.org'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAreaElement")}} interface it belongs to.

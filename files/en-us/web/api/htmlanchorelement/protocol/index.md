---
title: "HTMLAnchorElement: protocol property"
short-title: protocol
slug: Web/API/HTMLAnchorElement/protocol
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.protocol
---

{{ApiRef("HTML DOM")}}

The **`protocol`** property of the {{domxref("HTMLAnchorElement")}} interface is a string containing the protocol or scheme of the `<area>` element's `href`, including the final `":"`. If the port is the default for the protocol (`80` for `ws:` and `http:`, `443` for `wss:` and `https:`, and `21` for `ftp:`), this property contains an empty string, `""`.

This property can be set to change the protocol of the URL. A `":"` is appended to the provided string if not provided. The provided scheme has to be compatible with the rest of the URL to be considered valid.

See {{domxref("URL.protocol")}} for more information.

## Value

A string.

## Examples

### Getting the protocol of an anchor link

```js
// An <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.protocol; // returns 'https:'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLAnchorElement")}} interface it belongs to.

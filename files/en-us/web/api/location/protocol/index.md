---
title: "Location: protocol property"
short-title: protocol
slug: Web/API/Location/protocol
page-type: web-api-instance-property
browser-compat: api.Location.protocol
---

{{ApiRef("Location")}}

The **`protocol`** property of the {{domxref("Location")}} interface is a string containing the protocol or scheme of the location's URL, including the final `":"`. If the port is the default for the protocol (`80` for `ws:` and `http:`, `443` for `wss:` and `https:`, and `21` for `ftp:`), this property contains an empty string, `""`.

This property can be set to change the protocol of the URL. A `":"` is appended to the provided string if not provided. The provided scheme has to be compatible with the rest of the URL to be considered valid.

See {{domxref("URL.protocol")}} for more information.

## Value

A string.

## Examples

```js
// Let's an <a id="myAnchor" href="https://developer.mozilla.org/en-US/Location.protocol"> element be in the document
const anchor = document.getElementById("myAnchor");
const result = anchor.protocol; // Returns:'https:'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

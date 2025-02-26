---
title: "URL: protocol property"
short-title: protocol
slug: Web/API/URL/protocol
page-type: web-api-instance-property
browser-compat: api.URL.protocol
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`protocol`** property of the {{domxref("URL")}} interface is a string containing the protocol or scheme of the URL, including the final `":"`. If the port is the default for the protocol (`80` for `ws:` and `http:`, `443` for `wss:` and `https:`, and `21` for `ftp:`), this property contains an empty string, `""`.

This property can be set to change the protocol of the URL. A `":"` is appended to the provided string if not provided. The provided scheme has to be compatible with the rest of the URL to be considered valid.

## Value

A string.

## Examples

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol",
);
console.log(url.protocol); // Logs "https:"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.

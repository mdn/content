---
title: "URL: port property"
short-title: port
slug: Web/API/URL/port
page-type: web-api-instance-property
browser-compat: api.URL.port
---

{{ApiRef("URL API")}}

The **`port`** property of the {{domxref("URL")}} interface is
a string containing the port number of the URL.

> **Note:** If an input string passed to the [`URL()`](/en-US/docs/Web/API/URL/URL) constructor doesn't contain an explicit port number (e.g., `https://localhost`) or contains a port number that's the default port number corresponding to the protocol part of the input string (e.g., `https://localhost:443`), then in the [`URL`](/en-US/docs/Web/API/URL) object the constructor returns, the value of the port property will be the empty string: `''`.

{{AvailableInWorkers}}

## Value

A string.

## Examples

```js
const url = new URL("https://example.com:80/svn/Repos/");
console.log(url.port); // Logs '80'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.

---
title: "URL: port property"
short-title: port
slug: Web/API/URL/port
page-type: web-api-instance-property
browser-compat: api.URL.port
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`port`** property of the {{domxref("URL")}} interface is a string containing the port number of the URL, or the empty string if the port is the default for the protocol.

> [!NOTE]
> If the {{domxref("URL")}} object refers to a URL that doesn't contain an explicit port number (e.g., `https://localhost`) or contains a port number that's the default port number corresponding to the protocol part of the URL (e.g., `https://localhost:443`), then the value of the `port` property will be the empty string: `''`.

## Value

A string.

## Examples

```js
// https protocol with non-default port number
new URL("https://example.com:5443/svn/Repos/").port; // '5443'
// http protocol with non-default port number
new URL("http://example.com:8080/svn/Repos/").port; // '8080'
// https protocol with default port number
new URL("https://example.com:443/svn/Repos/").port; // '' (empty string)
// http protocol with default port number
new URL("http://example.com:80/svn/Repos/").port; // '' (empty string)
// https protocol with no explicit port number
new URL("https://example.com/svn/Repos/").port; // '' (empty string)
// http protocol with no explicit port number
new URL("https://example.com/svn/Repos/").port; // '' (empty string)
// ftp protocol with non-default port number
new URL("ftp://example.com:221/svn/Repos/").port; // '221'
// ftp protocol with default port number
new URL("ftp://example.com:21/svn/Repos/").port; // '' (empty string)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.

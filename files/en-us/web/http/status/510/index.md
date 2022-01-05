---
title: 510 Not Extended
slug: Web/HTTP/Status/510
tags:
  - HTTP
  - Server error
  - Status code
---
{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP)  **`510 Not Extended`**
response status code is sent in the context of the HTTP Extension Framework, defined in
[RFC 2774](https://datatracker.ietf.org/doc/html/rfc2774).

In that specification a client may send a request that contains an extension
declaration, that describes the extension to be used. If the server receives such a
request, but any described extensions are not supported for the request, then the server
responds with the 510 status code.

## Status

```
510 Not Extended
```

## Specifications

| Specification                                            | Title                       |
| -------------------------------------------------------- | --------------------------- |
| {{RFC("2774", "510 Not Extended" , "7")}} | An HTTP Extension Framework |

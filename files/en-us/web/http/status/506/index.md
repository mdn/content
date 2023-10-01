---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc2295#section-8.1
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`506 Variant Also Negotiates`** response status code may be given in the context of Transparent Content Negotiation (see [RFC 2295](https://datatracker.ietf.org/doc/html/rfc2295)). This protocol enables a client to retrieve the best variant of a given resource, where the server supports multiple variants.

The **`Variant Also Negotiates`** status code indicates an internal server configuration error in which the chosen variant is itself configured to engage in content negotiation, so is not a proper negotiation endpoint.

## Status

```http
506 Variant Also Negotiates
```

## Specifications

{{Specifications}}

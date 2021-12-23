---
title: 414 URI Too Long
slug: Web/HTTP/Status/414
tags:
  - Client error
  - HTTP
  - Reference
  - Status code
---
{{HTTPSidebar}}

The HTTP **`414 URI Too Long`** response status code indicates
that the URI requested by the client is longer than the server is willing to interpret.

There are a few rare conditions when this might occur:

- when a client has improperly converted a {{HTTPMethod("POST")}} request to a
  {{HTTPMethod("GET")}} request with long query information,
- when the client has descended into a loop of redirection (for example, a redirected
  URI prefix that points to a suffix of itself),
- or when the server is under attack by a client attempting to exploit potential
  security holes.

## Status

```
414 URI Too Long
```

## Specifications

| Specification                                                | Title                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "414 URI Too Long" , "6.5.12")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## See also

- {{Glossary("URI")}}

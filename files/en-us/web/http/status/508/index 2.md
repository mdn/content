---
title: 508 Loop Detected
slug: Web/HTTP/Status/508
tags:
  - '508'
  - HTTP
  - Server error
  - Status code
---
{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`508 Loop Detected`**
response status code may be given in the context of the Web Distributed Authoring and
Versioning (WebDAV) protocol.

It indicates that the server terminated an operation because it encountered an infinite
loop while processing a request with "Depth: infinity". This status indicates that the
entire operation failed.

## Status

```
508 Loop Detected
```

## Specifications

| Specification                                                | Title                                    |
| ------------------------------------------------------------ | ---------------------------------------- |
| {{RFC("5842", "508 Loop Detected" , "7.2")}} | Web Distributed Authoring and Versioning |

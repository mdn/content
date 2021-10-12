---
title: Fetch metadata request header
slug: Glossary/Fetch_metadata_request_header
tags:
  - Fetch Metadata Request Headers
  - Glossary
---
A **fetch metadata request header** is an {{Glossary("Request header", "HTTP request header")}} that provides additional information about the context from which the request originated. This allows the server to make decisions about whether a request should be allowed based on where the request came from and how the resource will be used.

With this information a server can implement a {{Glossary("resource isolation policy")}}, allowing external sites to request only those resources that are intended for sharing, and that are used appropriately. This approach can help mitigate common cross-site web vulnerabilities such as {{Glossary("CSRF")}}, Cross-site Script Inclusion('XSSI'), timing attacks, and cross-origin information leaks.

These headers are prefixed with `Sec-`, and hence have {{Glossary("Forbidden header name", "forbidden header names")}}. As such, they cannot be modified from JavaScript.

The fetch metadata request headers are:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

## See also

- [Protect your resources from web attacks with Fetch Metadata](https://web.dev/fetch-metadata/) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
- [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
- [List of all HTTP headers > Fetch metadata request headers](/en-US/docs/Web/HTTP/Headers#fetch_metadata_request_headers)
- [Glossary](/en-US/docs/Glossary)

  - {{Glossary("Representation header")}}
  - {{Glossary("HTTP_header","HTTP header")}}
  - {{Glossary("Response header")}}
  - {{Glossary("Request header")}}

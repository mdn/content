---
title: '502'
slug: Glossary/502
tags:
  - '502'
  - Bad Gateway
  - Glossary
  - HTTP Errors
  - Infrastructure
  - Navigation
---
An {{Glossary("HTTP")}} error code meaning "Bad Gateway".

A {{Glossary("Server", "server")}} can act as a gateway or proxy (go-between) between a client (like your Web browser) and another, upstream server. When you request to access a {{Glossary("URL")}}, the gateway server can relay your request to the upstream server. "502" means that the upstream server has returned an invalid response.

Normally the upstream server is not down (i.e. furnishes no response to the gateway/proxy), but does not understand the same data-exchange protocol as the gateway/proxy. Internet {{Glossary("Protocol", "protocols")}} are quite explicit, and so a 502 usually means that one or both machines were incorrectly or incompletely programmed.

## See also

- [list of HTTP response codes](/en-US/docs/Web/HTTP/Status)

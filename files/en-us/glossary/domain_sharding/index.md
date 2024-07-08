---
title: Domain sharding
slug: Glossary/Domain_sharding
page-type: glossary-definition
---

{{GlossarySidebar}}

Browsers limit the number of active connections for each domain. To enable concurrent downloads of assets exceeding that limit, **domain sharding** splits content across multiple subdomains. When multiple domains are used to serve multiple assets, browsers are able to download more resources simultaneously, resulting in a faster page load time and improved user experience.

The problem with domain sharding, in terms of performance, is the cost of extra DNS lookups for each domain and the overhead of establishing each TCP connection.

The initial response from an HTTP request is generally an HTML file listing other resources such as JavaScript, CSS, images and other media files that need to be downloaded. As browsers limit the number of active connections per domain, serving all the required resources from a single domain could be slow as assets need to be downloaded sequentially. With domain sharding, the required downloads are served from more than one domain, enabling the browser to simultaneously download needed resources. Multiple domains, however, is an anti-pattern, as DNS lookups slow initial load times.

HTTP2 supports unlimited concurrent requests making domain sharding an obsolete requirement when HTTP/2 is enabled.

## See also

- Related glossary terms:
  - {{Glossary("TLS")}}
- [DNS](/en-US/docs/Glossary/DNS)
- [HTTP/2](/en-US/docs/Glossary/HTTP_2)

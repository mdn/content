---
title: Origin
slug: Glossary/Origin
tags:
  - Glossary
  - Security
  - WebMechanics
  - origin
---
Web content's **origin** is defined by the _scheme_ (protocol), _hostname_ (domain), and _port_ of the {{Glossary("URL")}} used to access it. Two objects have the same origin only when the scheme, hostname, and port all match.

Some operations are restricted to same-origin content, and this restriction can be lifted using {{Glossary("CORS")}}.

## Examples

These are same origin because they have the same scheme (`http`) and hostname (`example.com`), and the different file path does not matter:

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

These are same origin because a server delivers HTTP content through port 80 by default:

- `http://Example.com:80`
- `http://example.com`

These are not same origin because they use different schemes:

- `http://example.com/app1`
- `https://example.com/app2`

These are not same origin because they use different hostnames:

- `http://example.com`
- `http://www.example.com`
- `http://myapp.example.com`

These are not same origin because they use different ports:

- `http://example.com`
- `http://example.com:8080`

## See also

- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
- {{Glossary("Site")}}
- [HTML specification: origin](https://html.spec.whatwg.org/multipage/origin.html#origin)

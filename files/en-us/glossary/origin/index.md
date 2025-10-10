---
title: Origin
slug: Glossary/Origin
page-type: glossary-definition
sidebar: glossarysidebar
---

Web content's **origin** is defined by the _scheme_ (protocol), _hostname_ (domain), and _port_ of the {{Glossary("URL")}} used to access it. Two objects have the same origin only when the scheme, hostname, and port all match.

Some operations are restricted to same-origin content, and this restriction can be lifted using {{Glossary("CORS")}}.

## Opaque origin

An opaque origin is a special type of "internal" origin that obscures the true origin of a resource (opaque origins are always serialized as `null`), and ensures that it never matches as same-origin with other resources — including those from other opaque origins.

Opaque origins are applied in cases where the true origin of a resource is sensitive, cannot be safely used for security checks, or does not exist.
A resource with an opaque origin will have its {{httpheader("Origin")}} HTTP header in requests set to [`null`](/en-US/docs/Web/HTTP/Reference/Headers/Origin#null).
It will also fail same-origin checks with any other resource, and hence be restricted to only those operations available to cross-origin resources.

Common cases where opaque origins are used include:

- A document within an iframe that has the [sandbox](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) attribute set, and does not include the `allow-same-origin` flag.
- `file:` URLs are usually treated as opaque origins so that files on they file system cannot read each other.
- Documents created programatically using APIs like https://developer.mozilla.org/en-US/docs/Web/API/ {{domxref("DOMImplementation.createDocument()")}}.

## Examples

These are same origin because they have the same scheme (`http`) and hostname (`example.com`), and the different file path does not matter:

- `http://example.com/app1/index.html`
- `http://example.com/app2/index.html`

These are same origin because a server delivers HTTP content through port 80 by default:

- `http://example.com:80`
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
- Related glossary terms:
  - {{Glossary("Site")}}
- [HTML specification: origin](https://html.spec.whatwg.org/multipage/origin.html#origin)

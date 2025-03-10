---
title: Site
slug: Glossary/Site
page-type: glossary-definition
---

{{GlossarySidebar}}

Informally, a _site_ is a website, which is a collection of web pages, served from the same domain, and maintained by a single organization.

Browsers sometimes need to distinguish precisely between different sites. For example, the browser must only send [`SameSite`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) cookies to the same site that set them.

For this more precise definition a site is determined by the _registrable domain_ portion of the domain name. The registrable domain consists of an entry in the [Public Suffix List](https://publicsuffix.org/list/) plus the portion of the domain name just before it. This means that, for example, `theguardian.co.uk`, `sussex.ac.uk`, and `bookshop.org` are all registrable domains.

According to this definition, `support.mozilla.org` and `developer.mozilla.org` are part of the same site, because `mozilla.org` is a registrable domain.

In some contexts, the scheme is also considered when differentiating sites. This would make `http://vpl.ca` and `https://vpl.ca` different sites. Including the scheme prevents an insecure (HTTP) site from being treated as the same site as a secure (HTTPS) site. A definition that considers the scheme is sometimes called a _schemeful same-site_. This stricter definition is applied in the rules for handling [`SameSite`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) cookies.

> [!NOTE]
> Browsers sometimes make security decisions (for example, deciding which resources a script can access) based on the {{Glossary("Origin")}} of a resource. This is a more restrictive concept than the site, encompassing the scheme, the whole domain, and the port. See also [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy).

## Examples

These are the same site because the registrable domain of `mozilla.org` is the same:

- `https://developer.mozilla.org/en-US/docs/`
- `https://support.mozilla.org/en-US/`

These are the same site because the port is not relevant:

- `https://example.com:8080`
- `https://example.com`

These are not the same site because the registrable domain of the two URLs differs:

- `https://developer.mozilla.org/en-US/docs/`
- `https://example.com`

These are the same site, or different sites if the scheme is considered:

- `http://example.com`
- `https://example.com`

## See also

- [What is a URL](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- Related glossary terms:
  - {{Glossary("Origin")}}
- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)

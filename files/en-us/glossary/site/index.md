---
title: Site
slug: Glossary/Site
tags:
  - Glossary
  - Security
  - WebMechanics
---
The _site_ is part of a domain name, that identifies a single entity, by considering only public suffix and part of the domain just before it. Typically a public suffix consists only of {{Glossary("TLD")}}, which makes `mozilla.org` along with all its subdomains the `same-site`, while `google.org` or `mozilla.com` are considered `cross-sites`. However a public suffix might consist of multiple levels (e.g. `co.uk`, `qld.edu.au`). That's why _site_ is determined by a query to the [Public Suffix List](https://publicsuffix.org/list/) maintained by Mozilla volunteers.

Depending on the document, a used scheme may also be part of a _site_. According to this definition, `https://mozilla.org` and `http://mozilla.org` are `cross-site` just because protocol differs. To avoid confusion it is a good practice to include information about how the scheme is treated, by stating either `schemeful site` or `scheme-less site`.

The concept of a _site_ is used in [SameSite cookies](/en-US/docs/Web/HTTP/Headers/Set-Cookie#directives), as well as a web application's [Cross-Origin Resource Policy](</en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)>).

## Examples

These are the same site because the registrable domain of _mozilla.org_ is the same:

- `https://developer.mozilla.org/en-US/docs/`
- `https://support.mozilla.org/en-US/`

These are the same site because port is not relevant:

- `https://example.com:8080`
- `https://example.com`

These are not same site because the registrable domain of the two URLs differs:

- `https://developer.mozilla.org/en-US/docs/`
- `https://example.com`

This may or may not be the same site, depending on how scheme is treated:

- `http://example.com`
- `https://example.com`

## See also

- [What is a URL](/en-US/docs/Learn/Common_questions/What_is_a_URL)
- {{Glossary("Origin")}}
- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)

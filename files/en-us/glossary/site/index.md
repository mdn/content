---
title: Site
slug: Glossary/Site
tags:
  - Glossary
  - Security
  - WebMechanics
---
The _site_ of a piece of web content is determined by the _registrable domain_ of the host within the origin. This is computed by consulting a _Public Suffix List_ to find the portion of the host which is counted as the _public suffix_ (e.g. `com`, `org` or `co.uk`).

The concept of a _site_ is used in [SameSite cookies](/en-US/docs/Web/HTTP/Headers/Set-Cookie#directives), as well as a web application's [Cross-Origin Resource Policy](</en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)>).

## Examples

These are the same site because the registrable domain of _mozilla.org_ is the same (different host and files path don't matter):

- `https://developer.mozilla.org/en-US/docs/`
- `https://support.mozilla.org/en-US/`

These are the same site because scheme and port are not relevant:

- `http://example.com:8080`
- `https://example.com`

These are not same site because the registrable domain of the two URLs differs:

- `https://developer.mozilla.org/en-US/docs/`
- `https://example.com`

## See also

- [What is a URL](/en-US/docs/Learn/Common_questions/What_is_a_URL)
- {{Glossary("Origin")}}
- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)

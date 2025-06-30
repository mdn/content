---
title: "urn: URLs"
short-title: "urn:"
slug: Web/URI/Reference/Schemes/urn
page-type: uri-scheme
spec-urls: https://datatracker.ietf.org/doc/html/rfc8141
sidebar: urlsidebar
---

A Uniform Resource Name (URN) is a URI that identifies a resource by name in a particular namespace.
URNs provide globally-unique names for resources as opposed to providing information about their location (URL).

## Syntax

```url
urn:<NID>:<NSS>
```

- `<NID>`
  - : A NID (Namespace Identifier) is a case insensitive identifier for the namespace (e.g., `ISBN` and `isbn` are equivalent).
    NIDs are maintained by [registries such as IANA](https://www.iana.org/assignments/urn-namespaces/urn-namespaces.xhtml), and their resolution depends on the specific namespace.
    For instance, the `ISBN` NID resolution is handled by [International ISBN Agency](https://www.isbn-international.org/) systems.
- `<NSS>`
  - : The NSS (Namespace Specific String) is a string unique within a URN namespace.
    The combination of the NID (unique across the entire "urn" scheme) and the NSS ensures that the resulting URN is globally unique.

## Examples

### ISBN URN

This ISBN corresponds to the book [Nineteen Eighty-Four by George Orwell](https://isbnsearch.org/isbn/9780141036144):

```url
urn:isbn:9780141036144
```

### IETF URN

This URN corresponds to the IETF specification {{rfc("7230", "Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing")}}:

```url
urn:ietf:rfc:7230
```

## Specifications

{{specifications}}

## See also

- [URIs](/en-US/docs/Web/URI)
- [What is a URL?](/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)

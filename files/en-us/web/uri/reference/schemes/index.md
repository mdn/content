---
title: URI schemes
short-title: Scheme
slug: Web/URI/Reference/Schemes
page-type: reference
spec-urls: https://www.rfc-editor.org/rfc/rfc3986.html#section-3.1
sidebar: urlsidebar
---

The **scheme** of a URI is the first part of the URI, before the `:` character.
It indicates which protocol the browser must use to fetch the resource.
The scheme may affect how the rest of the URI is structured and interpreted.

## Syntax

```url
protocol:
```

- `protocol`
  - : A sequence of characters that identifies the protocol to use.
    It should consist of only alphanumeric characters and the `+`, `-`, and `.` characters.
    Common schemes are:
    - [`blob`](/en-US/docs/Web/API/URL/createObjectURL_static)
      - : Binary Large Object; a pointer to a large in-memory object
    - [`data`](/en-US/docs/Web/URI/Reference/Schemes/data)
      - : Data directly embedded in the URL
    - `file`
      - : Host-specific file names
    - `ftp`
      - : {{Glossary("FTP","File Transfer Protocol")}}
    - `http` / `https`
      - : Hyper text transfer protocol (and secure connections) ({{glossary("HTTP")}}/{{glossary("HTTPS")}})
    - [`javascript`](/en-US/docs/Web/URI/Reference/Schemes/javascript)
      - : URL-embedded JavaScript code
    - `mailto`
      - : Electronic mail address
    - [`resource`](/en-US/docs/Web/URI/Reference/Schemes/resource) {{Non-standard_inline}}
      - : Firefox and Firefox browser extensions to load resources internally
    - `ssh`
      - : Secure shell
    - `tel`
      - : Telephone
    - `urn`
      - : Uniform Resource Names
    - `view-source`
      - : Source code of the resource
    - `ws` / `wss`
      - : [WebSocket connections](/en-US/docs/Web/API/WebSockets_API) (and secure connections)

## Specifications

{{Specifications}}

## See also

- [URIs](/en-US/docs/Web/URI)
- [Data URLs](/en-US/docs/Web/URI/Reference/Schemes/data)
- [Resource URLs](/en-US/docs/Web/URI/Reference/Schemes/resource)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)

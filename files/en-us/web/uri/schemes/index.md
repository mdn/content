---
title: URI schemes
slug: Web/URI/Schemes
page-type: guide
spec-urls: https://www.rfc-editor.org/rfc/rfc3986.html#section-3.1
---

{{QuickLinksWithSubpages("/en-US/docs/Web/URI")}}

The **scheme** of a URI is the first part of the URI, before the `:` character. It indicates which protocol the browser must use to fetch the resource. The scheme may affect how the rest of the URI is structured and interpreted.

## Syntax

```url
protocol:
```

- protocol
  - : A sequence of characters that identifies the protocol to use. It should consist of only alphanumeric characters and the `+`, `-`, and `.` characters. Common schemes are:
    - [`blob`](/en-US/docs/Web/API/URL/createObjectURL_static)
      - : Binary Large Object; a pointer to a large in-memory object
    - [`data`](/en-US/docs/Web/URI/Schemes/data)
      - : Data directly embedded in the URL
    - `file`
      - : Host-specific file names
    - `ftp`
      - : {{Glossary("FTP","File Transfer Protocol")}}
    - `http` / `https`
      - : Hyper text transfer protocol (Secure) ({{glossary("HTTP")}}/{{glossary("HTTPS")}})
    - [`javascript`](/en-US/docs/Web/URI/Schemes/javascript)
      - : URL-embedded JavaScript code
    - `mailto`
      - : Electronic mail address
    - [`resource`](/en-US/docs/Web/URI/Schemes/resource) {{Non-standard_inline}}
      - : Firefox and Firefox browser extensions to load resources internally
    - `ssh`
      - : Secure shell
    - `tel`
      - : telephone
    - `urn`
      - : Uniform Resource Names
    - `view-source`
      - : Source code of the resource
    - `ws` / `wss`
      - : [WebSocket connections (Secure)](/en-US/docs/Web/API/WebSockets_API)

## Specifications

{{Specifications}}

## See also

- [URIs](/en-US/docs/Web/URI)
- [Data URLs](/en-US/docs/Web/URI/Schemes/data)
- [Resource URLs](/en-US/docs/Web/URI/Schemes/resource)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)

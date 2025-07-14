---
title: URI schemes
short-title: Scheme
slug: Web/URI/Reference/Schemes
page-type: uri-component
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
      - : [Hypertext Transfer Protocol](/en-US/docs/Web/HTTP) (and secure connections)
    - [`javascript`](/en-US/docs/Web/URI/Reference/Schemes/javascript)
      - : URL-embedded JavaScript code
    - `mailto`
      - : Electronic mail address
    - [`resource`](/en-US/docs/Web/URI/Reference/Schemes/resource) {{Non-standard_inline}}
      - : For Firefox and Firefox browser extensions to load internal resources
    - `ssh`
      - : Secure shell
    - `tel`
      - : Telephone
    - [`urn`](/en-US/docs/Web/URI/Reference/Schemes/urn)
      - : Uniform Resource Names
    - `view-source`
      - : Source code of the resource
    - `ws` / `wss`
      - : [WebSocket connections](/en-US/docs/Web/API/WebSockets_API) (and secure connections)

## Description

Consider the following URL:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`http` is the _scheme_ of the URL, indicating which protocol the browser must use. Usually it is the HTTP protocol or its secured version, HTTPS. The Web requires `http` or `https`, but browsers can open URIs with other schemes, like those that start with `mailto:` (to open a mail client) or `ftp:` (file transfers).

When using URLs in {{Glossary("HTML")}} content, you generally only use a few of these URL schemes. When referring to subresources — that is, files that are being loaded as part of a larger document — you should only use the HTTP and HTTPS schemes. Increasingly, browsers are removing support for using FTP to load subresources, for security reasons.

FTP is still acceptable at the top level (such as typed directly into the browser's URL bar, or the target of a link), although some browsers may delegate loading FTP content to another application.

## Examples

### Different URI schemes

The following example shows different URI formats based on URI scheme.

```url
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
```

## Specifications

{{Specifications}}

## See also

- [URIs](/en-US/docs/Web/URI)
- [Data URLs](/en-US/docs/Web/URI/Reference/Schemes/data)
- [Resource URLs](/en-US/docs/Web/URI/Reference/Schemes/resource)
- [IANA list of URI schemes](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)

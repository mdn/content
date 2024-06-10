---
title: MIME type verification
slug: Web/Security/Practical_implementation_guides/MIME_types
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

The [`X-Content-Type-Options`](/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) header informs browsers not to load scripts and stylesheets unless the server indicates the correct MIME type.

## Problem

Without MIME type verification, browsers can incorrectly detect other file types as scripts and stylesheets, enabling them to be loaded via {{htmlelement("script")}} and {{htmlelement("link")}} elements as part of Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) attacks.

## Solution

All sites must set the `X-Content-Type-Options` header with a value of `nosniff`, and set appropriate MIME types for files that they serve (i.e. via the [`Content-Type`](/en-US/docs/Web/HTTP/Headers/Content-Type) header).

`nosniff` blocks a request if the request destination:

- is of type `style` and the MIME type is not `text/css`.
- is of type `script` and the MIME type is not a valid [JavaScript MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript).

## Examples

Prevent browsers from incorrectly detecting non-stylesheets as stylesheets, and non-scripts as scripts:

```http
X-Content-Type-Options: nosniff
```

## See also

- [MIME types (IANA media types): MIME sniffing](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing)
- [Properly configuring server MIME types](/en-US/docs/Learn/Server-side/Configuring_server_MIME_types)
  - : There are several ways incorrect MIME types can cause potential security problems with your site. This article explains some of those and shows how to configure your server to serve files with the correct MIME types.

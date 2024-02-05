---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
page-type: http-header
browser-compat: http.headers.X-Content-Type-Options
---

{{HTTPSidebar}}

The **`X-Content-Type-Options`** response HTTP header is a
marker used by the server to indicate that the [MIME types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) advertised in the
{{HTTPHeader("Content-Type")}} headers should be followed and not be changed. The header allows you to avoid [MIME type sniffing](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing) by saying that the MIME types are deliberately
configured.

This header was introduced by Microsoft in IE 8 as a way for webmasters to block
content sniffing that was happening and could transform non-executable MIME types into
executable MIME types. Since then, other browsers have introduced it, even if their MIME
sniffing algorithms were less aggressive.

Starting with Firefox 72, top-level
documents also avoid MIME sniffing (if {{HTTPHeader("Content-type")}} is provided). This can cause HTML web pages
to be downloaded instead of being rendered when they are served with a MIME type other
than `text/html`. Make sure to set both headers correctly.

Site security testers usually expect this header to be set.

> **Note:** `X-Content-Type-Options` only apply
> [request-blocking due to `nosniff`](https://fetch.spec.whatwg.org/#should-response-to-request-be-blocked-due-to-nosniff?)
> for [request destinations](https://fetch.spec.whatwg.org/#concept-request-destination) of "`script`"
> and "`style`". However, it also
> [enables Cross-Origin Read Blocking (CORB)](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md#determining-whether-a-response-is-corb_protected)
> protection for HTML, TXT, JSON and XML files (excluding SVG `image/svg+xml`).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Content-Type-Options: nosniff
```

## Directives

- `nosniff`
  - : Blocks a request if the request destination is of type
    `style` and the MIME type is not `text/css`,
    or of type `script` and the MIME type is not a [JavaScript MIME type](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Browser specific notes

- Firefox 72 enables `X-Content-Type-Options: nosniff` for top-level
  documents

## See also

- {{HTTPHeader("Content-Type")}}
- The [original definition](https://docs.microsoft.com/archive/blogs/ie/ie8-security-part-vi-beta-2-update) of X-Content-Type-Options by Microsoft.
- The [Mozilla Observatory](https://observatory.mozilla.org/) tool testing
  the configuration (including this header) of websites for safety and security
- [Mitigating MIME Confusion Attacks in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
- [Cross-Origin Read Blocking (CORB)](https://fetch.spec.whatwg.org/#corb)
- [Google Docs CORB explainer](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)

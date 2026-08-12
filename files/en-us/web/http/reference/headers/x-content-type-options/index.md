---
title: X-Content-Type-Options header
short-title: X-Content-Type-Options
slug: Web/HTTP/Reference/Headers/X-Content-Type-Options
page-type: http-header
browser-compat: http.headers.X-Content-Type-Options
sidebar: http
---

The HTTP **`X-Content-Type-Options`** {{Glossary("response header")}} indicates that the [MIME types](/en-US/docs/Web/HTTP/Guides/MIME_types) advertised in the {{HTTPHeader("Content-Type")}} headers should be respected and not changed.
The header allows you to avoid [MIME type sniffing](/en-US/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) by specifying that the MIME types are deliberately configured.

Site security testers usually expect this header to be set (and that the `Content-Type` header is correctly set for all resources).

The `nosniff` directive has two effects depending on the context:

- **Request blocking**: For requests with a [destination](/en-US/docs/Web/API/Request/destination) of `"script"` or `"style"`, the browser blocks the response if the MIME type doesn't match an expected type (a [JavaScript MIME type](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) for scripts, or `text/css` for stylesheets). See the [Fetch specification](https://fetch.spec.whatwg.org/#ref-for-determine-nosniff) for details.
- **MIME type sniffing disabled**: For other response types, including navigations to a new HTML document, the browser uses the supplied {{HTTPHeader("Content-Type")}} as-is instead of examining the content to infer the type.
  For example, if a server sends a response with `Content-Type: text/plain` and `X-Content-Type-Options: nosniff`, the browser will not interpret it as HTML, even if the content contains HTML markup.
  This prevents [XSS-attacks](/en-US/docs/Web/Security/Attacks/XSS) where user-uploaded content is executed as an HTML document, even if the browser has specified that it should be treated as plain text (or some other type).
  See the [MIME Sniffing specification](https://mimesniff.spec.whatwg.org/#mime-type-sniffing-algorithm) for details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden response header name","Forbidden response header")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-Content-Type-Options: nosniff
```

## Directives

- `nosniff`
  - : Blocks a request if the request destination is of type `style` and the MIME type is not `text/css`, or of type `script` and the MIME type is not a [JavaScript MIME type](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type).

    It also prevents MIME type sniffing for all other response types, causing the browser to use the declared {{HTTPHeader("Content-Type")}} without examining the response content.
    In particular it prevents a browser from treating a response as `text/html` when it is loaded in a browsing context and the `Content-Type` header is absent or indicates a non-HTML type.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Type")}}
- The [original definition](https://learn.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-vi-beta-2-update) of X-Content-Type-Options by Microsoft.
- Use [HTTP Observatory](/en-US/observatory) to test the security configuration of websites (including this header).
- [Mitigating MIME Confusion Attacks in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)

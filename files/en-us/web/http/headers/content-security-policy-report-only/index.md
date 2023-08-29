---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
page-type: http-header
browser-compat: http.headers.Content-Security-Policy-Report-Only
---

{{HTTPSidebar}}

The HTTP **`Content-Security-Policy-Report-Only`** response header allows web developers to experiment with policies by monitoring (but not enforcing) their effects. These violation reports consist of {{Glossary("JSON")}} documents sent via an HTTP `POST` request to the specified URI.

For more information, see also this article on [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP).

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
    <tr>
      <th colspan="2" scope="row">
        This header is not supported inside a {{HTMLElement("meta")}} element.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy-Report-Only: <policy-directive>; <policy-directive>
```

## Directives

The directives of the {{HTTPHeader("Content-Security-Policy")}} header can also be applied to `Content-Security-Policy-Report-Only`, except for the `sandbox` directive, which is ignored when used with `Content-Security-Policy-Report-Only`.

The CSP {{CSP("report-to")}} directive should be used with this header, otherwise this header will be an expensive no-op machine.

## Examples

This header reports violations that would have occurred. You can use this to iteratively work on your content security policy. You observe how your site behaves, watching for violation reports, then choose the desired policy enforced by the {{HTTPHeader("Content-Security-Policy")}} header.

```http
Content-Security-Policy-Report-Only: default-src https:; report-to /csp-violation-report-endpoint/
```

If you still want to receive reporting, but also want to enforce a policy, use the {{HTTPHeader("Content-Security-Policy")}} header with the {{CSP("report-to")}} directive.

```http
Content-Security-Policy: default-src https:; report-to /csp-violation-report-endpoint/
```

## Violation report syntax

The report JSON object is sent with an `application/csp-report` {{HTTPHeader("Content-Type")}} and contains the following data:

- `blocked-uri`
  - : The URI of the resource that was blocked from loading by the Content Security Policy. If the blocked URI is from a different origin than the document-uri, then the blocked URI is truncated to contain just the scheme, host, and port.
- `disposition`
  - : Either `"enforce"` or `"report"` depending on whether the {{HTTPHeader("Content-Security-Policy")}} header or the `Content-Security-Policy-Report-Only` header is used.
- `document-uri`
  - : The URI of the document in which the violation occurred.
- `effective-directive`
  - : The directive whose enforcement caused the violation.
- `original-policy`
  - : The original policy as specified by the `Content-Security-Policy-Report-Only` HTTP header.
- `referrer`
  - : The referrer of the document in which the violation occurred.
- `script-sample`
  - : The first 40 characters of the inline script, event handler, or style that caused the violation.
- `status-code`
  - : The HTTP status code of the resource on which the global object was instantiated.
- `violated-directive` {{deprecated_inline}}
  - : The directive whose enforcement caused the violation. The `violated-directive` is a historic name for the `effective-directive` field and contains the same value.

## Sample violation report

Let's consider a page located at `http://example.com/signup.html`. It uses the following policy, disallowing everything but stylesheets from `cdn.example.com`.

```http
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-to /_/csp-reports
```

The HTML of `signup.html` looks like this:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    Page content
  </body>
</html>
```

Can you spot the violation? Stylesheets are only allowed to be loaded from `cdn.example.com`, yet the website tries to load one from its own origin (`http://example.com`).
A browser capable of reporting CSP violations will send the following report as an HTTP `POST` request to `http://example.com/_/csp-reports`, when the document is visited:

```json
{
  "csp-report": {
    "blocked-uri": "http://example.com/css/style.css",
    "disposition": "report",
    "document-uri": "http://example.com/signup.html",
    "effective-directive": "style-src-elem",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-to /_/csp-reports",
    "referrer": "",
    "status-code": 200,
    "violated-directive": "style-src-elem"
  }
}
```

The report includes the full path to the violating resource in `blocked-uri` which may not always the case. For example, when the `signup.html` would attempt to load CSS from `http://anothercdn.example.com/stylesheet.css`, the browser would _not_ include the full path but only the origin (`http://anothercdn.example.com`). This is done to prevent leaking sensitive information about cross-origin resources.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("report-to")}} directive
- CSP {{CSP("report-uri")}} directive {{deprecated_inline}}

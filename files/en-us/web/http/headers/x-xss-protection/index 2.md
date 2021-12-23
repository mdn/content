---
title: X-XSS-Protection
slug: Web/HTTP/Headers/X-XSS-Protection
tags:
  - HTTP
  - Reference
  - Security
  - XSS
  - header
browser-compat: http.headers.X-XSS-Protection
---
{{HTTPSidebar}}

The HTTP **`X-XSS-Protection`** response header is a feature of Internet Explorer, Chrome and Safari that stops pages from loading when they detect reflected cross-site scripting ({{Glossary("Cross-site_scripting", "XSS")}}) attacks. Although these protections are largely unnecessary in modern browsers when sites implement a strong {{HTTPHeader("Content-Security-Policy")}} that disables the use of inline JavaScript (`'unsafe-inline'`), they can still provide protections for users of older web browsers that don't yet support {{Glossary("CSP")}}.

> **Note:**
>
> - Chrome has [removed their XSS Auditor](https://www.chromestatus.com/feature/5021976655560704)
> - Firefox has not, and [will not implement `X-XSS-Protection`](https://bugzilla.mozilla.org/show_bug.cgi?id=528661)
> - Edge has [retired their XSS filter](https://blogs.windows.com/windowsexperience/2018/07/25/announcing-windows-10-insider-preview-build-17723-and-build-18204/)
>
> This means that if you do not need to support legacy browsers, it is recommended that you use [`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) without allowing `unsafe-inline` scripts instead.

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

```
X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=<reporting-uri>
```

- 0
  - : Disables XSS filtering.
- 1
  - : Enables XSS filtering (usually default in browsers). If a cross-site scripting attack is detected, the browser will sanitize the page (remove the unsafe parts).
- 1; mode=block
  - : Enables XSS filtering. Rather than sanitizing the page, the browser will prevent rendering of the page if an attack is detected.
- 1; report=\<reporting-URI> (Chromium only)
  - : Enables XSS filtering. If a cross-site scripting attack is detected, the browser will sanitize the page and report the violation. This uses the functionality of the CSP {{CSP("report-uri")}} directive to send a report.

## Example

Block pages from loading when they detect reflected XSS attacks:

```
X-XSS-Protection: 1; mode=block
```

PHP

```php
header("X-XSS-Protection: 1; mode=block");
```

Apache (.htaccess)

```html
<IfModule mod_headers.c>
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

Nginx

```
add_header "X-XSS-Protection" "1; mode=block";
```

## Specifications

Not part of any specifications or drafts.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- [Controlling the XSS Filter – Microsoft](https://blogs.msdn.microsoft.com/ieinternals/2011/01/31/controlling-the-xss-filter/)
- [Understanding XSS Auditor – Virtue Security](https://www.virtuesecurity.com/blog/understanding-xss-auditor/)
- [The misunderstood X-XSS-Protection – blog.innerht.ml](https://blog.innerht.ml/the-misunderstood-x-xss-protection/)

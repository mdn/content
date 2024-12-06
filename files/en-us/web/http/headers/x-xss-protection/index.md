---
title: X-XSS-Protection
slug: Web/HTTP/Headers/X-XSS-Protection
page-type: http-header
status:
  - deprecated
  - non-standard
browser-compat: http.headers.X-XSS-Protection
---

{{HTTPSidebar}}{{Non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Even though this feature can protect users of older web browsers that don't support {{Glossary("CSP")}}, in some cases, **`X-XSS-Protection` can create XSS vulnerabilities** in otherwise safe websites.
> See the [Security considerations](#security_considerations) section below for more information.

The HTTP **`X-XSS-Protection`** {{Glossary("response header")}} was a feature of Internet Explorer, Chrome and Safari that stopped pages from loading when they detected reflected cross-site scripting ({{Glossary("Cross-site_scripting", "XSS")}}) attacks.
These protections are largely unnecessary in modern browsers when sites implement a strong {{HTTPHeader("Content-Security-Policy")}} that disables the use of inline JavaScript (`'unsafe-inline'`).

It is recommended that you use [`Content-Security-Policy`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) instead of XSS filtering.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=<reporting-uri>
```

## Directives

- `0`
  - : Disables XSS filtering.
- `1`
  - : Enables XSS filtering (usually default in browsers). If a cross-site scripting attack is detected, the browser will sanitize the page (remove the unsafe parts).
- `1; mode=block`
  - : Enables XSS filtering. Rather than sanitizing the page, the browser will prevent rendering of the page if an attack is detected.
- `1; report=<reporting-URI>` (Chromium only)
  - : Enables XSS filtering. If a cross-site scripting attack is detected, the browser will sanitize the page and report the violation. This uses the functionality of the CSP {{CSP("report-uri")}} directive to send a report.

## Security considerations

### Vulnerabilities caused by XSS filtering

Consider the following excerpt of HTML code for a webpage:

```html
<script>
  var productionMode = true;
</script>
<!-- [...] -->
<script>
  if (!window.productionMode) {
    // Some vulnerable debug code
  }
</script>
```

This code is completely safe if the browser doesn't perform XSS filtering. However, if it does and the search query is `?something=%3Cscript%3Evar%20productionMode%20%3D%20true%3B%3C%2Fscript%3E`, the browser might execute the scripts in the page ignoring `<script>var productionMode = true;</script>` (thinking the server included it in the response because it was in the URI), causing `window.productionMode` to be evaluated to `undefined` and executing the unsafe debug code.

Setting the `X-XSS-Protection` header to either `0` or `1; mode=block` prevents vulnerabilities like the one described above. The former would make the browser run all scripts and the latter would prevent the page from being processed at all (though this approach might be vulnerable to [side-channel attacks](https://portswigger.net/research/abusing-chromes-xss-auditor-to-steal-tokens) if the website is embeddable in an `<iframe>`).

## Example

Block pages from loading when they detect reflected XSS attacks:

```http
X-XSS-Protection: 1; mode=block
```

PHP

```php
header("X-XSS-Protection: 1; mode=block");
```

Apache (.htaccess)

```apacheconf
<IfModule mod_headers.c>
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

Nginx

```nginx
add_header "X-XSS-Protection" "1; mode=block";
```

## Specifications

Not part of any specifications or drafts.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- [Controlling the XSS Filter – Microsoft](https://learn.microsoft.com/en-us/archive/blogs/ieinternals/controlling-the-xss-filter)
- [Understanding XSS Auditor – Virtue Security](https://www.virtuesecurity.com/understanding-xss-auditor/)
- [The misunderstood X-XSS-Protection – blog.innerht.ml](https://web.archive.org/web/20230527023943/https://blog.innerht.ml/the-misunderstood-x-xss-protection/)

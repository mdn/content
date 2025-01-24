---
title: "CSP: base-uri"
slug: Web/HTTP/Headers/Content-Security-Policy/base-uri
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.base-uri
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} **`base-uri`** directive restricts the URLs which can be used in a document's {{HTMLElement("base")}} element. If this value is absent, then any URI is allowed. If this directive is absent, the user agent will use the value in the {{HTMLElement("base")}} element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Document directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>No. Not setting this allows any URL.</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: base-uri 'none';
Content-Security-Policy: base-uri <source-expression-list>;
```

This directive may have one of the following values:

- `'none'`
  - : No base URI may be set using a `<base>` element. The single quotes are mandatory.
- `<source-expression-list>`

  - : A space-separated list of _source expression_ values. A `<base>` element may set a base URI if its value matches any of the given source expressions. For this directive, the following source expression values are applicable:

    - [`<host-source>`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#self)

## Examples

### Meta tag configuration

```html
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
```

### Apache configuration

```apacheconf
<IfModule mod_headers.c>
Header set Content-Security-Policy "base-uri 'self'";
</IfModule>
```

### Nginx configuration

```nginx
add_header Content-Security-Policy "base-uri 'self';"
```

### Violation case

Since your domain isn't `example.com`, a {{HTMLElement("base")}} element with its `href` set to `https://example.com` will result in a CSP violation.

```html example-bad
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
<base href="https://example.com/" />

<!--
// Error: Refused to set the document's base URI to 'https://example.com/'
// because it violates the following Content Security Policy
// directive: "base-uri 'self'"
-->
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("base")}}
- {{domxref("Node.baseURI")}}

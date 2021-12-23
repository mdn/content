---
title: 'CSP: base-uri'
slug: Web/HTTP/Headers/Content-Security-Policy/base-uri
tags:
  - CSP
  - Directive
  - Document directive
  - HTTP
  - Security
browser-compat: http.headers.csp.Content-Security-Policy.base-uri
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

One or more*sources* can be allowed for the base-uri policy:

```
Content-Security-Policy: base-uri <source>;
Content-Security-Policy: base-uri <source> <source>;
```

### Sources

While this directive uses the same arguments as other CSP directives, some of them don’t make sense for \`\<base>\`, such as the keywords `'unsafe-inline'` and `'strict-dynamic'`

{{page("Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}

## Examples

### Meta tag configuration

```html
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'">
```

### Apache configuration

```html
<IfModule mod_headers.c>
Header set Content-Security-Policy "base-uri 'self'";
</IfModule>
```

### Nginx configuration

```
add_header Content-Security-Policy "base-uri 'self';"
```

### Violation case

Since your domain isn't `example.com`, a {{HTMLElement("base")}} element with its `href` set to `https://example.com` will result in a CSP violation.

```html example-bad
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'">
<base href="https://example.com/">

// Error: Refused to set the document's base URI to 'https://example.com/'
// because it violates the following Content Security Policy
// directive: "base-uri 'self'"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPheader("Content-Security-Policy")}}
- {{HTMLElement("base")}}
- {{domxref("Node.baseURI")}}

---
title: 'CSP: prefetch-src'
slug: Web/HTTP/Headers/Content-Security-Policy/prefetch-src
tags:
  - CSP
  - Content Security Policy
  - Directive
  - HTTP
  - Reference
  - prefetch-src
browser-compat: http.headers.csp.Content-Security-Policy.prefetch-src
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`prefetch-src`** directive specifies valid resources that may
be prefetched or prerendered.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>
        Yes. If this directive is absent, the user agent will look for the
        <code>default-src</code> directive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

One or more sources can be allowed for the `prefetch-src` policy:

```
Content-Security-Policy: prefetch-src <source>;
Content-Security-Policy: prefetch-src <source> <source>;
```

### Sources

{{page("/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src",
  "common_sources")}}

## Example

### Prefetch resources do not match header

Given a page with the following Content Security Policy:

```
Content-Security-Policy: prefetch-src https://example.com/
```

Fetches for the following code will return network errors, as the URLs provided do not
match `prefetch-src`'s source list:

```html
    <link rel="prefetch" src="https://example.org/"></link>
    <link rel="prerender" src="https://example.org/"></link>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}

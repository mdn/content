---
title: 'CSP: manifest-src'
slug: Web/HTTP/Headers/Content-Security-Policy/manifest-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Manifest
  - Reference
  - Security
  - manifest-src
  - source
browser-compat: http.headers.csp.Content-Security-Policy.manifest-src
---
{{HTTPSidebar}}

The HTTP
{{HTTPHeader("Content-Security-Policy")}}`: manifest-src`
directive specifies which [manifest](/en-US/docs/Web/Manifest) can be applied
to the resource.

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

One or more sources can be allowed for the `manifest-src` policy:

```
Content-Security-Policy: manifest-src <source>;
Content-Security-Policy: manifest-src <source> <source>;
```

### Sources

{{page("Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: manifest-src https://example.com/
```

The following {{HTMLElement("link")}} is blocked and won't load:

```html
<link rel="manifest" href="https://not-example.com/manifest">
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- [Web app manifest](/en-US/docs/Web/Manifest)
- {{HTMLElement("link")}}

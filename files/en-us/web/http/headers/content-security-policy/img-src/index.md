---
title: 'CSP: img-src'
slug: Web/HTTP/Headers/Content-Security-Policy/img-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Image
  - Reference
  - Security
  - img-src
  - source
browser-compat: http.headers.csp.Content-Security-Policy.img-src
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}}
**`img-src`** directive specifies valid sources of images and
favicons.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>1</td>
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

One or more sources can be allowed for the `img-src` policy:

```
Content-Security-Policy: img-src <source>;
Content-Security-Policy: img-src <source> <source>;
```

### Sources

{{page("Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: img-src https://example.com/
```

The following {{HTMLElement("img")}} is blocked and won't load:

```html
<img src="https://not-example.com/foo.jpg" alt="example picture">
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("img")}}

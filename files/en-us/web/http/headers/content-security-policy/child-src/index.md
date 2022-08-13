---
title: 'CSP: child-src'
slug: Web/HTTP/Headers/Content-Security-Policy/child-src
tags:
  - CSP
  - Child
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - child-src
  - source
browser-compat: http.headers.Content-Security-Policy.child-src
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`child-src`** directive defines the valid sources for [web workers](/en-US/docs/Web/API/Web_Workers_API) and nested browsing
contexts loaded using elements such as {{HTMLElement("frame")}} and
{{HTMLElement("iframe")}}. For workers, non-compliant requests are treated as fatal
network errors by the user agent.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>2</td>
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

One or more sources can be allowed for the `child-src` policy:

```http
Content-Security-Policy: child-src <source>;
Content-Security-Policy: child-src <source> <source>;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

Note that this same set of values can be used in all {{Glossary("fetch directive", "fetch directives")}} (and a [number of other directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## Examples

### Violation cases

Given this CSP header:

```http
Content-Security-Policy: child-src https://example.com/
```

This {{HTMLElement("iframe")}} and worker are blocked and won't load:

```html
<iframe src="https://not-example.com"></iframe>

<script>
  const blockedWorker = new Worker("data:application/javascript,…");
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("frame")}} and {{HTMLElement("iframe")}}
- {{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}}

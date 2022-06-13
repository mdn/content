---
title: 'CSP: worker-src'
slug: Web/HTTP/Headers/Content-Security-Policy/worker-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
browser-compat: http.headers.csp.Content-Security-Policy.worker-src
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`worker-src`** directive specifies valid sources for
{{domxref("Worker")}}, {{domxref("SharedWorker")}}, or {{domxref("ServiceWorker")}}
scripts.

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
      <th scope="row">Fallback</th>
      <td>
        <p>
          If this directive is absent, the user agent will first look for the
          {{CSP("child-src")}} directive, then the
          {{CSP("script-src")}} directive, then finally for the
          {{CSP("default-src")}} directive, when governing worker
          execution.
        </p>
        <p></p>
      </td>
    </tr>
  </tbody>
</table>

## Syntax

One or more sources can be allowed for the `worker-src` policy:

```
Content-Security-Policy: worker-src <source>;
Content-Security-Policy: worker-src <source> <source>;
```

### Sources

{{page("Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: worker-src https://example.com/
```

{{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}} are
blocked and won't load:

```html
<script>
  var blockedWorker = new Worker("data:application/javascript,...");
  blockedWorker = new SharedWorker("https://not-example.com/");
  navigator.serviceWorker.register('https://not-example.com/sw.js');
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- [CSP for Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#content_security_policy)
- {{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}}

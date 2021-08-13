---
title: 'CSP: connect-src'
slug: Web/HTTP/Headers/Content-Security-Policy/connect-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - connect-src
  - source
browser-compat: http.headers.csp.Content-Security-Policy.connect-src
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`connect-src`** directive restricts the URLs which can be
loaded using script interfaces. The APIs that are restricted are:

- {{HTMLElement("a")}} {{htmlattrxref("ping", "a")}},
- {{domxref("WindowOrWorkerGlobalScope.fetch")}},
- {{domxref("XMLHttpRequest")}},
- {{domxref("WebSocket")}},
- {{domxref("EventSource")}}, and
- {{domxref("Navigator.sendBeacon()")}}.

> **Note:** `connect-src 'self'` does not resolve to websocket
> schemas in all browsers, more info in this [issue](https://github.com/w3c/webappsec-csp/issues/7).

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

One or more sources can be allowed for the connect-src policy:

```
Content-Security-Policy: connect-src <source>;
Content-Security-Policy: connect-src <source> <source>;
```

### Sources

{{page("/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src",
  "common_sources")}}

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: connect-src https://example.com/
```

The following connections are blocked and won't load:

```html
<a ping="https://not-example.com">

<script>
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://not-example.com/');
  xhr.send();

  var ws = new WebSocket("https://not-example.com/");

  var es = new EventSource("https://not-example.com/");

  navigator.sendBeacon("https://not-example.com/", { ... });
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Compatibility notes

- Prior to Firefox 23, `xhr-src` was used in place of the
  `connect-src` directive and only restricted the use of
  {{domxref("XMLHttpRequest")}}.

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("a")}} {{htmlattrxref("ping", "a")}}
- {{domxref("WindowOrWorkerGlobalScope.fetch")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("WebSocket")}}
- {{domxref("EventSource")}}

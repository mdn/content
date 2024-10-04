---
title: "CSP: connect-src"
slug: Web/HTTP/Headers/Content-Security-Policy/connect-src
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.connect-src
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`connect-src`** directive restricts the URLs which can be
loaded using script interfaces. The following APIs are controlled by this directive:

- The [`ping`](/en-US/docs/Web/HTML/Element/a#ping) attribute in {{htmlelement("a")}} elements
- {{domxref("Window/fetch", "fetch()")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("WebSocket")}}
- {{domxref("EventSource")}}
- {{domxref("Navigator.sendBeacon()")}}

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

```http
Content-Security-Policy: connect-src 'none';
Content-Security-Policy: connect-src <source-expression-list>;
```

This directive may have one of the following values:

- `'none'`
  - : No resources of this type may be loaded. The single quotes are mandatory.
- `<source-expression-list>`

  - : A space-separated list of _source expression_ values. Resources of this type may be loaded if they match any of the given source expressions.

    Source expressions are specified as keyword values or URL patterns: the syntax for each source expression is given in [CSP Source Values](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources).

## Examples

### Violation cases

Given this CSP header:

```http
Content-Security-Policy: connect-src https://example.com/
```

The following connections are blocked and won't load:

```html
<a ping="https://not-example.com">
  <script>
    const response = fetch("https://not-example.com/");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://not-example.com/");
    xhr.send();

    const ws = new WebSocket("wss://not-example.com/");

    const es = new EventSource("https://not-example.com/");

    navigator.sendBeacon("https://not-example.com/", {
      /* … */
    });
  </script></a
>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("a")}} [`ping`](/en-US/docs/Web/HTML/Element/a#ping)
- {{domxref("Window/fetch", "fetch()")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("WebSocket")}}
- {{domxref("EventSource")}}

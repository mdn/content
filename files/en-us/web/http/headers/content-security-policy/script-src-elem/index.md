---
title: "CSP: script-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.script-src-elem
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`script-src-elem`** directive specifies valid sources for JavaScript {{HTMLElement("script")}} elements.

This directive only specifies valid sources in `<script>` elements (both script requests and blocks).
It does not apply to other JavaScript sources that can trigger script execution, such as inline script event handlers (`onclick`), script execution methods [gated on the "unsafe-eval" check](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions), and [XSLT stylesheets](/en-US/docs/Web/XML/XSLT).
(Valid sources can be specified for all JavaScript script sources using {{CSP("script-src")}}, or just for inline script handlers using {{CSP("script-src-attr")}}.)

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
        Yes.
        If this directive is absent, the user agent will look for the {{CSP("script-src")}} directive, and if both of them are absent, fall back to <code>default-src</code> directive.
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: script-src-elem 'none';
Content-Security-Policy: script-src-elem <source-expression-list>;
```

This directive may have one of the following values:

- `'none'`
  - : No resources of this type may be loaded. The single quotes are mandatory.
- `<source-expression-list>`

  - : A space-separated list of _source expression_ values. Resources of this type may be loaded if they match any of the given source expressions. For this directive, any of the source expression values listed in [Fetch directive syntax](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directive_syntax) are applicable, with the exception of [`'unsafe-hashes'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-hashes).

`script-src-elem` can be used in conjunction with {{CSP("script-src")}}:

```http
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

## Examples

### Violation case

Given this CSP header:

```http
Content-Security-Policy: script-src-elem https://example.com/
```

…the following script is blocked and won't be loaded or executed:

```html
<script src="https://not-example.com/js/library.js"></script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("script")}}
- {{CSP("script-src")}}
- {{CSP("script-src-attr")}}

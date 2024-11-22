---
title: "CSP: style-src-elem"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-elem
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.style-src-elem
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-elem`** directive specifies valid sources for stylesheet {{HTMLElement("style")}} elements and {{HTMLElement("link")}} elements with `rel="stylesheet"`.

The directive does not set valid sources for inline style attributes; these are set using {{CSP("style-src-attr")}} (and valid sources for all styles may be set with {{CSP("style-src")}}).

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
        <p>
          Yes.
          If this directive is absent, the user agent will look for the {{CSP("style-src")}} directive, and if both of them are absent, fall back to <code>default-src</code> directive.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: style-src-elem 'none';
Content-Security-Policy: style-src-elem <source-expression-list>;
```

This directive may have one of the following values:

- `'none'`
  - : No resources of this type may be loaded. The single quotes are mandatory.
- `<source-expression-list>`

  - : A space-separated list of _source expression_ values. Resources of this type may be loaded if they match any of the given source expressions. For this directive, the same source expression values are applicable as for [`style-src`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src), with the exception of [`'unsafe-hashes'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-hashes).

`style-src-elem` can be used in conjunction with {{CSP("style-src")}}:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-elem <source>;
```

## Examples

### Violation cases

Given this CSP header:

```http
Content-Security-Policy: style-src-elem https://example.com/
```

…the following stylesheets are blocked and won't load:

```html
<link href="https://not-example.com/styles/main.css" rel="stylesheet" />

<style>
  #inline-style {
    background: red;
  }
</style>

<style>
  @import url("https://not-example.com/styles/print.css") print;
</style>
```

…as well as styles loaded using the {{HTTPHeader("Link")}} header:

```http
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src")}}
- {{CSP("style-src-attr")}}
- {{HTTPHeader("Link")}} header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}

---
title: "CSP: style-src"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.style-src
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src`** directive specifies valid sources for stylesheets.

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
Content-Security-Policy: style-src 'none';
Content-Security-Policy: style-src <source-expression-list>;
```

This directive may have one of the following values:

- `'none'`
  - : No resources of this type may be loaded. The single quotes are mandatory.
- `<source-expression-list>`

  - : A space-separated list of _source expression_ values. Resources of this type may be loaded if they match any of the given source expressions. For this directive, the following source expression values are applicable:

    - [`<host-source>`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#self)
    - [`'unsafe-inline'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-inline)
    - [`'unsafe-hashes'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-hashes)
    - [`'nonce-<nonce_value>'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#nonce-nonce_value)
    - [`'<hash_algorithm>-<hash_value>'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#hash_algorithm-hash_value)
    - [`'report-sample'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample)

## Examples

### Violation cases

Given this CSP header:

```http
Content-Security-Policy: style-src https://example.com/
```

the following stylesheets are blocked and won't load:

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

as well as styles loaded using the {{HTTPHeader("Link")}} header:

```http
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

Inline style attributes are also blocked:

```html
<div style="display:none">Foo</div>
```

As well as styles that are applied in JavaScript by setting the `style` attribute directly, or by setting {{domxref("CSSStyleDeclaration.cssText", "cssText")}}:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

However, styles properties that are set directly on the element's {{domxref("HTMLElement/style", "style")}} property will not be blocked, allowing users to safely manipulate styles via JavaScript:

```js
document.querySelector("div").style.display = "none";
```

These types of manipulations can be prevented by disallowing JavaScript via the {{CSP("script-src")}} CSP directive.

### Unsafe inline styles

> [!NOTE]
> Disallowing inline styles and inline scripts is one of the biggest security wins CSP provides. However, if you absolutely have to use it, there are a few mechanisms that will allow them.

To allow inline styles, `'unsafe-inline'`, a nonce-source or a hash-source that matches the inline block can be specified.
The following Content Security Policy will allow inline styles like the {{HTMLElement("style")}} element, and the `style` attribute on any element:

```http
Content-Security-Policy: style-src 'unsafe-inline';
```

The following {{HTMLElement("style")}} element and `style` attribute will be allowed by the policy:

```html
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Foo</div>
```

You can use a nonce-source to only allow specific inline style blocks.
You need to generate a random nonce value (using a cryptographically secure random token generator) and include it in the policy.
It is important to note, this nonce value needs to be dynamically generated as it has to be unique for each HTTP request:

```http
Content-Security-Policy: style-src 'nonce-2726c7f26c'
```

You will have to set the same nonce on the {{HTMLElement("style")}} element:

```html
<style nonce="2726c7f26c">
  #inline-style {
    background: red;
  }
</style>
```

Alternatively, you can create hashes from your inline styles. CSP supports sha256, sha384 and sha512. The **binary** form of the hash has to be encoded with base64. You can obtain the hash of a string on the command line via the `openssl` program:

```bash
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

You can use a hash-source to only allow specific inline style blocks:

```http
Content-Security-Policy: style-src 'sha256-ozBpjL6dxO8fsS4u6fwG1dFDACYvpNxYeBA6tzR+FY8='
```

When generating the hash, don't include the {{HTMLElement("style")}} tags and note that capitalization and whitespace matter, including leading or trailing whitespace.

```html
<style>
  #inline-style {
    background: red;
  }
</style>
```

### Unsafe style expressions

The `'unsafe-eval'` source expression controls several style methods that create style declarations from strings. If `'unsafe-eval'` isn't specified with the `style-src` directive, the following methods are blocked and won't have any effect:

- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{HTTPHeader("Link")}} header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}

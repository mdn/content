---
title: "CSP: style-src-attr"
slug: Web/HTTP/Headers/Content-Security-Policy/style-src-attr
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.style-src-attr
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`style-src-attr`** directive specifies valid sources for inline styles applied to individual DOM elements.

The directive does not set valid sources for {{HTMLElement("style")}} elements and {{HTMLElement("link")}} elements with `rel="stylesheet"`.
These are set using {{CSP("style-src-elem")}} (and valid sources for all styles may be set with {{CSP("style-src")}}).

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
          If this directive is absent, the user agent will look for the {{CSP("style-src")}} directive, and if both of them are absent, fallback to <code>default-src</code> directive.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Syntax

One or more sources can be allowed for the `style-src-attr` policy:

```http
Content-Security-Policy: style-src-attr <source>;
Content-Security-Policy: style-src-attr <source> <source>;
```

`style-src-attr` can be used in conjunction with {{CSP("style-src")}}:

```http
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-attr <source>;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

Note that this same set of values can be used in all {{Glossary("fetch directive", "fetch directives")}} (and a [number of other directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

## Examples

### Violation cases

Given this CSP header:

```http
Content-Security-Policy: style-src-attr 'none'
```

…the inline style applied to the element below not be applied:

```html
<div style="display:none">Foo</div>
```

The policy would also block any styles applied in JavaScript by setting the `style` attribute directly, or by setting {{domxref("CSSStyleDeclaration.cssText", "cssText")}}:

```js
document.querySelector("div").setAttribute("style", "display:none;");
document.querySelector("div").style.cssText = "display:none;";
```

Style properties that are set directly on the element's {{domxref("HTMLElement/style", "style")}} property will not be blocked, allowing users to safely manipulate styles via JavaScript:

```js
document.querySelector("div").style.display = "none";
```

Note that using JavaScript might independently be blocked using the {{CSP("script-src")}} CSP directive.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{HTTPHeader("Link")}} header
- {{HTMLElement("style")}}, {{HTMLElement("link")}}
- {{cssxref("@import")}}
- {{domxref("CSSStyleSheet.insertRule()")}}
- {{domxref("CSSGroupingRule.insertRule()")}}
- {{domxref("CSSStyleDeclaration.cssText")}}

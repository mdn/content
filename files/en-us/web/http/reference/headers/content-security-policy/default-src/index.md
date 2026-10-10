---
title: "Content-Security-Policy: default-src directive"
short-title: default-src
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/default-src
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.default-src
sidebar: http
---

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`default-src`** directive serves as a fallback for the other CSP {{Glossary("fetch directive", "fetch directives")}}. For each of the following directives that are absent, the user agent looks for the `default-src` directive and uses this value for it:

- {{CSP("child-src")}}
- {{CSP("connect-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("prefetch-src")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{CSP("worker-src")}}

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
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: default-src 'none';
Content-Security-Policy: default-src <source-expression-list>;
```

This directive may have one of the following values:

- `'none'`
  - : No resources may be loaded. The single quotes are mandatory.
- `<source-expression-list>`
  - : A space-separated list of _source expression_ values. Resources may be loaded if they match any of the given source expressions. For this directive, any of the source expression values listed in [Fetch directive syntax](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directive_syntax) are applicable.

## Examples

### No inheritance with default-src

If there are other directives specified, `default-src` does not influence them. The following header:

```http
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

is the same as:

```http
Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://example.com;
                         style-src 'self';
                         worker-src 'self'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- CSP directives (<https://w3c.github.io/webappsec-csp/#csp-directives>):
  - {{Glossary("Fetch directive")}}
  - {{Glossary("Document directive")}}
  - {{Glossary("Navigation directive")}}
  - {{Glossary("Reporting directive")}}
  - [`upgrade-insecure-requests`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`block-all-mixed-content`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/block-all-mixed-content)

---
title: "CSP: media-src"
slug: Web/HTTP/Headers/Content-Security-Policy/media-src
page-type: http-csp-directive
browser-compat: http.headers.Content-Security-Policy.media-src
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`media-src`** directive specifies valid sources for loading
media using the {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements.

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
Content-Security-Policy: media-src 'none';
Content-Security-Policy: media-src <source-expression-list>;
```

This directive may have one of the following values:

- `'none'`
  - : No resources of this type may be loaded. The single quotes are mandatory.
- `<source-expression-list>`

  - : A space-separated list of _source expression_ values. Resources of this type may be loaded if they match any of the given source expressions. For this directive, the following source expression values are applicable:

    - [`<host-source>`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#host-source)
    - [`<scheme-source>`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#scheme-source)
    - [`'self'`](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#self)

## Examples

### Violation cases

Given this CSP header:

```http
Content-Security-Policy: media-src https://example.com/
```

The following {{HTMLElement("audio")}}, {{HTMLElement("video")}} and
{{HTMLElement("track")}} elements are blocked and won't load:

```html
<audio src="https://not-example.com/audio"></audio>

<video src="https://not-example.com/video">
  <track kind="subtitles" src="https://not-example.com/subtitles" />
</video>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("audio")}}, {{HTMLElement("video")}} and {{HTMLElement("track")}}

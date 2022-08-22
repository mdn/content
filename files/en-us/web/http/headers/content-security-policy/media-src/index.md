---
title: 'CSP: media-src'
slug: Web/HTTP/Headers/Content-Security-Policy/media-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Media
  - Reference
  - Security
  - media-src
  - source
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

One or more sources can be allowed for the `media-src` policy:

```http
Content-Security-Policy: media-src <source>;
Content-Security-Policy: media-src <source> <source>;
```

### Sources

`<source>` can be any one of the values listed in [CSP Source Values](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources).

Note that this same set of values can be used in all {{Glossary("fetch directive", "fetch directives")}} (and a [number of other directives](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)).

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
  <track kind="subtitles" src="https://not-example.com/subtitles">
</video>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTMLElement("audio")}}, {{HTMLElement("video")}} and {{HTMLElement("track")}}

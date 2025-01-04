---
title: Supports-Loading-Mode
slug: Web/HTTP/Headers/Supports-Loading-Mode
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Supports-Loading-Mode
---

{{HTTPSidebar}}{{securecontext_header}}{{SeeCompatTable}}

The HTTP **`Supports-Loading-Mode`** {{Glossary("response header")}} allows a response to opt-in to being loaded in a novel, higher-risk context that it would otherwise fail to be loaded in.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Supports-Loading-Mode: <client-hint-headers>
```

## Directives

The `Supports-Loading-Mode` header value is a list of one or more tokens, which can include the following values:

- `credentialed-prerender` {{experimental_inline}}
  - : Indicates that a destination origin opts in to loading documents via cross-origin, same-site [prerendering](/en-US/docs/Web/API/Speculation_Rules_API#using_prerendering).
- `fenced-frame`
  - : The response can loaded inside a [fenced frame](/en-US/docs/Web/API/Fenced_frame_API). Without this explicit opt-in, all navigations inside of a fenced frame will fail.

## Examples

```http
Supports-Loading-Mode: fenced-frame
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced Frame API](/en-US/docs/Web/API/Fenced_frame_API)
- [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API)
- [Speculative loading](/en-US/docs/Web/Performance/Speculative_loading)
- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) on developer.chrome.com

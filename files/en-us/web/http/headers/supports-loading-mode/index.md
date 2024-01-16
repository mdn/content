---
title: Supports-Loading-Mode
slug: Web/HTTP/Headers/Supports-Loading-Mode
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Supports-Loading-Mode
---

{{HTTPSidebar}}{{seecompattable}}

The **`Supports-Loading-Mode`** response header is set by a navigation target to opt-in to using various higher-risk loading modes.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Supports-Loading-Mode: credentialed-prerender
```

## Directives

The `Supports-Loading-Mode` header is a list of one or more tokens, which can include the following values:

- `credentialed-prerender` {{experimental_inline}}
  - : Indicates that a destination origin opts in to loading documents via cross-origin, same-site [prerendering](/en-US/docs/Web/API/Speculation_Rules_API#using_prerendering).

## Browser compatibility

{{Compat}}

## See also

- [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API)
- [Speculative loading](/en-US/docs/Web/Performance/Speculative_loading)
- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/blog/prerender-pages/) on developer.chrome.com (2023)

---
title: Supports-Loading-Mode
slug: Web/HTTP/Headers/Supports-Loading-Mode
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Supports-Loading-Mode
---

{{HTTPSidebar}}{{securecontext_header}}

The **`Supports-Loading-Mode`** header allows a response to opt-in to being loaded in a novel context that it would otherwse fail to be loaded in.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
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
Supports-Loading-Mode: <comma separated list of client hint headers>
```

## Values

- `fenced-frame`
  - : The response can loaded inside a [fenced frame](/en-US/docs/Web/API/Fenced_frame_API). Without this explicit opt-in, all navigations inside of a fenced frame will fail.

> **Note:** More values will likely be supported in the future.

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

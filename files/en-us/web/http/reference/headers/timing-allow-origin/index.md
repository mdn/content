---
title: Timing-Allow-Origin header
short-title: Timing-Allow-Origin
slug: Web/HTTP/Reference/Headers/Timing-Allow-Origin
page-type: http-header
browser-compat: http.headers.Timing-Allow-Origin
sidebar: http
---

The HTTP **`Timing-Allow-Origin`** {{Glossary("response header")}} specifies origins that are allowed to see values of attributes retrieved via features of the [Resource Timing API](/en-US/docs/Web/API/Performance_API/Resource_timing) that are otherwise restricted for cross-origin resources.
Without it, the browser reports these values as zero or as an empty string.

The browser checks this header on cross-origin responses: same-origin resources expose full timing information without it.

This header is independent of [CORS](/en-US/docs/Web/HTTP/Guides/CORS).
Passing the CORS check doesn't grant access to detailed timing information.
Conversely, `Timing-Allow-Origin` doesn't expose properties that describe the response itself, such as its body size, content type, or status code.
The exception is navigations of frames such as {{HTMLElement("iframe")}}.
Because these don't use CORS, their body sizes are exposed if the frame's document passes the `Timing-Allow-Origin` check.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Timing-Allow-Origin: *
Timing-Allow-Origin: <origin>, …, <originN>
```

## Directives

- `*` (wildcard)
  - : Any origin may see timing resources.
- `<origin>`
  - : Specifies a URI that may see the timing resources. You can specify multiple origins, separated by commas.

## Examples

### Using Timing-Allow-Origin

To allow any resource to see timing resources:

```http
Timing-Allow-Origin: *
```

To allow `https://developer.mozilla.org` to see timing resources, you can specify:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Resource Timing API](/en-US/docs/Web/API/Performance_API/Resource_timing)
- {{HTTPHeader("Server-Timing")}} header
- {{HTTPHeader("Vary")}} header

---
title: Timing-Allow-Origin
slug: Web/HTTP/Headers/Timing-Allow-Origin
page-type: http-header
browser-compat: http.headers.Timing-Allow-Origin
---

{{HTTPSidebar}}

The HTTP **`Timing-Allow-Origin`** {{Glossary("response header")}} specifies origins that are allowed to see values of attributes retrieved via features of the [Resource Timing API](/en-US/docs/Web/API/Performance_API/Resource_timing), which would otherwise be reported as zero due to cross-origin restrictions.

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

---
title: Timing-Allow-Origin
slug: Web/HTTP/Headers/Timing-Allow-Origin
tags:
  - CORS
  - HTTP
  - Reference
  - Timing-Allow-Origin
  - header
browser-compat: http.headers.Timing-Allow-Origin
---
{{HTTPSidebar}}

The **`Timing-Allow-Origin`** response header specifies origins that are allowed to see values of attributes retrieved via features of the [Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API), which would otherwise be reported as zero due to cross-origin restrictions.

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
  </tbody>
</table>

## Syntax

```http
Timing-Allow-Origin: *
Timing-Allow-Origin: <origin>[, <origin>]*
```

## Directives

- `*`
  - : The server may specify "\*" as a wildcard, thereby allowing any origin to see timing resources.
- \<origin>
  - : Specifies a URI that may see the timing resources. You can specify multiple origins, separated by commas.

## Examples

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

- [Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API)
- [Using the Resource Timing API](/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API)
- {{HTTPHeader("Vary")}}

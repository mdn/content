---
title: Preference-Applied
slug: Web/HTTP/Headers/Preference-Applied
page-type: http-header
spec-urls: https://www.rfc-editor.org/rfc/rfc7240#section-3
---

{{HTTPSidebar}}

The HTTP **`Preference-Applied`** header informs the client about which preferences from the `Prefer` request header were applied by the server.

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
Preference-Applied: <preference>
```

## Examples

### Server acknowledges a minimal response preference

```http
HTTP/1.1 200 OK
Preference-Applied: return=minimal
```

### Server acknowledges an asynchronous processing preference

```http
HTTP/1.1 202 Accepted
Preference-Applied: respond-async
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Prefer")}}

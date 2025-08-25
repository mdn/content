---
title: Preference-Applied header
short-title: Preference-Applied
slug: Web/HTTP/Reference/Headers/Preference-Applied
page-type: http-header
spec-urls: https://www.rfc-editor.org/rfc/rfc7240#section-3
sidebar: http
---

The HTTP **`Preference-Applied`** header informs the client about which preferences from the {{httpheader("Prefer")}} request header were applied by the server.

The server indicates if a preference is applied to a response if it would otherwise be ambiguous for the client.

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

### Server applies timezone preferences

The following request indicates that the client prefers events to be represented in a certain time zone:

```http
GET /events HTTP/1.1
Host: example.com
Prefer: timezone=America/Los_Angeles
```

The server supports the preference and sends back the content with a `Preference-Applied` header:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Preference-Applied: timezone=America/Los_Angeles

[
  {"t":"2023-10-18T05:37:59.611-07:00"},
  {"t":"2023-10-18T07:37:59.611-07:00"},
  {"t":"2023-10-18T09:37:59.611-07:00"}
]
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Prefer")}}
- [Prefer header](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#_Toc31358871) on docs.oasis-open.org
- [Prefer header](https://docs.postgrest.org/en/v12/references/api/preferences.html) on docs.postgrest.org

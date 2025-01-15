---
title: Prefer
slug: Web/HTTP/Headers/Prefer
page-type: http-header
spec-urls: https://www.rfc-editor.org/rfc/rfc7240#section-2
---

{{HTTPSidebar}}

The HTTP **`Prefer`** header allows clients to indicate preferences for specific server behaviors during request processing.

> [!NOTE]
> The `Prefer` header is often used in custom client-server implementations. Ensure both client and server support this header before relying on it in production.
> The `Prefer` header does not cause the server to return an error if it does not support or apply the specified preferences. Instead, the server processes the request as if the header was not present.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Prefer: <preference>
```

## Directives

- `respond-async`
  - : Indicates that the client prefers asynchronous processing.
- `return=minimal`
  - : Requests that the server return minimal content.
- `return=representation`
  - : Requests a full resource representation in the response.
- `wait=<seconds>`
  - : Suggests how long the server should wait for the request to complete before timing out.
- Custom preferences
  - : Vendors or applications may define their own preferences to suit specific needs. For example, `custom-feature-enabled=true`.

## Examples

### Requesting minimal response

```http
GET /resource HTTP/1.1
Host: example.com
Prefer: return=minimal
```

### Requesting asynchronous processing

```http
POST /process HTTP/1.1
Host: example.com
Prefer: respond-async
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Preference-Applied")}}

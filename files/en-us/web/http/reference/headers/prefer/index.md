---
title: Prefer header
short-title: Prefer
slug: Web/HTTP/Reference/Headers/Prefer
page-type: http-header
spec-urls: https://www.rfc-editor.org/rfc/rfc7240#section-2
sidebar: http
---

The HTTP **`Prefer`** header allows clients to indicate preferences for specific server behaviors during request processing.

> [!NOTE]
> Browsers have no handling for the `Prefer` and {{HTTPHeader("Preference-Applied")}} headers: they are used in custom, implementation-specific clients.
> Ensure both client and server support this header before relying on it in production.
>
> Servers should silently ignore preferences that they do not support, as though the header were not present.

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
  - : The client prefers asynchronous processing.
    For example, the server might respond with {{httpstatus("202", "202 Accepted")}} response indicated that the request has been accepted, along with the {{httpheader("Location")}} header that has a URL that the client can use to monitor the state of the processing.
- `return=minimal`
  - : Requests that the server return minimal content (a headers-only response).
- `return=representation`
  - : Requests a full resource representation in the response.
- `wait=<seconds>`
  - : The time within which the client expects the server to provide a response, from the point at which the request was received.
    If the `respond-async` preference is also provided, the server should respond asynchronously if processing the request will exceed the wait time.
    Otherwise, the server should consider that the client will timeout after the `wait` time (response behavior depends on server implementation).
- `handling=lenient`
  - : The client wishes the server to apply lenient validation and error handling to the processing of the request.
- `handling=strict`
  - : The client wishes the server to apply strict validation and error handling to the processing of the request.
- Custom preference
  - : Vendors or applications may define their own preferences to suit specific needs.
    For example, `Prefer: timezone=America/Los_Angeles`.

## Examples

### Requesting minimal response

The following request asks for a minimal response.
This is typically a headers-only response (as opposed to `return=representation` where a representation is included in the response body):

```http
POST /resource HTTP/1.1
Host: example.com
Content-Type: application/json
Prefer: return=minimal

{"id":123, "name": "abc"}
```

The server responds with a {{httpstatus("201")}}, but does not include any response body.
The {{httpheader("Location")}} header contains a URL with the location of the newly-created resource.
There's no need to include a `Preference-Applied` header because the absence of a response body is readily apparent:

```http
HTTP/1.1 201 Created
Location: /resource?id=123
```

### Requesting asynchronous processing

This example requests the server start an async processing task:

```http
POST /process HTTP/1.1
Host: example.com
Prefer: respond-async

{
  "task": "check-broken-links"
}
```

The server responds with a {{httpstatus("202", "202 Accepted")}} response indicated the request has been accepted and has not yet completed executing asynchronously.
A `Location` header points to a status monitor that represents the state of the processing:

```http
HTTP/1.1 202 Accepted
Location: http://example.com/tasks/123/status
```

### Providing multiple preferences

The following request includes two preferences; `timezone=Jupiter/Red_Spot` indicating a time zone preference for the client, and `handling=strict` for strict validation:

```http
GET /events HTTP/1.1
Host: example.com
Prefer: handling=strict, timezone=Jupiter/Red_Spot
```

In this implementation, an invalid time zone will throw an error:

```http
HTTP/1.1 400 Bad Request
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Preference-Applied")}}
- [Prefer header](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#_Toc31358871) on docs.oasis-open.org
- [Prefer header](https://docs.postgrest.org/en/v12/references/api/preferences.html) on docs.postgrest.org

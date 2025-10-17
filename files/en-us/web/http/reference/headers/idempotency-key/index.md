---
title: Idempotency-Key header
short-title: Idempotency-Key
slug: Web/HTTP/Reference/Headers/Idempotency-Key
page-type: http-header
browser-compat: http.headers.Idempotency-Key
spec-urls: https://datatracker.ietf.org/doc/draft-ietf-httpapi-idempotency-key-header/
sidebar: http
---

The HTTP **Idempotency-Key** {{glossary("request header")}} can be used to make {{HTTPMethod("POST")}} and {{HTTPMethod("PATCH")}} requests {{glossary("idempotent")}}.

This allows clients to resend unacknowledged requests without having to be concerned that the request has already have been received and acted on by the server.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Idempotency-Key: <key>
```

## Directives

- `<key>`
  - : The unique key for a particular request.
    The format is defined by the server.

## Description

The HTTP methods {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, and {{HTTPMethod("OPTIONS")}} are idempotent.
What this means is that you can send a message with these methods any number of times and the state of the server either won't be changed, or will be changed in the same way every time it gets the message.
For example, if you send the same `PUT` message multiple times it will update the same resource on the server each time, with the same value.

The {{HTTPMethod("POST")}} and {{HTTPMethod("PATCH")}} methods are non-idempotent, which means that the server state may change each time the message is received.
Unlike a `PUT` message, if you send the same `POST` message multiple times it may create a new record each time.
Similarly, a `PATCH` reflects a change with respect to a particular state, and that state is changed each time the patch is applied.

Idempotence is important in cases where a client does not receive a response, because it means the client can safely resend the request without having to worry about possible side effects.

The HTTP `Idempotency-Key` header allows a client to make `POST` and `PATCH` requests idempotent by giving them a unique identifier (key).
The client can then resend the same request multiple times, and the server can know that it should only perform the action once.

### Client responsibilities

Client JavaScript should attach the `Idempotency-Key` header in fetch requests for endpoints that require it, with a key that conforms to the requirements published by the server.

A unique key must be used for each new request that is sent, and the same key should be used if that request is resent.

### Server responsibilities

Servers that support the `Idempotency-Key` header are expected to document and publish their support, including the endpoints that require the header, and any requirements on the key (such as length, computation method, and expiry).

Note that the server may choose to expire received keys over time; the key expiry behavior must be defined and documented.

#### Idempotency fingerprint

A unique key is expected to be used in each request.

In order to protect against clients reusing keys for new requests, a server may create and store an "idempotency fingerprint" of the request along with the key.
This is a hash of all or part of a request that can be compared to other requests with the same key.

If idempotency fingerprinting is supported, the server can send an error response the same key has a different fingerprint.

#### Request processing

On receiving a `POST` or `PATCH` request with an **Idempotency-Key** on an endpoint that requires it, the server should check whether it already has received a response with that key.

- If it hasn't, the server should perform the operation and respond, and then store the key.
- If it has, it should not perform the operation, but should respond as though it had.

Servers that are using an idempotency fingerprint would also generate and store a fingerprint for each new request.
This would be used to respond with an error if a subsequent key and fingerprint did not match.

If a request is received without an **Idempotency-Key** on an endpoint that requires it, the server should respond with an error.

#### Server error responses

A server should provide error responses in the following cases:

- {{HTTPStatus("400", "400 Bad Request")}}: The header is omitted for an endpoint that is documented as requiring it.
- {{HTTPStatus("409", "409 Conflict")}}: A request with the same key is currently/still being processed.
- {{HTTPStatus("422", "422 Unprocessable Content")}}: The key is already being used for a different request payload (if idempotency fingerprinting is supported).

In the case of a `409 Conflict` response, clients will need to wait before retrying.
For all the other errors clients will need to amend the requests before resending.

The specification does not mandate the format of the error response payload, but indicates it should contain a link to site-specific documentation explaining the error.
The JSON payload format outlined in {{rfc(9457, "Problem Details for HTTP APIs")}} is one option.
For example, the following response might be used for a missing key:

```http
HTTP/1.1 400 Bad Request
Content-Type: application/problem+json
Content-Language: en
{
    "type": "https://developer.example.com/idempotency/docs",
    "title": "Idempotency-Key is missing",
    "detail": "This operation is idempotent and requires correct usage of Idempotency Key.",
}
```

<!-- ## Browser integration -->
<!-- Firefox has a (non-standard) integration that automatically applies keys.
This is discussed in https://bugzilla.mozilla.org/show_bug.cgi?id=1991641#c6
Since this might not survive in the shipped release it is undocumented now.
This hidden comment remains so that the possible differences are known at that point by the editor.
-->

## Examples

### A POST with a key

The following message shows POST request to create a new user.
The key `9c7d2b4a0e1f6c835a2d1b0f4e3c5a7d` is a unique value that matches the requirements published by the host (example.com doesn't support this header, so we've just made up a value).

```http
POST /api/users HTTP/1.1
Host: example.com
Content-Type: application/json
Idempotency-Key: 9c7d2b4a0e1f6c835a2d1b0f4e3c5a7d

{
  "user_id": "12345",
  "name": "Sharma Chow",
  "email": "sharmac@example.com"
}
```

If no response is received the client can safely resend exactly the same request again; if the server didn't get the request it will act on it, if it has already had the request is will not make the post, but it will respond as though it had.

The client resends the request too quickly it might get an error response like this.
Note that only the HTTP status code is mandated, the rest of the information is defined by the server.

```http
HTTP/1.1 409 Conflict
Content-Type: application/problem+json
Content-Language: en
{
    "type": "https://example.com/idempotency/docs",
    "title": "Server processing previous request.",
    "detail": "A request with the same key is currently/still being processed.",
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

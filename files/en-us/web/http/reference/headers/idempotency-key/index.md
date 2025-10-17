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

It allows clients to resend unacknowledged requests without having to be concerned that the first operation was already received and acted on.

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
  - : The unique key for a particular message.
    The format is defined by the server.

## Description

The HTTP methods {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, and {{HTTPMethod("OPTIONS")}} are idempotent.
What this means is that you can send a message with these methods any number of times and you will get the same result.
For example, if you send the same `PUT` message multiple times it will update the same resource on the server each time, with the same value.

The {{HTTPMethod("POST")}} and {{HTTPMethod("PATCH")}} methods are non-idempotent, which means that the server state may change each time the message is received.
For example, if you send the same `POST` message multiple times it may create a new record each time. Similarly, a `PATCH` reflects a change with respect to a particular state: calling the same message again will be relative to an already-changed state.

Idempotence is important in cases where a client does not receive a response, because it means the client can safely resend the request without having to worry about possible side effects.

The HTTP `Idempotency-Key` header allows a client to make `POST` and `PATCH` requests idempotent by giving them a unique identifier (key).
The client can then resend the same request multiple times, and the server can know that it should only perform the action once.

Note that the client should attach the key to every unique request for endpoints that require it.

### Server responsibilities

Servers that support the `Idempotency-Key` header are expected to document and publish their support, including the endpoints that require the header, and any requirements on the key (such as length, computation method, and expiry).

#### Idempotency fingerprint

A particular key is expected to be used in each unique request.
In order to protect against clients accidentally reusing keys for new requests, a server may create an "Idempotency fingerprint" of the request.

This is a hash of all or part of the request that may be stored along with the key.

#### Request processing

On receiving a `POST` or `PATCH` request with an **Idempotency-Key** on an endpoint that requires it, the server should check whether it already has received a response with that key.

- If it hasn't, the server should perform the operation and respond, and then store the key.
- If it has, it should not perform the operation, but should respond as though it had.

Servers that are using an idempotency fingerprint would also generate and store a fingerprint for each new request.
This would be used to respond with an error if a subsequent key and fingerprint did not match.

If a request is received without an **Idempotency-Key** on an endpoint that requires it, the server should respond with an error.

#### Server error responses

A server should provide error responses in the following cases:

- {{HTTPStatus("400", "400 Bad Request")}}: The header is missing for a documented idempotent operation requiring this header.
- {{HTTPStatus("409", "409 Conflict")}}: A request with the same key is currently/still being processed.
- {{HTTPStatus("422", "422 Unprocessable Content")}}: The key is already being used for a different request payload.

In the case of a `409 Conflict` response, clients will need to wait before retrying.
For all the other errors clients will need to amend the requests before resending.

The specification does not mandate the format of the payload but indicates it should contain a link to site-specific documentation explaining the error.

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

## Browser integration

TBD

## Examples

TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

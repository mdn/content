---
title: QUERY request method
short-title: QUERY
slug: Web/HTTP/Reference/Methods/QUERY
page-type: http-method
spec-urls: https://www.rfc-editor.org/info/rfc10008/#name-query-method
sidebar: http
---

The **`QUERY`** HTTP method initiates a server-side query.
Where {{HTTPMethod("GET")}} asks for a representation of the resource identified by the target URI, `QUERY` asks the target resource to run a query operation within its own scope and return the result.
The request content and its {{HTTPHeader("Content-Type")}} define the query; the target resource determines what the query is run against.

Because the query travels in the request content rather than the URI, it is not constrained by the length and encoding limits that apply to a URI query component.
This makes `QUERY` a good fit for queries that are too large or too structured to express there, such as a SQL statement or a JSON filter document.

In carrying content, `QUERY` resembles {{HTTPMethod("POST")}}, but unlike `POST` it is explicitly {{Glossary("Safe/HTTP", "safe")}} and {{Glossary("Idempotent", "idempotent")}}.
A client neither requests nor expects any change to the target resource, so a `QUERY` request can be retried or repeated after a connection failure without concern that it will have an additional effect.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Successful response has body</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Safe")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">
        Allowed in <a href="/en-US/docs/Learn_web_development/Extensions/Forms">HTML forms</a>
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
QUERY <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : Identifies the target resource that will process the query when combined with the information provided in the {{HTTPHeader("Host")}} header.
    This is an absolute path (e.g., `/path/to/resource`) in requests to an origin server, and an absolute URL in requests to proxies (e.g., `https://example.com/path/to/resource`).
- `<query>` {{optional_inline}}
  - : An optional URI query component preceded by a question mark (`?`).
    It helps identify the resource being queried; the query operation itself is defined by the request content and its media type.

## Description

### Media types and error responses

A server must reject a `QUERY` request whose {{HTTPHeader("Content-Type")}} is missing or inconsistent with the request content.
Servers are not allowed to guess the media type from the content itself, so the response depends on how the request is malformed:

- {{HTTPStatus("400", "400 Bad Request")}} if the request carries no media type information, or if the declared media type is inconsistent with the actual content.
- {{HTTPStatus("415", "415 Unsupported Media Type")}} if the media type is not supported by the resource, including when the type is understood in general but carries no meaning as a query to this resource.
- {{HTTPStatus("422", "422 Unprocessable Content")}} if the media type is understood and the content matches it, but the query itself cannot be processed — for example, a syntactically valid SQL query naming a table that does not exist.
- {{HTTPStatus("406", "406 Not Acceptable")}} if the client asked for a response media type through {{HTTPHeader("Accept")}} that the resource cannot produce.

A client can discover which query formats a resource accepts from its {{HTTPHeader("Accept-Query")}} response header.
Alternatively, it can send the `QUERY` request and, on a `415` response, read the supported media types from the {{HTTPHeader("Accept")}} header of that response.

### Equivalent resources

The _equivalent resource_ for a `QUERY` request is a resource that responds to `GET`, represents that request and its target, and takes the request content and metadata into account.
In effect it is the resource that `QUERY` addresses, with the request content folded into its identity.

Servers are not obliged to give equivalent resources a URI, but when they do, those resources become reachable with `GET`.
A successful response can point at them through two different headers:

- {{HTTPHeader("Content-Location")}} identifies a resource holding **the result of the query just performed**.
  A `GET` to that URI retrieves the same results again.
- {{HTTPHeader("Location")}} identifies the equivalent resource, which **re-runs the same query**.
  A `GET` to that URI repeats the operation against current data, without resending the query content, so the result may differ from the original response.

Neither resource is guaranteed to be permanent.
If a later request to one of them fails, the client can fall back to repeating the original `QUERY` request with its original content.

### Redirection

A server can respond to `QUERY` indirectly by redirecting the client.
With {{HTTPStatus("301", "301 Moved Permanently")}}, {{HTTPStatus("308", "308 Permanent Redirect")}}, {{HTTPStatus("302", "302 Found")}} or {{HTTPStatus("307", "307 Temporary Redirect")}}, the client is expected to send a similar `QUERY` request to the URI given in {{HTTPHeader("Location")}}.
The historical exception that turns a redirected `POST` into a `GET` after a `301` or `302` does **not** apply to `QUERY`: the method is preserved in all four cases.

A {{HTTPStatus("303", "303 See Other")}} response means the query can instead be satisfied by a plain `GET` to the URI in `Location`.
No query result is returned with the `303` itself, which lets the server hand back an equivalent resource without computing the answer inline.

### Conditional requests

The selected representation of a `QUERY` request is the same as that of a `GET` to its equivalent resource.
A conditional `QUERY` therefore behaves as expected: the query results are returned only if the condition in headers such as {{HTTPHeader("If-None-Match")}} or {{HTTPHeader("If-Modified-Since")}} is met, and a {{HTTPStatus("304", "304 Not Modified")}} is returned otherwise.
This lets a client re-run an expensive query while avoiding the cost of transferring an unchanged result.

### Caching

Responses to `QUERY` are {{Glossary("cacheable")}}, but the cache key must incorporate the request content and its associated metadata, because the request URI alone no longer identifies the query.
A cache therefore has to read the entire request content before it can match a stored response, which makes caching `QUERY` more involved than caching `GET`.
Servers whose responses depend on the request content indicate this with the {{HTTPHeader("Vary")}} header, for example `Vary: Accept-Query, Content-Encoding, Content-Type`.

To improve their hit rate, caches may normalize semantically insignificant differences in the request content before deriving the key, such as removing a content coding.
A client that needs to prevent this can send {{HTTPHeader("Cache-Control")}} with the `no-transform` directive, though the directive is only advisory.
Where a response supplies a `Location` header identifying an equivalent resource, clients can switch to `GET` for later requests and rely on ordinary `GET` caching instead.

## Examples

### Querying a collection

The following request queries a contacts collection.
The request content selects three fields, limits the response to ten results, and filters contacts by email address:

```http
QUERY /contacts HTTP/1.1
Host: example.org
Content-Type: application/x-www-form-urlencoded
Accept: application/json

select=surname,givenname,email&limit=10&email=%2A%40example.%2A
```

A successful response includes the query result in the response content:

```http
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "surname": "Smith",
    "givenname": "John",
    "email": "smith@example.org"
  },
  {
    "surname": "Jones",
    "givenname": "Sally",
    "email": "sally.jones@example.com"
  }
]
```

## Specifications

{{Specifications}}

## Browser compatibility

Browser compatibility is not relevant for this method.
Browsers have no specific integration support for `QUERY`: it isn't sent for user-initiated actions like HTML form submissions, and browsers don't send it automatically in response to other headers or mechanisms.

Developers can issue a `QUERY` request using [`fetch()`](/en-US/docs/Web/API/Window/fetch).
Note that because `QUERY` isn't one of the CORS-safelisted methods, cross-origin requests trigger a [CORS](/en-US/docs/Web/HTTP/Guides/CORS) preflight {{HTTPMethod("OPTIONS")}} request, the same as for other non-simple methods.

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Reference/Methods)
- {{HTTPHeader("Accept-Query")}}
- {{HTTPMethod("GET")}} and {{HTTPMethod("POST")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Location")}} and {{HTTPHeader("Location")}}
- {{HTTPHeader("Allow")}}
- {{HTTPHeader("Vary")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}

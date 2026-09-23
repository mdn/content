---
title: QUERY request method
short-title: QUERY
slug: Web/HTTP/Reference/Methods/QUERY
page-type: http-method
spec-urls: https://www.rfc-editor.org/rfc/rfc10008.html#name-query-method
sidebar: http
---

The `QUERY` HTTP method initiates a server-side query. It requests that the target resource process the request content in a safe and idempotent manner, returning the result in the response.

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
    This helps identify the queried resource; the request content and its media type define the actual query.

## Description

The `QUERY` method asks the target resource to run a query operation within its own scope and return the result. This is in contrast to {{HTTPMethod("GET")}}, which asks for a representation of the resource identified by the target URI.
The request content and its {{HTTPHeader("Content-Type")}} define the query; the target resource determines what the query is run against, for example a database table, a search index, or a collection exposed by an API.

Because the query travels in the request content rather than the URI, it isn't constrained by the length and encoding limits that apply to a URI query component.
It is also less widely exposed than a query in the URI; see [Security considerations](#security_considerations) for details.

`QUERY` is not a replacement for `GET` in every case.
When a query is small enough to fit in the URI, `GET` remains a good choice: it produces a URL that can be bookmarked, linked to, and cached without extra work.
`QUERY` is particularly useful when the URI becomes impractical, such as for large or structured queries like a SQL statement or a JSONPath expression, or for queries that should not be exposed in the URI.

In carrying content, `QUERY` resembles {{HTTPMethod("POST")}}, but unlike `POST` it is explicitly {{Glossary("Safe/HTTP", "safe")}} and {{Glossary("Idempotent", "idempotent")}}.
A client neither requests nor expects any change to the target resource; you can therefore retry `QUERY` requests after a connection failure without concern for additional effects.

### Discovering support

A resource advertises `QUERY` like any other method, through the {{HTTPMethod("OPTIONS")}} method and the {{HTTPHeader("Allow")}} response header.

A client might query a resource for its options like this:

```http
OPTIONS /contacts HTTP/1.1
Host: example.org
```

The resource might respond like this to indicate that it accepts `QUERY` requests:

```http
HTTP/1.1 200 OK
Allow: GET, QUERY, OPTIONS, HEAD
```

A client could send the `QUERY` request without knowing if it's supported.
The server will either process it or respond with {{HTTPStatus("405", "405 Method Not Allowed")}}, along with an `Allow` header listing the methods it does support.

Which query _formats_ a resource accepts is advertised separately, through the {{HTTPHeader("Accept-Query")}} response header.
The client can read the accepted formats from the `Accept-Query` header.

For example, a resource might advertise the formats it accepts like this:

```http
HTTP/1.1 200 OK
Allow: GET, QUERY, OPTIONS, HEAD
Accept-Query: application/x-www-form-urlencoded, application/sql
```

A client can then send a `QUERY` request in one of those formats:

```http
QUERY /contacts HTTP/1.1
Host: example.org
Content-Type: application/sql
Accept: application/json

SELECT surname, email FROM contacts LIMIT 10
```

Alternatively, the client can send the `QUERY` request with its desired format and read the supported media types from the {{HTTPHeader("Accept")}} header of the resulting {{HTTPStatus("415", "415 Unsupported Media Type")}} response.

### Media types and error responses

A server must reject a `QUERY` request whose {{HTTPHeader("Content-Type")}} is missing or inconsistent with the request content.
Servers cannot guess the media type from the content itself. The response depends on how the request is malformed:

- {{HTTPStatus("400", "400 Bad Request")}}: The request carries no media type information, or the declared media type is inconsistent with the actual content.
- {{HTTPStatus("415", "415 Unsupported Media Type")}}: The media type is not supported by the resource. This includes cases where the type is understood in general but carries no meaning as a query to this resource.
- {{HTTPStatus("422", "422 Unprocessable Content")}}: The media type is understood, and the content matches it, but the query itself cannot be processed — for example, a syntactically valid SQL query naming a table that does not exist.
- {{HTTPStatus("406", "406 Not Acceptable")}}: The client asked for a response media type through {{HTTPHeader("Accept")}} that the resource cannot produce.

### Equivalent resources

The _equivalent resource_ of a `QUERY` request is a resource that responds to `GET` and represents the `QUERY` request, including its target and its content.
Its purpose is to let a client repeat the same query later with a plain `GET` request, without resending the query content.
In effect, it is the resource that `QUERY` addresses, with the request content folded into its identity.

The equivalent resource always exists conceptually, but servers do not have to give it a URI.
When a server represents it at a URI, a successful response to a `QUERY` request can point to it, and to a stored copy of the result, through two different headers:

- {{HTTPHeader("Content-Location")}}: Identifies a resource holding **the result of the query just performed**.
  A `GET` to that URI retrieves the same results again.
- {{HTTPHeader("Location")}}: Identifies the equivalent resource, which **re-runs the same query**.
  A `GET` to that URI repeats the operation against current data without resending the query content; therefore, the result may differ from the original response.

Neither resource is guaranteed to be permanent.
If a subsequent request to one of them fails, the client can fall back to repeating the original `QUERY` request with its original content.

Because these URIs stand in for a query, a server handling sensitive request content should generate them without embedding any sensitive part of the content.
If it doesn't, the query is pushed back into a URI, losing the exposure benefit described in [Security considerations](#security_considerations).

### Redirection

A server can respond to `QUERY` indirectly by redirecting the client.
With {{HTTPStatus("301", "301 Moved Permanently")}}, {{HTTPStatus("308", "308 Permanent Redirect")}}, {{HTTPStatus("302", "302 Found")}} or {{HTTPStatus("307", "307 Temporary Redirect")}}, the client is expected to send a similar `QUERY` request to the URI given in {{HTTPHeader("Location")}}.
Historically, clients following a {{HTTPStatus("301")}} or {{HTTPStatus("302")}} redirect have been allowed to change a `POST` request into a `GET` request.
This does **not** apply to `QUERY`: for all four status codes above, the redirected request is still a `QUERY` request with the same content.

A {{HTTPStatus("303", "303 See Other")}} response means the query can instead be satisfied by a plain `GET` to the URI in `Location`.
The `303` itself doesn't include a query result, allowing the server to hand back an equivalent resource without computing the answer inline.

### Conditional requests

The selected representation of a `QUERY` request is the same as that of a `GET` to its equivalent resource.
A conditional `QUERY` therefore behaves as expected: the query results are returned only if the condition in headers such as {{HTTPHeader("If-None-Match")}} or {{HTTPHeader("If-Modified-Since")}} is met; a {{HTTPStatus("304", "304 Not Modified")}} is returned otherwise.
This lets a client re-run an expensive query while avoiding the cost of transferring an unchanged result.

### Caching

Responses to `QUERY` are {{Glossary("cacheable")}}, but the cache key must incorporate the request content and its associated metadata, because the request URI alone no longer identifies the query.
A cache must therefore read the entire request content before it can match a stored response, which makes caching `QUERY` requests more involved than caching `GET` requests.
Servers whose responses depend on the request content indicate this with the {{HTTPHeader("Vary")}} header.
`Vary` tells caches that the response depends on more than the URI. In the following example, a stored response can only be reused for a request whose listed header field values match.

```http
Vary: Accept-Query, Content-Encoding, Content-Type
```

To improve their hit rate, caches may normalize semantically insignificant differences in the request content before deriving the key, such as removing a content encoding.
This normalization is safe only if it matches how the resource itself interprets the content.
A cache that normalizes incorrectly, or in a way that differs significantly from the resource, can treat two requests as equivalent when they are not and serve the wrong response.
A client that needs to prevent normalization can send {{HTTPHeader("Cache-Control")}} with the `no-transform` directive, though the directive is only advisory.

Where a response supplies a `Location` header identifying an equivalent resource, clients can switch to `GET` for later requests and rely on ordinary `GET` caching instead.

### Security considerations

`QUERY` carries its input in the request content rather than in the URI.
A URI is more likely to be logged or otherwise processed by intermediaries than the request content, so moving a query out of the URI reduces how widely it is exposed.
For this reason, `QUERY` should be considered over `GET` for confidential queries.

The benefit only holds if the rest of the exchange preserves it; note the constraints on [equivalent resource URIs](#equivalent_resources) and [cache normalization](#caching) described above.

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

### Reusing a result and repeating a query

A server can return both {{HTTPHeader("Content-Location")}} and {{HTTPHeader("Location")}} alongside the result, offering two different `GET`-addressable resources: a stored copy of this result, and the [equivalent resource](#equivalent_resources), which re-runs the query:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Location: /contacts/stored-results/17
Location: /contacts/stored-queries/42
Last-Modified: Sat, 25 Aug 2012 23:34:45 GMT

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

A `GET` to the `Content-Location` URI returns the stored result of that particular query, unchanged:

```http
GET /contacts/stored-results/17 HTTP/1.1
Host: example.org
Accept: application/json
```

A `GET` to the `Location` URI instead re-runs the query, so the result reflects current data.
Here one contact has been removed since the original request, and the response carries an {{HTTPHeader("ETag")}} for use in later conditional requests:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Last-Modified: Sun, 17 Nov 2024 16:12:01 GMT
ETag: "42-1"

[
  {
    "surname": "Smith",
    "givenname": "John",
    "email": "smith@example.org"
  }
]
```

A subsequent conditional `GET` request sending `If-None-Match: "42-1"` will yield {{HTTPStatus("304", "304 Not Modified")}} if the result is unchanged.

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

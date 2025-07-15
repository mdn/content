---
title: Idempotent
slug: Glossary/Idempotent
page-type: glossary-definition
sidebar: glossarysidebar
---

An HTTP method is **idempotent** if the intended effect on the server of making a single request is the same as the effect of making several identical requests.

The HTTP specification defines several HTTP methods and their semantics, which includes whether they are idempotent or not. All {{glossary("Safe/HTTP", "safe")}} methods are idempotent, as well as {{HTTPMethod("PUT")}} and {{HTTPMethod("DELETE")}}. The {{HTTPMethod("POST")}} and {{HTTPMethod("PATCH")}} methods are not guaranteed to be idempotent.

A client can safely retry a request that uses an idempotent method, for example, in cases where there is doubt as to whether the request reached the server. If multiple identical requests happen to reach the server, as long as the method is idempotent, no harm is done.

Idempotency, as defined by the HTTP specification, only considers the _intented_ effect of the client on the server: for example, a POST request intends to send data to the server, or a DELETE request intends to delete a resource on the server. A request with an idempotent method does not necessarily mean that the request does not have _any_ unique side effects: for example, the server may log every request with the time it was received.

Also, the response returned by each request may differ: for example, the first call of a {{HTTPMethod("DELETE")}} will likely return a {{HTTPStatus("200")}}, while successive ones will likely return a {{HTTPStatus("404")}}. Another implication of {{HTTPMethod("DELETE")}} being idempotent is that developers should not implement RESTful APIs with a _delete last entry_ functionality using the `DELETE` method.

While servers are very much encouraged to adhere to the semantics laid out by the HTTP specification, the spec does not mandate it. Nothing is preventing a server in the wild from exposing a non-idempotent endpoint under an idempotent HTTP method, although clients may well be surprised.

## Examples

`GET /pageX HTTP/1.1` is idempotent, because it is a safe (read-only) method. Successive calls may return different data to the client, if the data on the server was updated in the meantime.

`POST /add_row HTTP/1.1` is not idempotent; if it is called several times, it adds several rows:

```http
POST /add_row HTTP/1.1
POST /add_row HTTP/1.1   -> Adds a 2nd row
POST /add_row HTTP/1.1   -> Adds a 3rd row
```

`DELETE /idX/delete HTTP/1.1` is idempotent, even if the returned status code may change between requests:

```http
DELETE /idX/delete HTTP/1.1   -> Returns 200 if idX exists
DELETE /idX/delete HTTP/1.1   -> Returns 404 as it just got deleted
DELETE /idX/delete HTTP/1.1   -> Returns 404
```

## See also

- Definition of [idempotent](https://httpwg.org/specs/rfc9110.html#idempotent.methods) in the HTTP specification.
- Description of common idempotent methods: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}
- Description of common non-idempotent methods: {{HTTPMethod("POST")}}, {{HTTPMethod("PATCH")}}, {{HTTPMethod("CONNECT")}}

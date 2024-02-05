---
title: Idempotent
slug: Glossary/Idempotent
page-type: glossary-definition
---

{{GlossarySidebar}}

An HTTP method is **idempotent** if the intended effect on the server of making a single request is the same as the effect of making several identical requests.

This does not necessarily mean that the request does not have _any_ unique side effects: for example, the server may log every request with the time it was received. Idempotency only applies to effects intended by the client: for example, a POST request intends to send data to the server, or a DELETE request intends to delete a resource on the server.

All {{glossary("Safe/HTTP", "safe")}} methods are idempotent, as well as {{HTTPMethod("PUT")}} and {{HTTPMethod("DELETE")}}. The {{HTTPMethod("POST")}} method is not idempotent.

To be idempotent, only the state of the server is considered. The response returned by each request may differ: for example, the first call of a {{HTTPMethod("DELETE")}} will likely return a {{HTTPStatus("200")}}, while successive ones will likely return a {{HTTPStatus("404")}}. Another implication of {{HTTPMethod("DELETE")}} being idempotent is that developers should not implement RESTful APIs with a _delete last entry_ functionality using the `DELETE` method.

Note that the idempotence of a method is not guaranteed by the server and some applications may incorrectly break the idempotence constraint.

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

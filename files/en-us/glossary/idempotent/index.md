---
title: Idempotent
slug: Glossary/Idempotent
tags:
  - Glossary
  - WebMechanics
---
An HTTP method is **idempotent** if an identical request can be made once or several times in a row with the same effect while leaving the server in the same state. In other words, an idempotent method should not have any side effects — unless those side effects are also idempotent. Implemented correctly, the {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, and {{HTTPMethod("DELETE")}} methods are **idempotent**, but not the {{HTTPMethod("POST")}} method. All {{glossary("Safe/HTTP", "safe")}} methods are also idempotent.

To be idempotent, only the actual back-end state of the server is considered, the status code returned by each request may differ: the first call of a {{HTTPMethod("DELETE")}} will likely return a {{HTTPStatus("200")}}, while successive ones will likely return a {{HTTPStatus("404")}}. Another implication of {{HTTPMethod("DELETE")}} being idempotent is that developers should not implement RESTful APIs with a _delete last entry_ functionality using the `DELETE` method.

Note that the idempotence of a method is not guaranteed by the server and some applications may incorrectly break the idempotence constraint.

`GET /pageX HTTP/1.1` is idempotent. Called several times in a row, the client gets the same results:

```http
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
```

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

- Definition of [idempotent](https://datatracker.ietf.org/doc/html/rfc7231#section-4.2.2) in the HTTP specification.
- Description of common idempotent methods: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}
- Description of common non-idempotent methods: {{HTTPMethod("POST")}}, {{HTTPMethod("PATCH")}}, {{HTTPMethod("CONNECT")}}

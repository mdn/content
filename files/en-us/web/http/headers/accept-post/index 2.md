---
title: Accept-Post
slug: Web/HTTP/Headers/Accept-Post
tags:
  - Accept-Post
  - HTTP
  - HTTP Header
  - Response Header
---
{{HTTPSidebar}}

The **`Accept-Post`** response HTTP header advertises which [media types](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) are accepted by the server for HTTP post requests.

**`Accept-Post`** in response to any method means that `POST` is allowed on the requested resource (any document/media format in the header further indicates that the document format is allowed).

For example, a server receiving a `POST` request with an unsupported media type could reply with {{HTTPStatus("415")}} `Unsupported Media Type` and an **`Accept-Post`** header referencing one or more supported media types.

> **Note:** An IANA registry maintains [a complete list of official content encodings](https://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*
```

> **Note:** The `Accept-Post` header specifies a media range in the same way as {{HTTPHeader("Accept-Language")}}, except that it has no notion of preference (i.e. "accept-params" or "q" arguments are not significant).

## Directives

None.

## Examples

```
Accept-Post: application/example, text/example
Accept-Post: image/webp
Accept-Post: */*
```

## Specifications

| Specification                                                                                                           | Title       |
| ----------------------------------------------------------------------------------------------------------------------- | ----------- |
| [Linked Data Platform 1.0, Section 7.1: The Accept-Post Response Header](https://www.w3.org/TR/ldp/#header-accept-post) | ACCEPT POST |

## Browser compatibility

Browser compatibility is not relevant for this header (header is sent by server, and the specification does not define client behavior).

## See also

- Http method {{HTTPMethod("POST")}}
- HTTP Semantic and context {{RFC("7231", "POST", "4.3.3")}}

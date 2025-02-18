---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc2295#section-8.1
---

{{HTTPSidebar}}

The HTTP **`506 Variant Also Negotiates`** [server error response](/en-US/docs/Web/HTTP/Status#server_error_responses) status code is returned during content negotiation when there is recursive loop in the process of selecting a resource.

[Agent-driven content negotiation](/en-US/docs/Web/HTTP/Content_negotiation#agent-driven_negotiation) enables a client and server to collaboratively decide the best variant of a given resource when the server has multiple variants.
A server sends a `506` status code due to server misconfiguration that results in circular references when creating responses.

Lack of standardization of how clients automatically choose from responses, and the additional round-trips that slow down client-server interaction mean this mechanism is rarely used.
[Server-driven content negotiation](/en-US/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) is far more common, where a server directly chooses the most appropriate resource for the client based on the request headers ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, etc.).

## Status

```http
506 Variant Also Negotiates
```

## Examples

### Resource with variants

In the following example, a client requests a page in the `fr` locale using the {{HTTPHeader("Accept-Language")}} header.
This can be performed using curl:

```bash
curl  -H "Negotiate: trans" -H "Accept-Language: fr;" http://example.com/index
```

This produces the following request:

```http
GET /index HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
Negotiate: trans
Accept-Language: fr
```

Due to server misconfiguration, the variant response for `fr` points to a [type map](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps) which itself causes transparent negotiation to be performed.
The server may detect this condition by the presence of a `TCN` header in a choice response before it is sent:

```http
HTTP/1.1 506 Variant Also Negotiates
Date: Mon, 22 Jul 2024 10:00:00 GMT
Server: Apache/2.4.41 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 233
TCN: list
Vary: negotiate,accept-language
Alternates: {"index.html.en" 1 {type text/html} {language en} {length 48}}, {"another-map.html.fr.map" 1 {type text/html} {language fr} {length 45}}}}

<html>
<head>
  <title>506 Variant Also Negotiates</title>
</head>
<body>
  <h1>Variant Also Negotiates</h1>
  <p>A variant for the requested resource is itself a negotiable resource. This indicates a configuration error.</p>
</body>
</html>
```

## Specifications

{{Specifications}}

## See also

- {{HTTPStatus("300", "300 Multiple Choices")}}
- {{RFC("2295")}}
- [Content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [Content Negotiation](https://httpd.apache.org/docs/2.4/content-negotiation.html) in Apache HTTP Server documentation
- [Apache httpd `mod_negotiation.c` source](https://github.com/apache/httpd/blob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/modules/mappers/mod_negotiation.c#L2687-L2691) showing conditions that trigger `HTTP_VARIANT_ALSO_VARIES` response.

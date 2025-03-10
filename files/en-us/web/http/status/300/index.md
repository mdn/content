---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.300
---

{{HTTPSidebar}}

The HTTP **`300 Multiple Choices`** [redirection response](/en-US/docs/Web/HTTP/Status#redirection_messages) status code indicates that the request has more than one possible response.
The user-agent or the user should choose one of them.

> [!NOTE]
> In [agent-driven content negotiation](/en-US/docs/Web/HTTP/Content_negotiation#agent-driven_negotiation), a client and server collaboratively decide the best variant of a given resource when the server has multiple variants.
> Most clients lack a method for automatically choosing from responses, and the additional round-trips slow down client-server interaction.
> [Server-driven content negotiation](/en-US/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) is far more common, where a server chooses the most appropriate resource for the client based on the request headers ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, etc.).

The server should include content in the response that contains a list of resource metadata and URIs from which the user or user agent can choose.
The format of the content is implementation-specific, but should be easily parsed by the user agent (such as HTML or JSON).

If the server has a preferred choice that the client should request, it can include it in a {{HTTPHeader("Location")}} header.

## Status

```http
300 Multiple Choices
```

## Examples

### 300 response with list of resources

The following example demonstrates a Transparent Content Negotiation request-response exchange.
An Apache server offers multiple variants of a resource defined in a [type map](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps); `index.html.en` for a resource in English, and `index.html.fr` for a French version:

```plain
URI: index.html.en
Content-Language: en

URI: index.html.fr
Content-Language: fr
```

A `Negotiate: trans` request header indicates that the client wants to use TCN to choose a resource.
Poor browser support for this mechanism means a user agent such as curl must be used instead:

```bash
 curl -v -H "Negotiate: trans" http://localhost/index
```

This produces the following request:

```http
GET /index HTTP/1.1
Host: localhost
User-Agent: curl/8.7.1
Accept: */*
Negotiate: trans
```

We receive a `300` response with details of different representations of the requested resource:

```http
HTTP/1.1 300 Multiple Choices
Date: Fri, 30 Aug 2024 09:21:48 GMT
Server: Apache/2.4.59 (Unix)
Alternates: {"index.html.en" 1 {type text/html} {language en} {length 48}}, {"index.html.fr" 1 {type text/html} {language fr} {length 45}}
Vary: negotiate,accept-language
TCN: list
Content-Length: 419
Content-Type: text/html; charset=iso-8859-1

<html><head>
<title>300 Multiple Choices</title>
</head><body>
<h1>Multiple Choices</h1>
Available variants:
<ul>
<li><a href="index.html.en">index.html.en</a> , type text/html, language en</li>
<li><a href="index.html.fr">index.html.fr</a> , type text/html, language fr</li>
</ul>
</body></html>
```

## Specifications

{{Specifications}}

## See also

- [Redirections in HTTP](/en-US/docs/Web/HTTP/Redirections)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}
- {{HTTPStatus("302", "302 Found")}} temporary redirect
- {{HTTPStatus("308", "308 Permanent Redirect")}}
- {{HTTPStatus("506", "506 Variant Also Negotiates")}}
- [Apache Server Negotiation Algorithm](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm)
- {{RFC("2295", "Transparent Content Negotiation in HTTP")}}

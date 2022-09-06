---
title: OPTIONS
slug: Web/HTTP/Methods/OPTIONS
tags:
  - HTTP
  - Reference
  - Request method
browser-compat: http.methods.OPTIONS
---
{{HTTPSidebar}}

The **HTTP `OPTIONS` method** requests permitted communication options for a given URL or server. A client can specify a URL with this method, or an asterisk (`*`) to refer to the entire server.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Request has body</th>
      <td>No</td>
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
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Allowed in HTML forms</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
```

## Examples

### Identifying allowed request methods

To find out which request methods a server supports, one can use the `curl` command-line program to issue an `OPTIONS` request:

```bash
curl -X OPTIONS https://example.org -i
```

The response then contains an {{HTTPHeader("Allow")}} header that holds the allowed methods:

```http
HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
```

### Preflighted requests in CORS

In [CORS](/en-US/docs/Web/HTTP/CORS), a [preflight request](/en-US/docs/Glossary/Preflight_request) is sent with the `OPTIONS` method so that the server can respond if it is acceptable to send the request. In this example, we will request permission for these parameters:

- The {{HTTPHeader("Access-Control-Request-Method")}} header sent in the preflight request tells the server that when the actual request is sent, it will have a {{HTTPMethod("POST")}} request method.
- The {{HTTPHeader("Access-Control-Request-Headers")}} header tells the server that when the actual request is sent, it will have the `X-PINGOTHER` and `Content-Type` headers.

```http
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.example
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

The server now can respond if it will accept a request under these circumstances. In this example, the server response says that:

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : The `https://foo.example` origin is permitted to request the `bar.example/resources/post-here/` URL via the following:
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : {{HTTPMethod("POST")}}, {{HTTPMethod("GET")}}, and `OPTIONS` are permitted methods for the URL. (This header is similar to the {{HTTPHeader("Allow")}} response header, but used only for [CORS](/en-US/docs/Web/HTTP/CORS).)
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Any script inspecting the response is permitted to read the values of the `X-PINGOTHER` and `Content-Type` headers.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : The above permissions may be cached for 86,400 seconds (1 day).

```http
HTTP/1.1 204 No Content
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Allow")}} header
- [CORS](/en-US/docs/Web/HTTP/CORS)

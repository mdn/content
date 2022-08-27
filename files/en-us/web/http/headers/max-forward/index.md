---
title: Max-Forwards
slug: Web/HTTP/Headers/Accept
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Request header
browser-compat: http.headers.Accept
---
{{HTTPSidebar}}

The **`Max-Forwards`** request HTTP header is used only with the TRACE method,to limit the number of proxies that request goes through.A Integer Value is given to these Header.If a TRACE Request is received with the Max-Forwards method,each hop should decrement it and then forward the request to next hop.If the received value is zero (and so cannot be deincremented further), the node becomes authortative for the given request, instead of the origin server.If the Max-Forwards Header is missing in a TRACE Request ,assume that there is no maximum number of forwards.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Max-Forwards: <Integer-Value>
```
## Examples

```http
Max-Forwards: 0

Max-Forwards: 10

```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTTP [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
- [List of default Accept values](/en-US/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values)
- A header with the result of the content negotiation: {{HTTPHeader("Content-Type")}}
- Other similar headers: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
---
title: Max-Forwards
slug: Web/HTTP/Headers/Max-Forwards
page-type: http-header
spec-urls: https://httpwg.org/specs/rfc9110.html#field.max-forwards
---

{{HTTPSidebar}}

The **`Max-Forwards`** request HTTP header is used with the [`TRACE`](/en-US/docs/Web/HTTP/Methods/TRACE) method to limit the number of nodes (usually proxies) that request goes through. Its value is an integer value indicating the _maximum amount_ of nodes it must visit. At each node, the value is decremented and the `TRACE` request is forwarded to the next node, until the destination is reached, or the received value of `Max-Forwards` is zero. The request is then sent back, except for some headers, as the body of a `200 OK` response.

If the `Max-Forwards` header is not present in a `TRACE` request, a node will assume that there is no maximum number of forwards.

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
Max-Forwards: <integer>
```

## Examples

```http
Max-Forwards: 0
Max-Forwards: 10
```

## Specifications

{{Specifications}}

## Browser compatibility

This feature is neither targeted at, nor implemented in, browsers.

## See also

- The HTTP [`TRACE`](/en-US/docs/Web/HTTP/Methods/TRACE) method

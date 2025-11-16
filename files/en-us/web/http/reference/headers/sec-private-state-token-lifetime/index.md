---
title: Sec-Private-State-Token-Lifetime header
short-title: Sec-Private-State-Token-Lifetime
slug: Web/HTTP/Reference/Headers/Sec-Private-State-Token-Lifetime
page-type: http-header
browser-compat: http.headers.Sec-Private-State-Token-Lifetime
sidebar: http
---

The HTTP **`Sec-Private-State-Token-Lifetime`** {{Glossary("Response Header")}} is used by the [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API) during [token redemption](/en-US/docs/Web/API/Private_State_Token_API/Using#redeeming_tokens_2). It is sent by the redeemer server to indicate to the browser how long (in seconds) a redemption record should be cached for. The redemption record itself is sent in a {{httpheader("Sec-Private-State-Token")}} response header.

If the `Sec-Private-State-Token-Lifetime` header is omitted, the lifetime of the redemption record will be tied to the lifetime of the token verification key that confirmed the redeemed token's issuance.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>Yes (<code>Sec-</code> prefix)</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Private-State-Token-Lifetime: <integer>
```

Servers should ignore this header if it contains any other value.

## Directives

- `<integer>`
  - : An integer specifying the lifetime of the sent redemption record in seconds.

## Examples

```http
Sec-Private-State-Token-Lifetime: 604800
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Sec-Private-State-Token")}}
- {{httpheader("Sec-Private-State-Token-Crypto-Version")}}
- {{httpheader("Sec-Redemption-Record")}}
- [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API)

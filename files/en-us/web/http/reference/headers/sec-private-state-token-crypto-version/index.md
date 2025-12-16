---
title: Sec-Private-State-Token-Crypto-Version header
short-title: Sec-Private-State-Token-Crypto-Version
slug: Web/HTTP/Reference/Headers/Sec-Private-State-Token-Crypto-Version
page-type: http-header
browser-compat: http.headers.Sec-Private-State-Token-Crypto-Version
sidebar: http
---

The HTTP **`Sec-Private-State-Token-Crypto-Version`** {{Glossary("Fetch Metadata Request Header")}} is used by the [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API) during [token issuance](/en-US/docs/Web/API/Private_State_Token_API/Using#issuing_tokens_2) to indicate to the issuer server which cryptographic protocol version should be used to sign blinded nonces when generating tokens.

At the time of writing, there is only one version supported, but this mechanism makes it possible to support multiple versions in the future.

Note that a developer wouldn't be expected to generate `Sec-Private-State-Token-Crypto-Version` request headers — these are created automatically by the browser when invoking private state token `token-request` fetch requests.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Fetch Metadata Request Header")}}</td>
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
Sec-Private-State-Token-Crypto-Version: <string>
```

Servers should ignore this header if it contains any other value.

## Directives

- `<string>`
  - : A string containing the cryptographic protocol version that should be used by the issuer server to sign blinded nonces when generating tokens.

## Examples

```http
Sec-Private-State-Token-Crypto-Version: PrivateStateTokenV1VOPRF
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Sec-Private-State-Token")}}
- {{httpheader("Sec-Private-State-Token-Lifetime")}}
- {{httpheader("Sec-Redemption-Record")}}
- [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API)

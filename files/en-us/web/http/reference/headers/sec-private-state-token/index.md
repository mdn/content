---
title: Sec-Private-State-Token header
short-title: Sec-Private-State-Token
slug: Web/HTTP/Reference/Headers/Sec-Private-State-Token
page-type: http-header
browser-compat: http.headers.Sec-Private-State-Token
sidebar: http
---

The HTTP **`Sec-Private-State-Token`** header exists both as a request and a response header. It is used by the [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API) during issuance and redemption requests to transmit request data and response data.

During [token issuance](/en-US/docs/Web/API/Private_State_Token_API/Using#issuing_tokens_2), the `Sec-Private-State-Token` request header contains a collection of unsigned, blinded nonces required to generate a private state token to the issuer server. A successful response should include a `Sec-Private-State-Token` response header containing blind signatures, which the browser then unblinds and stores along with the original unblinded nonces in a secure token store.

During [token redemption](/en-US/docs/Web/API/Private_State_Token_API/Using#redeeming_tokens_2), the `Sec-Private-State-Token` request header contains a single signed, unblinded token along with associated redemption metadata. A successful response should include a `Sec-Private-State-Token` response header containing a signed redemption record, which is again stored securely by the browser.

Note that a developer wouldn't be expected to generate `Sec-Private-State-Token` request headers — these are created automatically by the browser when invoking private state token `token-request` and `token-redemption` fetch requests.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Fetch Metadata Request Header")}}, {{Glossary("Response header")}}</td>
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
Sec-Private-State-Token: <string>
```

Servers should ignore this header if it contains any other value.

## Directives

- `<string>`
  - : A string containing the required data for private state token issuance and redemption operation requests and responses.

## Examples

Sample request header sent during token issuance:

```http
Sec-Private-State-Token: AAEEBCM9WGWUx398Pdr0SFE7NDo...
```

Sample response header:

```http
Sec-Private-State-Token: AAEAAAAABNj1085Cukqmty...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Sec-Private-State-Token-Crypto-Version")}}
- {{httpheader("Sec-Private-State-Token-Lifetime")}}
- {{httpheader("Sec-Redemption-Record")}}
- [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API)

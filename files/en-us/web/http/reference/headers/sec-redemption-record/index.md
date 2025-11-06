---
title: Sec-Redemption-Record header
short-title: Sec-Redemption-Record
slug: Web/HTTP/Reference/Headers/Sec-Redemption-Record
page-type: http-header
browser-compat: http.headers.Sec-Redemption-Record
sidebar: http
---

The HTTP **`Sec-Redemption-Record`** {{Glossary("Fetch Metadata Request Header")}} is used by the [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API) when [forwarding redemption records](/en-US/docs/Web/API/Private_State_Token_API/Using#redemption_record_usage_2). The header contains a list of issuer and redemption record pairs corresponding to each redemption record.

Note that a developer wouldn't be expected to generate `Sec-Redemption-Record` request headers — these are created automatically by the browser when invoking private state token `send-redemption-record` fetch requests.

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
Sec-Redemption-Record: <string>
```

Servers should ignore this header if it contains any other value.

## Directives

- `<string>`
  - : A string containing issuer and redemption record pairs.

## Examples

```http
Sec-Redemption-Record: "https://redeemer.example";redemption-record="eyJwdWJsaWNfbWV0YWR...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Sec-Private-State-Token")}}
- {{httpheader("Sec-Private-State-Crypto-Version")}}
- {{httpheader("Sec-Private-State-Token-Lifetime")}}
- [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API)

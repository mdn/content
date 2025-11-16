---
title: "XMLHttpRequest: setPrivateToken() method"
short-title: setPrivateToken()
slug: Web/API/XMLHttpRequest/setPrivateToken
page-type: web-api-instance-method
browser-compat: api.XMLHttpRequest.setPrivateToken
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

The {{domxref("XMLHttpRequest")}} method **`setPrivateToken()`** adds [private state token](/en-US/docs/Web/API/Private_State_Token_API/Using) information to an `XMLHttpRequest` call, to initiate private state token operations.

## Syntax

```js-nolint
setPrivateToken(privateToken)
```

### Parameters

- `privateToken`
  - : An object containing options for initiating a private state token operation. Possible properties include:
    - `issuers` {{optional_inline}}
      - : An array of strings containing the URLs of issuers that you want to forward redemption records for. This setting is ignored unless `operation` is set to `send-redemption-record`, in which case the `issuers` array must be included.
    - `operation`
      - : A string representing the type of token operation you want to initiate. Possible values are:
        - `token-request`
          - : Initiates a [token request](/en-US/docs/Web/API/Private_State_Token_API/Using#issuing_a_token_via_your_server) operation.
        - `token-redemption`
          - : Initiates a [token redemption](/en-US/docs/Web/API/Private_State_Token_API/Using#redeeming_a_token_via_your_server) operation.
        - `send-redemption-record`
          - : Initiates a [send redemption record](/en-US/docs/Web/API/Private_State_Token_API/Using#redemption_record_usage_2) operation.
    - `refreshPolicy` {{optional_inline}}
      - : An enumerated value that specifies the expected behavior when a non-expired redemption record for the current user and site has previously been set. This setting is ignored unless `operation` is set to `token-redemption`. Possible values are:
        - `none`
          - : The previously-set redemption record should be used, and a new one should not be issued. This is the default value.
        - `refresh`
          - : A new redemption record is always issued.
    - `version`
      - : A number indicating the version of the cryptographic protocol you wish to use when generating a token. Currently this is always set to `1`, which is the only version that the specification supports. When specifying the `privateToken` option, this property is mandatory.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the associated `XMLHttpRequest` is not in an opened state, or {{domxref("XMLHttpRequest.send", "send()")}} has already been called on it.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if use of [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API) operations is specifically disallowed by a {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} or {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).
- {{jsxref("TypeError")}}
  - : Thrown if the `operation` is set to `send-redemption-record`, and the `issues` array was empty or not set, or one or more of the specified `issuers` are not trustworthy, HTTPS URLs.

## Examples

### Issuing a private token

```js
const hasToken = await Document.hasPrivateToken(`issuer.example`);
if (hasToken) {
  const request = new XMLHttpRequest();
  request.open("POST", "/.well-known/private-state-token/issuance");
  request.setPrivateToken({
    version: 1,
    operation: "token-request",
  });
  req.send();
}
```

### Redeeming a private token

```js
const request = new XMLHttpRequest();
request.open("POST", "/.well-known/private-state-token/redemption");
request.setPrivateToken({
  version: 1,
  operation: "token-redemption",
  refreshPolicy: "none",
});
req.send();
```

### Forwarding a redemption record

```js
const hasRR = await Document.hasRedemptionRecord(`issuer.example`);
if (hasRR) {
  const request = new XMLHttpRequest();
  request.open("POST", "some-resource.example");
  request.setPrivateToken({
    version: 1,
    operation: "send-redemption-record",
    issuers: [`issuer.example`],
  });
  req.send();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API)

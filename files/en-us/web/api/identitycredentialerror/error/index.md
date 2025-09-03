---
title: "IdentityCredentialError: error property"
short-title: error
slug: Web/API/IdentityCredentialError/error
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.IdentityCredentialError.error
---

{{APIRef("FedCM API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`error`** read-only property of the {{domxref("IdentityCredentialError")}} interface is either one of the values listed in the [OAuth 2.0 specified error list](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) or an arbitrary string giving more information about the error.

## Value

One of the values listed in the [OAuth 2.0 specified error list](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) or an arbitrary string.

## Examples

```js
try {
  const cred = await navigator.credentials.get({
    identity: {
      providers: [
        {
          configURL: "https://idp.example/manifest.json",
          clientId: "1234",
        },
      ],
    },
  });
} catch (e) {
  const error = e.error;
  const url = e.url;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CredentialsContainer.get()")}}
- [ID assertion error responses](/en-US/docs/Web/API/FedCM_API/IDP_integration#id_assertion_error_responses)

---
title: "IdentityCredentialError: url property"
short-title: url
slug: Web/API/IdentityCredentialError/url
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.IdentityCredentialError.url
---

{{APIRef("FedCM API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`url`** read-only property of the {{domxref("IdentityCredentialError")}} interface is the URL pointing to human-readable information about the error to display to users, such as how to fix the error or contact customer service.

## Value

A string indicating the URL for more information about the error.

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

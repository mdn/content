---
title: IdentityCredentialError
slug: Web/API/IdentityCredentialError
page-type: web-api-interface
browser-compat: api.IdentityCredentialError
---

{{APIRef("FedCM API")}}{{SecureContext_Header}}

The **`IdentityCredentialError`** interface of the {{domxref("FedCM API", "FedCM API", "", "nocode")}} describes an authentication error indicating that the user agent did not receive an identity assertion after the user has requested to use a federated account. This can happen if the client is unauthorized or if the server is temporarily unavailable, for example.

Browsers can use this error type to show the error message in the user interface.

{{InheritanceDiagram}}

## Constructor

- {{domxref("IdentityCredentialError.IdentityCredentialError", "IdentityCredentialError()")}}
  - : Creates a new `IdentityCredentialError` object instance.

## Instance properties

_In addition to the properties below, `IdentityCredentialError` inherits properties from its parent, {{DOMxRef("DOMException")}}_.

- {{domxref("IdentityCredentialError.error", "error")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A string. This can be either a known error from the [OAuth 2.0 specified error list](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) or an arbitrary string.
- {{domxref("IdentityCredentialError.url", "url")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : A URL pointing to human-readable information about the error to display to users, such as how to fix the error or contact customer service.

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

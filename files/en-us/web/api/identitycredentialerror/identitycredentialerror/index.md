---
title: "IdentityCredentialError: IdentityCredentialError() constructor"
short-title: IdentityCredentialError()
slug: Web/API/IdentityCredentialError/IdentityCredentialError
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.IdentityCredentialError.IdentityCredentialError
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`IdentityCredentialError()`** constructor creates a new {{domxref("IdentityCredentialError")}} object.

## Syntax

```js-nolint
new IdentityCredentialError()
new IdentityCredentialError(message)
new IdentityCredentialError(message, options)
```

### Parameters

- `message`
  - : A description of the error. If not present, the empty string `''` is used.
- `options` {{optional_inline}}
  - : An object that can have the following properties:
    - `error` {{optional_inline}}
      - : A string. This can be either one of the values listed in the [OAuth 2.0 specified error list](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.2.1) or an arbitrary string.
    - `url` {{optional_inline}}
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

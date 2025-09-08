---
title: "IdentityProvider: resolve() static method"
short-title: resolve()
slug: Web/API/IdentityProvider/resolve_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.IdentityProvider.resolve_static
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

The **`resolve()`** static method of the {{domxref("IdentityProvider")}} interface finishes a multi-step sign-in flow and returns a token back to the {{glossary("Relying party", "RP")}}.

## Syntax

```js-nolint
IdentityProvider.resolve(token)
IdentityProvider.resolve(token, options)
```

### Parameters

- `token`
  - : A token is a string that contains claims about the authentication.
- `options` {{optional_inline}}
  - : An option object, which can contain the following properties:
    - `accountId` {{optional_inline}}
      - : User id in case the user has changed (for example in a switch user sign-in flow).

### Return value

A {{jsxref("Promise")}}.

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if `resolve()` is called at any other time outside of the continuation flow.

## Examples

### Multi-step authorization

To enable a multi-step sign-in flow, the [IdP](/en-US/docs/Web/API/FedCM_API/IDP_integration) can provide a `continue_on` URL:

```json
{
  "continue_on": "https://idp.example/continue_on_url"
}
```

After user interaction with the `continue_on` page, the IdP should call `IdentityProvider.resolve()` with the token passed as an argument so that the promise from the original {{domxref("CredentialContainer.get", "navigator.credentials.get()")}} call can be resolved:

```js
document.getElementById("continue").addEventListener("click", async () => {
  let accessToken = await fetch("/generate_access_token.cgi");
  IdentityProvider.resolve(accessToken, { accountId: "1234" });
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

---
title: "IdentityProvider: getUserInfo() static method"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.IdentityProvider.getUserInfo_static
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`getUserInfo()`** static method of the {{domxref("IdentityProvider")}} interface returns information about a user that has signed in, which can be used to provide a personalized welcome message and sign-in button. This method has to be called from within an identity provider (IdP)-origin {{htmlelement("iframe")}} so that RP scripts cannot access the data. This must occur after a user has been signed in to a relying party (RP) site.

This pattern is already common on sites that use identity federation for sign-in, but `getUserInfo()` provides a way to achieve it without relying on [third-party cookies](/en-US/docs/Web/Privacy/Third-party_cookies).

## Usage notes

When `getUserInfo()` is called, the browser will make a request to the IdP [accounts list endpoint](/en-US/docs/Web/API/FedCM_API/IDP_integration#the_accounts_list_endpoint) for the user information only when both the conditions below are true:

- The user has previously signed in to the RP with the IdP via FedCM on the same browser instance, and the data hasn't been cleared.
- The user is signed in to the IdP on the same browser instance.

`getUserInfo()` must be called from within an embedded `<iframe>`, and the embedded site's origin must match the `configURL` of the IdP. In addition, the embedding HTML must explicitly allow its use via the {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Permissions_Policy):

```html
<iframe
  src="https://idp.example/signin"
  allow="identity-credentials-get"></iframe>
```

## Syntax

```js-nolint
IdentityProvider.getUserInfo(config)
```

### Parameters

- `config`
  - : A configuration object, which can contain the following properties:
    - `configURL`
      - : The URL of the [configuration file](/en-US/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints) for the identity provider from which you want to get user information.
    - `clientId`
      - : The RP's client identifier issued by the IdP.

### Return value

A {{jsxref("Promise")}} that fulfills with an array of objects, each containing information representing a separate user account. Each object contains the following properties:

- `email`
  - : A string representing the user's email address.
- `name`
  - : A string representing the user's full name.
- `givenName`
  - : A string representing the user's given (nick or abbreviated) name.
- `picture`
  - : A string representing the URL of the user's profile picture.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the provided `configURL` is invalid or if the embedded document's origin does not match the `configURL`.
- `NetworkError` {{domxref("DOMException")}}
  - : Thrown if the browser is unable to connect to the IdP or if `getUserInfo()` is invoked from the top-level document.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the embedding `<iframe>` does not have a {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set to allow the use of `getUserInfo()` or if the FedCM API is disabled globally by a policy set on the top-level document.

## Examples

```js
// Iframe displaying a page from the https://idp.example origin
const user_info = await IdentityProvider.getUserInfo({
  configUrl: "https://idp.example/fedcm.json",
  clientId: "client1234",
});

// IdentityProvider.getUserInfo() returns an array of user information.
if (user_info.length > 0) {
  // Returning accounts should be first, so the first account received
  // is guaranteed to be a returning account
  const name = user_info[0].name;
  const given_name = user_info[0].given_name;
  const display_name = given_name ? given_name : name;
  const picture = user_info[0].picture;
  const email = user_info[0].email;

  // ...

  // Render the personalized sign-in button using the information above
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) on developers.google.com (2023)

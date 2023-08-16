---
title: "IdentityProvider: getUserInfo() static method"
short-title: getUserInfo()
slug: Web/API/IdentityProvider/getUserInfo_static
page-type: web-api-static-method
browser-compat: api.IdentityProvider.getUserInfo
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}

The **`getUserInfo()`** static method of the {{domxref("IdentityProvider")}} interface returns information about a previously signed in user, which can be used to provide a personalized welcome message and sign-in button. This method is intended to be called from within an {{htmlelement("iframe")}} containing an identity provider (IdP) sign-in widget when a previously signed in user returns to the relying party (RP) site.

This pattern is already common on sites that use identity federation for sign-in, but `getUserInfo()` provides a way to achieve it without relying on third-party cookies.

## Usage notes

When `getUserInfo()` is called, the browser makes a request to the IdP [accounts list endpoint](/en-US/docs/Web/API/FedCM_API#the_accounts_list_endpoint), which returns an array of user information when:

- The user has previously signed in to the RP with the IdP via FedCM on the same browser instance, and the data hasn't been cleared, or
- The user is signed in to the IdP on the same browser instance.

To allow `getUserInfo()` to be called from within an embedded `<iframe>`, the embedded site's origin must match the `configURL` of the IdP, and the embedding HTML must explicitly allow its use via the {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Permissions_Policy):

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
  - : A configuation object, which can contain the following properties:
    - `configURL`
      - : The URL of the [configuration file](/en-US/docs/Web/API/FedCM_API#provide_a_config_file) for the identity provider you want to get user information from.
    - `clientId`
      - : The RP's client identifier issued by the IdP.
    - `nonce` {{optional_inline}}
      - : A random string that can be included to ensure the response is issued for this specific request, and prevent {{glossary("replay attack", "replay attacks")}}.
    - `loginHint` {{optional_inline}}
      - : A string that provides a hint as to which accounts the IdP should return info on. The `loginHint` value is matched against the `login_hints` values in the array of user information returned from the [accounts list endpoint](/en-US/docs/Web/API/FedCM_API#the_accounts_list_endpoint).

### Return value

A {{jsxref("Promise")}} that fulfills with an array of objects, each containing information representing a separate user account. Each object contains the following properties:

- `email`
  - : A string representing the user's email address.
- `name`
  - : A string representing the user's full name.
- `givenName`
  - : A string representing the user's given (nick, or abbreviated) name.
- `picture`
  - : A string representing the URL of the user's profile picture.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the provided `configURL` is invalid, or the embedded document's origin does not match the `configURL`.
- `NetworkError` {{domxref("DOMException")}}
  - : Thrown if the browser is unable to connect to the IdP, or if `getUserInfo()` is invoked from the top-level document.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if the embedding `<iframe>` does not have a {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set to allow the use of `getUserInfo()`, or if the FedCM API is disabled globally by a policy set on the top-level document.

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

- [Federated Credential Management API](https://developer.chrome.com/docs/privacy-sandbox/fedcm/) on developer.chrome.com (2023)

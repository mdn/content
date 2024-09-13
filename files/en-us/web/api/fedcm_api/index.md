---
title: Federated Credential Management (FedCM) API
slug: Web/API/FedCM_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.IdentityCredential
---

{{SeeCompatTable}}{{DefaultAPISidebar("FedCM API")}}

The **Federated Credential Management API** (or _FedCM API_) provides a standard mechanism for identity providers (IdPs) to make identity federation services available on the web in a privacy-preserving way, without the need for [third-party cookies](/en-US/docs/Web/Privacy/Third-party_cookies) and redirects. This includes a JavaScript API that enables the use of federated authentication for activities such as signing in or signing up on a website.

## FedCM concepts

Identity federation is the delegation of user authentication from a website requiring user sign-up or sign-in, such as an e-commerce or social networking site (also known as a relying party or RP), to a trusted third-party identity provider (IdP) such as Google, Facebook/Meta, GitHub, etc.

Relying parties (RPs) can integrate with IdPs, allowing users to sign-in using the accounts they have registered with the IdP. Identity federation via a small set of dedicated IdPs has improved web authentication in terms of security, consumer confidence, and user experience, as compared to each site managing its own sign-in needs with separate usernames and passwords.

The problem is that traditional identity federation relies on {{htmlelement("iframe")}}s, redirects, and third-party cookies, which are also used for third-party tracking. Browsers are limiting the usage of these features in an effort to preserve user privacy, but a side effect is that this makes valid, non-tracking uses more difficult to implement, which includes identity federation.

This affects federated sign-in in general, as well as more specific identity federation use cases:

- [OIDC front-channel logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html): This flow requires the IDP to embed several RP `<iframe>`s, which rely on RP cookies.
- Social Widgets: In order to provide social widgets, the IdP third-party cookie must be provided from the RP top-level origin.
- Personalized buttons: The display of personalized sign in information on a {{htmlelement("button")}} in the RP origin is implemented as an IdP `<iframe>` that requires third party cookies.
- Session Refresh without top-level navigation or popups.

FedCM aims to work around this problem, providing a dedicated mechanism for federated identity flows on the web, and enabling supporting browsers to provide special UI elements on RPs, allowing users to choose an IdP account to use for sign-in.

There are two parts to using the FedCM API, which are covered in the linked guides below:

1. [IdP integration with FedCM](/en-US/docs/Web/API/FedCM_API/IDP_integration) — what an identity provider needs to provide so that an RP can integrate with it.
2. [RP federated sign-in](/en-US/docs/Web/API/FedCM_API/RP_sign-in) — the FedCM functionality an RP needs to use to sign a user in using their IdP account. A FedCM sign-in request is initiated using the {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} method.

> **Note:** [Google Sign In](https://developers.google.com/identity/gsi/web/guides/overview) is an example of an IdP that already supports FedCM. [Migrate to FedCM](https://developers.google.com/identity/gsi/web/guides/fedcm-migration) provides instructions for RPs wishing to migrate existing apps using Google Sign In to federated sign-in.

## Permissions Policy integration and `<iframe>` support

The {{httpheader("Permissions-Policy/identity-credentials-get", "identity-credentials-get")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Permissions_Policy) can be used to control permission to use FedCM, more specifically usage of the {{domxref("CredentialsContainer.get", "get()")}} method.

Developers can explicitly grant permission for an {{htmlelement("iframe")}} to use FedCM via the `allow` attribute:

```html
<iframe src="3rd-party.example" allow="identity-credentials-get"></iframe>
```

The availability of FedCM within `<iframe>`s enables a couple of use cases:

- Larger sites won't want a third-party sign-in script to gain control over the top-level frame; instead they will want to add that script and invoke FedCM from within an {{htmlelement("iframe")}}.
- Some `<iframes>` may themselves require federated authentication.

## Interfaces

- {{domxref("IdentityCredential")}}
  - : Represents a user identity credential arising from successful federated authentication. A successful {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} call that includes an `identity` option fulfills with an {{domxref("IdentityCredential")}} instance.
- {{domxref("IdentityProvider")}}
  - : Represents an IdP and provides access to related information and functionality.
- {{domxref("NavigatorLogin")}}
  - : Defines login functionality for IdPs, including the {{domxref("NavigatorLogin.setStatus", "Navigator.login.setStatus()")}} method for [updating IdP login status](/en-US/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api).

## Extensions to other interfaces

- {{domxref("CredentialsContainer.get()")}}, the `identity` option.
  - : `identity` is an object containing details of federated IdPs that a relying party (RP) website can use to sign users in. It causes a `get()` call to initiate a request for a user to sign in to an RP with an IdP.
- {{domxref("Navigator.login")}}
  - : Provides access to the browser's {{domxref("NavigatorLogin")}} object.

## HTTP headers

- {{httpheader("Set-Login")}}
  - : Provides an HTTP mechanism for [updating login status](/en-US/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) via HTTP.

## Examples

- [FedCM sign-in example](https://fedcm-rp-demo.glitch.me/)
  - [RP source code](https://glitch.com/edit/#!/fedcm-rp-demo?path=server.js%3A1%3A0)
  - [IdP source code](https://glitch.com/edit/#!/fedcm-idp-demo?path=server.js%3A1%3A0)
- [FedCM `<iframe>` sign-in](https://fedcm-main-frame.glitch.me/)
  - [RP `<iframe>` page source code](https://glitch.com/edit/#!/fedcm-main-frame?path=index.html%3A1%3A0)
  - [IdP source code](https://glitch.com/edit/#!/webid-fcm-idp-single?path=server.js%3A1%3A0)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm)

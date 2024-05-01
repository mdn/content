---
title: NavigatorLogin
slug: Web/API/NavigatorLogin
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NavigatorLogin
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

The **`NavigatorLogin`** interface of the [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API) defines login functionality for federated identity providers (IdPs). Specifically, it enables a federated identity provider (IdP) to set its login status when a user signs into or out of the IdP.

See [Update login status using the Login Status API](/en-US/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) for more details of how this is used.

`NavigatorLogin` is accessed via the {{domxref("Navigator.login")}} property.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("NavigatorLogin.setStatus", "setStatus()")}} {{Experimental_Inline}}
  - : Sets the login status of a federated identity provider (IdP), when called from the IdP's origin. By "login status", we mean "whether any users are logged into the IdP on the current browser or not".

## Examples

```js
/* Set logged-in status */
navigator.login.setStatus("logged-in");

/* Set logged-out status */
navigator.login.setStatus("logged-out");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API)

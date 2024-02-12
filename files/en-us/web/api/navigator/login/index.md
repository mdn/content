---
title: "Navigator: login property"
short-title: login
slug: Web/API/Navigator/login
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.login
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

The **`login`** read-only property of the {{domxref("Navigator")}} interface provides access to the browser's {{domxref("NavigatorLogin")}} object, which a federated identity provider (IdP) can use to set its login status when a user signs into or out of the IdP.

See [Update login status using the Login Status API](/en-US/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) for more details of how this is used.

## Value

A {{domxref("NavigatorLogin")}} object.

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

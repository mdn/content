---
title: "NavigatorLogin: setStatus() method"
short-title: setStatus()
slug: Web/API/NavigatorLogin/setStatus
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.NavigatorLogin.setStatus
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}

The **`setStatus()`** method of the
{{domxref("NavigatorLogin")}} interface sets the login status of a federated identity provider (IdP), when called from the IdP's origin.

See [Update login status using the Login Status API](/en-US/docs/Web/API/FedCM_API/IDP_integration#update_login_status_using_the_login_status_api) for more information about FedCM login status.

## Syntax

```js-nolint
setStatus(status)
```

### Parameters

- `status`
  - : A string representing the login status to set for the IdP. Possible values are `"logged-in"` and `"logged-out"`.

### Return value

A promise that fulfills with `undefined`.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : The calling domain is not a valid domain.

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

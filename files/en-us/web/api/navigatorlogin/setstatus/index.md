---
title: "NavigatorLogin: setStatus() method"
short-title: setStatus()
slug: Web/API/NavigatorLogin/setStatus
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.NavigatorLogin.setStatus
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

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

A {{jsxref("Promise")}} that fulfills with `undefined`.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the calling domain is not in a frame where all of the nesting hierarchy is same-origin. Whether called from the main frame, an {{htmlelement("iframe")}} nested inside the main frame, or another `<iframe>` nested one or more levels deep inside the first `<iframe>`, _all_ levels of the nesting hierarchy must be same-origin for the call to be successful.

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

---
title: "IdentityProvider: close() static method"
short-title: close()
slug: Web/API/IdentityProvider/close_static
page-type: web-api-static-method
status:
  - experimental
browser-compat: api.IdentityProvider.close_static
---

{{securecontext_header}}{{APIRef("FedCM API")}}{{SeeCompatTable}}

The **`close()`** static method of the {{domxref("IdentityProvider")}} interface provides a manual signal to the browser that an IdP sign-in flow is finished.

## Usage notes

`close()` needs to be called from the same origin as the IdP sign-in dialog, as defined in the [IdP config](/en-US/docs/Web/API/FedCM_API/IDP_integration#provide_a_config_file_and_endpoints).

`close()` is needed to close the IdP sign-in dialog when sign-in is completely finished and the IdP has finished collecting data from the user. A primary use case for `close()` is closing the IdP sign-in dialog in cases where [the browser and the IdP login status become out of sync](/en-US/docs/Web/API/FedCM_API/IDP_integration#what_if_the_browser_and_the_idp_login_status_become_out_of_sync), and the browser initiates a dynamic sign-in flow to correct the issue.

## Syntax

```js-nolint
IdentityProvider.close()
```

### Parameters

None.

### Return value

`undefined`.

## Examples

```js
IdentityProvider.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Federated Credential Management API](https://developers.google.com/privacy-sandbox/cookies/fedcm) on developers.google.com (2023)

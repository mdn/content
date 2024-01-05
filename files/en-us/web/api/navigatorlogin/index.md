---
title: NavigatorLogin
slug: Web/API/NavigatorLogin
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NavigatorLogin
---

{{APIRef("FedCM API")}}{{SeeCompatTable}}

The **`NavigatorLogin`** interface of the [Federated Credential Management (FedCM) API](/en-US/docs/Web/API/FedCM_API) defines login functionality for federated identity providers (IdPs).

`NavigatorLogin` is accessed via the {{domxref("Navigator.login")}} property.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("NavigatorLogin.setStatus", "setStatus()")}} {{Experimental_Inline}}
  - : Returns a clone of the available state associated with this history entry.

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

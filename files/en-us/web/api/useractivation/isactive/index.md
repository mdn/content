---
title: UserActivation.isActive
slug: Web/API/UserActivation/isActive
page-type: web-api-instance-property
browser-compat: api.UserActivation.isActive
---

{{APIRef("HTML DOM")}}

The read-only **`isActive`** property of the {{domxref("UserActivation")}} interface indicates whether the current window has transient user activation (see {{Glossary("transient activation")}}).

## Value

A boolean.

## Examples

### Checking if a user gesture was recently performed

Use the `isActive` property to check whether the user is currently interacting with the page.

```js
if (navigator.userActivation.isActive) {
  // proceed to request playing media, for example
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("UserActivation")}}
- {{domxref("UserActivation.hasBeenActive")}}
- [Features gated by user activation](/en-US/docs/Web/Security/User_activation)

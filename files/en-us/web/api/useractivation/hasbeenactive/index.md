---
title: "UserActivation: hasBeenActive property"
short-title: hasBeenActive
slug: Web/API/UserActivation/hasBeenActive
page-type: web-api-instance-property
browser-compat: api.UserActivation.hasBeenActive
---

{{APIRef("HTML DOM")}}

The read-only **`hasBeenActive`** property of the {{domxref("UserActivation")}} interface indicates whether the current window has sticky user activation (see {{Glossary("sticky activation")}}).

## Value

A boolean.

## Examples

### Checking if a user gesture was ever performed

Use the `hasBeenActive` property to check whether the user has ever interacted with the page.

```js
if (navigator.userActivation.hasBeenActive) {
  // proceed with auto-playing an animation, for example
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("UserActivation")}}
- {{domxref("UserActivation.isActive")}}
- [Features gated by user activation](/en-US/docs/Web/Security/User_activation)

---
title: "Navigator: userActivation property"
short-title: userActivation
slug: Web/API/Navigator/userActivation
page-type: web-api-instance-property
browser-compat: api.Navigator.userActivation
---

{{APIRef("HTML DOM")}}

The read-only **`userActivation`** property of the {{domxref("Navigator")}} interface returns a {{domxref("UserActivation")}} object which contains information about the current window's user activation state.

## Value

A {{domxref("UserActivation")}} object.

## Examples

### Checking if a user gesture was recently performed

Use {{domxref("UserActivation.isActive")}} to check whether the user is currently interacting with the page ({{Glossary("Transient activation")}}).

```js
if (navigator.userActivation.isActive) {
  // proceed to request playing media, for example
}
```

### Checking if a user gesture was ever performed

Use {{domxref("UserActivation.hasBeenActive")}} to check whether the user has ever interacted with the page ({{Glossary("Sticky activation")}}).

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
- {{domxref("UserActivation.hasBeenActive")}}
- {{domxref("UserActivation.isActive")}}
- [Features gated by user activation](/en-US/docs/Web/Security/User_activation)

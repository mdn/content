---
title: UserActivation
slug: Web/API/UserActivation
page-type: web-api-interface
browser-compat: api.UserActivation
---

{{APIRef("HTML DOM")}}

The **`UserActivation`** interface allows querying information about a window's user activation state.

A user activation either implies that the user is currently interacting with the page, or has completed an interaction since page load. Typically, this is a click on a button or some other user interaction with the UI.

There are two kinds of window user activation states:

- {{Glossary("Transient activation")}} (user is currently interacting with the page) and
- {{Glossary("Sticky activation")}} (user has interacted at least once since page load).

See [Features gated by user activation](/en-US/docs/Web/Security/User_activation) for more information and a list of APIs that require either sticky or transient user activation.

This API is only available in the window context and not exposed to workers.

## Instance properties

- {{domxref("UserActivation.hasBeenActive")}} {{ReadOnlyInline}}
  - : Indicates whether the current window has sticky user activation.
- {{domxref("UserActivation.isActive")}} {{ReadOnlyInline}}
  - : Indicates whether the current window has transient user activation.

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

- {{domxref("navigator.userActivation")}}
- [Features gated by user activation](/en-US/docs/Web/Security/User_activation)

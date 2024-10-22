---
title: "Navigation: activation property"
short-title: activation
slug: Web/API/Navigation/activation
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigation.activation
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`activation`** read-only property of the {{domxref("Navigation")}} interface returns a {{domxref("NavigationActivation")}} object containing information about the most recent cross-document navigation, which "activated" this Document. The property will stay constant during same-document navigations.

## Value

A {{domxref("NavigationActivation")}} object, or `null` if current document is the initial `about:blank` document.

## Examples

```js
if (navigation.activation) {
  console.log(navigation.activation.entry.url);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)

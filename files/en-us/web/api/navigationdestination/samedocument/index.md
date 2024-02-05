---
title: "NavigationDestination: sameDocument property"
short-title: sameDocument
slug: Web/API/NavigationDestination/sameDocument
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigationDestination.sameDocument
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`sameDocument`** read-only property of the
{{domxref("NavigationDestination")}} interface returns `true` if the navigation is to the same `document` as the current {{domxref("Document")}} value, or `false` otherwise.

This is useful for checking whether the navigation will be same-document or cross-document.

## Value

A boolean.

## Examples

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.sameDocument);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)

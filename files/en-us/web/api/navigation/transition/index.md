---
title: "Navigation: transition property"
short-title: transition
slug: Web/API/Navigation/transition
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigation.transition
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`transition`** read-only property of the {{domxref("Navigation")}} interface returns a {{domxref("NavigationTransition")}} object representing the status of an in-progress navigation, which can be used to track it.

## Value

A {{domxref("NavigationTransition")}} object, or `null` if no navigation is currently in progress.

## Examples

```js
async function handleTransition() {
  if (navigation.transition) {
    showLoadingSpinner();
    await navigation.transition.finished;
    hideLoadingSpinner();
  }
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

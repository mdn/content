---
title: "NavigationTransition: committed property"
short-title: committed
slug: Web/API/NavigationTransition/committed
page-type: web-api-instance-property
browser-compat: api.NavigationTransition.committed
---

{{APIRef("Navigation API")}}

The **`committed`** read-only property of the
{{domxref("NavigationTransition")}} interface returns a {{jsxref("Promise")}} that fulfills at the same time the {{domxref("Navigation.currentEntry")}} and URL displayed in the browser change to reflect that the navigation is committed. This happens after all of the navigation's [precommit handlers](/en-US/docs/Web/API/NavigateEvent/intercept#handling_precommit_actions_with_precommithandler) are fulfilled.

The `committed` promise rejects if any of the precommit handlers reject.

## Value

A {{jsxref("Promise")}} that resolves to `undefined`.

## Examples

```js
async function lockInNavigation() {
  await navigation.transition.committed;
  // Navigation has committed successfully
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)

---
title: "NavigationTransition: committed property"
short-title: committed
slug: Web/API/NavigationTransition/committed
page-type: web-api-instance-property
browser-compat: api.NavigationTransition.committed
---

{{APIRef("Navigation API")}}

The **`committed`** read-only property of the
{{domxref("NavigationTransition")}} interface returns a {{jsxref("Promise")}} that fulfills when {{domxref("Navigation.currentEntry")}} is updated and the new URL is displayed in the browser, marking the navigation as committed. This happens after all [precommit handlers](/en-US/docs/Web/API/NavigateEvent/intercept#handling_precommit_actions_with_precommithandler) for the navigation are fulfilled.

The `committed` promise rejects if any precommit handler rejects.

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

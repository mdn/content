---
title: "NavigationTransition: to property"
short-title: to
slug: Web/API/NavigationTransition/to
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigationTransition.to
---

{{APIRef("Navigation API")}}{{seecompattable}}

The **`to`** read-only property of the {{domxref("NavigationTransition")}} interface returns the {{domxref("NavigationDestination")}} that the transition is navigating to. This is especially useful when using precommit handlers, as during precommit the current URL has not yet switched to the destination.

## Value

A {{domxref("NavigationDestination")}} object.

## Examples

```js
navigation.addEventListener("navigate", (e) => {
  e.intercept({
    async precommitHandler() {
      console.log(`About to transition to ${navigation.transition.to.url}`);
    },
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)

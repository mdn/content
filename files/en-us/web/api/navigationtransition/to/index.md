---
title: "NavigationTransition: to property"
short-title: to
slug: Web/API/NavigationTransition/to
page-type: web-api-instance-property
browser-compat: api.NavigationTransition.to
---

{{APIRef("Navigation API")}}

The **`to`** read-only property of the
{{domxref("NavigationTransition")}} interface returns a {{domxref("NavigationDestination")}} object representing the transition's detination.

This property can be used to access an ongoing navigation's [destination URL](/en-US/docs/Web/API/NavigationDestination/url) without having to listen to the {{domxref("Navigation.navigate_event", "navigation")}} event (the `NavigationDestination` object is also available via {{domxref("NavigateEvent.destination")}}).

It is especially useful for querying the destination URL when using [precommit handlers](/en-US/docs/Web/API/NavigateEvent/intercept#handling_precommit_actions_with_precommithandler), as during the precommit stage the current URL has not yet switched to the destination.

## Value

A {{domxref("NavigationDestination")}} object.

## Examples

```js
console.log(navigation.transition.to);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)

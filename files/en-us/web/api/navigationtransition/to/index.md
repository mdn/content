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

The **`to`** read-only property of the {{domxref("NavigationTransition")}} interface returns the {{domxref("NavigationDestination")}} that the transition is navigating to.

This mirrors the {{domxref("NavigateEvent.destination")}} property but, unlike that, is available outside of the {{domxref("Navigation.navigate_event", "navigate")}} event handler. It is especially useful when calling functions prior to the URL changing (e.g., during precommit or on error).

## Value

A {{domxref("NavigationDestination")}} object.

## Examples

### Handling a navigation error

```js
navigation.onnavigateerror = (e) => {
  if (navigation.transition?.to?.url === login_page_url) {
    /* do something when failing to go to login page */
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)

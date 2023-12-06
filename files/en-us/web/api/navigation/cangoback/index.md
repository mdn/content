---
title: "Navigation: canGoBack property"
short-title: canGoBack
slug: Web/API/Navigation/canGoBack
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigation.canGoBack
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`canGoBack`** read-only property of the
{{domxref("Navigation")}} interface returns `true`
if it is possible to navigate backwards in the navigation history
(i.e. the {{domxref("Navigation.currentEntry", "currentEntry")}} is
not the first one in the history entry list),
and `false` if it is not.

## Value

A boolean value: `true` if it is possible to navigate backwards in the navigation history, `false` otherwise.

## Examples

```js
async function backHandler() {
  if (navigation.canGoBack) {
    await navigation.back().finished;
    // Handle any required clean-up after
    // navigation has finished
  } else {
    displayBanner("You are on the first page");
  }
}

async function forwardHandler() {
  if (navigation.canGoForward) {
    await navigation.forward().finished;
    // Handle any required clean-up after
    // navigation has finished
  } else {
    displayBanner("You are on the last page");
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

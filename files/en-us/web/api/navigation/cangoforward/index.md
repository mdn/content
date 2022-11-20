---
title: Navigation.canGoForward
slug: Web/API/Navigation/canGoForward
page-type: web-api-instance-property
tags:
  - API
  - canGoForward
  - Experimental
  - History
  - Navigate
  - Navigation
  - Navigation API
  - Property
  - Read-only
  - Reference
  - Scroll
  - Traversal
browser-compat: api.Navigation.canGoForward
---

{{APIRef("Navigation API")}}{{seecompattable}}

The **`canGoForward`** read-only property of the
{{domxref("Navigation")}} interface returns `true` if it is possible to navigate forwards in the navigation history
(i.e. the {{domxref("Navigation.currentEntry", "currentEntry")}} is not the last one in the history entry list),
and `false` if it is not.

## Value

A boolean value:`true` if it is possible to navigate forwards in the navigation history, `false`otherwise.

## Examples

```js
async function backHandler() {
  if(navigation.canGoBack) {
    await navigation.back().finished;
    // Handle any required clean-up after
    // navigation has finished
  } else {
    displayBanner('You are on the first page');
  }
}

async function forwardHandler() {
  if(navigation.canGoForward) {
    await navigation.forward().finished;
    // Handle any required clean-up after
    // navigation has finished
  } else {
    displayBanner('You are on the last page');
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

---
title: NavigateEvent.canIntercept
slug: Web/API/NavigateEvent/canIntercept
page-type: web-api-instance-property
tags:
  - API
  - canIntercept
  - Experimental
  - History
  - Navigate
  - NavigateEvent
  - Navigation
  - Navigation API
  - Property
  - Read-only
  - Reference
  - Scroll
  - Traversal
browser-compat: api.NavigateEvent.canIntercept
---

{{APIRef("Navigation API")}}{{seecompattable}}

The **`canIntercept`** read-only property of the
{{domxref("NavigateEvent")}} interface returns `true` if the navigation can be intercepted, or `false` otherwise (e.g. you can't intercept a cross-origin navigation).

## Value

A boolean value—`true` if the navigation can be intercepted, `false` if not.

## Examples

```js
navigation.addEventListener("navigate", event => {
  // Some navigations, e.g. cross-origin navigations, we
  // cannot intercept. Let the browser handle those normally.
  if (!event.canIntercept) {
    return;
  }

  // Don't intercept fragment navigations or downloads.
  if (event.hashChange || event.downloadRequest !== null) {
    return;
  }

  event.intercept({
    handler() {
      if (event.formData) {
        processFormDataAndUpdateUI(event.formData, event.signal);
      } else {
        doSinglePageAppNav(event.destination, event.signal);
      }
    }
  });
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

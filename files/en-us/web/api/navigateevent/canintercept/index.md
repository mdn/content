---
title: "NavigateEvent: canIntercept property"
short-title: canIntercept
slug: Web/API/NavigateEvent/canIntercept
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigateEvent.canIntercept
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`canIntercept`** read-only property of the
{{domxref("NavigateEvent")}} interface returns `true` if the navigation can be intercepted and have its URL rewritten, or `false` otherwise

There are several rules around when a navigation can be intercepted. For example:

- You can't intercept cross-origin navigations.
- You can intercept `http` or `https` URLs if only the `path`, `query`, and `fragment` portions of the new URL differ from the current URL.
- You can intercept `file` URLs if only the `query` and `fragment` portions of the new URL differ.
- For other URL types you can intercept the navigation if only the `fragment` portion differs.

See the spec for more explanation on [when a Document can have its URL rewritten](https://html.spec.whatwg.org/multipage/nav-history-apis.html#can-have-its-url-rewritten), including a table of examples.

## Value

A boolean value—`true` if the navigation can be intercepted, `false` if not.

## Examples

```js
navigation.addEventListener("navigate", (event) => {
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
    },
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

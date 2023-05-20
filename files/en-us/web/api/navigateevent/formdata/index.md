---
title: "NavigateEvent: formData property"
short-title: formData
slug: Web/API/NavigateEvent/formData
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigateEvent.formData
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`formData`** read-only property of the
{{domxref("NavigateEvent")}} interface returns the {{domxref("FormData")}} object representing the submitted data in the case of a [`POST`](/en-US/docs/Web/HTTP/Methods/POST) form submission, or `null` otherwise.

## Value

A {{domxref("FormData")}} object, or `null`.

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

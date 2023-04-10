---
title: "NavigateEvent: downloadRequest property"
short-title: downloadRequest
slug: Web/API/NavigateEvent/downloadRequest
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigateEvent.downloadRequest
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`downloadRequest`** read-only property of the
{{domxref("NavigateEvent")}} interface returns the filename of the file requested for download, in the case of a download navigation (e.g. an {{htmlelement("a")}} or {{htmlelement("area")}} element with a `download` attribute), or `null` otherwise.

## Value

A string containing the filename of the file requested for download, or `null`.

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

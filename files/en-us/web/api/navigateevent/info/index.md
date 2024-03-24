---
title: "NavigateEvent: info property"
short-title: info
slug: Web/API/NavigateEvent/info
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigateEvent.info
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`info`** read-only property of the
{{domxref("NavigateEvent")}} interface returns the `info` data value passed by the initiating navigation operation (e.g. {{domxref("Navigation.back()")}}, or {{domxref("Navigation.navigate()")}}), or `undefined` if no `info` data was passed.

## Value

The `info` value passed by the initiating navigation operation, or `undefined` if none was passed.

## Examples

One example of how `info` might be used is to trigger different single-page navigation renderings depending on how a certain route was reached. For example, consider a photo gallery app, where you can reach the same photo URL and state via various routes. You might want to use a different animation to show the photo for each route.

```js
navigation.addEventListener("navigate", (event) => {
  if (isPhotoNavigation(event)) {
    event.intercept({
      async handler() {
        switch (event.info?.via) {
          case "go-left": {
            await animateLeft();
            break;
          }
          case "go-right": {
            await animateRight();
            break;
          }
          case "gallery": {
            await animateZoomFromThumbnail(event.info.thumbnail);
            break;
          }
        }

        // TODO: actually load the photo.
      },
    });
  }
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
- Methods that allow info to be passed — {{domxref("Navigation.back()")}}, {{domxref("Navigation.forward()")}}, {{domxref("Navigation.navigate()")}}, {{domxref("Navigation.reload()")}}, and {{domxref("Navigation.traverseTo()")}}

---
title: "NavigationDestination: index property"
short-title: index
slug: Web/API/NavigationDestination/index
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigationDestination.index
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`index`** read-only property of the
{{domxref("NavigationDestination")}} interface returns the {{domxref("NavigationHistoryEntry.index", "index")}} value of the destination {{domxref("NavigationHistoryEntry")}} if the {{domxref("NavigateEvent.navigationType")}} is `traverse`, or `-1` otherwise.

## Value

A number representing the `index` of the destination {{domxref("NavigationHistoryEntry")}}, or -1.

## Examples

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.index);
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

---
title: "NavigationDestination: key property"
short-title: key
slug: Web/API/NavigationDestination/key
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigationDestination.key
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`key`** read-only property of the
{{domxref("NavigationDestination")}} interface returns the {{domxref("NavigationHistoryEntry.key", "key")}} value of the destination {{domxref("NavigationHistoryEntry")}} if the {{domxref("NavigateEvent.navigationType")}} is `traverse`, or an empty string otherwise.

The `key` is a unique, UA-generated value that represents the history entry's slot in the history entries list, used to navigate to this place in the history via {{domxref("Navigation.traverseTo()")}}. It will be reused by other entries that replace the entry in the list (i.e. if the {{domxref("NavigateEvent.navigationType")}} is `replace`).

## Value

A string representing the `key` of the destination {{domxref("NavigationHistoryEntry")}}, or an empty string.

## Examples

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.key);
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

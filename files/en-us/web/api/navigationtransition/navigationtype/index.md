---
title: "NavigationTransition: navigationType property"
short-title: navigationType
slug: Web/API/NavigationTransition/navigationType
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigationTransition.navigationType
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`navigationType`** read-only property of the
{{domxref("NavigationTransition")}} interface returns the type of the ongoing navigation.

## Value

An enumerated value representing the type of ongoing navigation.

The possible values are:

- `push`: A new location is navigated to, causing a new entry to be pushed onto the history list.
- `reload`: The {{domxref("Navigation.currentEntry")}} is reloaded.
- `replace`: The {{domxref("Navigation.currentEntry")}} is replaced with a new history entry. This new entry will reuse the same {{domxref("NavigationHistoryEntry.key", "key")}}, but be assigned a different {{domxref("NavigationHistoryEntry.id", "id")}}.
- `traverse`: The browser navigates from one existing history entry to another existing history entry.

## Examples

```js
console.log(navigation.transition.navigationType);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)

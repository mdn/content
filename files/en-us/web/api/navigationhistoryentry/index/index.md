---
title: "NavigationHistoryEntry: index property"
short-title: index
slug: Web/API/NavigationHistoryEntry/index
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigationHistoryEntry.index
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`index`** read-only property of the
{{domxref("NavigationHistoryEntry")}} interface returns the index of the history entry in the history entries list (that is, the list returned by {{domxref("Navigation.entries()")}}), or `-1` if the entry does not appear in the list.

## Value

A number representing the `index` of the entry in the history entries list, or `-1` if this item does not appear in the list.

## Examples

```js
const current = navigation.currentEntry;
console.log(current.index);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)

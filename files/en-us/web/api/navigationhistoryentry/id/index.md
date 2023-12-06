---
title: "NavigationHistoryEntry: id property"
short-title: id
slug: Web/API/NavigationHistoryEntry/id
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigationHistoryEntry.id
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`id`** read-only property of the
{{domxref("NavigationHistoryEntry")}} interface returns the `id` of the history entry. This is a unique, UA-generated value that always represents a specific history entry, useful to correlate it with an external resource such as a storage cache.

This differs from the {{domxref("NavigationHistoryEntry.key", "key")}} of a history entry. The `key` is a unique, UA-generated value that represents the history entry's slot in the entries list rather than the entry itself. It is used to navigate that particular slot via {{domxref("Navigation.traverseTo()")}}. The `key` will be reused by other entries that replace the entry in the list (that is, if the {{domxref("NavigateEvent.navigationType")}} is `replace`).

## Value

A string representing the `id` of the {{domxref("NavigationHistoryEntry")}}.

## Examples

```js
const current = navigation.currentEntry;
console.log(current.id);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)

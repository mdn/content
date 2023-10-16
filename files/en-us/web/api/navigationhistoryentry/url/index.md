---
title: "NavigationHistoryEntry: url property"
short-title: url
slug: Web/API/NavigationHistoryEntry/url
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigationHistoryEntry.url
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`url`** read-only property of the
{{domxref("NavigationHistoryEntry")}} interface returns the absolute URL of this history entry.

## Value

A string representing the URL.

## Examples

```js
const current = navigation.currentEntry;
console.log(current.url);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)

---
title: NavigationCurrentEntryChangeEvent.from
slug: Web/API/NavigationCurrentEntryChangeEvent/from
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - from
  - History
  - Navigate
  - Navigation
  - Navigation API
  - Property
  - Read-only
  - Reference
  - Scroll
  - Traversal
browser-compat: api.NavigationCurrentEntryChangeEvent.from
---

{{APIRef("Navigation API")}}{{seecompattable}}

The **`from`** read-only property of the
{{domxref("NavigationCurrentEntryChangeEvent")}} interface returns the {{domxref("NavigationHistoryEntry")}} that was navigated from.

## Value

A {{domxref("NavigationHistoryEntry")}} object.

## Examples

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.from);
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

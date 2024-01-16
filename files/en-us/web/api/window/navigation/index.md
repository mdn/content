---
title: "Window: navigation property"
short-title: navigation
slug: Web/API/Window/navigation
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Window.navigation
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`navigation`** read-only property of the {{domxref("Window")}} interface returns the current `window`'s associated {{domxref("Navigation")}} object.

This is the entry point for the {{domxref("Navigation API", "", "", "nocode")}}.

## Value

A {{domxref("Navigation")}} object instance.

## Examples

```js
let currentNavEntries = window.navigation.entries();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)

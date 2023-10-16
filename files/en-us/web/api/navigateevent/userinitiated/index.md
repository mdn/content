---
title: "NavigateEvent: userInitiated property"
short-title: userInitiated
slug: Web/API/NavigateEvent/userInitiated
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigateEvent.userInitiated
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`userInitiated`** read-only property of the
{{domxref("NavigateEvent")}} interface returns `true` if the navigation was initiated by the user (e.g. by clicking a link, submitting a form, or pressing the browser's "Back"/"Forward" buttons), or `false` otherwise.

> **Note:** The table found at [Appendix: types of navigations](https://github.com/WICG/navigation-api#appendix-types-of-navigations) shows which navigation types are user-initiated.

## Value

A boolean value—`true` if the navigation is user-initiated, `false` if not.

## Examples

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.userInitiated);
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

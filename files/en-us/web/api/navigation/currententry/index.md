---
title: Navigation.currentEntry
slug: Web/API/Navigation/currentEntry
page-type: web-api-instance-property
tags:
  - API
  - currentEntry
  - Experimental
  - History
  - Navigate
  - Navigation
  - Navigation API
  - Property
  - Read-only
  - Reference
  - Scroll
  - Traversal
browser-compat: api.Navigation.currentEntry
---

{{APIRef("Navigation API")}}{{seecompattable}}

The **`currentEntry`** read-only property of the
{{domxref("Navigation")}} interface returns a {{domxref("NavigationHistoryEntry")}} object representing the location the user is currently
    navigated to right now.

## Value

A {{domxref("NavigationHistoryEntry")}} object.

## Examples

```js
async function initHomeBtn() {
  // Get the key of the first loaded page
  // so the user can always go back there.
  const {key} = navigation.currentEntry;
  backToHomeButton.onclick = () => navigation.traverseTo(key);
}

async function handleNavigate(url) {
  // Navigate away, but the button will always work.
  await navigation.navigate(url).finished;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)

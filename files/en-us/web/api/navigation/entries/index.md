---
title: "Navigation: entries() method"
short-title: entries()
slug: Web/API/Navigation/entries
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigation.entries
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`entries()`** method of the
{{domxref("Navigation")}} interface returns an array of {{domxref("NavigationHistoryEntry")}} objects representing all existing history entries.

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

An array of {{domxref("NavigationHistoryEntry")}} objects.

### Exceptions

None.

## Examples

### Return the number of entries in the history

```js
let numOfEntries = Navigation.entries().length - 1;
```

### A smart back button

A page-supplied "back" button can take you back, even after reload, by inspecting the previous history entries:

```js
backButtonEl.addEventListener("click", () => {
  if (
    navigation.entries()[navigation.currentEntry.index - 1]?.url ===
    "/product-listing"
  ) {
    navigation.back();
  } else {
    // If the user arrived here in some other way
    // e.g. by typing the URL directly:
    navigation.navigate("/product-listing", { history: "replace" });
  }
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

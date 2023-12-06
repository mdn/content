---
title: "NavigationHistoryEntry: key property"
short-title: key
slug: Web/API/NavigationHistoryEntry/key
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigationHistoryEntry.key
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`key`** read-only property of the
{{domxref("NavigationHistoryEntry")}} interface returns the `key` of the history entry. This is a unique, UA-generated value that represents the history entry's slot in the entries list. It is used to navigate that particular slot via {{domxref("Navigation.traverseTo()")}}. The `key` will be reused by other entries that replace the entry in the list (that is, if the {{domxref("NavigateEvent.navigationType")}} is `replace`).

This differs from the {{domxref("NavigationHistoryEntry.id", "id")}} of a history entry. The `id` is a unique, UA-generated value that always represents a specific history entry rather than its slot in the entries list. This is useful to correlate it with an external resource such as a storage cache.

## Value

A string representing the `key` of the {{domxref("NavigationHistoryEntry")}}.

## Examples

### Basic usage

```js
const current = navigation.currentEntry;
console.log(current.key);
```

### Set up a home button

```js
function initHomeBtn() {
  // Get the key of the first loaded entry
  // so the user can always go back to this view.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// Intercept navigate events, such as link clicks, and
// replace them with single-page navigations
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // Navigate to a different view,
      // but the "home" button will always work.
    },
  });
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

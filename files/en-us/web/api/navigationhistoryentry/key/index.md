---
title: NavigationHistoryEntry.key
slug: Web/API/NavigationHistoryEntry/key
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - History
  - key
  - Navigate
  - Navigation
  - Navigation API
  - Property
  - Read-only
  - Reference
  - Scroll
  - Traversal
browser-compat: api.NavigationHistoryEntry.key
---

{{APIRef("Navigation API")}}{{seecompattable}}

The **`key`** read-only property of the
{{domxref("NavigationHistoryEntry")}} interface returns the `key` of the history entry. This is a unique, UA-generated value that represents the history entry's slot in the history entries list, used to navigate to this place in the history via {{domxref("Navigation.traverseTo()")}}. It will be reused by other entries that replace the entry in the list (i.e. if the {{domxref("NavigateEvent.navigationType")}} is `replace`).

## Value

A string representing the `key` of the destination {{domxref("NavigationHistoryEntry")}}.

## Examples

### Basic usage

```js
let current = navigation.currentEntry;
console.log(current.key);
```

### Set up a home button

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

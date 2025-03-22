---
title: "Navigation: traverseTo() method"
short-title: traverseTo()
slug: Web/API/Navigation/traverseTo
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigation.traverseTo
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`traverseTo()`** method of the {{domxref("Navigation")}} interface navigates to the {{domxref("NavigationHistoryEntry")}} identified by the given {{domxref("NavigationHistoryEntry.key", "key")}}.

## Syntax

```js-nolint
traverseTo(key)
traverseTo(key, options)
```

### Parameters

- `key`
  - : The `key` of the {{domxref("NavigationHistoryEntry")}} to navigate to.
- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `info` {{optional_inline}}
      - : Developer-defined information to be passed along to the {{domxref("Navigation/navigate_event", "navigate")}} event, made available in {{domxref("NavigateEvent.info")}}. This can be any data type. You might, for example, wish to display newly-navigated content with a different animation depending on how it was navigated to (swipe left, swipe right, or go home). A string indicating which animation to use could be passed in as `info`.

### Return value

An object with the following properties:

- `committed`
  - : A {{jsxref("Promise")}} which will fulfill when the visible URL has changed and a new {{domxref("NavigationHistoryEntry")}} has been created.
- `finished`
  - : A {{jsxref("Promise")}} which will fulfill when all promises returned by the `intercept()` handler are fulfilled. This is equivalent to the {{domxref("NavigationTransition.finished")}} promise fulfilling, when the {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} event fires.

Either one of these promises rejects if the navigation has failed for some reason.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("Navigation.currentEntry")}}'s {{domxref("NavigationHistoryEntry.index")}} value is -1, meaning the current {{domxref("Document")}} is not yet active, or if the navigation history list does not contain a {{domxref("NavigationHistoryEntry")}} with the specified key, or if the current {{domxref("Document")}} is unloading.

## Examples

### Set up home button

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

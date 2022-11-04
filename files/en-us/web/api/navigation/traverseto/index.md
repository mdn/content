---
title: Navigation.traverseTo()
slug: Web/API/Navigation/traverseTo
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - History
  - Method
  - Navigate
  - Navigation
  - Navigation API
  - Reference
  - Scroll
  - transition
  - Traversal
  - traverseTo
browser-compat: api.Navigation.traverseTo
---

{{APIRef("Navigation API")}}{{seecompattable}}

The **`traverseTo()`** method of the
{{domxref("Navigation")}} interface navigates to a specific {{domxref("NavigationHistoryEntry")}} by {{domxref("NavigationHistoryEntry.key", "key")}}.

## Syntax

```js-nolint
traverseTo(key, options)
```

### Parameters

- `key`
  - : The `key` of the {{domxref("NavigationHistoryEntry")}} to navigate to.
- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `info`
      - : Developer-defined information to be passed along to the {{domxref("Navigation/navigate_event", "navigate")}} event, made available in {{domxref("NavigateEvent.info")}}. This can be any data type. You might, for example, wish to display newly-navigated content with a different animation depending on how it was navigated to (swipe left, swipe right, or go home). A string indicating which animation to use could be passed in as `info`.

### Return value

An object containing two promises — `{ committed, finished }`. This allows the invoking function to wait on taking further action until:

- `committed` fulfills, meaning that the visible URL has changed and a new {{domxref("NavigationHistoryEntry")}} has been created.
- `finished` fulfills, meaning that all promises returned by the `intercept()` handler are fulfilled. This is equivalent to the {{domxref("NavigationTransition.finished")}} promise fulfilling, when the {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} event fires.
- either one of the above promises rejects, meaning that the navigation has failed for some reason.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("Navigation.currentEntry")}}'s {{domxref("NavigationHistoryEntry.index")}} value is -1, meaning the current {{domxref("Document")}} is not yet active, of if the navigation history list does not contain a {{domxref("NavigationHistoryEntry")}} with the specified key.

## Examples

### Set up home button

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const {key} = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate('/another_url').finished;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)

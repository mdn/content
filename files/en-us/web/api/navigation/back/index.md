---
title: "Navigation: back() method"
short-title: back()
slug: Web/API/Navigation/back
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigation.back
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`back()`** method of the
{{domxref("Navigation")}} interface navigates backwards by one entry in the navigation history.

## Syntax

```js-nolint
back(options)
```

### Parameters

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
  - : Thrown if the {{domxref("Navigation.currentEntry")}}'s {{domxref("NavigationHistoryEntry.index")}} value is -1 or 0, i.e. either the current {{domxref("Document")}} is not yet active, or the current history entry is the first one in the history, meaning that backwards navigation is not possible, or if the current {{domxref("Document")}} is unloading.

## Examples

```js
async function backHandler() {
  if (navigation.canGoBack) {
    await navigation.back().finished;
    // Handle any required clean-up after
    // navigation has finished
  } else {
    displayBanner("You are on the first page");
  }
}

async function forwardHandler() {
  if (navigation.canGoForward) {
    await navigation.forward().finished;
    // Handle any required clean-up after
    // navigation has finished
  } else {
    displayBanner("You are on the last page");
  }
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

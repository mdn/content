---
title: "Navigation: reload() method"
short-title: reload()
slug: Web/API/Navigation/reload
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigation.reload
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`reload()`** method of the
{{domxref("Navigation")}} interface reloads the current URL, updating any provided state in the history entries list.

## Syntax

```js-nolint
reload(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An options object containing the following properties:
    - `state` {{optional_inline}}
      - : Developer-defined information to be stored in the associated {{domxref("NavigationHistoryEntry")}} once the navigation is complete, retrievable via {{domxref("NavigationHistoryEntry.getState", "getState()")}}. This can be any data type. You might, for example, wish to store a page visit count for analytics purposes, or store UI state details so the view can be shown exactly as the user last left it. Any data stored in `state` must be [structured-cloneable](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
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

- `DataCloneError` {{domxref("DOMException")}}
  - : Thrown if the `state` parameter had values included in it that are not structured-cloneable.

## Examples

### Using info and state

```js
async function handleReload() {
  await navigation.reload({
    info: { animation: "fade-in" },
    state: { infoPaneOpen: true },
  }).finished;

  // Update application state
  // ...
}
```

Reload page and add a new state item:

```js
async function handleReload() {
  await navigation.reload({
    state: { ...navigation.currentEntry.getState(), newState: 3 },
  }).finished;

  // Update application state
  // ...
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

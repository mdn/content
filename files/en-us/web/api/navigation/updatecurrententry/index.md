---
title: "Navigation: updateCurrentEntry() method"
short-title: updateCurrentEntry()
slug: Web/API/Navigation/updateCurrentEntry
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Navigation.updateCurrentEntry
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`updateCurrentEntry()`** method of the {{domxref("Navigation")}} interface updates the `state` of the {{domxref("Navigation.currentEntry","currentEntry")}}; used in cases where the state change will be independent of a navigation or reload.

## Syntax

```js-nolint
updateCurrentEntry(options)
```

### Parameters

- `options`
  - : An options object containing the following properties:
    - `state`
      - : Developer-defined information to be stored in the associated {{domxref("NavigationHistoryEntry")}} once the navigation is complete, retrievable via {{domxref("NavigationHistoryEntry.getState", "getState()")}}. This can be any data type. You might, for example, wish to store a page visit count for analytics purposes, or store UI state details so the view can be shown exactly as the user last left it. Any data stored in `state` must be [structured-cloneable](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

### Return value

None (`undefined`).

### Exceptions

- `DataCloneError` {{domxref("DOMException")}}
  - : Thrown if the `state` parameter had values included in it that are not structured-cloneable.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("Navigation.currentEntry")}} is `null`, i.e. there is no current history entry. This could occur for example if the current page is `about:blank`.

## Examples

You could use something like the following to update the open/closed state of a {{htmlelement("details")}} element so that the state can be restored when reloading the page or navigating back from somewhere else.

```js
detailsElem.addEventListener("toggle", () => {
  navigation.updateCurrentEntry({ state: { detailOpen: detailsElem.open } });
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

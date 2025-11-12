---
title: "NavigationPrecommitController: redirect() method"
short-title: redirect()
slug: Web/API/NavigationPrecommitController/redirect
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.NavigationPrecommitController.redirect
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`redirect()`** method of the
{{domxref("NavigationPrecommitController")}} interface redirects the browser to a specified URL and specifies history behavior and any desired state information.

## Syntax

```js-nolint
redirect(url, options)
```

### Parameters

- `url`
  - : The URL to redirect to.
- `options` {{optional_inline}}
  - : An options object, the properties of which can include:
    - `state` {{optional_inline}}
      - : Contains any state information you want to pass along with the navigation; for example, for logging or tracking purposes. This can be represented by any value type. The state for the navigation can subsequently be retrieved via the {{domxref("NavigationHistoryEntry.getState()")}} method of the resulting history entry.
    - `history` {{optional_inline}}
      - : An enumerated value that specifies how this redirect should be added to the navigation history. It can take one of the following values:
        - `auto`
          - : The default value, which lets the browser decide how to handle it:
            - If the original navigation occurred as a result of a {{domxref("Navigation.navigate()")}} call, the value will be whatever was specified in the `navigate()` call's [`history`](/en-US/docs/Web/API/Navigation/navigate#history) option.
            - Otherwise, the value used is usually `push`, but it will become `replace` if the redirect points to the same URL as the pre-navigation URL.
        - `push`
          - : Adds a new {{domxref("NavigationHistoryEntry")}} to the navigation history, and clears any available forward navigation (that is, if the user previously navigated to other locations, then used the back button to return back through the history before initiating the navigation that caused the redirect).
        - `replace`
          - : Replaces the {{domxref("Navigation.currentEntry")}} with the resulting new `NavigationHistoryEntry`.

> [!NOTE]
> The `redirect()` method can convert the history behavior between `auto`, `push`, and `replace`, but it cannot turn a `traverse` navigation into a `push`/`replace` navigation and vice versa.

### Return value

None (`undefined`).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if:
    - The originating {{domxref("NavigateEvent")}} was not intercepted.
    - The {{domxref("NavigateEvent.navigationType")}} is not `push` or `replace`.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if the specified `url` is invalid.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the current document is unable to have its URL rewritten to the preovided redirect `url`.

## Examples

See the main {{domxref("NavigationPrecommitController")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)

---
title: Navigation
slug: Web/API/Navigation
page-type: web-api-interface
status:
  - experimental
browser-compat: api.Navigation
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`Navigation`** interface of the {{domxref("Navigation API", "Navigation API", "", "nocode")}} allows control over all navigation actions for the current `window` in one central place, including initiating navigations programmatically, examining navigation history entries, and managing navigations as they happen.

It is accessed via the {{domxref("Window.navigation")}} property.

The Navigation API only exposes history entries created in the current browsing context that have the same origin as the current page (e.g. not navigations inside embedded {{htmlelement("iframe")}}s, or cross-origin navigations), providing an accurate list of all previous history entries just for your app. This makes traversing the history a much less fragile proposition than with the older {{domxref("History API", "History API", "", "nocode")}}.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("Navigation.canGoBack", "canGoBack")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `true` if it is possible to navigate backwards in the navigation history
    (i.e. the {{domxref("Navigation.currentEntry", "currentEntry")}} is not the first one in the history entry list),
    and `false` if it is not.
- {{domxref("Navigation.canGoForward", "canGoForward")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `true` if it is possible to navigate forwards in the navigation history
    (i.e. the {{domxref("Navigation.currentEntry", "currentEntry")}} is not the last one in the history entry list),
    and `false` if it is not.
- {{domxref("Navigation.currentEntry", "currentEntry")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("NavigationHistoryEntry")}} object representing the location the user is currently
    navigated to right now.
- {{domxref("Navigation.transition", "transition")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a {{domxref("NavigationTransition")}} object representing the status of an in-progress navigation,
    which can be used to track it. Returns `null` if no navigation is currently in progress.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("Navigation.back", "back()")}} {{Experimental_Inline}}
  - : Navigates backwards by one entry in the navigation history.
- {{domxref("Navigation.entries", "entries()")}} {{Experimental_Inline}}
  - : Returns an array of {{domxref("NavigationHistoryEntry")}} objects representing all existing history entries.
- {{domxref("Navigation.forward", "forward()")}} {{Experimental_Inline}}
  - : Navigates forwards by one entry in the navigation history.
- {{domxref("Navigation.navigate", "navigate()")}} {{Experimental_Inline}}
  - : Navigates to a specific URL, updating any provided state in the history entries list.
- {{domxref("Navigation.reload", "reload()")}} {{Experimental_Inline}}
  - : Reloads the current URL, updating any provided state in the history entries list.
- {{domxref("Navigation.traverseTo", "traverseTo()")}} {{Experimental_Inline}}
  - : Navigates to a specific {{domxref("NavigationHistoryEntry")}} identified by {{domxref("NavigationHistoryEntry.key", "key")}}.
- {{domxref("Navigation.updateCurrentEntry", "updateCurrentEntry()")}} {{Experimental_Inline}}
  - : Updates the state of the {{domxref("Navigation.currentEntry","currentEntry")}}; used
    in cases where the state change will be independent from a navigation or reload.

## Events

- {{domxref("Navigation/currententrychange_event", "currententrychange")}} {{Experimental_Inline}}
  - : Fired when the {{domxref("Navigation.currentEntry")}} has changed.
- {{domxref("Navigation/navigate_event", "navigate")}} {{Experimental_Inline}}
  - : Fired when [any type of navigation](https://github.com/WICG/navigation-api#appendix-types-of-navigations) is initiated, allowing you to intercept as required.
- {{domxref("Navigation/navigateerror_event", "navigateerror")}} {{Experimental_Inline}}
  - : Fired when a navigation fails.
- {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} {{Experimental_Inline}}
  - : Fired when a successful navigation has finished.

## Examples

### Moving forwards and backwards in the history

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

### Traversing to a specific history entry

```js
// On JS startup, get the key of the first loaded page
// so the user can always go back there.
const { key } = navigation.currentEntry;
backToHomeButton.onclick = () => navigation.traverseTo(key);

// Navigate away, but the button will always work.
await navigation.navigate("/another_url").finished;
```

### Navigating and updating state

```js
navigation.navigate(url, { state: newState });
```

Or

```js
navigation.reload({ state: newState });
```

Or if the state is independent from a navigation or reload:

```js
navigation.updateCurrentEntry({ state: newState });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicola's [Navigation API live demo](https://gigantic-honored-octagon.glitch.me/)

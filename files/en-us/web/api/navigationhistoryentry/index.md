---
title: NavigationHistoryEntry
slug: Web/API/NavigationHistoryEntry
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NavigationHistoryEntry
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`NavigationHistoryEntry`** interface of the {{domxref("Navigation API", "Navigation API", "", "nocode")}} represents a single navigation history entry.

These objects are commonly accessed via the {{domxref("Navigation.currentEntry")}} property and {{domxref("Navigation.entries()")}} method.

The Navigation API only exposes history entries created in the current browsing context that have the same origin as the current page (e.g. not navigations inside embedded {{htmlelement("iframe")}}s, or cross-origin navigations), providing an accurate list of all previous history entries just for your app. This makes traversing the history a much less fragile proposition than with the older {{domxref("History API", "History API", "", "nocode")}}.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("NavigationHistoryEntry.id", "id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the `id` of the history entry. This is a unique, UA-generated value that always represents a specific history entry, useful to correlate it with an external resource such as a storage cache.
- {{domxref("NavigationHistoryEntry.index", "index")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the index of the history entry in the history entries list (that is, the list returned by {{domxref("Navigation.entries()")}}), or `-1` if the entry does not appear in the list.
- {{domxref("NavigationHistoryEntry.key", "key")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the `key` of the history entry. This is a unique, UA-generated value that represents the history entry's slot in the entries list rather than the entry itself. It is used to navigate that particular slot via {{domxref("Navigation.traverseTo()")}}. The `key` will be reused by other entries that replace the entry in the list (that is, if the {{domxref("NavigateEvent.navigationType")}} is `replace`).
- {{domxref("NavigationHistoryEntry.sameDocument", "sameDocument")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `true` if this history entry is for the same `document` as the current {{domxref("Document")}} value, or `false` otherwise.
- {{domxref("NavigationHistoryEntry.url", "url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the absolute URL of this history entry.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("NavigationHistoryEntry.getState", "getState()")}} {{Experimental_Inline}}
  - : Returns a clone of the available state associated with this history entry.

## Events

- {{domxref("NavigationHistoryEntry/dispose_event", "dispose")}} {{Experimental_Inline}}
  - : Fires when the entry is no longer part of the history entry list.

## Examples

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

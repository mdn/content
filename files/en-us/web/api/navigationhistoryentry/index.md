---
title: NavigationHistoryEntry
slug: Web/API/NavigationHistoryEntry
page-type: web-api-interface
tags:
  - API
  - Experimental
  - History
  - Interface
  - Landing
  - Navigate
  - NavigationHistoryEntry
  - Navigation API
  - Reference
  - Scroll
  - Traversal
browser-compat: api.NavigationHistoryEntry
---

{{APIRef("Navigation API")}}{{seecompattable}}

The **`NavigationHistoryEntry`** interface of the {{domxref("Navigation API", "Navigation API", "", "nocode")}} represents a single navigation history entry.

These objects are commonly accessed via the {{domxref("Navigation.currentEntry")}} property and {{domxref("Navigation.entries()")}} method.

The Navigation API only exposes history entries created directly by the application (i.e. not {{htmlelement("iframe")}} navigations or cross-origin navigations), providing an accurate list of all previous history entries just for your app. This makes traversing the history a much less fragile proposition than the older {{domxref("History API", "History API", "", "nocode")}}.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("NavigationHistoryEntry.id", "id")}} {{ReadOnlyInline}}
  - : Returns the `id` of the history entry. This is a unique, UA-generated value that always represents the history entry, useful to correlate a history entry with an external resource such as a storage cache.
- {{domxref("NavigationHistoryEntry.index", "index")}} {{ReadOnlyInline}}
  - : Returns the index of the history entry in the history entries list (i.e. returned by {{domxref("Navigation.entries()")}}), or `-1` if the entry does not appear in the list.
- {{domxref("NavigationHistoryEntry.key", "key")}} {{ReadOnlyInline}}
  - : Returns the `key` of the history entry. This is a unique, UA-generated value that represents the history entry's slot in the history entries list, used to navigate to this place in the history via {{domxref("Navigation.traverseTo()")}}. It will be reused by other entries that replace the entry in the list (i.e. if the {{domxref("NavigateEvent.navigationType")}} is `replace`).
- {{domxref("NavigationHistoryEntry.sameDocument", "sameDocument")}} {{ReadOnlyInline}}
  - : Returns `true` if this history entry is for the same `document` as the current {{domxref("Document")}} value, or `false` otherwise.
- {{domxref("NavigationHistoryEntry.url", "url")}} {{ReadOnlyInline}}
  - : Returns the absolute URL of this history entry.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("EventTarget")}}._

- {{domxref("NavigationHistoryEntry.getState", "getState()")}}
  - : Returns a clone of the available state associated with this history entry.

## Events

- {{domxref("NavigationHistoryEntry/dispose_event", "dispose")}}
  - : Fires when the entry is no longer part of the history entry list.

## Examples

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

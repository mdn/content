---
title: NavigationCurrentEntryChangeEvent
slug: Web/API/NavigationCurrentEntryChangeEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NavigationCurrentEntryChangeEvent
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`NavigationCurrentEntryChangeEvent`** interface of the {{domxref("Navigation API", "Navigation API", "", "nocode")}} is the event object for the {{domxref("Navigation/currententrychange_event", "currententrychange")}} event, which fires when the {{domxref("Navigation.currentEntry")}} has changed.

This event will fire for same-document navigations (e.g. {{domxref("Navigation.back", "back()")}} or {{domxref("Navigation.traverseTo", "traverseTo()")}}), replacements (i.e. a {{domxref("Navigation.navigate", "navigate()")}} call with `history` set to `replace`), or other calls that change the entry's state (e.g. {{domxref("Navigation.updateCurrentEntry", "updateCurrentEntry()")}}, or the {{domxref("History API", "History API", "", "nocode")}}'s {{domxref("History.replaceState()")}}).

This event fires after the navigation is committed, meaning that the visible URL has changed and the {{domxref("NavigationHistoryEntry")}} update has occurred. It is useful for migrating from usage of older API features like the {{domxref("Window/hashchange_event", "hashchange")}} or {{domxref("Window/popstate_event", "popstate")}} events.

{{InheritanceDiagram}}

## Constructor

- {{domxref("NavigationCurrentEntryChangeEvent.NavigationCurrentEntryChangeEvent", "NavigationCurrentEntryChangeEvent()")}} {{Experimental_Inline}}
  - : Creates a new `NavigationCurrentEntryChangeEvent` object instance.

## Instance properties

_Inherits properties from its parent, {{DOMxRef("Event")}}._

- {{domxref("NavigationCurrentEntryChangeEvent.from", "from")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the {{domxref("NavigationHistoryEntry")}} that was navigated from.
- {{domxref("NavigationCurrentEntryChangeEvent.navigationType", "navigationType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the type of the navigation that resulted in the change.

## Examples

Navigation data reporting:

```js
navigation.addEventListener("currententrychange", () => {
  const data = navigation.currentEntry.getState();
  submitAnalyticsData(data.analytics);
});
```

Setting up a per-entry event:

```js
navigation.addEventListener("currententrychange", () => {
  navigation.currentEntry.addEventListener("dispose", genericDisposeHandler);
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

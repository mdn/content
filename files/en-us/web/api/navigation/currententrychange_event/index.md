---
title: "Navigation: currententrychange event"
short-title: currententrychange
slug: Web/API/Navigation/currententrychange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Navigation.currententrychange_event
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`currententrychange`** event of the {{domxref("Navigation")}} interface is fired when the {{domxref("Navigation.currentEntry")}} has changed.

This event will fire for:

- Same-document navigations (e.g. {{domxref("Navigation.back", "back()")}} or {{domxref("Navigation.traverseTo", "traverseTo()")}}).

- Replacements (i.e. a {{domxref("Navigation.navigate", "navigate()")}} call with `history` set to `replace`).

- Other calls that change the entry's state (e.g. {{domxref("Navigation.updateCurrentEntry", "updateCurrentEntry()")}}, or the {{domxref("History API", "History API", "", "nocode")}}'s {{domxref("History.replaceState()")}}).

This event fires after the navigation is committed, meaning that the visible URL has changed and the {{domxref("NavigationHistoryEntry")}} update has occurred. It is useful for migrating from usage of older API features like the {{domxref("Window/hashchange_event", "hashchange")}} or {{domxref("Window/popstate_event", "popstate")}} events.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("currententrychange", (event) => {});

oncurrententrychange = (event) => {};
```

## Event type

A {{domxref("NavigationCurrentEntryChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("NavigationCurrentEntryChangeEvent")}}

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

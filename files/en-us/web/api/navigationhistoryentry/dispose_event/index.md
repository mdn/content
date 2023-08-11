---
title: "NavigationHistoryEntry: dispose event"
short-title: dispose
slug: Web/API/NavigationHistoryEntry/dispose_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.NavigationHistoryEntry.dispose_event
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`dispose`** event of the {{domxref("NavigationHistoryEntry")}} interface is fired when the entry is no longer part of the history entry list.

Disposal occurs when:

- Forward history entries are cleared. See the example at [Notifications on entry disposal](https://github.com/wicg/navigation-api#notifications-on-entry-disposal) for more information.
- The user clears their browser history using settings or provided UI controls.
- The history limit is exceeded. This is not specified anywhere, but browsers tend to have a history limit of 50 pages.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("dispose", (event) => {});

ondispose = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

```js
navigation.addEventListener("currententrychange", () => {
  navigation.currentEntry.addEventListener("dispose", disposeHandler);
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

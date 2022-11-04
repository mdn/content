---
title: "NavigationHistoryEntry: dispose event"
slug: Web/API/NavigationHistoryEntry/dispose_event
page-type: web-api-event
tags:
  - API
  - dispose
  - Event
  - Experimental
  - History
  - Navigate
  - navigateerror
  - Navigation
  - Navigation API
  - Property
  - Reference
  - Scroll
  - Traversal
  - updateCurrentEntry
browser-compat: api.NavigationHistoryEntry.dispose_event
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`dispose`** event of the {{domxref("NavigationHistoryEntry")}} interface is fired when the entry is no longer part of the history entry list.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("dispose", (event) => {});

ondispose = (event) => {};
```

> **Note:** The event object is of type {{domxref("Event")}}.

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

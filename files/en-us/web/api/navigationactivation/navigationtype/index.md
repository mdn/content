---
title: "NavigationActivation: navigationType property"
short-title: navigationType
slug: Web/API/NavigationActivation/navigationType
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigationActivation.navigationType
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`navigationType`** read-only property of the {{domxref("NavigationActivation")}} interface contains a string indicating the type of navigation.

## Value

A string representing the type of navigation the {{domxref("NavigationActivation")}} relates to. Possible values are:

- `push`: A new location was navigated to, causing a new entry to be pushed onto the history list.
- `reload`: The {{domxref("NavigationActivation.entry")}} was reloaded.
- `replace`: The {{domxref("NavigationActivation.entry")}} was replaced with a new history entry. This new entry will reuse the same {{domxref("NavigationHistoryEntry.key", "key")}}, but be assigned a different {{domxref("NavigationHistoryEntry.id", "id")}}.
- `traverse`: The browser navigated from one existing history entry to another existing history entry.

## Examples

```js
window.addEventListener("pageswap", (event) => {
  // For example, the page was hidden, or the navigation is cross-document.
  if (!event.viewTransition) return;

  // Skip the view transition for back/forward navigations.
  if (event.activation.navigationType === "traverse") {
    event.viewTransition.skipTransition();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Navigation API](/en-US/docs/Web/API/Navigation_API)
- [View Transitions API](/en-US/docs/Web/API/View_Transitions_API)

---
title: "PerformanceSoftNavigation: navigationType property"
short-title: navigationType
slug: Web/API/PerformanceSoftNavigation/navigationType
page-type: web-api-instance-property
browser-compat: api.PerformanceSoftNavigation.navigationType
---

{{APIRef("Performance API")}}

The **`navigationType`** read-only property of the {{domxref("PerformanceSoftNavigation")}} interface returns the type of the soft navigation — `push`, `reload`, `replace`, or `traverse`.

This returns the same types as {{domxref("NavigateEvent.navigationType")}}.

## Value

An enumerated value representing the type of navigation.

The possible values are:

- `push`
  - : A new location is navigated to, causing a new entry to be pushed onto the history list.
- `reload`
  - : The {{domxref("Navigation.currentEntry")}} is reloaded.
- `replace`
  - : The {{domxref("Navigation.currentEntry")}} is replaced with a new history entry. This new entry will reuse the same {{domxref("NavigationHistoryEntry.key", "key")}}, but be assigned a different {{domxref("NavigationHistoryEntry.id", "id")}}.
- `traverse`
  - : The browser navigates from one existing history entry to another existing history entry.

## Examples

### Logging the navigation type of the soft navigation

This example uses a {{domxref("PerformanceObserver")}} to log new `soft-navigation` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Soft Nav:", entry.startTime, entry.navigationType);
  }
});
observer.observe({ type: "soft-navigation", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

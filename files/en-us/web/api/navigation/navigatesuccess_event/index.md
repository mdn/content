---
title: "Navigation: navigatesuccess event"
short-title: navigatesuccess
slug: Web/API/Navigation/navigatesuccess_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Navigation.navigatesuccess_event
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`navigatesuccess`** event of the {{domxref("Navigation")}} interface is fired when a successful navigation has finished.

In the case of an intercepted navigation, this would occur after any promises returned by your {{domxref("NavigateEvent.intercept", "intercept()")}} handler are fulfilled. The {{domxref("NavigationTransition.finished")}} promise will also fulfill at the same time.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("navigatesuccess", (event) => {});

onnavigatesuccess = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

You might deal with a successful navigation by hiding a previously displayed progress indicator, like this:

```js
navigation.addEventListener("navigatesuccess", (event) => {
  loadingIndicator.hidden = true;
});
```

Or you might show an error message on failure:

```js
navigation.addEventListener("navigateerror", (event) => {
  loadingIndicator.hidden = true; // also hide indicator
  showMessage(`Failed to load page: ${event.message}`);
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

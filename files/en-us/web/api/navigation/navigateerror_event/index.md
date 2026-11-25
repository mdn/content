---
title: "Navigation: navigateerror event"
short-title: navigateerror
slug: Web/API/Navigation/navigateerror_event
page-type: web-api-event
browser-compat: api.Navigation.navigateerror_event
---

{{APIRef("Navigation API")}}

The **`navigateerror`** event of the {{domxref("Navigation")}} interface is fired when a navigation fails.

For example, if the network is down, any {{domxref("Window/fetch", "fetch()")}} method invoked to handle a navigation will fail, and the error will be routed to `navigateerror`.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("navigateerror", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onnavigateerror = (event) => { }
```

## Event type

An {{domxref("ErrorEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ErrorEvent")}}

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

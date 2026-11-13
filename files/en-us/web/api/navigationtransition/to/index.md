---
title: "NavigationTransition: to property"
short-title: to
slug: Web/API/NavigationTransition/to
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.NavigationTransition.to
---

{{APIRef("Navigation API")}}{{seecompattable}}

The **`to`** read-only property of the {{domxref("NavigationTransition")}} interface returns a {{domxref("NavigationDestination")}} object representing the destination of the ongoing navigation.

## Value

A {{domxref("NavigationDestination")}} object.

## Description

This property lets code outside the {{domxref("Navigation/navigate_event", "navigate")}} event handler find out the destination of a navigation while it's in progress.
For example, a {{domxref("Navigation/navigateerror_event", "navigateerror")}} event handler can use it to report which navigation failed.
The error event itself doesn't include the destination, and if the navigation failed before the URL changed, the document URL and {{domxref("Navigation.currentEntry")}} still refer to the previous page.

`to` returns the same object as the {{domxref("NavigateEvent.destination")}} property of the `navigate` event that started the navigation.

{{domxref("Navigation.transition")}} is only set for navigations that a `navigate` event handler intercepted using {{domxref("NavigateEvent.intercept()")}}.
It is set back to `null` after the {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} or `navigateerror` event fires, so handlers for those events can still read it.

## Examples

### Reporting which navigation failed

This `navigateerror` handler logs the path of a navigation that failed, along with the error message.
It first checks that `navigation.transition` isn't `null`, which is the case for navigations that weren't intercepted, such as one canceled with {{domxref("Event.preventDefault()", "preventDefault()")}}.

```js
navigation.addEventListener("navigateerror", (event) => {
  if (!navigation.transition) {
    return;
  }
  const { pathname } = new URL(navigation.transition.to.url);
  console.error(`Navigation to ${pathname} failed: ${event.message}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)

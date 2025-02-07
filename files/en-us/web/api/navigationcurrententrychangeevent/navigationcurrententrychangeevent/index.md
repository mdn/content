---
title: "NavigationCurrentEntryChangeEvent: NavigationCurrentEntryChangeEvent() constructor"
short-title: NavigationCurrentEntryChangeEvent()
slug: Web/API/NavigationCurrentEntryChangeEvent/NavigationCurrentEntryChangeEvent
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.NavigationCurrentEntryChangeEvent.NavigationCurrentEntryChangeEvent
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`NavigationCurrentEntryChangeEvent()`** constructor creates a new {{domxref("NavigationCurrentEntryChangeEvent")}} object.

## Syntax

```js-nolint
new NavigationCurrentEntryChangeEvent(type, init)
```

### Parameters

- `type`
  - : A string representing the type of event.
- `init`
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:
    - `from`
      - : A {{domxref("NavigationHistoryEntry")}} object representing the location being navigated to.
    - `navigationType` {{optional_inline}}
      - : The type of the navigation that resulted in the change. Possible values are `push`, `reload`, `replace`, and `traverse`. Defaults to `null`.

### Return value

A new {{domxref("NavigationCurrentEntryChangeEvent")}} object.

## Examples

A developer would not use this constructor manually. A new `NavigationCurrentEntryChangeEvent` object is constructed when a handler is invoked as a result of the {{domxref("Navigation.currententrychange_event", "currententrychange")}} event firing.

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.navigationType);
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

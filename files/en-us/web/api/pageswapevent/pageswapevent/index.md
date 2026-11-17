---
title: "PageSwapEvent: PageSwapEvent() constructor"
short-title: PageSwapEvent()
slug: Web/API/PageSwapEvent/PageSwapEvent
page-type: web-api-constructor
browser-compat: api.PageSwapEvent.PageSwapEvent
---

{{APIRef("HTML DOM")}}

The **`PageSwapEvent()`** constructor creates a new {{domxref("PageSwapEvent")}} object instance.

## Syntax

```js-nolint
new PageSwapEvent(type, init)
```

### Parameters

- `type`
  - : A string representing the type of event.
    It is case-sensitive and browsers set it to `pageswap`.
- `init` {{optional_inline}}
  - : An object containing the following properties:
    - `activation` {{optional_inline}}
      - : A {{domxref("NavigationActivation")}} object representing the navigation type and the history entries for the current and destination documents.
        Defaults to `null`.
    - `viewTransition` {{optional_inline}}
      - : A {{domxref("ViewTransition")}} object representing the active view transition for the related navigation.
        Defaults to `null`.

### Return value

A new {{domxref("PageSwapEvent")}} object.

## Examples

A developer would not use this constructor manually.
The browser creates a `PageSwapEvent` object when it fires the {{domxref("Window.pageswap_event", "pageswap")}} event, and passes it to your event handler.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transition API](/en-US/docs/Web/API/View_Transition_API)

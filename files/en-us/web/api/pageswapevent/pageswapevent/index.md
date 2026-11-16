---
title: "PageSwapEvent: PageSwapEvent() constructor"
short-title: PageSwapEvent()
slug: Web/API/PageSwapEvent/PageSwapEvent
page-type: web-api-constructor
browser-compat: api.PageSwapEvent.PageSwapEvent
---

{{APIRef("HTML DOM")}}

The **`PageSwapEvent()`** constructor creates a new
{{domxref("PageSwapEvent")}} object instance.

## Syntax

```js-nolint
new PageSwapEvent(type, init)
```

### Parameters

- `type`
  - : A string representing the type of event. In the case of `PageSwapEvent` this is always `pageswap`.
- `init` {{optional_inline}}
  - : An object containing the following properties:
    - `activation` {{optional_inline}}
      - : A {{domxref("NavigationActivation")}} object representing the navigation type and current and destination document history entries.
        Defaults to `null`.
    - `viewTransition` {{optional_inline}}
      - : A {{domxref("ViewTransition")}} object representing the active view transition for the related navigation.
        Defaults to `null`.

## Examples

A developer would not use this constructor manually. A new `PageSwapEvent` object is constructed when a handler is invoked as a result of the {{domxref("Window.pageswap_event", "pageswap")}} event firing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transition API](/en-US/docs/Web/API/View_Transition_API)

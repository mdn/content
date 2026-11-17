---
title: "PageRevealEvent: PageRevealEvent() constructor"
short-title: PageRevealEvent()
slug: Web/API/PageRevealEvent/PageRevealEvent
page-type: web-api-constructor
browser-compat: api.PageRevealEvent.PageRevealEvent
---

{{APIRef("HTML DOM")}}

The **`PageRevealEvent()`** constructor creates a new {{domxref("PageRevealEvent")}} object instance.

## Syntax

```js-nolint
new PageRevealEvent(type, init)
```

### Parameters

- `type`
  - : A string representing the type of event.
    It is case-sensitive and browsers set it to `pagereveal`.
- `init` {{optional_inline}}
  - : An object containing the following properties:
    - `viewTransition` {{optional_inline}}
      - : A {{domxref("ViewTransition")}} object representing the active view transition for the related navigation.
        Defaults to `null`.

### Return value

A new {{domxref("PageRevealEvent")}} object.

## Examples

A developer would not use this constructor manually.
The browser creates a `PageRevealEvent` object when it fires the {{domxref("Window.pagereveal_event", "pagereveal")}} event, and passes it to your event handler.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transition API](/en-US/docs/Web/API/View_Transition_API)

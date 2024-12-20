---
title: "PageRevealEvent: PageRevealEvent() constructor"
short-title: PageRevealEvent()
slug: Web/API/PageRevealEvent/PageRevealEvent
page-type: web-api-constructor
browser-compat: api.PageRevealEvent.PageRevealEvent
---

{{APIRef("HTML DOM")}}

The **`PageRevealEvent()`** constructor creates a new
{{domxref("PageRevealEvent")}} object instance.

## Syntax

```js-nolint
new PageRevealEvent(type, init)
```

### Parameters

- `type`
  - : A string representing the type of event. In the case of `PageRevealEvent` this is always `pagereveal`.
- `init`
  - : An object containing the following properties:
    - `viewTransition` {{optional_inline}}
      - : A {{domxref("ViewTransition")}} object representing the active view transition for the related navigation. Defaults to `null` if there is no active view transition.

## Examples

A developer would not use this constructor manually. A new `PageRevealEvent` object is constructed when a handler is invoked as a result of the {{domxref("Window.pagereveal_event", "pagereveal")}} event firing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [View Transition API](/en-US/docs/Web/API/View_Transition_API)

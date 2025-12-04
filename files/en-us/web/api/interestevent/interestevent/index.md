---
title: "InterestEvent: InterestEvent() constructor"
short-title: InterestEvent()
slug: Web/API/InterestEvent/InterestEvent
page-type: web-api-constructor
browser-compat: api.InterestEvent.InterestEvent
---

{{APIRef("Popover API")}}

The **`InterestEvent()`** constructor creates a new {{domxref("InterestEvent")}} object.

## Syntax

```js-nolint
new InterestEvent(type, init)
```

### Parameters

- `type`
  - : A string representing the type of event. For `InterestEvent`, this is always `interest` or `loseinterest`.
- `init` {{optional_inline}}
  - : An object containing the following property:
    - `source` {{optional_inline}}
      - : An {{domxref("Element")}} representing the interest invoker element on which interest was shown or lost.

## Examples

Normally, you would not use this constructor manually. A new `InterestEvent` object is constructed when a handler is invoked as a result of a relevant event firing.

See the [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers) guide and the {{domxref("HTMLElement.interest_event", "interest")}} event reference page for examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)
- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers)

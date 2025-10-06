---
title: "ToggleEvent: ToggleEvent() constructor"
short-title: ToggleEvent()
slug: Web/API/ToggleEvent/ToggleEvent
page-type: web-api-constructor
browser-compat: api.ToggleEvent.ToggleEvent
---

{{APIRef("Popover API")}}

The **`ToggleEvent()`** constructor creates a new {{domxref("ToggleEvent")}} object.

## Syntax

```js-nolint
new ToggleEvent(type, init)
```

### Parameters

- `type`
  - : A string representing the type of event. In the case of `ToggleEvent` this is always `beforetoggle` or `toggle`.
- `init` {{optional_inline}}
  - : An object containing the following properties:
    - `newState` {{optional_inline}}
      - : A string representing the state the element is transitioning to. Can be any value, but events fired by the browser set this to `"open"` or `"closed"`. Defaults to `""`.
    - `oldState` {{optional_inline}}
      - : A string representing the state the element is transitioning from. Can be any value, but events fired by the browser set this to `"open"` or `"closed"`. Defaults to `""`.
    - `source` {{optional_inline}}
      - : An {{domxref("Element")}} representing the HTML popover control element that initiated the toggle. Defaults to `null`.

## Examples

A developer would not use this constructor manually. A new `ToggleEvent` object is constructed when a handler is invoked as a result of a relevant event firing.

For example:

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover is being shown");
    if (event.source) {
      console.log("Initiated by:", event.source);
    }
  } else {
    console.log("Popover is being hidden");
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)

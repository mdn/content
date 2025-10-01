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
- `init`
  - : An object containing the following properties:
    - `newState`
      - : A string representing the state the element is transitioning to. Possible values are `"open"` and `"closed"`.
    - `oldState`
      - : A string representing the state the element is transitioning from. Possible values are `"open"` and `"closed"`.
    - `source` {{optional_inline}}
      - : An {{domxref("Element")}} object instance representing the HTML popover control element that initiated the toggle. Defaults to `null`.

## Examples

A developer would not typically use this constructor manually. A new `ToggleEvent` object is constructed when a handler is invoked as a result of a relevant event firing.

However, you can create a `ToggleEvent` manually if needed:

```js
const sourceElement = document.getElementById("myButton");
const toggleEvent = new ToggleEvent("toggle", {
  newState: "open",
  oldState: "closed",
  source: sourceElement,
});
```

For example, when listening for toggle events on a popover:

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

---
title: "ToggleEvent: newState property"
short-title: newState
slug: Web/API/ToggleEvent/newState
page-type: web-api-instance-property
browser-compat: api.ToggleEvent.newState
---

{{APIRef("Popover API")}}

The **`newState`** read-only property of the {{domxref("ToggleEvent")}} interface is a string representing the state the element is transitioning to.

## Value

A string. Possible values are `"open"` (the popover is being shown) or `"closed"` (the popover is being hidden).

## Examples

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover is being shown");
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

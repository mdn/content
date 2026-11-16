---
title: "ToggleEvent: oldState property"
short-title: oldState
slug: Web/API/ToggleEvent/oldState
page-type: web-api-instance-property
browser-compat: api.ToggleEvent.oldState
---

{{APIRef("Popover API")}}

The **`oldState`** read-only property of the {{domxref("ToggleEvent")}} interface is a string representing the state the element is transitioning from.

## Value

A string. Possible values are `"open"` (the popover is going from showing to hidden) or `"closed"` (the popover going from hidden to shown).

## Examples

```js
const popover = document.getElementById("mypopover");

// …

popover.addEventListener("beforetoggle", (event) => {
  if (event.oldState === "open") {
    console.log("Popover is being hidden");
  } else {
    console.log("Popover is being shown");
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)

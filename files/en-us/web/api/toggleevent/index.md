---
title: ToggleEvent
slug: Web/API/ToggleEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ToggleEvent
---

{{APIRef("UI Events")}}{{SeeCompatTable}}

The **`ToggleEvent`** interface represents an event notifying the user when a popover element's state toggles between showing and hidden.

It is the event object for the {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} and {{domxref("HTMLElement.toggle_event", "toggle")}} events, which fire on popovers when their state changes.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("ToggleEvent.ToggleEvent", "ToggleEvent()")}} {{Experimental_Inline}}
  - : Creates an `ToggleEvent` object.

## Instance properties

_This interface inherits properties from its parent, {{DOMxRef("Event")}}._

- {{DOMxRef("ToggleEvent.newState")}} {{ReadOnlyInline}}
  - : A string (either `"open"` or `"closed"`), representing the state the element is transitioning to.
- {{DOMxRef("ToggleEvent.oldState")}} {{ReadOnlyInline}}
  - : A string (either `"open"` or `"closed"`), representing the state the element is transitioning from.

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
- [`beforetoggle` event](/en-US/docs/Web/API/HTMLElement/beforetoggle_event)
- [`toggle` event](/en-US/docs/Web/API/HTMLElement/toggle_event)

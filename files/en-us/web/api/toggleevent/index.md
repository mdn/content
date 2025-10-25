---
title: ToggleEvent
slug: Web/API/ToggleEvent
page-type: web-api-interface
browser-compat: api.ToggleEvent
---

{{APIRef("Popover API")}}

The **`ToggleEvent`** interface represents an event that fires when a popover element is toggled between being shown and hidden.

This is the event object for the {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} and {{domxref("HTMLElement.toggle_event", "toggle")}} events, which fire on elements as follows:

- The `beforetoggle` event fires before [popover](/en-US/docs/Web/API/Popover_API) or {{htmlelement("dialog")}} elements are shown or hidden.
- The `toggle` event fires after [popover](/en-US/docs/Web/API/Popover_API), {{htmlelement("dialog")}}, or {{htmlelement("details")}} elements are shown or hidden.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("ToggleEvent.ToggleEvent", "ToggleEvent()")}}
  - : Creates a `ToggleEvent` object.

## Instance properties

_This interface inherits properties from its parent, {{DOMxRef("Event")}}._

- {{DOMxRef("ToggleEvent.newState")}} {{ReadOnlyInline}}
  - : A string (either `"open"` or `"closed"`), representing the state the element is transitioning to.
- {{DOMxRef("ToggleEvent.oldState")}} {{ReadOnlyInline}}
  - : A string (either `"open"` or `"closed"`), representing the state the element is transitioning from.
- {{DOMxRef("ToggleEvent.source")}} {{ReadOnlyInline}}
  - : An {{domxref("Element")}} object instance representing the HTML control that initiated the toggle.

## Examples

### Basic example

```js
const popover = document.getElementById("mypopover");

// …

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

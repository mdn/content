---
title: ToggleEvent
slug: Web/API/ToggleEvent
page-type: web-api-interface
browser-compat: api.ToggleEvent
---

{{APIRef("Popover API")}}

The **`ToggleEvent`** interface represents an event notifying the user an Element's state has changed.

This is the event object for the `HTMLElement` {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} and {{domxref("HTMLElement.toggle_event", "toggle")}} events, which fire on some elements just before and just after they transition between showing and hidden, respectively.

- `beforetoggle` fires on [popovers](/en-US/docs/Web/API/Popover_API) and {{htmlelement("dialog")}} elements
- `toggle` fires on [popovers](/en-US/docs/Web/API/Popover_API), {{htmlelement("dialog")}} elements, and {{htmlelement("details")}} elements

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("ToggleEvent.ToggleEvent", "ToggleEvent()")}}
  - : Creates an `ToggleEvent` object.

## Instance properties

_This interface inherits properties from its parent, {{DOMxRef("Event")}}._

- {{DOMxRef("ToggleEvent.newState")}} {{ReadOnlyInline}}
  - : A string (either `"open"` or `"closed"`), representing the state the element is transitioning to.
- {{DOMxRef("ToggleEvent.oldState")}} {{ReadOnlyInline}}
  - : A string (either `"open"` or `"closed"`), representing the state the element is transitioning from.

## Examples

### Basic example

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

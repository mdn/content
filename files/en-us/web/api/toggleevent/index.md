---
title: ToggleEvent
slug: Web/API/ToggleEvent
page-type: web-api-interface
browser-compat: api.ToggleEvent
---

{{APIRef("UI Events")}}

The **`ToggleEvent`** interface represents an event notifying the user when a [popover element](/en-US/docs/Web/API/Popover_API)'s state toggles between showing and hidden.

It is the event object for the `HTMLElement` {{domxref("HTMLElement.beforetoggle_event", "beforetoggle")}} and {{domxref("HTMLElement.toggle_event", "toggle")}} events, which fire on popovers when they transition between showing and hidden (before and after, respectively).

{{InheritanceDiagram}}

> **Note:** `ToggleEvent` is unrelated to the `HTMLDetailsElement` {{domxref("HTMLDetailsElement.toggle_event", "toggle")}} event, which fires on a {{htmlelement("details")}} element when its `open`/`closed` state is toggled. Its event object is a generic {{domxref("Event")}}.

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

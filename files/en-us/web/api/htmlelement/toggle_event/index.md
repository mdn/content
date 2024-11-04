---
title: "HTMLElement: toggle event"
slug: Web/API/HTMLElement/toggle_event
page-type: web-api-event
browser-compat: api.HTMLElement.toggle_event
---

{{APIRef("HTML DOM")}}

The **`toggle`** event of the {{domxref("HTMLElement")}} interface fires on a {{domxref("Popover_API", "popover", "", "nocode")}} element, {{htmlelement("dialog")}} element, or {{htmlelement("details")}} element just after it is shown or hidden.

- If the element is transitioning from hidden to showing, the [`event.oldState`](/en-US/docs/Web/API/ToggleEvent/oldState) property will be set to `closed` and the [`event.newState`](/en-US/docs/Web/API/ToggleEvent/newState) property will be set to `open`.
- If the element is transitioning from showing to hidden, then `event.oldState` will be `open` and `event.newState` will be `closed`.

This event is not [cancelable](/en-US/docs/Web/API/Event/cancelable).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("toggle", (event) => {});

ontoggle = (event) => {};
```

## Event type

A {{domxref("ToggleEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ToggleEvent")}}

## Examples

### Basic example

A basic example showing how the toggle event would be used for a popover is given below.
A {{htmlelement("dialog")}} element or {{htmlelement("details")}} element would behave in the same way.

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("toggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover has been shown");
  } else {
    console.log("Popover has been hidden");
  }
});
```

### A note on toggle event coalescing

If multiple `toggle` events are fired before the event loop has a chance to cycle, only a single event will be fired.
This is referred to as "event coalescing".

For example:

```js
popover.addEventListener("toggle", () => {
  //...
});

popover.showPopover();
popover.hidePopover();
// `toggle` only fires once
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) HTML global attribute
- [Popover API](/en-US/docs/Web/API/Popover_API)
- Related event: [`beforetoggle`](/en-US/docs/Web/API/HTMLElement/beforetoggle_event)

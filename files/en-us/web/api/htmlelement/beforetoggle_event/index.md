---
title: "HTMLElement: beforetoggle event"
slug: Web/API/HTMLElement/beforetoggle_event
page-type: web-api-event
browser-compat: api.HTMLElement.beforetoggle_event
---

{{APIRef("HTML DOM")}}

The **`beforetoggle`** event of the {{domxref("HTMLElement")}} interface fires on a {{domxref("Popover_API", "popover", "", "nocode")}} or {{htmlelement("dialog")}} element just before it is shown or hidden.

- If the element is transitioning from hidden to showing, the [`event.oldState`](/en-US/docs/Web/API/ToggleEvent/oldState) property will be set to `closed` and the [`event.newState`](/en-US/docs/Web/API/ToggleEvent/newState) property will be set to `open`.
- If the element is transitioning from showing to hidden, then `event.oldState` will be `open` and `event.newState` will be `closed`.

This event is [cancelable](/en-US/docs/Web/API/Event/cancelable) when an element is toggled to open ("show") but not when the element is closing.

The event can be used to prevent an element from being shown.
It can also be used to apply classes or set properties on other elements, for example to animate their behaviour as the element changes its display state.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("beforetoggle", (event) => {});

onbeforetoggle = (event) => {};
```

## Event type

A {{domxref("ToggleEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ToggleEvent")}}

## Examples

### Basic example

A basic example showing how the `beforetoggle` event might be used for a popover is given below.
A {{htmlelement("dialog")}} element or {{htmlelement("details")}} element would behave in the same way.

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("beforetoggle", (event) => {
  if (event.newState === "open") {
    console.log("Popover is about to be shown");
  } else {
    console.log("Popover is about to be hidden");
  }
});
```

### Preventing a dialog from opening

The `beforetoggle` event is cancelable when opening an element.

Below we show how a dialog might first check some method `allowOpen()` method to determine if it is ready to open, and if not, call {{domxref("Event.preventDefault()")}} to cancel the event and prevent the dialog opening.

```js
dialog.addEventListener("beforetoggle", (event) => {
  // Check if the element is allowed to open
  if (allowOpen()) {
    event.preventDefault();
  }
});
```

### A note on beforetoggle event coalescing

If multiple `beforetoggle` events are fired before the event loop has a chance to cycle, only a single event will be fired.
This is referred to as "event coalescing".

For example:

```js
popover.addEventListener("beforetoggle", () => {
  //...
});

popover.showPopover();
popover.hidePopover();
// `beforetoggle` only fires once
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) HTML global attribute
- [Popover API](/en-US/docs/Web/API/Popover_API)
- Related event: [`toggle`](/en-US/docs/Web/API/HTMLElement/toggle_event)

---
title: "HTMLElement: beforetoggle event"
slug: Web/API/HTMLElement/beforetoggle_event
page-type: web-api-event
browser-compat: api.HTMLElement.beforetoggle_event
---

{{APIRef("HTML DOM")}}

The **`beforetoggle`** event of the {{domxref("HTMLElement")}} interface fires on a {{domxref("Popover_API", "popover", "", "nocode")}} or {{htmlelement("dialog")}} element just before it is shown or hidden.

- If the element is transitioning from hidden to showing, the `event.oldState` property will be set to `closed` and the `event.newState` property will be set to `open`.
- If the element is transitioning from showing to hidden, then `event.oldState` will be `open` and `event.newState` will be `closed`.

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

---
title: "HTMLElement: toggle event"
slug: Web/API/HTMLElement/toggle_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HTMLElement.toggle_event
---

{{APIRef}}{{SeeCompatTable}}

The **`toggle`** event of the {{domxref("HTMLElement")}} interface fires on elements just after they have been shown or hidden. Specifically:

- It fires on a {{domxref("Popover_API", "popover", "", "nocode")}} element (i.e. one that has a valid [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute) just after it is shown or hidden.
- It fires on a {{htmlelement("details")}} element just after it is toggled between open and closed.

In both cases:

- If the popover/`<details>` element is currently hidden/closed, the `event.oldState` property will be set to `closed` and the `event.newState` property will be set to `open`.
- If the popover/`<details>` element is currently showing/open, then `event.oldState` will be `open` and `event.newState` will be `closed`.

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

It is worth pointing out that `toggle` events are coalesced, meaning that if multiple `toggle` events are fired before the event loop has a chance to cycle, only a single event will be fired.

For example:

```js
popover.addEventListener('toggle', () => {
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

- [Popover API](/en-US/docs/Web/API/Popover_API)
- The {{htmlelement("details")}} element
- Related event: [`beforetoggle`](/en-US/docs/Web/API/HTMLElement/beforetoggle_event)

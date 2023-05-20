---
title: "HTMLElement: toggle event"
slug: Web/API/HTMLElement/toggle_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HTMLElement.toggle_event
---

{{APIRef}}{{SeeCompatTable}}

The **`toggle`** event of the {{domxref("HTMLElement")}} interface fires on a {{domxref("Popover_API", "popover", "", "nocode")}} element (i.e. one that has a valid [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute) just after it is shown or hidden.

- If the popover element is transitioning from hidden to showing, the `event.oldState` property will be set to `closed` and the `event.newState` property will be set to `open`.
- If the popover element is transitioning from showing to hidden, then `event.oldState` will be `open` and `event.newState` will be `closed`.

> **Note:** The `toggle` event behaves differently when fired on {{htmlelement("details")}} elements. In this case, it does not relate to popovers, and instead fires when the `open`/`closed` state of a `<details>` element is toggled. See the `HTMLDetailsElement` {{domxref("HTMLDetailsElement.toggle_event", "toggle event")}} page for more information.

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

- [Popover API](/en-US/docs/Web/API/Popover_API)
- Related event: [`beforetoggle`](/en-US/docs/Web/API/HTMLElement/beforetoggle_event)

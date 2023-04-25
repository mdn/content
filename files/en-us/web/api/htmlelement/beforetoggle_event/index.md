---
title: "HTMLElement: beforetoggle event"
slug: Web/API/HTMLElement/beforetoggle_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HTMLElement.beforetoggle_event
---

{{APIRef}}{{SeeCompatTable}}

The **`beforetoggle`** event of the {{domxref("HTMLElement")}} interface fires on a {{domxref("Popover_API", "popover", "", "nocode")}} element (i.e. one that has a valid [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute) just before it is shown or hidden.

- If the popover is currently hidden, the `event.oldState` property will be set to `closed` and the `event.newState` property will be set to `open`.
- If the popover is currently showing, then `event.oldState` will be `open` and `event.newState` will be `closed`.

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
- Related event: [`toggle`](/en-US/docs/Web/API/HTMLElement/toggle_event)

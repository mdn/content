---
title: "HTMLElement: beforetoggle event"
slug: Web/API/HTMLElement/beforetoggle_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HTMLElement.beforetoggle_event
---

{{APIRef}}{{SeeCompatTable}}

The **`beforetoggle`** event fires when an element with the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute is about to be opened or closed.

If the element is currently not open, then the `.oldState` property will be set to `closed` and the `.newState` property will be set to `open`; otherwise if the element is open, then `.oldState` will be `open` and `.newState` will be `closed`.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("beforetoggle", (event) => {});

onbeforetoggle = (event) => {};
```

## Event type

A {{domxref("ToggleEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ToggleEvent")}}

## Event properties

_This interface inherits properties from its parent {{DOMxRef("Event")}}._

- {{DOMxRef("ToggleEvent.oldState")}} {{ReadOnlyInline}}
  - : Returns either `open` or `closed`, depending on which state the element is transitioning from.
- {{DOMxRef("ToggleEvent.newState")}} {{ReadOnlyInline}}
  - : Returns either `open` or `closed`, depending on which state the element is transitioning to.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related event: [`toggle`](/en-US/docs/Web/API/HTMLElement/toggle_event)
- The [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute

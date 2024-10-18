---
title: "HTMLElement: command event"
slug: Web/API/HTMLElement/command_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.HTMLElement.command_event
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

The **`command`** event of the {{domxref("HTMLElement")}} interface fires on an element that is controlled via a {{domxref("HTMLButtonElement", "button")}} with valid {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} and {{domxref("HTMLButtonElement.command", "command")}} values, whenever the button is interacted with (e.g. it is clicked).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("command", (event) => {});

oncommand = (event) => {};
```

## Event type

A {{domxref("CommandEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("CommandEvent")}}

## Examples

### Basic example

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("command", (event) => {
  if (event.action === "show-popover") {
    console.log("Popover is about to be shown");
  }
});
```

### Event dispatch and cancellation

It is worth pointing out that `command` events fire on the element being invoked. If the button is clicked, it will first dispatch a `click` event which, if cancelled, then the `command` event will not fire and the default behavior will not be run.
In addition to cancelling the `click` event on the button, it is also possible to cancel the `command` event.

For example:

```js
button.addEventListener("click", (event) => {
  event.preventDefault(); // the `command` event will never fire
});
```

```js
element.addEventListener("command", (event) => {
  event.preventDefault(); // the `command` event fires but the default behavior is cancelled
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Invoker Commands API", "Invoker Commands API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("HTMLButtonElement.commandForElement")}}

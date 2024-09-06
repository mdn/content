---
title: CommandEvent
slug: Web/API/CommandEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CommandEvent
---

{{APIRef("UI Events")}}

The **`CommandEvent`** interface represents an event notifying the user when a {{domxref("HTMLButtonElement", "button")}} element with valid {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} and {{domxref("HTMLButtonElement.command", "command")}} attributes is about to invoke an interactive element.

It is the event object for the `HTMLElement` {{domxref("HTMLElement.command_event", "command")}} event, which represents an action from an Invoker Control it is invoked (for example when it is clicked or pressed).

{{InheritanceDiagram}}

## Constructor

- {{domxref("CommandEvent.CommandEvent", "CommandEvent()")}}
  - : Creates an `CommandEvent` object.

## Instance properties

_This interface inherits properties from its parent, {{DOMxRef("Event")}}._

- {{domxref("CommandEvent.source")}} {{ReadOnlyInline}}
  - : An Element representing the control button that caused this invocation.
- {{domxref("CommandEvent.command")}} {{ReadOnlyInline}}
  - : A string representing the {{domxref("HTMLButtonElement.command", "command")}} value of the source control button.

## Examples

### Basic example

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("command", (event) => {
  if (event.command === "show-popover") {
    console.log("Popover is about to be shown");
  }
});
```

### Custom example

```js
const myImage = document.querySelector("img");

// ...

myImage.addEventListener("command", (event) => {
  if (event.command === "--rotate-right") {
    console.log("My own custom invoke behavior");
    myImage.style.rotate = "90deg";
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [command](/en-US/docs/Web/API/HTMLButtonElement/command)
- [commandForElement](/en-US/docs/Web/API/HTMLButtonElement/commandForElement)

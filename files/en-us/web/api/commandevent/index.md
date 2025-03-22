---
title: CommandEvent
slug: Web/API/CommandEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CommandEvent
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

The **`CommandEvent`** interface represents an event notifying the user when a {{domxref("HTMLButtonElement", "button")}} element with valid {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} and {{domxref("HTMLButtonElement.command", "command")}} attributes is about to invoke an interactive element.

This is the event object for the `HTMLElement` {{domxref("HTMLElement.command_event", "command")}} event, which represents an action from an Invoker Control when it is invoked (for example when it is clicked or pressed).

{{InheritanceDiagram}}

## Constructor

- {{domxref("CommandEvent.CommandEvent", "CommandEvent()")}} {{experimental_inline}}
  - : Creates an `CommandEvent` object.

## Instance properties

_This interface inherits properties from its parent, {{DOMxRef("Event")}}._

- {{domxref("CommandEvent.source")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : An {{domxref("HTMLButtonElement")}} representing the button that caused this invocation.
- {{domxref("CommandEvent.command")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string representing the {{domxref("HTMLButtonElement.command", "command")}} value of the source button.

## Examples

### Basic example

```html
<button commandfor="mypopover" command="show-popover">Show popover</button>

<div popover id="mypopover" role="[declare appropriate ARIA role]">
  <!-- popover content here -->
  <button commandfor="mypopover" command="hide-popover">Hide popover</button>
</div>
```

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

```html
<button commandfor="the-image" command="--rotate-left">Rotate Left</button>

<button commandfor="the-image" command="--rotate-right">Rotate Right</button>

<img id="the-image" src="photo.jpg" alt="[add appropriate alt text here]" />
```

```js
const image = document.getElementById("the-image");

image.addEventListener("command", (event) => {
  if (event.command == "--rotate-left") {
    event.target.style.rotate = "-90deg";
  } else if (event.command == "--rotate-right") {
    event.target.style.rotate = "90deg";
  }
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

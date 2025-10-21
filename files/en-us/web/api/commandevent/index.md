---
title: CommandEvent
slug: Web/API/CommandEvent
page-type: web-api-interface
browser-compat: api.CommandEvent
---

{{APIRef("Invoker Commands API")}}

The **`CommandEvent`** interface represents an event notifying the user when a {{domxref("HTMLButtonElement", "button")}} element with valid {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} and {{domxref("HTMLButtonElement.command", "command")}} attributes is about to invoke an interactive element.

This is the event object for the `HTMLElement` {{domxref("HTMLElement.command_event", "command")}} event, which represents an action from an Invoker Control when it is invoked (for example when it is clicked or pressed).

{{InheritanceDiagram}}

## Constructor

- {{domxref("CommandEvent.CommandEvent", "CommandEvent()")}}
  - : Creates an `CommandEvent` object.

## Instance properties

_This interface inherits properties from its parent, {{DOMxRef("Event")}}._

- {{domxref("CommandEvent.source")}} {{ReadOnlyInline}}
  - : An {{domxref("HTMLButtonElement")}} representing the button that caused this invocation.
- {{domxref("CommandEvent.command")}} {{ReadOnlyInline}}
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

// …

popover.addEventListener("command", (event) => {
  if (event.command === "show-popover") {
    console.log("Popover is about to be shown");
  }
});
```

### Using custom values for commands

In this example three buttons have been created with [`commands` with custom values](/en-US/docs/Web/HTML/Reference/Elements/button#custom_values).

```html
<div class="controls">
  <button commandfor="the-image" command="--rotate-left">Rotate Left</button>
  <button commandfor="the-image" command="--reset">Reset</button>
  <button commandfor="the-image" command="--rotate-right">Rotate Right</button>
</div>

<img
  id="the-image"
  src="/shared-assets/images/examples/dino.svg"
  alt="dinosaur head rotated 0 degrees" />
```

```css hidden
.controls {
  margin-block-end: 20px;
}
```

An event listener is attached to the image using the [`command` event](/en-US/docs/Web/API/HTMLElement/command_event).
When one of the buttons is clicked, the listener runs code based on the custom `command` value assigned to the button, rotating the image and also updating it's `alt` text to indicate the new angle of the image.

```js
const image = document.getElementById("the-image");

image.addEventListener("command", (event) => {
  let rotate = parseInt(event.target.style.rotate || "0", 10);
  if (event.command === "--reset") {
    rotate = 0;
    event.target.style.rotate = `${rotate}deg`;
  } else if (event.command === "--rotate-left") {
    rotate = rotate === -270 ? 0 : rotate - 90;
    event.target.style.rotate = `${rotate}deg`;
  } else if (event.command === "--rotate-right") {
    rotate = rotate === 270 ? 0 : rotate + 90;
    event.target.style.rotate = `${rotate}deg`;
  }
  event.target.alt = `dinosaur head rotated ${rotate} degrees`;
});
```

{{EmbedLiveSample('using_custom_values_for_commands', '100%', "220")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Invoker Commands API", "Invoker Commands API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("HTMLButtonElement.commandForElement")}}

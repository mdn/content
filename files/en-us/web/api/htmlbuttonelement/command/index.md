---
title: "HTMLButtonElement: command property"
short-title: command
slug: Web/API/HTMLButtonElement/command
page-type: web-api-instance-property
browser-compat: api.HTMLButtonElement.command
---

{{APIRef("Invoker Commands API")}}

The **`command`** property of the {{domxref("HTMLButtonElement")}} interface gets and sets the action to be performed on an element being controlled by this button. For this to have an effect, [`commandfor`](/en-US/docs/Web/HTML/Reference/Elements/button#commandfor) must be set.

It reflects the [`command`](/en-US/docs/Web/HTML/Reference/Elements/button#command) HTML attribute.

## Value

A string. See the [`command`](/en-US/docs/Web/HTML/Reference/Elements/button#command) attribute for valid values.

## Examples

### Basic example

```html
<button id="toggleBtn" commandfor="mypopover" command="toggle-popover">
  Toggle popover
</button>

<div popover id="mypopover">
  <button commandfor="mypopover" command="hide-popover">Hide popover</button>
</div>
```

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.command = "show-popover";
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

An event listener is attached using the [`command` event](/en-US/docs/Web/API/CommandEvent) which then runs some code based upon which custom value the button has assigned to it.

> [!NOTE]
> As the example is updating an image the `alt` text is also being updated.

```js
const image = document.getElementById("the-image");

image.addEventListener("command", (event) => {
  let rotate = parseInt(event.target.style.rotate || "0");
  if (event.command == "--reset") {
    rotate = 0
    event.target.style.rotate = `${rotate}deg`; 
  } else if (event.command === "--rotate-left") {
    rotate === -270 ? rotate = 0 : rotate = rotate - 90;
    event.target.style.rotate = `${rotate}deg`;
  } else if (event.command === "--rotate-right") {
    rotate === 270 ? rotate = 0 : rotate = rotate + 90;
    event.target.style.rotate = `${rotate}deg`;
  }
  event.target.alt = `dinosaur head rotated ${rotate} degrees`
});
```

{{EmbedLiveSample('using_custom_values_for_commands', '100%', "220")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Invoker Commands API", "Invoker Commands API", "", "nocode")}}
- {{domxref("HTMLButtonElement.commandForElement")}}
- {{domxref("CommandEvent")}}
- [`<button>` `command` attribute](/en-US/docs/Web/HTML/Reference/Elements/button#command)

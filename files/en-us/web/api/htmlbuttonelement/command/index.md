---
title: "HTMLButtonElement: command property"
short-title: command
slug: Web/API/HTMLButtonElement/command
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLButtonElement.command
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

The **`command`** property of the {{domxref("HTMLButtonElement")}} interface gets and sets the action to be performed on an element being controlled by this button. For this to have an effect, [`commandfor`](/en-US/docs/Web/HTML/Element/button#commandfor) must be set.

It reflects the [`command`](/en-US/docs/Web/HTML/Element/button#command) HTML attribute.

## Value

A string. See the [`command`](/en-US/docs/Web/HTML/Element/button#command) attribute for valid values.

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

### Custom example, using events

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
- {{domxref("HTMLButtonElement.commandForElement")}}
- {{domxref("CommandEvent")}}

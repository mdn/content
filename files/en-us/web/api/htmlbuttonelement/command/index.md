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

The **`command`** property of the {{domxref("HTMLButtonElement")}} interface gets and sets the action to be performed on an element being controlled by a button. For this to have an effect, [`commandfor`](/en-US/docs/Web/HTML/Element/button#commandfor) must be set.

It reflects the [`command`](/en-US/docs/Web/HTML/Element/button#command) HTML attribute.

## Value

A string.

### Basic example

```js
const popover = document.getElementById("mypopover");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.command = "show-popover";
```

### Custom example, using events

```js
const toggleBtn = document.getElementById("toggleBtn");
const myImage = document.querySelector("img");

toggleBtn.commandForElement = myImage;

// Set a custom "command", must start with two hyphen characters (`--`)
toggleBtn.command = "--rotate-right";

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

- {{domxref("Invoker Commands API", "Invoker Commands API", "", "nocode")}}
- {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} property
- {{domxref("CommandEvent", "CommandEvent")}} interface

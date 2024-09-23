---
title: "CommandEvent: source property"
short-title: source
slug: Web/API/CommandEvent/source
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CommandEvent.source
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

The **`source`** read-only property of the {{domxref("CommandEvent")}} interface returns an {{domxref("EventTarget")}} representing the control that invoked the given command.

## Value

An {{domxref("EventTarget")}} object. Usually an {{domxref("HTMLButtonElement")}}.

## Examples

In the following simple example we've set up an event listener to add a temporary class to the button element upon a CommandEvent:

```js
document.body.addEventListener(
  "command",
  (event) => {
    const theButton = event.source;

    theButton.classList.add("just-pressed");

    setTimeout(() => {
      theButton.classList.remove("just-pressed");
    }, 1000);
  },
  { capture: true },
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Invoker Commands API", "Invoker Commands API", "", "nocode")}}
- {{domxref("HTMLButtonElement.command")}}
- {{domxref("HTMLButtonElement.commandForElement")}}

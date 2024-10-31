---
title: "CommandEvent: command property"
short-title: command
slug: Web/API/CommandEvent/command
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.CommandEvent.command
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

The **`command`** read-only property of the {{domxref("CommandEvent")}} interface returns a string containing the value of the {{domxref("HTMLButtonElement.command", "command")}} property at the time the event was dispatched.

## Value

A string.

## Examples

In the following simple example we've set up an event listener to listen for the "show-modal" command:

```js
document.body.addEventListener(
  "command",
  (event) => {
    const theAction = event.command;

    if (theAction == "show-modal") {
      console.log("Showing modal dialog");
    }
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

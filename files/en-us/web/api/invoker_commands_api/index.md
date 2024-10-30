---
title: Invoker Commands API
slug: Web/API/Invoker_Commands_API
page-type: web-api-overview
status:
  - experimental
browser-compat:
  - api.CommandEvent
  - api.HTMLButtonElement.commandForElement
  - api.HTMLButtonElement.command
---

{{DefaultAPISidebar("Invoker Commands API")}}{{SeeCompatTable}}

The **Invoker Commands API** provides a way to declaratively assign behaviors to buttons, allowing control of interactive elements when the button is enacted (clicked or invoked via a keypress, such as the spacebar or return key).

## Concepts and usage

A common pattern on the web is to have {{HTMLElement("button")}} elements control various aspects of the page, such as opening and closing {{domxref("Popover API", "popovers", "", "nocode")}} or {{HTMLElement("dialog")}} elements, formatting text, and more.

Historically creating these kinds of controls has required JavaScript event listeners added to the button which can then call the APIs on the element they control. The {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} and {{domxref("HTMLButtonElement.command", "command")}} properties provide a way to do this declaratively for a limited set of actions. This can be advantageous for built-in commands as the user does not have to wait for JavaScript to download and execute to make these buttons interactive.

## HTML attributes

- [`commandfor`](/en-US/docs/Web/HTML/Element/button#commandfor) {{experimental_inline}}
  - : Turns a {{htmlelement("button")}} element into a button, controlling the given interactive element; takes the ID of the element to control as its value.
- [`command`](/en-US/docs/Web/HTML/Element/button#command) {{experimental_inline}}
  - : Specifies the action to be performed on an element being controlled by a control `<button>`, specified via the `commandfor` attribute.

## Interfaces

- {{domxref("CommandEvent")}} {{experimental_inline}}
  - : Represents an event notifying the user that a command has been issued. It is the event object for the {{domxref("HTMLElement/command_event", "command")}} event. The event fires on element referenced by {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}}.

## Extensions to other interfaces

### Instance properties

- {{domxref("HTMLButtonElement.commandForElement")}}
  - : Gets and sets the element being controlled by the button. The JavaScript equivalent of the [`commandfor`](/en-US/docs/Web/HTML/Element/button#commandfor) HTML attribute.
- {{domxref("HTMLButtonElement.command")}}
  - : Gets and sets the action to be performed on the element being controlled by the button. Reflects the value of the [`command`](/en-US/docs/Web/HTML/Element/button#command) HTML attribute.

### Events

- {{domxref("HTMLElement.command_event", "command")}} event
  - : Fired on the element referenced by the button.

## Examples

### Creating declarative popovers

```html
<button commandfor="mypopover" command="toggle-popover">
  Toggle the popover
</button>
<div id="mypopover" popover>
  <button commandfor="mypopover" command="hide-popover">Close</button>
  Popover content
</div>
```

### Creating declarative dialogs

```html
<button commandfor="mydialog" command="show-modal">Show modal dialog</button>
<dialog id="mydialog">
  <button commandfor="mydialog" command="close">Close</button>
  Dialog Content
</dialog>
```

### Creating custom commands

```html
<button commandfor="my-img" command="--rotate-left">Rotate left</button>
<button commandfor="my-img" command="--rotate-right">Rotate right</button>
<img id="my-img" src="photo.jpg" alt="[add appropriate alt text here]" />
```

```js
const myImg = document.getElementById("my-img");

myImg.addEventListener("command", (event) => {
  if (event.command == "--rotate-left") {
    myImg.style.rotate = "-90deg";
  } else if (event.command == "--rotate-right") {
    myImg.style.rotate = "90deg";
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLButtonElement.command", "command")}} property
- {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} property
- {{domxref("CommandEvent", "CommandEvent")}} interface

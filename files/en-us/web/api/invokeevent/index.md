---
title: InvokeEvent
slug: Web/API/InvokeEvent
page-type: web-api-interface
browser-compat: api.InvokeEvent
---

{{APIRef("UI Events")}}

The **`InvokeEvent`** interface represents an event notifying the user when a [invoker control](/en-US/docs/Web/API/Invoker_API) is about to invoke an interactive element.

It is the event object for the `HTMLElement` {{domxref("HTMLElement.invoke_event", "invoke")}} event, which fires elements from an Invoker Control, when the Invoker Control is interacted with (for example when it is clicked).

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("InvokeEvent.InvokeEvent", "InvokeEvent()")}}
  - : Creates an `InvokeEvent` object.

## Instance properties

_This interface inherits properties from its parent, {{DOMxRef("Event")}}._

- {{DOMxRef("InvokeEvent.invoker")}} {{ReadOnlyInline}}
  - : An Element representing the Invoker Control that caused this invocation.
- {{DOMxRef("InvokeEvent.action")}} {{ReadOnlyInline}}
  - : A string representing the action the element is about to take.

## Examples

### Basic example

```js
const popover = document.getElementById("mypopover");

// ...

popover.addEventListener("invoke", (event) => {
  if (event.action === "show") {
    console.log("Popover is about to be shown");
  }
});
```

### Custom example

```js
const customElement = document.querySelector("my-custom-element");

// ...

customElement.addEventListener("invoke", (event) => {
  if (event.action === "spin") {
    console.log("My own custom invoke behavior");
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Invokers API](/en-US/docs/Web/API/Invokers_API)
- [`invoke` event](/en-US/docs/Web/API/HTMLElement/invoke_event)
